#!/usr/bin/env node

/**
 * fill.js — Universal expression filler
 *
 * Fills any expression template (brut, statement, scene, impact, matiere, ephemere)
 * with data from a JSON config. Vitrine has its own fill script (vitrine-fill.js).
 *
 * Usage:
 *   node fill.js --expression brut --config data.json --output filled.html
 */

const fs = require('fs');
const path = require('path');

const EXPRESSIONS_DIR = __dirname;
const LOGO_PATHS = [
  path.join(__dirname, '..', '..', 'posts-stories', 'stories', '_templates', '_base', 'logo.svg'),
  path.join(__dirname, '..', '..', '..', 'public', 'logo', '2025-09-14_15-27-20_UTC.svg'),
];

// ─── Format dimensions ─────────────────────────────────────

const FORMATS = {
  story: { WIDTH: 1080, HEIGHT: 1920 },
  post:  { WIDTH: 1080, HEIGHT: 1350 },
};

// ─── Expression-specific defaults ──────────────────────────

const DEFAULTS = {
  brut: {
    story: {
      LOGO_BOTTOM: 85,
      TEXT_BOTTOM: 140,
      OBJECT_POSITION: 'center center',
    },
    post: {
      LOGO_BOTTOM: 65,
      TEXT_BOTTOM: 115,
      OBJECT_POSITION: 'center center',
    }
  },
  statement: {
    story: {
      BG_COLOR: '#000000',
      STATEMENT_SIZE: 200,
      SUB_SIZE: 34,
      BOTTOM_Y: 80,
      TAGLINE_SIZE: 34,
      TAPE_DISPLAY: 'none',
      BOTTOM_DISPLAY: 'block',
    },
    post: {
      BG_COLOR: '#000000',
      STATEMENT_SIZE: 160,
      SUB_SIZE: 30,
      BOTTOM_Y: 70,
      TAGLINE_SIZE: 28,
      TAPE_DISPLAY: 'flex',
      BOTTOM_DISPLAY: 'none',
    }
  },
  scene: {
    story: {
      LOGO_BOTTOM: 85,
      TEXT_BOTTOM: 145,
      OBJECT_POSITION: 'center center',
      GRADIENT_HEIGHT: 350,
    },
    post: {
      LOGO_BOTTOM: 60,
      TEXT_BOTTOM: 110,
      OBJECT_POSITION: 'center center',
      GRADIENT_HEIGHT: 280,
    }
  },
  matiere: {
    story: {
      LOGO_BOTTOM: 85,
      OBJECT_POSITION: 'center center',
    },
    post: {
      LOGO_BOTTOM: 60,
      OBJECT_POSITION: 'center center',
    }
  },
  ephemere: {
    story: {
      LOGO_BOTTOM: 85,
      TEXT_Y: 960,
      TEXT_SIZE: 42,
      OBJECT_POSITION: 'center center',
      BG_BLUR: 12,
      BG_OPACITY: 0.40,
    }
  },
  impact: {
    story: {
      BG_COLOR: '#000000',
      HEADLINE_SIZE: 140,
      HEADLINE_TOP: 750,
      TAPE_DISPLAY: 'none',
      BOTTOM_DISPLAY: 'block',
      BOTTOM_Y: 80,
      TAGLINE_SIZE: 34,
    },
    post: {
      BG_COLOR: '#000000',
      HEADLINE_SIZE: 110,
      HEADLINE_TOP: 550,
      TAPE_DISPLAY: 'flex',
      BOTTOM_DISPLAY: 'none',
      BOTTOM_Y: 65,
      TAGLINE_SIZE: 28,
    }
  },
};

// ─── Fill function ─────────────────────────────────────────

function fill(expression, config) {
  const templatePath = path.join(EXPRESSIONS_DIR, `${expression}.html`);
  if (!fs.existsSync(templatePath)) {
    console.error(`Template not found: ${templatePath}`);
    process.exit(1);
  }

  let html = fs.readFileSync(templatePath, 'utf-8');
  const format = config.format || 'story';
  const dims = FORMATS[format] || FORMATS.story;
  const defaults = (DEFAULTS[expression] && DEFAULTS[expression][format]) || {};
  const logoSrc = LOGO_PATHS.find(p => fs.existsSync(p)) || '';

  // Build all replacements
  const replacements = {
    ...dims,
    ...defaults,
    ...config,
    LOGO_SRC: logoSrc ? `file://${logoSrc}` : '',
    PHOTO_SRC: config.photo_src ? `file://${path.resolve(config.photo_src).replace(/ /g, '%20')}` : '',
    TEXT_DISPLAY: config.text_line ? 'block' : 'none',
    TEXT_LINE: config.text_line || '',
    STATEMENT: config.statement || '',
    SUB_TEXT: config.sub_text || '',
  };

  // Replace all {{PLACEHOLDERS}}
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(`\\{\\{${key.toUpperCase()}\\}\\}`, 'g');
    html = html.replace(regex, String(value));
  }

  // Also replace lowercase versions
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    html = html.replace(regex, String(value));
  }

  return html;
}

// ─── CLI ────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  let expression = null, configPath = null, outputPath = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--expression') expression = args[++i];
    if (args[i] === '--config') configPath = args[++i];
    if (args[i] === '--output') outputPath = args[++i];
  }

  if (!expression || !configPath || !outputPath) {
    console.error('Usage: node fill.js --expression brut --config data.json --output filled.html');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(path.resolve(configPath), 'utf-8'));
  const html = fill(expression, config);
  fs.writeFileSync(path.resolve(outputPath), html, 'utf-8');
  console.log(`Filled: ${outputPath} (${expression}, ${config.format || 'story'})`);
}

if (require.main === module) main();
module.exports = { fill };
