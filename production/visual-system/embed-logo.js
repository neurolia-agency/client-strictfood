#!/usr/bin/env node

/**
 * embed-logo.js — Composite le logo StrictFood sur une image IA
 *
 * Incruste le logo SVG sur une surface de l'image (coin, centre-bas,
 * ou position custom). Utilisé pour les images SCÈNE/BRUT où le logo
 * doit apparaître "dans" l'image (sur un sac kraft, une serviette, etc.)
 * plutôt que comme overlay de template.
 *
 * Usage:
 *   node embed-logo.js --input scene.png --output scene-logo.png
 *   node embed-logo.js --input scene.png --output scene-logo.png --position bottom-center --size 280 --opacity 0.7
 *   node embed-logo.js --input scene.png --output scene-logo.png --x 650 --y 1400 --size 200 --opacity 0.5 --rotate -5
 *
 * Options:
 *   --input      Input image path
 *   --output     Output image path
 *   --position   Preset: bottom-center (default), bottom-left, bottom-right, center
 *   --x          Custom X position (overrides --position)
 *   --y          Custom Y position (overrides --position)
 *   --size       Logo width in pixels (default: 350)
 *   --opacity    Logo opacity 0-1 (default: 0.75)
 *   --rotate     Rotation angle in degrees (default: 0)
 *   --logo       Custom logo path (default: auto-detect)
 *   --blend      Blend mode: over (default), multiply, screen, soft-light
 *   --tint       Tint color hex (e.g., #FABA43 for ambre) — colorizes the logo
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// ─── Find logo ──────────────────────────────────────────────

const LOGO_CANDIDATES = [
  path.join(__dirname, '..', 'posts-stories', 'stories', '_templates', '_base', 'logo.svg'),
  path.join(__dirname, '..', '..', 'public', 'logo', '2025-09-14_15-27-20_UTC.svg'),
];

function findLogo(customPath) {
  if (customPath && fs.existsSync(customPath)) return customPath;
  for (const p of LOGO_CANDIDATES) {
    if (fs.existsSync(p)) return p;
  }
  console.error('Logo SVG not found. Tried:', LOGO_CANDIDATES);
  process.exit(1);
}

// ─── Position presets ───────────────────────────────────────

function resolvePosition(preset, imgWidth, imgHeight, logoWidth, logoHeight) {
  const margin = 40;
  switch (preset) {
    case 'bottom-center':
      return { x: Math.round((imgWidth - logoWidth) / 2), y: imgHeight - logoHeight - margin };
    case 'bottom-left':
      return { x: margin, y: imgHeight - logoHeight - margin };
    case 'bottom-right':
      return { x: imgWidth - logoWidth - margin, y: imgHeight - logoHeight - margin };
    case 'center':
      return { x: Math.round((imgWidth - logoWidth) / 2), y: Math.round((imgHeight - logoHeight) / 2) };
    case 'top-center':
      return { x: Math.round((imgWidth - logoWidth) / 2), y: margin + 250 }; // below IG safe zone
    default:
      return { x: Math.round((imgWidth - logoWidth) / 2), y: imgHeight - logoHeight - margin };
  }
}

// ─── Main ───────────────────────────────────────────────────

async function embedLogo(opts) {
  const {
    input,
    output,
    position = 'bottom-center',
    x: customX,
    y: customY,
    size = 350,
    opacity = 0.75,
    rotate = 0,
    logoPath,
    tint,
  } = opts;

  // Load input image to get dimensions
  const inputMeta = await sharp(input).metadata();
  const imgWidth = inputMeta.width;
  const imgHeight = inputMeta.height;

  // Load and resize logo
  const logo = findLogo(logoPath);
  let logoPipeline = sharp(logo).resize(size);

  // Apply tint if specified
  if (tint) {
    logoPipeline = logoPipeline.tint(tint);
  }

  // Render logo to buffer
  let logoBuffer = await logoPipeline.png().toBuffer();
  const logoMeta = await sharp(logoBuffer).metadata();

  // Apply opacity
  if (opacity < 1) {
    // Create opacity mask
    const opacityBuffer = await sharp(logoBuffer)
      .ensureAlpha()
      .composite([{
        input: Buffer.from(
          `<svg width="${logoMeta.width}" height="${logoMeta.height}">
            <rect width="100%" height="100%" fill="rgba(255,255,255,${opacity})"/>
          </svg>`
        ),
        blend: 'dest-in',
      }])
      .png()
      .toBuffer();
    logoBuffer = opacityBuffer;
  }

  // Apply rotation
  if (rotate !== 0) {
    logoBuffer = await sharp(logoBuffer)
      .rotate(rotate, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  }

  // Get final logo dimensions after rotation
  const finalLogoMeta = await sharp(logoBuffer).metadata();

  // Calculate position
  let pos;
  if (customX !== undefined && customY !== undefined) {
    pos = { x: customX, y: customY };
  } else {
    pos = resolvePosition(position, imgWidth, imgHeight, finalLogoMeta.width, finalLogoMeta.height);
  }

  // Ensure position is within bounds
  pos.x = Math.max(0, Math.min(pos.x, imgWidth - finalLogoMeta.width));
  pos.y = Math.max(0, Math.min(pos.y, imgHeight - finalLogoMeta.height));

  // Composite
  await sharp(input)
    .composite([{
      input: logoBuffer,
      top: Math.round(pos.y),
      left: Math.round(pos.x),
    }])
    .png()
    .toFile(output);

  console.log(`✅ Logo embedded: ${output} (${size}px, ${Math.round(opacity * 100)}% opacity, pos ${pos.x},${pos.y})`);
}

// ─── CLI ────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const opts = {};

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--input':    opts.input = args[++i]; break;
      case '--output':   opts.output = args[++i]; break;
      case '--position': opts.position = args[++i]; break;
      case '--x':        opts.x = parseInt(args[++i]); break;
      case '--y':        opts.y = parseInt(args[++i]); break;
      case '--size':     opts.size = parseInt(args[++i]); break;
      case '--opacity':  opts.opacity = parseFloat(args[++i]); break;
      case '--rotate':   opts.rotate = parseFloat(args[++i]); break;
      case '--logo':     opts.logoPath = args[++i]; break;
      case '--tint':     opts.tint = args[++i]; break;
    }
  }

  if (!opts.input || !opts.output) {
    console.error('Usage: node embed-logo.js --input scene.png --output scene-logo.png');
    console.error('Options: --position bottom-center|bottom-left|bottom-right|center');
    console.error('         --size 350 --opacity 0.75 --rotate -5 --tint #FABA43');
    process.exit(1);
  }

  embedLogo(opts).catch(err => { console.error(err); process.exit(1); });
}

main();
