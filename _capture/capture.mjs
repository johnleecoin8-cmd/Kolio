import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targets = JSON.parse(fs.readFileSync(path.join(__dirname, 'targets.json'), 'utf8'));

const only = process.argv.slice(2); // optional slug filter
const list = only.length ? targets.filter(t => only.includes(t.slug)) : targets;

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0; const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step); total += step;
        if (total >= document.body.scrollHeight + 2000) { clearInterval(timer); resolve(); }
      }, 100);
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
}

const browser = await chromium.launch();
for (const t of list) {
  const dir = path.join(__dirname, 'pages', t.slug);
  fs.mkdirSync(dir, { recursive: true });
  try {
    // Desktop
    const ctxD = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const pD = await ctxD.newPage();
    await pD.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await autoScroll(pD);
    await pD.screenshot({ path: path.join(dir, 'desktop.png'), fullPage: true });
    const html = await pD.content();
    fs.writeFileSync(path.join(dir, 'rendered.html'), html);
    await ctxD.close();

    // Mobile
    const ctxM = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    const pM = await ctxM.newPage();
    await pM.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await autoScroll(pM);
    await pM.screenshot({ path: path.join(dir, 'mobile.png'), fullPage: true });
    await ctxM.close();

    const kb = (fs.statSync(path.join(dir, 'desktop.png')).size / 1024).toFixed(0);
    console.log(`OK  ${t.slug}  (desktop ${kb}KB, html ${(html.length/1024).toFixed(0)}KB)`);
  } catch (e) {
    console.log(`ERR ${t.slug}: ${e.message}`);
  }
}
await browser.close();
console.log('DONE');
