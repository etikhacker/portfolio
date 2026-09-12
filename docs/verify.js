const fs = require('fs');
const html = fs.readFileSync('D:/portfolio/projects.html', 'utf8');
const articles = (html.match(/<article class="proj"/g) || []).length;
console.log('Project cards:', articles);

const re = /<h3 id="proj-([^"]+)-heading">([^<]+)<\/h3>/g;
let m;
while ((m = re.exec(html)) !== null) {
    console.log('  -', m[1].padEnd(12), '→', m[2]);
}

// Check status badges
const liveCount = (html.match(/status-badge live/g) || []).length;
const shipCount = (html.match(/status-badge live[^>]*>\s*<span[^>]*><\/span>SHIP/g) || []).length;
console.log('LIVE badges:', liveCount);
console.log('SHIP badges:', shipCount);
