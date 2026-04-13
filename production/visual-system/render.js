#!/usr/bin/env node

/**
 * render.js — Universal Visual System Renderer
 *
 * Takes a JSON config → assembles HTML from expression + components → Puppeteer → PNG
 *
 * Usage:
 *   node render.js --config story.json --output story.png
 *   node render.js --expression vitrine --format story --image photo.png --output test.png
 *   echo '{"expression":"statement","format":"story",...}' | node render.js --output test.png
 *
 * Config JSON format:
 *   {
 *     "expression": "vitrine|brut|scene|impact|matiere|statement|ephemere",
 *     "format": "story|post",
 *     "fond": "charbon|ambre|noir",
 *     "image": { "src": "path/to/image.png", "mode": "framed|fullbleed" },
 *     "wallpaper": { "density": "low|medium|high", "keywords": ["EXTRA", "WORDS"], "seed": 42 },
 *     "content": [...],
 *     "brand": { "tagline": true, "logo": true, "tape_band": false },
 *     "grain": "light|default|heavy",
 *     "bokeh": true,
 *     "tech_frame": true
 *   }
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { generateWallpaper } = require('./components/wallpaper-generator');

const FORMATS = {
  story: { width: 1080, height: 1920, layout: 'story' },
  post:  { width: 1080, height: 1350, layout: 'post' },
};

const VS_DIR = __dirname;
const LOGO_PATH = path.join(VS_DIR, '..', 'posts-stories', 'stories', '_templates', '_base', 'logo.svg');

// ─── HTML Assembly ──────────────────────────────────────────

function assembleHTML(config) {
  const fmt = FORMATS[config.format] || FORMATS.story;
  const fond = config.fond || 'charbon';
  const expression = config.expression || 'brut';

  // Resolve paths to absolute
  const tokensPath = path.join(VS_DIR, 'tokens.css');
  const layoutPath = path.join(VS_DIR, 'layouts', `${fmt.layout}.css`);

  // Collect CSS component files
  const cssFiles = [tokensPath, layoutPath];
  const componentDir = path.join(VS_DIR, 'components');
  const componentCSS = [
    'backgrounds.css', 'grain.css', 'golden-bokeh.css',
    'tech-frame.css', 'photo-frame.css', 'tape-band.css',
    'tagline.css', 'typography.css'
  ];
  componentCSS.forEach(f => cssFiles.push(path.join(componentDir, f)));

  // Build CSS imports
  const cssImports = cssFiles.map(f => {
    const content = fs.readFileSync(f, 'utf-8');
    return `<style>${content}</style>`;
  }).join('\n');

  // Build layers
  const layers = [];

  // Layer 0: Background
  layers.push(`<div class="bg-${fond}"></div>`);

  // Layer 1: Wallpaper (if enabled)
  if (config.wallpaper && expression === 'vitrine') {
    const wpSvg = generateWallpaper({
      width: fmt.width,
      height: fmt.height,
      mode: fond === 'ambre' ? 'ambre' : 'charbon',
      density: config.wallpaper.density || 'medium',
      extraKeywords: config.wallpaper.keywords || [],
      seed: config.wallpaper.seed || null,
    });
    layers.push(`<div style="position:absolute;inset:0;z-index:1;pointer-events:none;">${wpSvg}</div>`);
  }

  // Layer 1b: Bokeh
  if (config.bokeh !== false && ['vitrine', 'impact'].includes(expression)) {
    layers.push(buildBokeh());
  }

  // Layer 1c: Tech frame
  if (config.tech_frame !== false && ['vitrine', 'impact', 'statement'].includes(expression)) {
    layers.push(`<div class="tech-frame"></div>`);
    layers.push(`<div class="tech-line tech-line--tl"></div>`);
    layers.push(`<div class="tech-line tech-line--tr"></div>`);
    layers.push(`<div class="tech-line tech-line--bl"></div>`);
  }

  // Layer 2: Image
  if (config.image && config.image.src) {
    const imgSrc = path.resolve(config.image.src).replace(/ /g, '%20');
    const imgMode = config.image.mode || 'fullbleed';

    if (imgMode === 'framed') {
      const frameSize = config.format === 'post' ? 'post' : 'story';
      layers.push(`
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2;">
          <div class="photo-frame photo-frame--${frameSize}">
            <img src="file://${imgSrc}" />
          </div>
        </div>
      `);
    } else {
      const gradientClass = config.image.gradient ? `photo-fullbleed--gradient-${config.image.gradient}` : '';
      layers.push(`
        <div class="photo-fullbleed ${gradientClass}">
          <img src="file://${imgSrc}" />
        </div>
      `);
    }
  }

  // Layer 3: Content
  if (config.content && config.content.length > 0) {
    const contentHTML = config.content.map(buildContentBlock).join('\n');
    layers.push(`<div class="content-zone">${contentHTML}</div>`);
  }

  // Layer 4: Brand zone
  const brandHTML = buildBrandZone(config, fmt);
  if (brandHTML) {
    layers.push(`<div class="brand-zone">${brandHTML}</div>`);
  }

  // Layer 5: Grain (always)
  const grainClass = config.grain ? `grain--${config.grain}` : 'grain--default';
  layers.push(`<div class="grain ${grainClass}"></div>`);

  // Assemble full HTML
  return `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
${cssImports}
<style>
  body { width: ${fmt.width}px; height: ${fmt.height}px; }
</style>
</head>
<body>
${layers.join('\n')}
</body></html>`;
}

// ─── Content block builder ──────────────────────────────────

function buildContentBlock(block) {
  switch (block.type) {
    case 'label':
      return `<div class="label ${block.accent ? 'label--accent' : ''}">${esc(block.text)}</div>`;

    case 'product-name':
      const sizeClass = block.size ? `product-name--${block.size}` : '';
      return `<div class="product-name ${sizeClass}">${esc(block.text).replace(/\n/g, '<br>')}</div>`;

    case 'stat-hero':
      const valSize = block.large ? 'stat-hero__value--xl' : '';
      return `<div class="stat-hero">
        <span class="stat-hero__value ${valSize}">${esc(block.value)}</span>
        <span class="stat-hero__unit">${esc(block.unit || '')}</span>
      </div>`;

    case 'data-row':
      const items = block.items.map(item =>
        `<span class="data-row__item">${esc(item)}</span>`
      ).join('<span class="data-row__sep"> · </span>');
      return `<div class="data-row">${items}</div>`;

    case 'body':
      return `<div class="body-text">${block.html || esc(block.text)}</div>`;

    case 'headline':
      const hlSize = block.size || 'lg';
      return `<div class="headline headline--${hlSize}">${esc(block.text)}</div>`;

    case 'statement':
      const stSize = block.size || 'large';
      return `<div class="statement statement--${stSize}">${esc(block.text).replace(/\n/g, '<br>')}</div>`;

    case 'text-minimal':
      return `<div class="text-minimal">${esc(block.text)}</div>`;

    case 'spacer':
      return `<div style="flex:1;"></div>`;

    default:
      return '';
  }
}

// ─── Brand zone builder ─────────────────────────────────────

function buildBrandZone(config, fmt) {
  const brand = config.brand || {};
  const parts = [];

  // Tape band (posts, expression vitrine/impact)
  if (brand.tape_band) {
    const taglineRepeat = 'LE CHEAT MEAL <em>QUI N\'EN EST PAS UN</em>';
    const items = Array(6).fill(
      `<span class="tape-band__item">${taglineRepeat} <span class="tape-band__dot"></span></span>`
    ).join('');
    parts.push(`<div class="tape-band"><div class="tape-band__track">${items}</div></div>`);
  }

  // Tagline simple (stories)
  if (brand.tagline) {
    parts.push(`<div class="tagline">Le cheat meal <em>qui n'en est pas un</em></div>`);
  }

  // Logo
  if (brand.logo) {
    const logoSrc = fs.existsSync(LOGO_PATH) ? `file://${LOGO_PATH}` : '';
    const logoClass = brand.logo_size || '';
    if (logoSrc) {
      parts.push(`<img class="logo ${logoClass}" src="${logoSrc}" />`);
    }
  }

  return parts.length ? parts.join('\n') : null;
}

// ─── Bokeh builder ──────────────────────────────────────────

function buildBokeh() {
  const dots = Array(8).fill('<div class="bokeh-dot"></div>').join('');
  return `<div class="bokeh">${dots}</div>`;
}

// ─── Utility ────────────────────────────────────────────────

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── Puppeteer render ───────────────────────────────────────

async function render(config, outputPath) {
  const html = assembleHTML(config);
  const fmt = FORMATS[config.format] || FORMATS.story;

  // Write temp HTML
  const tmpDir = path.join(VS_DIR, '.tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const tmpFile = path.join(tmpDir, `render-${Date.now()}.html`);
  fs.writeFileSync(tmpFile, html, 'utf-8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: fmt.width, height: fmt.height, deviceScaleFactor: 1 });
    await page.goto(`file://${tmpFile}`, { waitUntil: 'networkidle0', timeout: 15000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 800));

    const absOutput = path.resolve(outputPath);
    const outDir = path.dirname(absOutput);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    await page.screenshot({
      path: absOutput,
      type: 'png',
      clip: { x: 0, y: 0, width: fmt.width, height: fmt.height }
    });

    console.log(`✅ Rendered: ${absOutput} (${fmt.width}×${fmt.height})`);
  } finally {
    await browser.close();
    // Cleanup temp
    try { fs.unlinkSync(tmpFile); } catch (e) {}
  }
}

// ─── CLI ────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  let config = null;
  let outputPath = null;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--config':
        config = JSON.parse(fs.readFileSync(path.resolve(args[++i]), 'utf-8'));
        break;
      case '--output':
        outputPath = args[++i];
        break;
      // Quick CLI mode (without JSON file)
      case '--expression': config = config || {}; config.expression = args[++i]; break;
      case '--format':     config = config || {}; config.format = args[++i]; break;
      case '--fond':       config = config || {}; config.fond = args[++i]; break;
      case '--image':      config = config || {}; config.image = { src: args[++i], mode: 'fullbleed' }; break;
      case '--image-mode': if (config && config.image) config.image.mode = args[++i]; break;
    }
  }

  // Read from stdin if no config
  if (!config) {
    const stdin = fs.readFileSync(0, 'utf-8');
    config = JSON.parse(stdin);
  }

  if (!outputPath) {
    console.error('Usage: node render.js --config config.json --output output.png');
    process.exit(1);
  }

  // Defaults
  config.format = config.format || 'story';
  config.expression = config.expression || 'brut';
  config.fond = config.fond || 'charbon';
  config.brand = config.brand || {};
  config.grain = config.grain || 'default';

  await render(config, outputPath);
}

if (require.main === module) {
  main().catch(err => { console.error('Render error:', err); process.exit(1); });
}

module.exports = { assembleHTML, render };
