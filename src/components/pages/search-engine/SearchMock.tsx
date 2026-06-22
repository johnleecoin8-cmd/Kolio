import { Search, BadgeCheck, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating search + results mini-UI: a product mock of the Kolio discovery
 *  engine — query bar, active filter chips, and ranked KOL result rows with
 *  @handles and Proof Scores. Calm-premium floating cards with depth. */

const RESULTS = [
  { h: 'CryptoWhale', niche: 'DeFi · Perps', followers: '412K', match: 98, score: 92, chain: 'Base' },
  { h: 'L2Maxi', niche: 'Layer-2 · Rollups', followers: '188K', match: 95, score: 88, chain: 'Arbitrum' },
  { h: 'OnchainAna', niche: 'Trading · TA', followers: '96K', match: 91, score: 85, chain: 'Solana' },
  { h: 'RestakeRei', niche: 'Restaking · LRTs', followers: '74K', match: 88, score: 81, chain: 'Ethereum' },
];

const FILTERS = ['DeFi', 'Real holders > 60%', 'EN audience', 'X + Telegram'];

export default function SearchMock() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="relative mx-auto max-w-4xl">
          {/* main search panel */}
          <div className="card-kit shadow-float rounded-2xl p-5 md:p-7">
            {/* query bar */}
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-foreground/40" />
              <span className="flex-1 text-body-md text-foreground/80">
                DeFi KOLs with real holders, English audience
                <span className="ml-0.5 inline-block h-5 w-px translate-y-1 animate-pulse bg-brand align-middle" />
              </span>
              <span className="hidden shrink-0 items-center gap-1.5 rounded-pill bg-coral-bg px-3 py-1.5 text-eyebrow font-bold text-brand sm:inline-flex">
                <SlidersHorizontal className="h-3.5 w-3.5" /> 6 filters
              </span>
            </div>

            {/* active filter chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-eyebrow font-semibold text-foreground/45">MATCHING</span>
              {FILTERS.map((f) => (
                <span key={f} className="chip chip-brand">{f}</span>
              ))}
            </div>

            {/* results header */}
            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="text-body-sm font-semibold text-foreground">2,841 KOLs matched</span>
              <span className="font-mono-tnum text-eyebrow text-foreground/50">sorted by relevance</span>
            </div>

            {/* result rows */}
            <div className="mt-3 space-y-2.5">
              {RESULTS.map((r) => (
                <div
                  key={r.h}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition hover:border-gray-200 hover:bg-gray-50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                    {r.h.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                      @{r.h}
                      <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                    </div>
                    <div className="text-eyebrow text-foreground/50">
                      {r.niche} · {r.followers} · {r.chain}
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className="num-display text-body-sm text-foreground">{r.match}%</div>
                    <div className="text-eyebrow text-foreground/45">match</div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-pill bg-coral-bg px-2.5 py-1.5 num-display text-eyebrow font-bold text-brand">
                    <ShieldCheck className="h-3.5 w-3.5" /> {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* floating accent card — relevance breakdown */}
          <div className="surface-onchain shadow-float absolute -bottom-8 -right-3 hidden w-64 rotate-2 rounded-2xl p-5 text-white transition hover:rotate-0 md:block">
            <span className="chip chip-onchain">Why @CryptoWhale</span>
            <div className="mt-4 space-y-2.5 font-mono-tnum text-eyebrow">
              {[
                ['Topic match', '0.41', 'text-mint'],
                ['Real holders', '0.29', 'text-mint'],
                ['Audience geo', '0.18', 'text-white/80'],
                ['Engagement', '0.10', 'text-white/80'],
              ].map(([l, v, c]) => (
                <div key={l} className="flex justify-between">
                  <span className="text-white/60">{l}</span>
                  <span className={c}>{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between border-t border-white/10 pt-2.5 text-eyebrow font-mono-tnum">
              <span className="text-white/70">relevance</span>
              <span className="num-display text-mint">0.98</span>
            </div>
          </div>

          {/* floating accent card — query depth */}
          <div className="card-kit shadow-float-sm absolute -left-4 -top-6 hidden -rotate-2 rounded-2xl px-4 py-3 transition hover:rotate-0 lg:block">
            <div className="text-eyebrow text-foreground/45">Indexed signals</div>
            <div className="num-display mt-0.5 text-h4 text-foreground">38</div>
            <div className="text-eyebrow text-foreground/45">per KOL</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
