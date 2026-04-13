#!/usr/bin/env node

/**
 * generate-image.js — Multi-Model Image Router
 *
 * Routes image generation to the best model for the job:
 *   - flux-pro    : Black Forest Labs Flux 1.1 Pro (hero shots food, best photorealism)
 *   - seedream    : ByteDance Seedream 4.5 via OpenRouter (batch, cheaper)
 *   - gemini      : Google Gemini 3 Pro Image (existing pipeline, fallback)
 *
 * Usage:
 *   node generate-image.js --model flux-pro --prompt "..." --output hero.png
 *   node generate-image.js --model gemini --prompt "..." --output hero.png --resolution 2K
 *   node generate-image.js --prompt "..." --output hero.png  (defaults to flux-pro)
 *
 * API Keys (environment variables):
 *   BFL_API_KEY       — Black Forest Labs (Flux)
 *   OPENROUTER_API_KEY — OpenRouter (Seedream)
 *   GEMINI_API_KEY     — Google (Gemini)
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ─── Config ─────────────────────────────────────────────────

const MODELS = {
  'flux-max': {
    name: 'Flux 2 Max',
    provider: 'BFL Direct',
    cost: '~$0.03/MP',
    endpoint: 'https://api.bfl.ai/v1/flux-2-max',
    envKey: 'BFL_API_KEY',
  },
  'flux-pro': {
    name: 'Flux 2 Pro',
    provider: 'BFL Direct',
    cost: '~$0.03/MP',
    endpoint: 'https://api.bfl.ai/v1/flux-2-pro',
    envKey: 'BFL_API_KEY',
  },
  'gemini': {
    name: 'Gemini 3 Pro Image',
    provider: 'Google',
    cost: '$0.134/img (2K)',
    envKey: 'GEMINI_API_KEY',
  },
};

// ─── HTTP helper ────────────────────────────────────────────

function httpPost(url, headers, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port: parsed.port || 443,
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

function httpGet(url, headers) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port: parsed.port || 443,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: headers || {},
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, outputPath).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(outputPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    req.on('error', reject);
  });
}

// ─── Flux 1.1 Pro (BFL Direct) ─────────────────────────────

async function generateFlux(prompt, outputPath, aspectRatio, modelEndpoint, inputImage) {
  const apiKey = process.env.BFL_API_KEY;
  if (!apiKey) {
    console.error('Error: BFL_API_KEY not set');
    process.exit(1);
  }

  console.log(`🎨 Flux — Generating...`);

  const endpoint = modelEndpoint || 'https://api.bfl.ai/v1/flux-2-pro';
  const body = {
    prompt,
    aspect_ratio: aspectRatio || '4:5',
    safety_tolerance: 2,
  };

  if (inputImage) {
    const imgPath = path.resolve(inputImage);
    if (!fs.existsSync(imgPath)) {
      console.error(`Error: input image not found: ${imgPath}`);
      process.exit(1);
    }
    const imgBase64 = fs.readFileSync(imgPath).toString('base64');
    body.image_prompt = imgBase64;
    console.log(`📎 Image reference attached (${(imgBase64.length / 1024).toFixed(0)} KB base64)`);
  }

  const result = await httpPost(endpoint, {
    'x-key': apiKey,
  }, body);

  if (result.status !== 200 || !result.data.polling_url) {
    console.error('Flux API error:', result.data);
    process.exit(1);
  }

  const pollingUrl = result.data.polling_url;
  console.log('⏳ Polling for result...');

  // Poll until ready (max 120s)
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const poll = await httpGet(pollingUrl, { 'x-key': apiKey });

    if (poll.data.status === 'Ready') {
      const imageUrl = poll.data.result.sample;
      console.log('⬇️  Downloading image...');
      await downloadFile(imageUrl, outputPath);
      console.log(`✅ Flux 1.1 Pro — Saved: ${outputPath}`);
      return;
    }

    if (poll.data.status === 'Error') {
      console.error('Flux generation error:', poll.data);
      process.exit(1);
    }
  }

  console.error('Timeout: Flux generation took too long');
  process.exit(1);
}

// ─── Seedream 4.5 (OpenRouter) ──────────────────────────────

async function generateSeedream(prompt, outputPath) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('Error: OPENROUTER_API_KEY not set');
    process.exit(1);
  }

  console.log(`🎨 Seedream 4.5 — Generating...`);

  // OpenRouter uses /chat/completions with modalities: ["image"]
  const result = await httpPost('https://openrouter.ai/api/v1/chat/completions', {
    'Authorization': `Bearer ${apiKey}`,
    'HTTP-Referer': 'https://strictfood.fr',
    'X-Title': 'StrictFood Visual System',
  }, {
    model: 'bytedance-seed/seedream-4.5',
    messages: [{ role: 'user', content: prompt }],
    modalities: ['image'],
  });

  if (result.status !== 200) {
    console.error('Seedream API error (status ' + result.status + '):', JSON.stringify(result.data).substring(0, 500));
    process.exit(1);
  }

  // Extract base64 image from response
  const choices = result.data.choices;
  if (!choices || !choices[0] || !choices[0].message) {
    console.error('Seedream: No message in response:', JSON.stringify(result.data).substring(0, 500));
    process.exit(1);
  }

  const msg = choices[0].message;
  const content = msg.content;
  const images = msg.images; // Seedream returns images in message.images[]
  let b64Data = null;

  // Try message.images[] first (Seedream format)
  if (images && Array.isArray(images)) {
    for (const img of images) {
      const url = (img.image_url && img.image_url.url) || img.url;
      if (url && url.startsWith('data:image')) {
        b64Data = url.split(',')[1];
        break;
      } else if (url) {
        console.log('⬇️  Downloading image...');
        await downloadFile(url, outputPath);
        console.log(`✅ Seedream 4.5 — Saved: ${outputPath}`);
        return;
      }
    }
  }

  // Try content as data URL string
  if (!b64Data && typeof content === 'string' && content.startsWith('data:image')) {
    b64Data = content.split(',')[1];
  }

  // Try content as array of parts
  if (!b64Data && Array.isArray(content)) {
    for (const part of content) {
      if (part.type === 'image_url' && part.image_url && part.image_url.url) {
        const url = part.image_url.url;
        if (url.startsWith('data:image')) {
          b64Data = url.split(',')[1];
        } else {
          console.log('⬇️  Downloading image...');
          await downloadFile(url, outputPath);
          console.log(`✅ Seedream 4.5 — Saved: ${outputPath}`);
          return;
        }
      }
    }
  }

  if (b64Data) {
    fs.writeFileSync(outputPath, Buffer.from(b64Data, 'base64'));
    console.log(`✅ Seedream 4.5 — Saved: ${outputPath}`);
  } else {
    console.error('Seedream: Could not extract image from response');
    console.error('Response structure:', JSON.stringify(result.data).substring(0, 800));
    process.exit(1);
  }
}

// ─── Gemini (existing script) ───────────────────────────────

function generateGemini(prompt, outputPath, resolution, inputImage) {
  const scriptPath = path.join(__dirname, '..', '.claude', 'skills', 'nano-banana-pro', 'scripts', 'generate_image.py');

  let cmd = `uv run "${scriptPath}" --prompt "${prompt.replace(/"/g, '\\"')}" --filename "${outputPath}" --resolution ${resolution || '2K'}`;
  if (inputImage) cmd += ` --input-image "${inputImage}"`;

  console.log(`🎨 Gemini 3 Pro Image — Generating...`);
  try {
    execSync(cmd, { stdio: 'inherit', timeout: 120000 });
    console.log(`✅ Gemini — Saved: ${outputPath}`);
  } catch (e) {
    console.error('Gemini generation error:', e.message);
    process.exit(1);
  }
}

// ─── CLI ────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const opts = {
    model: 'flux-max',
    prompt: null,
    output: null,
    resolution: '2K',
    aspectRatio: '4:5',
    inputImage: null,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--model': case '-m': opts.model = args[++i]; break;
      case '--prompt': case '-p': opts.prompt = args[++i]; break;
      case '--output': case '-o': opts.output = args[++i]; break;
      case '--resolution': case '-r': opts.resolution = args[++i]; break;
      case '--aspect-ratio': case '-a': opts.aspectRatio = args[++i]; break;
      case '--input-image': case '-i': opts.inputImage = args[++i]; break;
    }
  }

  if (!opts.prompt || !opts.output) {
    console.error('Usage: node generate-image.js --model flux-pro --prompt "..." --output image.png');
    console.error('');
    console.error('Models:');
    Object.entries(MODELS).forEach(([id, m]) => {
      console.error(`  ${id.padEnd(12)} ${m.name} (${m.provider}, ${m.cost})`);
    });
    process.exit(1);
  }

  const absOutput = path.resolve(opts.output);
  const outDir = path.dirname(absOutput);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const model = MODELS[opts.model];
  if (!model) {
    console.error(`Unknown model: ${opts.model}. Available: ${Object.keys(MODELS).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n📸 Model: ${model.name} (${model.provider}, ${model.cost})`);
  console.log(`📝 Prompt: ${opts.prompt.substring(0, 80)}...`);
  console.log(`💾 Output: ${absOutput}\n`);

  switch (opts.model) {
    case 'flux-max':
      await generateFlux(opts.prompt, absOutput, opts.aspectRatio, MODELS['flux-max'].endpoint, opts.inputImage);
      break;
    case 'flux-pro':
      await generateFlux(opts.prompt, absOutput, opts.aspectRatio, MODELS['flux-pro'].endpoint, opts.inputImage);
      break;
    case 'seedream':
      await generateSeedream(opts.prompt, absOutput);
      break;
    case 'gemini':
      generateGemini(opts.prompt, absOutput, opts.resolution, opts.inputImage);
      break;
    default:
      console.error(`No handler for model: ${opts.model}`);
      process.exit(1);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
