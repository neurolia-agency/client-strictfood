#!/usr/bin/env node

/**
 * vitrine-fill.js — Fills the vitrine.html template with data
 *
 * Handles:
 * - Story (1080×1920) vs Post (1080×1350) layout positioning
 * - Fond charbon (default) vs fond ambre (inversion)
 * - Golden frame on product photo
 * - Label + product name ABOVE the photo
 * - Tape-band for posts, tagline+logo for stories
 *
 * Usage:
 *   node vitrine-fill.js --config data.json --output filled.html
 *
 * Config JSON:
 *   {
 *     "format": "story|post",
 *     "fond": "charbon|ambre",
 *     "label": "BEST-SELLER",
 *     "product_line1": "STRICT",
 *     "product_line2": "POULET",
 *     "photo_src": "/absolute/path/to/photo.png",
 *     "stat_value": "53G",
 *     "stat_label": "Protéines",
 *     "secondary_stats": [
 *       { "value": "596", "text": "kcal" },
 *       { "value": "0%", "text": "huile de cuisson" },
 *       { "text": "Pain noir sésame" }
 *     ],
 *     "hook_html": "Le burger qui <strong>remplace ton shaker</strong> — cuit à la chaleur pulsée, zéro compromis."
 *   }
 */

const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, 'vitrine.html');
const LOGO_PATHS = [
  path.join(__dirname, '..', '..', 'posts-stories', 'stories', '_templates', '_base', 'logo.svg'),
  path.join(__dirname, '..', '..', '..', 'public', 'logo', '2025-09-14_15-27-20_UTC.svg'),
];

// ─── Layout presets (Y positions) ──────────────────────────

const LAYOUT = {
  story: {
    WIDTH: 1080, HEIGHT: 1920,
    LABEL_TOP: 272, NAME_TOP: 320, NAME_FONT_SIZE: 110,
    PHOTO_TOP: 500, PHOTO_SIZE: 720,
    STAT_TOP: 1250, STAT_FONT_SIZE: 130,
    STATS2_TOP: 1270, HOOK_TOP: 1430,
    LINE3_TOP: 1200, SQUARE_TOP: 1180, CIRCLE2_TOP: 1350,
    DOTS1_TOP: 1150, EMBER2_TOP: 1180, EMBER4_TOP: 1400,
    BURGER_XL_TOP: 1100, SM2_TOP: 1500,
    BOTTOM_PADDING: 80, TAGLINE_SIZE: 38,
    TAPE_DISPLAY: 'none', BOTTOM_STORY_DISPLAY: 'block',
  },
  post: {
    WIDTH: 1080, HEIGHT: 1350,
    LABEL_TOP: 40, NAME_TOP: 78, NAME_FONT_SIZE: 85,
    PHOTO_TOP: 210, PHOTO_SIZE: 820,
    STAT_TOP: 1065, STAT_FONT_SIZE: 100,
    STATS2_TOP: 1080, HOOK_TOP: 1200,
    LINE3_TOP: 950, SQUARE_TOP: 1000, CIRCLE2_TOP: 1050,
    DOTS1_TOP: 980, EMBER2_TOP: 1020, EMBER4_TOP: 1150,
    BURGER_XL_TOP: 900, SM2_TOP: 1150,
    BOTTOM_PADDING: 65, TAGLINE_SIZE: 30,
    TAPE_DISPLAY: 'flex', BOTTOM_STORY_DISPLAY: 'none',
  }
};

// ─── Color palettes for fond inversion ─────────────────────

const FOND = {
  charbon: {
    BG_BASE_COLOR: '#141210',
    // Glow = ambre on charbon
    GLOW_COLOR_88: 'rgba(250,186,67,0.88)',
    GLOW_COLOR_55: 'rgba(250,186,67,0.55)',
    GLOW_COLOR_18: 'rgba(250,186,67,0.18)',
    GLOW_COLOR_12: 'rgba(250,186,67,0.12)',
    GLOW_ACCENT_25: 'rgba(237,190,68,0.25)',
    // GFX elements = ambre
    GFX_COLOR_50: 'rgba(250,186,67,0.50)',
    GFX_COLOR_35: 'rgba(237,190,68,0.35)',
    GFX_COLOR_08: 'rgba(250,186,67,0.08)',
    GFX_LINE_20: 'rgba(237,190,68,0.20)',
    GFX_LINE_14: 'rgba(237,190,68,0.14)',
    GFX_LINE_18: 'rgba(237,190,68,0.18)',
    GFX_LINE_12: 'rgba(237,190,68,0.12)',
    GFX_LINE_10: 'rgba(237,190,68,0.10)',
    GFX_LINE_08: 'rgba(237,190,68,0.08)',
    GFX_BORDER_15: 'rgba(237,190,68,0.15)',
    GFX_BORDER_12: 'rgba(237,190,68,0.12)',
    GFX_BORDER_10: 'rgba(237,190,68,0.10)',
    GFX_BORDER_08: 'rgba(237,190,68,0.08)',
    GFX_DOT_COLOR: 'rgba(237,190,68,0.18)',
    BURGER_FILL: '#EDBE44',
  },
  ambre: {
    BG_BASE_COLOR: '#FABA43',
    // Glow = charbon/noir on ambre
    GLOW_COLOR_88: 'rgba(20,18,16,0.75)',
    GLOW_COLOR_55: 'rgba(20,18,16,0.45)',
    GLOW_COLOR_18: 'rgba(20,18,16,0.15)',
    GLOW_COLOR_12: 'rgba(20,18,16,0.10)',
    GLOW_ACCENT_25: 'rgba(0,0,0,0.20)',
    // GFX elements = charbon
    GFX_COLOR_50: 'rgba(20,18,16,0.40)',
    GFX_COLOR_35: 'rgba(20,18,16,0.25)',
    GFX_COLOR_08: 'rgba(20,18,16,0.06)',
    GFX_LINE_20: 'rgba(20,18,16,0.18)',
    GFX_LINE_14: 'rgba(20,18,16,0.12)',
    GFX_LINE_18: 'rgba(20,18,16,0.16)',
    GFX_LINE_12: 'rgba(20,18,16,0.10)',
    GFX_LINE_10: 'rgba(20,18,16,0.08)',
    GFX_LINE_08: 'rgba(20,18,16,0.06)',
    GFX_BORDER_15: 'rgba(20,18,16,0.15)',
    GFX_BORDER_12: 'rgba(20,18,16,0.10)',
    GFX_BORDER_10: 'rgba(20,18,16,0.08)',
    GFX_BORDER_08: 'rgba(20,18,16,0.06)',
    GFX_DOT_COLOR: 'rgba(20,18,16,0.15)',
    BURGER_FILL: '#141210',
  }
};

// ─── Fill template ─────────────────────────────────────────

function fillVitrine(config) {
  let html = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const format = config.format || 'story';
  const fond = config.fond || 'charbon';
  const layout = LAYOUT[format] || LAYOUT.story;
  const colors = FOND[fond] || FOND.charbon;

  // Find logo
  const logoSrc = LOGO_PATHS.find(p => fs.existsSync(p)) || '';

  // Build replacements
  const replacements = {
    ...layout,
    ...colors,
    LABEL: config.label || 'BEST-SELLER',
    LABEL_DISPLAY: config.label ? 'inline-block' : 'none',
    PRODUCT_LINE1: config.product_line1 || 'STRICT',
    PRODUCT_LINE2: config.product_line2 || 'BOEUF',
    PHOTO_SRC: config.photo_src ? `file://${path.resolve(config.photo_src).replace(/ /g, '%20')}` : '',
    STAT_VALUE: config.stat_value || '53G',
    STAT_LABEL: config.stat_label || 'Protéines',
    STATS2_DISPLAY: config.secondary_stats && config.secondary_stats.length ? 'flex' : 'none',
    SECONDARY_STATS: buildSecondaryStats(config.secondary_stats || []),
    HOOK_HTML: config.hook_html || '',
    HOOK_DISPLAY: config.hook_html ? 'block' : 'none',
    LOGO_SRC: logoSrc ? `file://${logoSrc}` : '',
  };

  // Replace all {{PLACEHOLDERS}}
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), String(value));
  }

  return html;
}

function buildSecondaryStats(stats) {
  return stats.map(s => {
    if (s.value) {
      return `<div class="stat-line"><strong>${s.value}</strong> ${s.text || ''}</div>`;
    }
    return `<div class="stat-line">${s.text || ''}</div>`;
  }).join('\n    ');
}

// ─── CLI ────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  let configPath = null;
  let outputPath = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--config') configPath = args[++i];
    if (args[i] === '--output') outputPath = args[++i];
  }

  if (!configPath || !outputPath) {
    console.error('Usage: node vitrine-fill.js --config data.json --output filled.html');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(path.resolve(configPath), 'utf-8'));
  const html = fillVitrine(config);

  fs.writeFileSync(path.resolve(outputPath), html, 'utf-8');
  console.log(`Filled: ${outputPath} (${config.format || 'story'}, fond ${config.fond || 'charbon'})`);
}

if (require.main === module) main();
module.exports = { fillVitrine };
