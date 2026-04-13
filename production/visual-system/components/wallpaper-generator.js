#!/usr/bin/env node

/**
 * wallpaper-generator.js — Génère un SVG de mots-clés brand dispersés
 * + icônes burger décoratives + traits diagonaux
 *
 * Usage:
 *   node wallpaper-generator.js --width 1080 --height 1920 --mode charbon --density medium --output wallpaper.svg
 *   node wallpaper-generator.js --width 1080 --height 1350 --mode ambre --density low --keywords "53G,WRAP,POULET"
 *
 * Options:
 *   --width      Canvas width (1080)
 *   --height     Canvas height (1920 for story, 1350 for post)
 *   --mode       "charbon" (ambre text on dark) or "ambre" (charbon text on gold)
 *   --density    "low" (5-7 items), "medium" (10-15), "high" (18-24)
 *   --keywords   Extra keywords to mix in (comma-separated, optional)
 *   --seed       Random seed for reproducible layouts (optional)
 *   --output     Output file path (default: stdout)
 */

const fs = require('fs');
const path = require('path');

// ─── Brand keywords pool ───────────────────────────────────────
const BRAND_KEYWORDS = [
  'PROTÉINES', 'SAIN', 'ZÉRO HUILE', 'AIR FRYER', 'PAIN NOIR',
  'FRESH', 'CLEAN', 'STRICT', 'STRICT FOOD\'S', 'HEALTHY',
  'ARTISANAL', 'LOCAL', 'CHALEUR PULSÉE', 'ZÉRO',
  'SAVEURS', 'PLAISIR', 'GOURMAND', 'VRAI'
];

// ─── Colors by mode ────────────────────────────────────────────
const COLORS = {
  charbon: {
    text: 'rgba(191, 133, 34, {opacity})',     // ambre sur fond sombre
    icon: 'rgba(191, 133, 34, {opacity})',
    line: 'rgba(191, 133, 34, {opacity})',
  },
  ambre: {
    text: 'rgba(26, 23, 20, {opacity})',        // charbon sur fond ambre
    icon: 'rgba(26, 23, 20, {opacity})',
    line: 'rgba(26, 23, 20, {opacity})',
  }
};

// ─── Density presets ───────────────────────────────────────────
const DENSITY = {
  low:    { keywords: 6,  icons: 3, lines: 2 },
  medium: { keywords: 12, icons: 5, lines: 3 },
  high:   { keywords: 20, icons: 7, lines: 4 },
};

// ─── Seeded random (simple LCG) ───────────────────────────────
function createRng(seed) {
  let s = seed || Math.floor(Math.random() * 2147483647);
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// ─── Burger icon SVG path ─────────────────────────────────────
function burgerIcon(x, y, size, rotation, opacity, color) {
  const fill = color.replace('{opacity}', opacity.toFixed(2));
  return `<g transform="translate(${x},${y}) rotate(${rotation}) scale(${(size/50).toFixed(2)})">
    <!-- Bun top -->
    <ellipse cx="0" cy="-8" rx="22" ry="12" fill="${fill}" />
    <!-- Patty -->
    <rect x="-20" y="-2" width="40" height="7" rx="2" fill="${fill}" />
    <!-- Bun bottom -->
    <ellipse cx="0" cy="10" rx="20" ry="8" fill="${fill}" />
    <!-- Sesame dots -->
    <circle cx="-8" cy="-14" r="1.5" fill="${fill}" opacity="0.6" />
    <circle cx="4" cy="-16" r="1.5" fill="${fill}" opacity="0.6" />
    <circle cx="10" cy="-12" r="1.5" fill="${fill}" opacity="0.6" />
  </g>`;
}

// ─── Diagonal line SVG ────────────────────────────────────────
function diagonalLine(x1, y1, x2, y2, opacity, color) {
  const stroke = color.replace('{opacity}', opacity.toFixed(2));
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="1.5" />`;
}

// ─── Main generation ──────────────────────────────────────────
function generateWallpaper(options) {
  const {
    width = 1080,
    height = 1920,
    mode = 'charbon',
    density = 'medium',
    extraKeywords = [],
    seed = null
  } = options;

  const rng = createRng(seed);
  const colors = COLORS[mode] || COLORS.charbon;
  const counts = DENSITY[density] || DENSITY.medium;

  // Build keyword pool (brand + extras, shuffled)
  const pool = [...BRAND_KEYWORDS, ...extraKeywords];
  pool.sort(() => rng() - 0.5);

  const elements = [];

  // ─── Keywords ─────────────────────────────────────────────
  const sizes = [
    { fontSize: 72, weight: 700, letterSpacing: 5 },   // Large
    { fontSize: 48, weight: 700, letterSpacing: 4 },   // Medium
    { fontSize: 32, weight: 700, letterSpacing: 3 },   // Small
  ];

  for (let i = 0; i < counts.keywords; i++) {
    const word = pool[i % pool.length];
    const size = sizes[Math.floor(rng() * sizes.length)];
    const x = rng() * width * 0.9 + width * 0.05;
    const y = rng() * height * 0.85 + height * 0.05;
    const rotation = (rng() - 0.5) * 60; // -30° to +30°
    const opacity = 0.05 + rng() * 0.10; // 0.05 to 0.15
    const fill = colors.text.replace('{opacity}', opacity.toFixed(2));

    elements.push(
      `<text x="${x.toFixed(0)}" y="${y.toFixed(0)}" ` +
      `font-family="'Oswald', sans-serif" font-weight="${size.weight}" ` +
      `font-size="${size.fontSize}px" letter-spacing="${size.letterSpacing}px" ` +
      `fill="${fill}" ` +
      `transform="rotate(${rotation.toFixed(1)} ${x.toFixed(0)} ${y.toFixed(0)})" ` +
      `text-anchor="middle">${escapeXml(word)}</text>`
    );
  }

  // ─── Burger icons ─────────────────────────────────────────
  for (let i = 0; i < counts.icons; i++) {
    const x = rng() * width;
    const y = rng() * height;
    const size = 30 + rng() * 50;                      // 30-80px
    const rotation = (rng() - 0.5) * 50;
    const opacity = 0.06 + rng() * 0.08;               // 0.06 to 0.14

    elements.push(burgerIcon(x, y, size, rotation, opacity, colors.icon));
  }

  // ─── Diagonal lines ───────────────────────────────────────
  for (let i = 0; i < counts.lines; i++) {
    const x1 = rng() * width * 0.3;
    const y1 = rng() * height;
    const x2 = x1 + 200 + rng() * 400;
    const y2 = y1 - 100 - rng() * 200;
    const opacity = 0.08 + rng() * 0.12;

    elements.push(diagonalLine(x1, y1, x2, y2, opacity, colors.line));
  }

  // ─── Assemble SVG ─────────────────────────────────────────
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&amp;display=swap');
    </style>
  </defs>
  ${elements.join('\n  ')}
</svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

// ─── CLI ────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { width: 1080, height: 1920, mode: 'charbon', density: 'medium', extraKeywords: [], seed: null, output: null };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--width':    opts.width = parseInt(args[++i], 10); break;
      case '--height':   opts.height = parseInt(args[++i], 10); break;
      case '--mode':     opts.mode = args[++i]; break;
      case '--density':  opts.density = args[++i]; break;
      case '--keywords': opts.extraKeywords = args[++i].split(',').map(s => s.trim().toUpperCase()); break;
      case '--seed':     opts.seed = parseInt(args[++i], 10); break;
      case '--output':   opts.output = args[++i]; break;
    }
  }
  return opts;
}

if (require.main === module) {
  const opts = parseArgs();
  const svg = generateWallpaper(opts);

  if (opts.output) {
    fs.writeFileSync(path.resolve(opts.output), svg, 'utf-8');
    console.log(`Wallpaper SVG saved: ${opts.output}`);
  } else {
    process.stdout.write(svg);
  }
}

module.exports = { generateWallpaper };
