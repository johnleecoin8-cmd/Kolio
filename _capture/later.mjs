import { chromium } from 'playwright';
import fs from 'fs';
const targets = [
  ['home','https://later.com/'],
  ['influencer-marketing','https://later.com/influencer-marketing/'],
  ['pricing','https://later.com/pricing/'],
  ['social-listening','https://later.com/social-listening/'],
];
const browser = await chromium.launch();
for (const [slug,url] of targets){
  const dir = `_capture/later/${slug}`; fs.mkdirSync(dir,{recursive:true});
  try{
    const ctx = await browser.newContext({ viewport:{width:1440,height:900} });
    const p = await ctx.newPage();
    await p.goto(url,{waitUntil:'networkidle',timeout:60000}).catch(()=>{});
    await p.evaluate(async()=>{await new Promise(r=>{let t=0;const i=setInterval(()=>{window.scrollBy(0,600);t+=600;if(t>=document.body.scrollHeight+1500){clearInterval(i);r();}},70);});window.scrollTo(0,0);});
    await p.waitForTimeout(800);
    await p.screenshot({path:`${dir}/desktop.png`,fullPage:true});
    fs.writeFileSync(`${dir}/rendered.html`, await p.content());
    console.log('OK',slug);
    await ctx.close();
  }catch(e){console.log('ERR',slug,e.message);}
}
await browser.close(); console.log('DONE');
