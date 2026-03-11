#!/usr/bin/env node

/**
 * render-story.js — Renders HTML story templates to PNG/JPG (1080×1920)
 *
 * Usage:
 *   node render-story.js --input path/to/story.html --output path/to/story.png
 *   node render-story.js --input story.html --output story.png --format both --quality 90
 *
 * Options:
 *   --input    Path to filled HTML template
 *   --output   Output path (extension determines format, or use --format)
 *   --format   png | jpg | both (default: derived from output extension)
 *   --quality  JPG quality 1-100 (default: 92)
 *   --timeout  Font loading timeout in ms (default: 10000)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function renderStory(options) {
  const {
    input,
    output,
    format = 'png',
    quality = 92,
    timeout = 10000
  } = options;

  const inputPath = path.resolve(input);
  const outputPath = path.resolve(output);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Story dimensions: 1080×1920 (9:16)
    await page.setViewport({
      width: 1080,
      height: 1920,
      deviceScaleFactor: 1
    });

    // Load the HTML file
    await page.goto(`file://${inputPath}`, {
      waitUntil: 'networkidle0',
      timeout: timeout
    });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);

    // Small delay for rendering stability
    await new Promise(r => setTimeout(r, 500));

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const baseName = outputPath.replace(/\.(png|jpg|jpeg)$/i, '');
    const formats = format === 'both' ? ['png', 'jpg'] : [format];

    for (const fmt of formats) {
      const filePath = `${baseName}.${fmt}`;

      if (fmt === 'png') {
        await page.screenshot({
          path: filePath,
          type: 'png',
          fullPage: false,
          clip: { x: 0, y: 0, width: 1080, height: 1920 }
        });
        console.log(`PNG saved: ${filePath}`);
      } else {
        await page.screenshot({
          path: filePath,
          type: 'jpeg',
          quality: quality,
          fullPage: false,
          clip: { x: 0, y: 0, width: 1080, height: 1920 }
        });
        console.log(`JPG saved: ${filePath} (quality: ${quality})`);
      }
    }

  } finally {
    await browser.close();
  }
}

// CLI argument parsing
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--input':
        options.input = args[++i];
        break;
      case '--output':
        options.output = args[++i];
        break;
      case '--format':
        options.format = args[++i];
        break;
      case '--quality':
        options.quality = parseInt(args[++i], 10);
        break;
      case '--timeout':
        options.timeout = parseInt(args[++i], 10);
        break;
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }

  if (!options.input || !options.output) {
    console.error('Usage: node render-story.js --input <html> --output <png|jpg>');
    process.exit(1);
  }

  // Derive format from output extension if not specified
  if (!options.format) {
    const ext = path.extname(options.output).slice(1).toLowerCase();
    options.format = ext === 'jpg' || ext === 'jpeg' ? 'jpg' : 'png';
  }

  return options;
}

renderStory(parseArgs()).catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
