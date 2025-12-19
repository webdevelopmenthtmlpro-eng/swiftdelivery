import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import vm from 'vm';

const keysToCheck = ['home','welcome','trackTitle','trackButton','loginButton','footerNote'];

function loadTranslations(files) {
  const sandbox = { window: { translations: {} }, Object, console };
  vm.createContext(sandbox);
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    try {
      vm.runInContext(content, sandbox, { timeout: 1000 });
    } catch (e) {
      // ignore errors from unrelated code
      console.warn('Warning running', f, e.message);
      // attempt to extract only window.translations blocks
      const matches = content.match(/window\.translations\.[a-z]{2,3}[\s\S]*?\}\)\);/gi);
      if (matches) {
        matches.forEach(m => {
          try { vm.runInContext(m, sandbox, { timeout: 1000 }); } catch (ee) {}
        });
      }
    }
  }
  return sandbox.window.translations;
}

const files = [path.resolve('my-frontend','translations_30_languages.js'), path.resolve('my-frontend','script.js')];
const translations = loadTranslations(files);

const dom = new JSDOM(`<!doctype html><html><body></body></html>`);
const { document } = dom.window;

// create elements
keysToCheck.forEach(k => {
  const d = document.createElement('div'); d.id = `el-${k}`; d.setAttribute('data-i18n', k); document.body.appendChild(d);
  const inp = document.createElement('input'); inp.id = `ph-${k}`; inp.setAttribute('data-i18n', k); document.body.appendChild(inp);
});

function applyTranslationsToDOM(lang) {
  const t = translations[lang];
  if (!t) return false;
  keysToCheck.forEach(k => {
    const el = document.querySelector(`#el-${k}`);
    const inp = document.querySelector(`#ph-${k}`);
    const val = t[k] || '';
    if (el) el.textContent = val;
    if (inp) inp.placeholder = val;
  });
  return true;
}

const sampleLangs = ['bn','sw','ur','fil','pa','ms','fi','da','no','he','fa','am','mr','ta','kn','te','or','gu','my'];
let overall = true;
for (const l of sampleLangs) {
  const ok = applyTranslationsToDOM(l);
  console.log('\n---', l, '--- exists:', !!translations[l]);
  keysToCheck.forEach(k => {
    const el = document.getElementById(`el-${k}`);
    console.log(k + ':', el.textContent || '[empty]');
    if (!el.textContent || el.textContent.trim() === '') overall = false;
  });
}

console.log('\nSmoke test result:', overall ? 'PASS' : 'FAIL');
process.exit(overall ? 0 : 2);
