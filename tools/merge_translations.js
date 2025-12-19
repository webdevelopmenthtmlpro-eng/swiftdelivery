const fs = require('fs');
const path = require('path');

const SCRIPT = path.resolve(__dirname, '..', 'my-frontend', 'script.js');
const SRC = path.resolve(__dirname, '..', 'my-frontend', 'translations_30_languages.js');

let script = fs.readFileSync(SCRIPT, 'utf8');
const src = fs.readFileSync(SRC, 'utf8');

// find remaining languages array in script.js
const remRegex = /const REMAINING_LANGUAGES\s*=\s*\[([\s\S]*?)\];/m;
const remMatch = script.match(remRegex);
if (!remMatch) {
  console.error('REMAINING_LANGUAGES not found in script.js'); process.exit(1);
}
const langs = remMatch[1].split(',').map(s => s.replace(/["'\s]/g,'')).filter(Boolean);
console.log('REMAINING_LANGUAGES:', langs.join(', '));

const missing = [];
const blocksToAppend = [];

for (const lang of langs) {
  const existsRegex = new RegExp(`window\.translations\\.${lang}\\b`);
  if (existsRegex.test(script)) {
    console.log(lang, 'already present in script.js');
    continue;
  }

  // find block in translations_30_languages.js
  const blockRegex = new RegExp(`window\\.translations\\.${lang}\\s*=\\s*window\\.translations\\.${lang}\\s*\\|\\|\\s*\\{\\s*\\};[\\s\\S]*?Object\\.assign\\(window\\.translations\\.${lang},\\s*\\{[\\s\\S]*?\\}\\);`, 'm');
  const m = src.match(blockRegex);
  if (m) {
    console.log('Found block for', lang);
    blocksToAppend.push('\n// Copied ' + lang + ' translations from translations_30_languages.js\n' + m[0] + '\n');
  } else {
    console.warn('No block found for', lang, 'in translations_30_languages.js');
    missing.push(lang);
  }
}

if (blocksToAppend.length === 0) {
  console.log('No blocks to append. Exiting.'); process.exit(0);
}

// locate the end of the REMAINING_LANGUAGES.forEach loop to append after
const loopRegex = /REMAINING_LANGUAGES\.forEach\(lang => \{[\s\S]*?\}\);/m;
const loopMatch = script.match(loopRegex);
if (!loopMatch) {
  console.error('Could not locate REMAINING_LANGUAGES loop in script.js'); process.exit(1);
}
const insertPos = script.indexOf(loopMatch[0]) + loopMatch[0].length;

const newScript = script.slice(0, insertPos) + '\n\n' + blocksToAppend.join('\n') + script.slice(insertPos);
fs.writeFileSync(SCRIPT + '.bak', script, 'utf8');
fs.writeFileSync(SCRIPT, newScript, 'utf8');
console.log('Appended', blocksToAppend.length, 'language blocks to script.js. Backup at script.js.bak');
if (missing.length) console.warn('Languages not found in source:', missing.join(', '));
