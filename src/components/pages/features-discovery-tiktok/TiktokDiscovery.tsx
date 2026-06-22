import { BadgeCheck, Music2, Search, ShieldCheck, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating product mini-UIs for TikTok crypto-KOL discovery:
 *  a filter/search rail, a ranked discovery feed of @handles + Proof Scores,
 *  and a single creator's TikTok proof breakdown. Original Kolio surfaces. */
export default function TiktokDiscovery() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">TikTok discovery</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Find the crypto voices TikTok is{' '}
            <span className="text-gradient-brand">actually</span> watching
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            Search short-form crypto creators by niche, chain and audience. Every
            profile carries a Proof Score, so you skip the bought-view accounts.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
          {/* Search / filter rail */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-4">
            <span className="chip chip-brand">Filter</span>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
              <Search className="h-4 w-4 text-foreground/40" />
              <span className="text-body-sm text-foreground/50">solana memecoin explainers</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['TikTok', 'DeFi', 'Solana', '50k–500k', 'EN / KR'].map((t) => (
                <span key={t} className="chip chip-ink">{t}</span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {[
                ['Avg watch-through', '71%'],
                ['Holder overlap', '38%'],
                ['Bought views', '<5%'],
              ].map(([l, v]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                    <span>{l}</span>
                    <span className="font-mono-tnum">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-pill bg-gray-100">
                    <div className="h-full rounded-pill bg-brand" style={{ width: v as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ranked discovery feed */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Ranked feed</span>
              <Music2 className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['solana_shorts', 'Memecoins', '212k', 94],
                [' to_the_chain', 'L2 / Rollups', '88k', 90],
                ['defidegen.eth', 'Yield', '147k', 87],
                ['kr_cryptotok', 'Trading KR', '64k', 83],
              ].map(([h, niche, foll, score]) => (
                <div key={h as string} className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                    {(h as string).slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 truncate text-body-sm font-semibold text-foreground">
                      @{h}
                      <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-brand" />
                    </div>
                    <div className="text-eyebrow text-foreground/50">
                      {niche} · {foll} followers
                    </div>
                  </div>
                  <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">
                    {score as number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Single creator proof breakdown (dark focal) */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-4">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Proof Score</span>
              <ShieldCheck className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">SS</span>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-body-sm font-semibold">
                  @solana_shorts <BadgeCheck className="h-3.5 w-3.5 text-mint" />
                </div>
                <div className="text-eyebrow text-white/50">Memecoins · TikTok</div>
              </div>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="num-display text-[3rem] leading-none">94</span>
              <span className="mb-2 inline-flex items-center gap-1 text-eyebrow text-mint">
                <TrendingUp className="h-3.5 w-3.5" /> Elite
              </span>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              {[
                ['real audience', '96%'],
                ['engaged holders', '58%'],
                ['bought views', '4%'],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between text-white/70">
                  <span>{l}</span>
                  <span className="text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
