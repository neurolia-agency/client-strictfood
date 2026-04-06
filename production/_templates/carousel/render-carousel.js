#!/usr/bin/env node

/**
 * render-carousel.js — Renders carousel slide HTMLs to PNG (1080x1350)
 *
 * Usage:
 *   node render-carousel.js <slides-dir> <output-dir>
 *
 * Example:
 *   node render-carousel.js ./production/slides ./brouillons
 *
 * Expects the slides-dir to contain:
 *   slide-01-cover.html, slide-02.html, ..., slide-NN-sources.html, slide-NN-cta.html
 *
 * Outputs:
 *   slide-01.png, slide-02.png, ..., slide-NN.png
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const WIDTH = 1080;
const HEIGHT = 1350;

async function main() {
  const slidesDir = process.argv[2];
  const outputDir = process.argv[3];

  if (!slidesDir || !outputDir) {
    console.error('Usage: node render-carousel.js <slides-dir> <output-dir>');
    process.exit(1);
  }

  const absSlidesDir = path.resolve(slidesDir);
  const absOutputDir = path.resolve(outputDir);

  if (!fs.existsSync(absSlidesDir)) {
    console.error(`Slides directory not found: ${absSlidesDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(absOutputDir)) {
    fs.mkdirSync(absOutputDir, { recursive: true });
  }

  // Find all HTML files sorted by name
  const htmlFiles = fs.readdirSync(absSlidesDir)
    .filter(f => f.endsWith('.html'))
    .sort();

  if (htmlFiles.length === 0) {
    console.error(`No HTML files found in ${absSlidesDir}`);
    process.exit(1);
  }

  console.log(`Found ${htmlFiles.length} slides to render.`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  for (let i = 0; i < htmlFiles.length; i++) {
    const htmlFile = htmlFiles[i];
    const inputPath = path.join(absSlidesDir, htmlFile);
    const slideNum = String(i + 1).padStart(2, '0');
    const outputPath = path.join(absOutputDir, `slide-${slideNum}.png`);

    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
    await page.goto(`file://${inputPath}`, { waitUntil: 'networkidle0', timeout: 20000 });

    // Wait for Google Fonts
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 1000));

    await page.screenshot({ path: outputPath, type: 'png' });
    console.log(`OK: ${htmlFile} → slide-${slideNum}.png (${WIDTH}x${HEIGHT})`);
    await page.close();
  }

  await browser.close();
  console.log(`\nAll ${htmlFiles.length} slides rendered to ${absOutputDir}`);
}

main().catch(err => { console.error(err); process.exit(1); });
