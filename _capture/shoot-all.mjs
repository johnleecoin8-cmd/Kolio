import { chromium } from 'playwright';
import fs from 'fs';
const routes = JSON.parse(fs.readFileSync(new URL('../src/routes.ts', import.meta.url).pathname
  .replace('shoot-all.mjs','') , 'utf8').match(/\[[\s\S]*\]/)[0]
  .replace(/as const;?/, ''));
const browser = await chromium.launch();
fs.mkdirSync('_capture/local', { recursive: true });
for (const { slug, path } of routes) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://localhost:8120' + path, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
  await p.evaluate(async () => { await new Promise(r=>{let t=0;const i=setInterval(()=>{window.scrollBy(0,600);t+=600;if(t>=document.body.scrollHeight+1500){clearInterval(i);r();}},70);}); window.scrollTo(0,0); });
  await p.waitForTimeout(700);
  await p.screenshot({ path: `_capture/local/${slug}.png`, fullPage: true });
  console.log((errs.length?'ERR ':'OK  ')+slug+(errs.length?'  '+errs[0].slice(0,80):''));
  await ctx.close();
}
await browser.close();
console.log('DONE');
