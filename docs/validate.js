const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'projects.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

const newProjects = ['techses', 'unpack', 'atlas', 'weather'];

/**
 * Extract a top-level `translations` member block by brace matching.
 * Regex-based extraction truncates on the first nested `},` (a pageTitle
 * sub-object), which silently reports keys that do exist as missing.
 */
function extractBlock(source, name) {
  const start = source.search(new RegExp('(^|\\n)\\s*' + name + ':\\s*\\{', 'm'));
  if (start < 0) return null;
  const open = source.indexOf('{', start);
  let depth = 0;
  let inString = false;
  let quote = '';
  for (let i = open; i < source.length; i++) {
    const ch = source[i];
    if (inString) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inString = true; quote = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return source.slice(open, i + 1);
    }
  }
  return null;
}

const azBlock = extractBlock(js, 'az');
const enBlock = extractBlock(js, 'en');

if (!azBlock) { console.error('FATAL: AZ block not found in script.js'); process.exit(1); }
if (!enBlock) { console.error('FATAL: EN block not found in script.js'); process.exit(1); }

let htmlOk = true;
let jsOk = true;

for (const p of newProjects) {
  // HTML check
  const articleCount = (html.match(new RegExp('aria-labelledby="proj-' + p + '-heading"', 'g')) || []).length;
  const headingId = (html.match(new RegExp('id="proj-' + p + '-heading"', 'g')) || []).length;
  if (articleCount < 1 || headingId < 1) {
    htmlOk = false;
    console.log('Missing HTML section for', p, '(article=', articleCount, 'headingId=', headingId, ')');
  }

  const keys = ['proj.' + p + '.desc.html', 'proj.tags.aria.' + p];

  for (const [lang, block] of [['AZ', azBlock], ['EN', enBlock]]) {
    for (const k of keys) {
      if (!block.includes('"' + k + '":')) {
        jsOk = false;
        console.log('Missing ' + lang + ' key', k);
      }
    }
    if (!block.includes('"link.github.aria.' + p + '":')) {
      jsOk = false;
      console.log('Missing ' + lang + ' aria key link.github.aria.' + p);
    }
    if (p === 'techses' && !block.includes('"link.live.aria.' + p + '":')) {
      jsOk = false;
      console.log('Missing ' + lang + ' aria key link.live.aria.' + p);
    }
  }
}

console.log('HTML OK:', htmlOk);
console.log('JS OK:', jsOk);
console.log('Total <article class="proj"> in HTML:', (html.match(/<article class="proj"/g) || []).length);
console.log('Tagline (AZ) updated:', html.includes('Doqquz production layihə'));
console.log('Tagline (EN) updated:', js.includes('Nine production projects'));
console.log('Meta description updated:', html.includes('TechSəs Voice Agent'));

process.exit(htmlOk && jsOk ? 0 : 1);