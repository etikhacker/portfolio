const fs = require('fs');

const pages = ['index.html', 'projects.html', 'contact.html'];
const js = fs.readFileSync('D:/portfolio/script.js', 'utf8');
const css = fs.readFileSync('D:/portfolio/styles.css', 'utf8');

let allOk = true;

for (const page of pages) {
    const html = fs.readFileSync(`D:/portfolio/${page}`, 'utf8');
    console.log(`\n=== ${page} ===`);
    const checks = [
        ['Has site-footer', /<footer class="site-footer">/.test(html)],
        ['Has footer-head', /<div class="footer-head">/.test(html)],
        ['Has footer-tagline', /data-i18n-html="footer\.tagline\.html"/.test(html)],
        ['Has footer-grid (3 cols)', (html.match(/<div class="footer-col">|class="footer-col"/g) || []).length >= 3],
        ['Has 3 social links', (html.match(/class="social-link"/g) || []).length === 3],
        ['Has GitHub SVG', /M12 \.5C5\.37/.test(html)],
        ['Has LinkedIn SVG', /M20\.447 20\.452/.test(html)],
        ['Has Email SVG', /M20 4H4c-1\.1 0/.test(html)],
        ['Has copyright', /data-i18n-html="footer\.copyright"/.test(html)],
        ['No old footer.html ref', !html.includes('data-i18n-html="footer.html"')],
    ];
    for (const [name, ok] of checks) {
        if (!ok) allOk = false;
        console.log(`  ${ok ? '✓' : '✗'} ${name}`);
    }
}

console.log('\n=== script.js (AZ keys) ===');
const azMatch = js.match(/az:\s*\{[\s\S]*?(?=\n\s*en:)/);
const azBlock = azMatch ? azMatch[0] : '';
const azKeys = [
    'footer.tagline.html', 'footer.col.nav.aria', 'footer.col.nav',
    'footer.col.more.aria', 'footer.col.more', 'footer.col.social',
    'footer.links.github', 'footer.social.github.aria',
    'footer.social.linkedin.aria', 'footer.social.email.aria', 'footer.copyright',
];
for (const k of azKeys) {
    const ok = azBlock.includes(`"${k}":`);
    if (!ok) allOk = false;
    console.log(`  ${ok ? '✓' : '✗'} "${k}"`);
}
const ok = !azBlock.includes('"footer.html":');
if (!ok) allOk = false;
console.log(`  ${ok ? '✓' : '✗'} Old "footer.html" key removed`);

console.log('\n=== script.js (EN keys) ===');
const enMatch = js.match(/en:\s*\{[\s\S]*?\n\s*\}\n\s*\};/);
const enBlock = enMatch ? enMatch[0] : '';
for (const k of azKeys) {
    const o = enBlock.includes(`"${k}":`);
    if (!o) allOk = false;
    console.log(`  ${o ? '✓' : '✗'} "${k}"`);
}
const o = !enBlock.includes('"footer.html":');
if (!o) allOk = false;
console.log(`  ${o ? '✓' : '✗'} Old "footer.html" key removed`);

console.log('\n=== styles.css ===');
const cssChecks = [
    ['.site-footer rule', /\.site-footer\s*\{/.test(css)],
    ['.footer-head rule', /\.footer-head\s*\{/.test(css)],
    ['.footer-tagline rule', /\.footer-tagline\s*\{/.test(css)],
    ['.footer-grid (3 col)', /\.footer-grid\s*\{[\s\S]*?repeat\(3,/.test(css)],
    ['.social-link rule', /\.social-link\s*\{/.test(css)],
    ['.footer-bottom rule', /\.footer-bottom\s*\{/.test(css)],
    ['Mobile media query', /@media\s*\(max-width:\s*760px\)/.test(css)],
];
for (const [name, ok] of cssChecks) {
    if (!ok) allOk = false;
    console.log(`  ${ok ? '✓' : '✗'} ${name}`);
}

console.log('\n' + (allOk ? '✅ All checks passed' : '❌ Some checks failed'));
