/*
Headless translation smoke test using jsdom.
Run: node tools/test_translations.js
This script will: install jsdom if missing, load script.js, create minimal DOM elements with data-i18n keys, dispatch DOMContentLoaded, call changeLanguage for sample languages, and report mismatches.
*/

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function ensureJsdom() {
  try {
    require.resolve('jsdom');
  } catch (e) {
    console.log('jsdom not found — installing...');
    execSync('npm install jsdom@22.1.0', { stdio: 'inherit' });
  }
}

ensureJsdom();
const { JSDOM } = await import('jsdom');

const SCRIPT_PATH = path.resolve('my-frontend', 'script.js');
const scriptContent = fs.readFileSync(SCRIPT_PATH, 'utf8');

// Minimal HTML with elements for a selection of keys
const keysToCheck = ['home','welcome','trackTitle','trackButton','loginButton','footerNote'];
let html = `<!doctype html><html><head></head><body>`;
keysToCheck.forEach(k => {
  html += `<div id="el-${k}" data-i18n="${k}"></div>`;
  html += `<input id="ph-${k}" data-i18n="${k}" />`;
});
html += `<select id="languageSelect"></select><select id="sidebarLanguageSelect"></select>`;
html += `</body></html>`;

const dom = new JSDOM(html, { runScripts: 'outside-only', resources: 'usable' });
const { window } = dom;
window.localStorage = (function(){
  const store = {}; return {
    getItem(k){return store[k]||null}, setItem(k,v){store[k]=String(v)}
  };
})();
// expose on global to satisfy code that references localStorage without window.
global.localStorage = window.localStorage;
// define recognition to avoid ReferenceError when scripts check it
global.recognition = null;
window.matchMedia = () => ({ matches: false, addListener(){}, removeListener(){} });
window.speechSynthesis = undefined; // silence speech

// Expose basic $ and $$ used by script
window.$ = (sel)=>window.document.querySelector(sel);
window.$$ = (sel)=>Array.from(window.document.querySelectorAll(sel));

// Evaluate the script inside the jsdom window
const vm = await import('vm');
const scriptWrapped = `(function(){\n${scriptContent}\n})();`;
try {
  dom.runVMScript = (code) => {
    const script = new vm.SourceTextModule(code, { context: window });
    return script;
  };
} catch (e) {}

// Simpler: run in window.eval
window.eval(scriptContent);

// Dispatch DOMContentLoaded
const ev = new window.Event('DOMContentLoaded');
window.document.dispatchEvent(ev);

// Helper to call changeLanguage
async function testLang(lang) {
  console.log('\n--- Testing', lang, '---');
  if (typeof window.changeLanguage !== 'function') {
    console.error('changeLanguage not defined'); return false;
  }
  await window.changeLanguage(lang);
  // small delay if needed
  await new Promise(r=>setTimeout(r, 100));

  let ok = true;
  keysToCheck.forEach(k => {
    const el = window.document.querySelector(`#el-${k}`);
    const text = el ? el.textContent.trim() : '(missing element)';
    console.log(k + ':', text || '[empty]');
    if (!text || text === '' ) ok = false;
  });
  return ok;
}

const sampleLangs = ['bn','sw','ur','fil','pa','ms','fi','da','no','he','fa','am','mr','ta','kn','te','or','gu','my'];
let overall = true;
for (const l of sampleLangs) {
  const res = await testLang(l);
  overall = overall && res;
}

console.log('\nSmoke test result:', overall ? 'PASS' : 'FAIL');
process.exit(overall ? 0 : 2);
