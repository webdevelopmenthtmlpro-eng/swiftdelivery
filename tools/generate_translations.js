const fs = require('fs');
const path = require('path');

const SCRIPT_PATH = path.resolve(__dirname, '..', 'my-frontend', 'script.js');
const BACKEND = 'http://localhost:5000/api/translation';

function findCommonKeys(content) {
  const idx = content.indexOf('const commonKeys');
  if (idx === -1) throw new Error('commonKeys not found');
  const start = content.indexOf('{', idx);
  let i = start;
  let depth = 0;
  for (; i < content.length; i++) {
    const ch = content[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  const objText = content.substring(start, i + 1);
  // Create a JS object via eval in a safe-ish sandbox
  const fn = new Function('return ' + objText + ';');
  return fn();
}

async function translateBatch(texts, lang) {
  try {
    const res = await fetch(`${BACKEND}/translate-batch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texts, targetLang: lang })
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error('Bad response: ' + res.status + ' ' + t);
    }
    const data = await res.json();
    return data.translations || [];
  } catch (e) {
    console.error('translateBatch error', e);
    throw e;
  }
}

function generateSnippet(lang, keys, translations) {
  const pairs = keys.map((k, i) => `  ${k}: ${JSON.stringify(translations[i] || keys._fallback[k] || '')}`).join(',\n');
  return `// Auto-generated translations for ${lang}\nwindow.translations.${lang} = window.translations.${lang} || {};\nObject.assign(window.translations.${lang}, Object.assign({}, commonKeys, {\n${pairs}\n}));\n\n`;
}

async function main() {
  console.log('Reading', SCRIPT_PATH);
  const content = fs.readFileSync(SCRIPT_PATH, 'utf8');
  const commonKeys = findCommonKeys(content);
  const keys = Object.keys(commonKeys);
  keys._fallback = commonKeys; // keep fallback reference

  const REMAINING_REGEX = /const REMAINING_LANGUAGES = \[([\s\S]*?)\];/m;
  const remMatch = content.match(REMAINING_REGEX);
  if (!remMatch) throw new Error('REMAINING_LANGUAGES not found');
  const langs = remMatch[1].split(',').map(s => s.replace(/['"\s]/g, '')).filter(Boolean);

  console.log('Languages to generate:', langs);

  const snippets = [];
  for (const lang of langs) {
    console.log('Translating for', lang);
    const translated = await translateBatch(keys.map(k => commonKeys[k]), lang);
    snippets.push(generateSnippet(lang, keys, translated));
  }

  // Replace the fallback loop block
  const fallbackBlockRegex = /\/\/ Initialize remaining languages with English fallback[\s\S]*?\}\);/m;
  if (!fallbackBlockRegex.test(content)) {
    console.warn('Could not find fallback block to replace. Appending snippets instead.');
    const newContent = content + '\n\n// Auto-generated language blocks\n' + snippets.join('\n');
    fs.writeFileSync(SCRIPT_PATH + '.bak', content, 'utf8');
    fs.writeFileSync(SCRIPT_PATH, newContent, 'utf8');
    console.log('Appended translations and saved backup to script.js.bak');
    return;
  }

  const newContent = content.replace(fallbackBlockRegex, snippets.join('\n'));
  fs.writeFileSync(SCRIPT_PATH + '.bak', content, 'utf8');
  fs.writeFileSync(SCRIPT_PATH, newContent, 'utf8');
  console.log('Wrote translations into script.js and created backup script.js.bak');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
