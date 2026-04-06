#!/usr/bin/env node

/**
 * render-mocks.js — Renders brand visual system mock-ups to PNG
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const MOCKS = [
  // Carousel mocks
  { input: 'mock-carousel-cover.html',  output: 'render-carousel-cover.png',  width: 1080, height: 1350 },
  { input: 'mock-carousel-slide2.html', output: 'render-carousel-slide2.png', width: 1080, height: 1350 },
  { input: 'mock-carousel-slide3.html', output: 'render-carousel-slide3.png', width: 1080, height: 1350 },
  { input: 'mock-carousel-slide4.html', output: 'render-carousel-slide4.png', width: 1080, height: 1350 },
  { input: 'mock-carousel-slide5.html', output: 'render-carousel-slide5.png', width: 1080, height: 1350 },
  // Knockout mocks
  { input: 'mock-knockout-v2.html',     output: 'render-knockout-v2.png',     width: 1080, height: 1350 },
  { input: 'mock-knockout-ambre.html',  output: 'render-knockout-ambre.png',  width: 1080, height: 1350 },
  // Masque mocks
  { input: 'mock-masque-v3.html',          output: 'render-masque-v3.png',          width: 1080, height: 1350 },
  { input: 'mock-masque-v3-inverted.html', output: 'render-masque-v3-inverted.png', width: 1080, height: 1350 },
  // Texture mocks
  { input: 'mock-texture-v5b-svg.html',     output: 'render-texture-v5b-svg.png',     width: 1080, height: 1350 },
  { input: 'mock-texture-v5b-tagline.html',  output: 'render-texture-v5b-tagline.png', width: 1080, height: 1350 },
  { input: 'mock-texture-v7-bun.html',      output: 'render-texture-v7-bun.png',      width: 1080, height: 1350 },
  // Triptych mock (panoramic — 3 posts)
  { input: 'mock-triptych-v2.html',    output: 'render-triptych-v2.png',    width: 3240, height: 1350 },
];

const dir = __dirname;

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  for (const mock of MOCKS) {
    const inputPath = path.join(dir, mock.input);
    const outputPath = path.join(dir, mock.output);

    if (!fs.existsSync(inputPath)) {
      console.error(`Missing: ${inputPath}`);
      continue;
    }

    const page = await browser.newPage();
    await page.setViewport({ width: mock.width, height: mock.height, deviceScaleFactor: 1 });
    await page.goto(`file://${inputPath}`, { waitUntil: 'networkidle0', timeout: 20000 });

    // Wait for fonts
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 1000));

    await page.screenshot({ path: outputPath, type: 'png' });
    console.log(`OK: ${mock.output} (${mock.width}x${mock.height})`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll mocks rendered.');
}

main().catch(err => { console.error(err); process.exit(1); });
