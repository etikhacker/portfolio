const fs = require('fs');
const pages = ['index.html', 'projects.html', 'contact.html'];
let ok = true;
for (const p of pages) {
    const html = fs.readFileSync('D:/portfolio/' + p, 'utf8');
    const hasX = html.includes('x.com/Omarkmx');
    const hasIg = html.includes('instagram.com/babayev.__.023');
    const xSvg = html.includes('M18.244 2.25h3.308');
    const igSvg = html.includes('M12 2.163c3.204');
    const xI18n = html.includes('footer.social.x.aria');
    const igI18n = html.includes('footer.social.instagram.aria');
    const socialCount = (html.match(/class="social-link"/g) || []).length;
    if (!hasX || !hasIg || !xSvg || !igSvg || !xI18n || !igI18n || socialCount !== 5) {
        ok = false;
        console.log(p, 'FAIL hasX=' + hasX, 'hasIg=' + hasIg, 'xSvg=' + xSvg, 'igSvg=' + igSvg, 'xI18n=' + xI18n, 'igI18n=' + igI18n, 'count=' + socialCount);
    } else {
        console.log(p, 'OK (' + socialCount + ' social links)');
    }
}
const js = fs.readFileSync('D:/portfolio/script.js', 'utf8');
const azX = js.includes('"footer.social.x.aria": "X (Twitter) profilinə keç');
const enX = js.includes('"footer.social.x.aria": "Go to the X (Twitter)');
const azIg = js.includes('"footer.social.instagram.aria": "Instagram profilinə keç');
const enIg = js.includes('"footer.social.instagram.aria": "Go to the Instagram');
console.log('AZ X key:', azX, '| EN X key:', enX, '| AZ IG key:', azIg, '| EN IG key:', enIg);
console.log(ok ? 'ALL OK' : 'SOME FAILURES');
