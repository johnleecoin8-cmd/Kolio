import { ArrowUpRight, Link2, TrendingUp, Coins } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating attribution panel: intentional weekly bars with a baseline, on-chain
 *  swaps/mints chips, and signed deltas — the core of Kolio's tracking surface. */
export default function AttributionFlow() {
  // weekly attributed on-chain conversions vs. an organic baseline
  const weeks = [
    { w: 'W1', val: 38, base: 22 },
    { w: 'W2', val: 54, base: 24 },
    { w: 'W3', val: 71, base: 23 },
    { w: 'W4', val: 96, base: 25 },
    { w: 'W5', val: 88, base: 24 },
    { w: 'W6', val: 124, base: 26 },
  ];
  const peak = 124;

  const events = [
    { kol: '@CryptoWhale', kind: 'swap', label: 'Swap → 1,240 USDC', delta: '+18.4%', up: true, icon: Coins },
    { kol: '@L2Maxi', kind: 'mint', label: 'Mint → 312 NFTs', delta: '+9.1%', up: true, icon: Link2 },
    { kol: '@OnchainAna', kind: 'swap', label: 'Swap → 880 USDC', delta: '-2.3%', up: false, icon: Coins },
  ];

  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Attribution</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Every campaign tied to a <span className="text-gradient-brand">wallet</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-foreground/60">
            Kolio links each KOL post to the swaps and mints it actually drove. No screenshots,
            no trust-me dashboards — just signed on-chain events against your baseline.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-5">
          {/* Big attribution chart card */}
          <div className="card-kit shadow-float md:col-span-3 -rotate-[0.75deg] rounded-2xl p-7 transition hover:rotate-0">
            <div className="flex items-start justify-between">
              <div>
                <span className="chip chip-brand">Attributed conversions</span>
                <div className="mt-4 flex items-end gap-3">
                  <span className="num-display text-[3rem] leading-none text-foreground">472</span>
                  <span className="mb-2 inline-flex items-center gap-1 text-body-sm font-semibold text-brand">
                    <TrendingUp className="h-4 w-4" /> +41% vs baseline
                  </span>
                </div>
              </div>
              <span className="font-mono-tnum text-eyebrow text-foreground/40">6-week window</span>
            </div>

            <div className="mt-8 flex h-44 items-end gap-3">
              {weeks.map((d) => (
                <div key={d.w} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div className="relative flex w-full max-w-[40px] flex-1 items-end">
                    {/* baseline marker */}
                    <div
                      className="absolute inset-x-0 border-t border-dashed border-foreground/25"
                      style={{ bottom: `${(d.base / peak) * 100}%` }}
                    />
                    <div
                      className="w-full rounded-t-md bg-gradient-brand"
                      style={{ height: `${(d.val / peak) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono-tnum text-eyebrow text-foreground/45">{d.w}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-eyebrow text-foreground/50">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-3 rounded-sm bg-gradient-brand" /> attributed on-chain
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-0 w-3 border-t border-dashed border-foreground/40" /> organic baseline
              </span>
            </div>
          </div>

          {/* On-chain event feed card */}
          <div className="surface-onchain shadow-float md:col-span-2 rotate-1 rounded-2xl p-7 text-white transition hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">On-chain events</span>
              <span className="num-display rounded-pill bg-white/10 px-2.5 py-1 text-eyebrow font-bold text-mint">live</span>
            </div>

            <div className="mt-6 space-y-3">
              {events.map((e) => {
                const Icon = e.icon;
                return (
                  <div key={e.label} className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-white">
                        <span className="grid h-7 w-7 place-items-center rounded-pill bg-white/10 text-mint">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {e.kol}
                      </span>
                      <span className="chip chip-onchain capitalize">{e.kind}</span>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="font-mono-tnum text-eyebrow text-white/65">{e.label}</span>
                      <span className={`inline-flex items-center gap-0.5 font-mono-tnum text-eyebrow font-bold ${e.up ? 'text-mint' : 'text-brand-coral'}`}>
                        <ArrowUpRight className={`h-3 w-3 ${e.up ? '' : 'rotate-90'}`} /> {e.delta}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono-tnum text-eyebrow">
              <span className="text-white/55">attributed volume</span>
              <span className="text-mint">2,432.00 USDC</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
