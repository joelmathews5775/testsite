#!/usr/bin/env node
/**
 * DRAFTED UX — build script
 *
 * This site is plain static HTML/CSS/JS with no framework. This script
 * is the one build step: it copies everything into /dist and, while
 * copying HTML files, swaps two placeholder tokens for real values
 * pulled from environment variables (set in the Vercel dashboard, not
 * committed to git):
 *
 *   {{PATREON_URL}}    -> process.env.PATREON_URL
 *   {{CONTACT_EMAIL}}  -> process.env.CONTACT_EMAIL   (HTML-entity encoded)
 *
 * Because this runs at BUILD time, Vercel serves normal, real <a> tags
 * to every visitor and crawler — nothing about SEO, social previews,
 * or link functionality changes. Only the source in git stays free of
 * the real address and URL.
 *
 * Local development: copy .env.example to .env.local, fill in real
 * values, then run `vercel dev` (Vercel automatically loads
 * .env.local). Without either, this script falls back to obvious
 * placeholder values and prints a warning so a build never silently
 * ships a broken link.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = __dirname;
const OUT_DIR = path.join(__dirname, 'dist');

// Top-level files/folders to copy. Listed explicitly (rather than
// copying everything) so build artifacts, .git, node_modules, env
// files, etc. never end up in the deployed output.
const ENTRIES = [
  '404.html',
  'index.html',
  'supporters.html',
  'css',
  'js',
  'favicon-dark.png',
  'favicon-light.png',
  'robots.txt',
  'sitemap.xml'
];

const HTML_EXTENSIONS = new Set(['.html']);

function getConfig() {
  const patreonUrl = process.env.PATREON_URL;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!patreonUrl) {
    console.warn(
      '[build] PATREON_URL is not set — falling back to a placeholder. ' +
      'Set it in Vercel > Project > Settings > Environment Variables.'
    );
  }
  if (!contactEmail) {
    console.warn(
      '[build] CONTACT_EMAIL is not set — falling back to a placeholder. ' +
      'Set it in Vercel > Project > Settings > Environment Variables.'
    );
  }

  return {
    patreonUrl: patreonUrl || 'https://www.patreon.com/YOUR_PAGE',
    contactEmail: contactEmail || 'hello@example.com'
  };
}

// Light anti-scraping measure: HTML-entity-encode every character of
// the email address. Browsers render/parse entities exactly like the
// original characters, so the mailto: link works normally with zero
// JavaScript required — but the address no longer appears in the
// page's raw HTML as plain "name@domain.com" text, which is what most
// basic scrapers pattern-match on. This deters casual harvesting; it
// does not (and cannot) hide the address from someone deliberately
// reading the rendered page or resolving the entities by hand.
function obfuscateEmail(email) {
  return String(email)
    .split('')
    .map(function (ch) { return '&#' + ch.charCodeAt(0) + ';'; })
    .join('');
}

function injectConfig(html, config) {
  return html
    .split('{{PATREON_URL}}').join(config.patreonUrl)
    .split('{{CONTACT_EMAIL}}').join(obfuscateEmail(config.contactEmail));
}

function copyRecursive(srcPath, destPath, config) {
  const stat = fs.statSync(srcPath);

  if (stat.isDirectory()) {
    fs.mkdirSync(destPath, { recursive: true });
    fs.readdirSync(srcPath).forEach(function (child) {
      copyRecursive(path.join(srcPath, child), path.join(destPath, child), config);
    });
    return;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  const ext = path.extname(srcPath).toLowerCase();
  if (HTML_EXTENSIONS.has(ext)) {
    const html = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(destPath, injectConfig(html, config), 'utf8');
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
}

function build() {
  const config = getConfig();

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  ENTRIES.forEach(function (entry) {
    const src = path.join(SRC_DIR, entry);
    if (!fs.existsSync(src)) return;
    copyRecursive(src, path.join(OUT_DIR, entry), config);
  });

  console.log('[build] Done — output in ./dist');
}

build();
