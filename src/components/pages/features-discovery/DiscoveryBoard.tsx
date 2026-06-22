import { Search, SlidersHorizontal, BadgeCheck, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

type Row = { handle: string; narrative: string; chain: string; reach: string; score: number };

const ROWS: Row[] = [
  { handle: 'CryptoWhale', narrative: 'DeFi research', chain: 'Ethereum', reach: '184K', score: 94 },
  { handle: 'L2Maxi', narrative: 'Rollups & scaling', chain: 'Arbitrum', reach: '121K', score: 90 },
  { handle: 'OnchainAna', narrative: 'Trading desk', chain: 'Solana', reach: '97K', score: 87 },
  { handle: 'StableSage', narrative: 'Macro & stables', chain: 'Base', reach: '64K', score: 82 },
];

const FILTERS = ['Ethereum', 'Solana', 'DeFi', 'Proof Score 80+', 'Real holders'];

/** Floating discovery mini-UI: search bar, filter chips, ranked @handles with
 *  Proof Score chips. The signature card pattern, gently rotated with depth. */
export default function DiscoveryBoard() {
  return (
    <section className="canvas-warm pb-20 pt-6 md:pb-28 md:pt-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-brand">How discovery feels</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            One query. Ranked by <span className="accent text-gradient-brand">proof</span>, not vibes.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-md text-foreground/60">
            Filter by chain and narrative, then read the audience-quality score before you ever send a DM.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* floating stat chip — top left */}
          <div className="card-kit shadow-float-sm absolute -left-2 -top-6 z-10 hidden -rotate-3 rounded-2xl px-4 py-3 md:block">
            <div className="text-eyebrow text-foreground/50">Vetted creators</div>
            <div className="num-display text-h4 text-foreground">42,180</div>
          </div>

          {/* floating insight chip — bottom right */}
          <div className="surface-onchain shadow-float-sm absolute -bottom-6 -right-2 z-10 hidden rotate-3 rounded-2xl px-4 py-3 text-white md:block">
            <div className="flex items-center gap-1.5 text-eyebrow text-white/60">
              <Sparkles className="h-3.5 w-3.5 text-mint" /> Avg fake followers
            </div>
            <div className="num-display font-mono-tnum text-h4 text-mint">3.1%</div>
          </div>

          {/* main board */}
          <div className="card-kit shadow-float rotate-[-0.6deg] rounded-2xl p-5 transition hover:rotate-0 md:p-7">
            {/* search */}
            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-float-sm">
              <Search className="h-4 w-4 shrink-0 text-foreground/40" />
              <span className="flex-1 text-body-sm text-foreground/70">DeFi KOLs on Ethereum, real holders</span>
              <span className="inline-flex items-center gap-1.5 rounded-pill bg-coral-bg px-3 py-1.5 text-eyebrow font-bold text-brand">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
              </span>
            </div>

            {/* filter chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {FILTERS.map((f, i) => (
                <span
                  key={f}
                  className={
                    i === 0
                      ? 'chip chip-brand'
                      : 'chip border border-gray-200 bg-white text-foreground/60'
                  }
                >
                  {f}
                </span>
              ))}
            </div>

            {/* ranked rows */}
            <div className="mt-5 space-y-2.5">
              {ROWS.map((r, i) => (
                <div
                  key={r.handle}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 transition hover:border-coral-bg"
                >
                  <span className="num-display w-6 shrink-0 text-center text-body-sm text-foreground/35">{i + 1}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                    {r.handle.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                      @{r.handle}
                      <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                    </div>
                    <div className="truncate text-eyebrow text-foreground/50">
                      {r.narrative} · {r.chain}
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className="num-display font-mono-tnum text-body-sm text-foreground">{r.reach}</div>
                    <div className="text-eyebrow text-foreground/45">reach</div>
                  </div>
                  <span className="num-display shrink-0 rounded-pill bg-coral-bg px-2.5 py-1.5 text-eyebrow font-bold text-brand">
                    {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
