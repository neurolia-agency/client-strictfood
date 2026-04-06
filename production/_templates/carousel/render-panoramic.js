#!/usr/bin/env node

/**
 * render-panoramic.js
 *
 * Decoupe une image large en N slides de 1080x1350 (4:5) pour un carrousel panoramique Instagram.
 *
 * Usage :
 *   node render-panoramic.js --input <image> --slides <3|4> [--output <dir>]
 *
 * Exemples :
 *   node render-panoramic.js --input scene.png --slides 4
 *   node render-panoramic.js --input scene.png --slides 3 --output ./brouillons/
 *
 * L'image source est d'abord redimensionnee/croppee pour correspondre exactement
 * a (slides * 1080) x 1350, puis decoupee en tranches egales.
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
const getArg = (flag) => {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
};

const inputPath = getArg('--input');
const slidesCount = parseInt(getArg('--slides') || '4', 10);
const outputDir = getArg('--output') || path.dirname(inputPath || '.');

if (!inputPath) {
  console.error('Usage: node render-panoramic.js --input <image> --slides <3|4> [--output <dir>]');
  process.exit(1);
}

if (![3, 4].includes(slidesCount)) {
  console.error('--slides doit etre 3 ou 4');
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Fichier introuvable : ${inputPath}`);
  process.exit(1);
}

const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;

async function main() {
  // Dynamic import for sharp (ESM-compatible)
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('sharp non installe. Installer avec : npm install sharp');
    process.exit(1);
  }

  const totalWidth = SLIDE_WIDTH * slidesCount;
  const totalHeight = SLIDE_HEIGHT;

  console.log(`Configuration :`);
  console.log(`  Input     : ${inputPath}`);
  console.log(`  Slides    : ${slidesCount}`);
  console.log(`  Cible     : ${totalWidth} x ${totalHeight}`);
  console.log(`  Output    : ${outputDir}`);
  console.log('');

  // Get source image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`  Source    : ${metadata.width} x ${metadata.height}`);

  // Calculate crop/resize to match target dimensions
  // Strategy: resize to match height, then crop width (or vice versa)
  const sourceRatio = metadata.width / metadata.height;
  const targetRatio = totalWidth / totalHeight;

  let resizeOpts;
  if (sourceRatio >= targetRatio) {
    // Source is wider than needed → resize by height, crop width
    resizeOpts = { height: totalHeight };
  } else {
    // Source is taller than needed → resize by width, crop height
    resizeOpts = { width: totalWidth };
  }

  // Resize and crop to exact target dimensions
  const resized = sharp(inputPath)
    .resize({
      ...resizeOpts,
      fit: 'cover',
      position: 'center',
    })
    .extract({
      left: 0,
      top: 0,
      width: totalWidth,
      height: totalHeight,
    });

  // We need the buffer to extract slides
  // First, resize + crop to exact dimensions
  const processedBuffer = await sharp(inputPath)
    .resize(totalWidth, totalHeight, {
      fit: 'cover',
      position: 'center',
    })
    .png()
    .toBuffer();

  console.log(`  Redimensionne : ${totalWidth} x ${totalHeight}`);
  console.log('');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Extract each slide
  for (let i = 0; i < slidesCount; i++) {
    const left = i * SLIDE_WIDTH;
    const slideNum = String(i + 1).padStart(2, '0');
    const outputPath = path.join(outputDir, `slide-${slideNum}.png`);

    await sharp(processedBuffer)
      .extract({
        left,
        top: 0,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
      })
      .png({ quality: 95, compressionLevel: 6 })
      .toFile(outputPath);

    console.log(`  Slide ${slideNum} : ${outputPath} (${left}px → ${left + SLIDE_WIDTH}px)`);
  }

  console.log('');
  console.log(`${slidesCount} slides generees dans ${outputDir}`);
}

main().catch((err) => {
  console.error('Erreur :', err.message);
  process.exit(1);
});
