const fs = require('fs');
const path = require('path');

const mappings = [
  { src: '/root/nicorai-site/en/index.html', dest: '/root/nicorai-next/src/html/home.html' },
  { src: '/root/nicorai-site/en/about.html', dest: '/root/nicorai-next/src/html/about.html' },
  { src: '/root/nicorai-site/en/approach.html', dest: '/root/nicorai-next/src/html/approach.html' },
  { src: '/root/nicorai-site/en/expertises/services/artificial-intelligence.html', dest: '/root/nicorai-next/src/html/service-ai.html' },
  { src: '/root/nicorai-site/en/expertises/services/web-mobile-development.html', dest: '/root/nicorai-next/src/html/service-web.html' },
  { src: '/root/nicorai-site/en/expertises/services/data-engineering-bi.html', dest: '/root/nicorai-next/src/html/service-data.html' },
  { src: '/root/nicorai-site/en/expertises/services/cybersecurity.html', dest: '/root/nicorai-next/src/html/service-cyber.html' },
  { src: '/root/nicorai-site/en/solutions/ai-agent.html', dest: '/root/nicorai-next/src/html/solution-ai-agent.html' },
  { src: '/root/nicorai-site/en/solutions/chatbot.html', dest: '/root/nicorai-next/src/html/solution-chatbot.html' },
  { src: '/root/nicorai-site/en/solutions/predictive-maintenance.html', dest: '/root/nicorai-next/src/html/solution-predictive.html' },
  { src: '/root/nicorai-site/en/solutions/automated-quality-control.html', dest: '/root/nicorai-next/src/html/solution-quality.html' },
  { src: '/root/nicorai-site/en/solutions/production-planning.html', dest: '/root/nicorai-next/src/html/solution-production.html' },
  { src: '/root/nicorai-site/en/solutions/sales-and-demand-forecasting.html', dest: '/root/nicorai-next/src/html/solution-sales.html' },
];

for (const { src, dest } of mappings) {
  const html = fs.readFileSync(src, 'utf-8');

  // Match everything between <body ...> and </body>, using dotAll (s) flag
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match) {
    console.error(`ERROR: No <body> found in ${src}`);
    process.exit(1);
  }

  const bodyContent = match[1].trim();
  fs.writeFileSync(dest, bodyContent, 'utf-8');

  const sizeKB = (Buffer.byteLength(bodyContent, 'utf-8') / 1024).toFixed(1);
  console.log(`OK  ${path.basename(dest).padEnd(28)} ${sizeKB.padStart(7)} KB  <-- ${path.basename(src)}`);
}

console.log('\nDone. All body extractions complete.');
