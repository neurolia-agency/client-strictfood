#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SLIDES = [
  'slide-1-cover.html',
  'slide-1b-challenger.html',
  'slide-2-comparaison.html',
  'slide-2b-steakhouse-new.html',
  'slide-2c-quick-new.html',
  'slide-3-prot.html',
  'slide-4-gras.html',
  'slide-5-sucres.html',
  'slide-6-cta.html'
];

const WIDTH = 1080;
const HEIGHT = 1350;

async function renderSlides() {
  const dir = __dirname;
  const outDir = path.resolve(dir, '..', 'brouillons');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const slide of SLIDES) {
      const inputPath = path.join(dir, slide);
      if (!fs.existsSync(inputPath)) {
        console.error(`Not found: ${inputPath}`);
        continue;
      }

      const page = await browser.newPage();
      await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
      await page.goto(`file://${inputPath}`, { waitUntil: 'networkidle0', timeout: 15000 });
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 800));

      const outName = slide.replace('.html', '.png');
      const outPath = path.join(outDir, outName);

      await page.screenshot({
        path: outPath,
        type: 'png',
        fullPage: false,
        clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT }
      });

      console.log(`OK: ${outName}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

renderSlides().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
