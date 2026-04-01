#!/usr/bin/env node

/**
 * responsive-audit.js — Captures full-page + per-section screenshots at 4 breakpoints.
 *
 * Usage:
 *   npm run audit:responsive                             # All pages, all viewports
 *   npm run audit:responsive -- --viewports mobile       # Single viewport
 *   npm run audit:responsive -- --pages /                # Homepage only
 *   npm run audit:responsive -- --port 3001              # Custom dev server port
 *
 * Note: Full-page screenshots may show position:fixed elements (header) repeated
 * at each viewport position — this is a Puppeteer artifact, not a real bug.
 * Sticky elements in 200vh wrappers also appear duplicated. Per-section screenshots
 * are more reliable for visual auditing.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// ─── Config ────────────────────────────────────────────────────────────────────

const VIEWPORTS = {
  mobile:  { width: 375,  height: 812,  deviceScaleFactor: 2 },
  tablet:  { width: 768,  height: 1024, deviceScaleFactor: 2 },
  desktop: { width: 1024, height: 768,  deviceScaleFactor: 1 },
  wide:    { width: 1440, height: 900,  deviceScaleFactor: 1 },
};

const PAGES = {
  homepage:  '/',
  'la-carte': '/la-carte',
};

const SECTIONS = {
  homepage: [
    { name: 'header',      selector: 'header[role="banner"]' },
    { name: 'hero',         selector: '#main-content > section:first-of-type, #main-content > div:first-child > section:first-of-type' },
    { name: 'promesse',     selector: '#promesse' },
    { name: 'artisans',     selector: '#artisans' },
    { name: 'experience',   selector: '#experience' },
    { name: 'avis',         selector: '#avis' },
    { name: 'footer',       selector: 'footer[role="contentinfo"]' },
  ],
  'la-carte': [
    { name: 'header',  selector: 'header[role="banner"]' },
    { name: 'menu',    selector: '#main-content > div:first-child, #main-content > section:first-of-type' },
    { name: 'footer',  selector: 'footer[role="contentinfo"]' },
  ],
};

// Mobile-only captures (only at mobile + tablet viewports)
// FAB must be captured BEFORE mobile-menu (menu hides the FAB)
const MOBILE_ONLY = [
  { name: 'mobile-fab',  type: 'element', selector: 'a[aria-label="Appeler StrictFood"]' },
  { name: 'mobile-menu', type: 'interaction' },
];

// ─── CLI parsing ───────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { viewports: null, pages: null, port: 3000 };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--viewports':
        opts.viewports = args[++i].split(',');
        break;
      case '--pages':
        opts.pages = args[++i].split(',');
        break;
      case '--port':
        opts.port = parseInt(args[++i], 10);
        break;
    }
  }

  return opts;
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function timestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}h${pad(d.getMinutes())}`;
}

async function waitForReady(page) {
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
}

/**
 * Dismiss Next.js dev error overlay if present.
 * Returns true if an error overlay was found and dismissed.
 */
async function dismissErrorOverlay(page) {
  const dismissed = await page.evaluate(() => {
    // Next.js dev overlay is in a shadow DOM via nextjs-portal
    const portal = document.querySelector('nextjs-portal');
    if (portal && portal.shadowRoot) {
      const closeBtn = portal.shadowRoot.querySelector('button[aria-label="Close"]')
        || portal.shadowRoot.querySelector('[data-nextjs-errors-dialog-left-right-close-button]');
      if (closeBtn) {
        closeBtn.click();
        return true;
      }
      // Try removing the overlay entirely
      portal.remove();
      return true;
    }
    return false;
  });
  if (dismissed) {
    await new Promise((r) => setTimeout(r, 300));
  }
  return dismissed;
}

/**
 * Check if the page has rendered actual content (not just an error page).
 */
async function hasContent(page) {
  return page.evaluate(() => {
    const main = document.querySelector('#main-content') || document.querySelector('main');
    if (!main) return false;
    // Check if there are actual section/div children (not just error overlay text)
    return main.children.length > 0 && !document.title.includes('Error');
  });
}

async function captureSection(page, selector, outputPath) {
  // Support comma-separated selectors (try each)
  const selectors = selector.split(',').map((s) => s.trim());

  let el = null;
  for (const sel of selectors) {
    el = await page.$(sel);
    if (el) break;
  }

  if (!el) {
    console.warn(`  ⚠ Selector not found: ${selector}`);
    return false;
  }

  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
  }, selectors.find((s) => page.$(s)) || selectors[0]);

  await new Promise((r) => setTimeout(r, 300));

  try {
    await el.screenshot({ path: outputPath, type: 'png' });
    return true;
  } catch (err) {
    console.warn(`  ⚠ Screenshot failed for ${selector}: ${err.message}`);
    return false;
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  const opts = parseArgs();
  const baseUrl = `http://localhost:${opts.port}`;

  const viewportKeys = opts.viewports || Object.keys(VIEWPORTS);
  const pageKeys = opts.pages
    ? opts.pages.map((p) => Object.entries(PAGES).find(([, url]) => url === p)?.[0] || p)
    : Object.keys(PAGES);

  // Validate viewport keys
  for (const vk of viewportKeys) {
    if (!VIEWPORTS[vk]) {
      console.error(`Unknown viewport: ${vk}. Valid: ${Object.keys(VIEWPORTS).join(', ')}`);
      process.exit(1);
    }
  }

  const ts = timestamp();
  const outRoot = path.resolve(__dirname, '..', '_responsive-audit');
  const runDir = path.join(outRoot, ts);
  ensureDir(runDir);

  // Symlink latest
  const latestLink = path.join(outRoot, 'latest');
  if (fs.existsSync(latestLink)) fs.unlinkSync(latestLink);
  fs.symlinkSync(ts, latestLink);

  const summary = { timestamp: ts, viewports: viewportKeys, pages: [], sections: [], errors: [] };

  console.log(`\n📸 Responsive Audit — ${ts}`);
  console.log(`   Viewports: ${viewportKeys.join(', ')}`);
  console.log(`   Pages: ${pageKeys.join(', ')}\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const pageKey of pageKeys) {
      const pageUrl = PAGES[pageKey];
      if (!pageUrl) {
        console.warn(`Unknown page: ${pageKey}`);
        continue;
      }

      const fullDir = path.join(runDir, pageKey, 'full');
      const sectionsDir = path.join(runDir, pageKey, 'sections');
      ensureDir(fullDir);
      ensureDir(sectionsDir);

      for (const vpName of viewportKeys) {
        const vp = VIEWPORTS[vpName];
        const page = await browser.newPage();

        await page.setViewport(vp);

        console.log(`  ${pageKey} @ ${vpName} (${vp.width}px)`);

        await page.goto(`${baseUrl}${pageUrl}`, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });
        await waitForReady(page);

        // Dismiss Next.js dev error overlay if present
        const hadError = await dismissErrorOverlay(page);
        if (hadError) {
          console.warn(`    ⚠ Dev error overlay dismissed`);
          summary.errors.push({ page: pageKey, viewport: vpName, type: 'hydration-error-overlay' });
          await new Promise((r) => setTimeout(r, 500));
        }

        // Disable animations AFTER hydration (prefers-reduced-motion breaks motion/react SSR)
        await page.evaluate(() => {
          const style = document.createElement('style');
          style.textContent = '*, *::before, *::after { animation-duration: 0s !important; animation-delay: 0s !important; transition-duration: 0s !important; transition-delay: 0s !important; }';
          document.head.appendChild(style);
        });
        await new Promise((r) => setTimeout(r, 300));

        // Check if page has real content
        const rendered = await hasContent(page);
        if (!rendered) {
          console.warn(`    ⚠ Page did not render content — skipping sections`);
          summary.errors.push({ page: pageKey, viewport: vpName, type: 'no-content' });
          // Still take the full-page screenshot to document the error
          const fullPath = path.join(fullDir, `${vpName}-${vp.width}.png`);
          await page.screenshot({ path: fullPath, type: 'png', fullPage: true });
          summary.pages.push({ page: pageKey, viewport: vpName, file: fullPath, error: true });
          console.log(`    ✓ full-page (error state)`);
          await page.close();
          continue;
        }

        // Full-page screenshot
        const fullPath = path.join(fullDir, `${vpName}-${vp.width}.png`);
        await page.screenshot({ path: fullPath, type: 'png', fullPage: true });
        summary.pages.push({ page: pageKey, viewport: vpName, file: fullPath });
        console.log(`    ✓ full-page`);

        // Per-section screenshots
        const pageSections = SECTIONS[pageKey] || [];
        for (const sec of pageSections) {
          const secPath = path.join(sectionsDir, `${sec.name}-${vpName}-${vp.width}.png`);
          const ok = await captureSection(page, sec.selector, secPath);
          if (ok) {
            summary.sections.push({ page: pageKey, section: sec.name, viewport: vpName, file: secPath });
            console.log(`    ✓ ${sec.name}`);
          }
        }

        // Mobile-only captures (mobile + tablet viewports)
        if (vpName === 'mobile' || vpName === 'tablet') {
          for (const mo of MOBILE_ONLY) {
            try {
              if (mo.type === 'interaction' && mo.name === 'mobile-menu') {
                // Click hamburger → capture dialog → close
                const hamburger = await page.$('button[aria-label="Ouvrir le menu"]');
                if (hamburger) {
                  await hamburger.click();
                  await new Promise((r) => setTimeout(r, 500));

                  const dialog = await page.$('div[role="dialog"]');
                  if (dialog) {
                    const menuPath = path.join(sectionsDir, `mobile-menu-${vpName}-${vp.width}.png`);
                    await dialog.screenshot({ path: menuPath, type: 'png' });
                    summary.sections.push({ page: pageKey, section: 'mobile-menu', viewport: vpName, file: menuPath });
                    console.log(`    ✓ mobile-menu`);
                  }

                  // Close menu
                  const closeBtn = await page.$('button[aria-label="Fermer le menu"]');
                  if (closeBtn) await closeBtn.click();
                  await new Promise((r) => setTimeout(r, 300));
                }
              } else if (mo.type === 'element') {
                const elPath = path.join(sectionsDir, `${mo.name}-${vpName}-${vp.width}.png`);
                const ok = await captureSection(page, mo.selector, elPath);
                if (ok) {
                  summary.sections.push({ page: pageKey, section: mo.name, viewport: vpName, file: elPath });
                  console.log(`    ✓ ${mo.name}`);
                }
              }
            } catch (err) {
              console.warn(`    ⚠ ${mo.name} capture failed: ${err.message}`);
            }
          }
        }

        await page.close();
      }
    }

    // Write summary
    const summaryPath = path.join(runDir, 'summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

    const errorCount = summary.errors.length;
    console.log(`\n✅ Audit complete → ${runDir}`);
    console.log(`   ${summary.pages.length} full-page + ${summary.sections.length} section captures`);
    if (errorCount > 0) console.log(`   ⚠ ${errorCount} page(s) had rendering errors`);
    console.log(`   Summary: ${summaryPath}\n`);

  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error('Audit error:', err);
  process.exit(1);
});
