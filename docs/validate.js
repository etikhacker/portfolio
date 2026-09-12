const fs = require('fs');
const html = fs.readFileSync('D:/portfolio/projects.html', 'utf8');
const js = fs.readFileSync('D:/portfolio/script.js', 'utf8');

const newProjects = ['techses', 'unpack', 'atlas', 'weather'];
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
    // JS check - AZ
    const azBlock = js.match(/az:\s*\{[\s\S]*?\n\s*\},/);
    if (!azBlock) { console.log('AZ block not found'); continue; }
    const keys = ['proj.' + p + '.desc.html', 'proj.tags.aria.' + p];
    for (const k of keys) {
        if (!azBlock[0].includes('"' + k + '":')) {
            jsOk = false;
            console.log('Missing AZ key', k);
        }
    }
    if (!azBlock[0].includes('"link.github.aria.' + p + '":')) {
        jsOk = false;
        console.log('Missing AZ aria key link.github.aria.' + p);
    }
    if (p === 'techses') {
        if (!azBlock[0].includes('"link.live.aria.' + p + '":')) {
            jsOk = false;
            console.log('Missing AZ aria key link.live.aria.' + p);
        }
    }
    // JS check - EN
    const enBlock = js.match(/en:\s*\{[\s\S]*?\n\s*\}\n\};/);
    if (!enBlock) { console.log('EN block not found'); continue; }
    for (const k of keys) {
        if (!enBlock[0].includes('"' + k + '":')) {
            jsOk = false;
            console.log('Missing EN key', k);
        }
    }
    if (!enBlock[0].includes('"link.github.aria.' + p + '":')) {
        jsOk = false;
        console.log('Missing EN aria key link.github.aria.' + p);
    }
    if (p === 'techses') {
        if (!enBlock[0].includes('"link.live.aria.' + p + '":')) {
            jsOk = false;
            console.log('Missing EN aria key link.live.aria.' + p);
        }
    }
}

console.log('HTML OK:', htmlOk);
console.log('JS OK:', jsOk);
console.log('Total <article class="proj"> in HTML:', (html.match(/<article class="proj"/g) || []).length);
console.log('Tagline (AZ) updated:', html.includes('Doqquz production layihə'));
console.log('Tagline (EN) updated:', js.includes('Nine production projects'));
console.log('Meta description updated:', html.includes('TechSəs Voice Agent'));
