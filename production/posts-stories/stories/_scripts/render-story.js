#!/usr/bin/env node

/**
 * render-story.js — Renders HTML story templates to PNG (1080×1920)
 *
 * Usage:
 *   node render-story.js --input path/to/story.html --output path/to/story.png
 *
 * Options:
 *   --input    Path to filled HTML template
 *   --output   Output path (.png)
 *   --timeout  Font loading timeout in ms (default: 10000)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function renderStory(options) {
  const {
    input,
    output,
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

    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1080, height: 1920 }
    });
    console.log(`PNG saved: ${outputPath}`);

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
      case '--timeout':
        options.timeout = parseInt(args[++i], 10);
        break;
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }

  if (!options.input || !options.output) {
    console.error('Usage: node render-story.js --input <html> --output <png>');
    process.exit(1);
  }

  return options;
}

renderStory(parseArgs()).catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
