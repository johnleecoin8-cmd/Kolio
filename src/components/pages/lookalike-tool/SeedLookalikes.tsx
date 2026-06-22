import { ArrowRight, BadgeCheck, Sparkles, Target, Users } from 'lucide-react';
import Container from '@/components/ui/Container';

type Match = { handle: string; niche: string; overlap: number; score: number };

const matches: Match[] = [
  { handle: 'L2Maxi', niche: 'Layer2', overlap: 71, score: 90 },
  { handle: 'OnchainAna', niche: 'Trading', overlap: 64, score: 88 },
  { handle: 'StableYield', niche: 'DeFi', overlap: 58, score: 85 },
];

/** Signature floating mini-UI: a seed creator flows into a ranked lookalike
 *  shortlist, each scored and overlap-matched. Calm-premium language. */
export default function SeedLookalikes() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow text-brand">How it works</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            One creator in, a ranked{' '}
            <span className="text-gradient-brand">shortlist</span> out
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            Pick a KOL that already moved your numbers. Kolio reads their audience
            graph and returns lookalikes you can book today.
          </p>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)]">
          {/* Seed card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 lg:translate-y-2">
            <span className="chip chip-brand">Seed creator</span>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                CW
              </span>
              <div>
                <div className="flex items-center gap-1 text-body font-semibold text-foreground">
                  @CryptoWhale
                  <BadgeCheck className="h-4 w-4 text-brand" />
                </div>
                <div className="text-eyebrow text-foreground/50">DeFi · 184K reach</div>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-eyebrow">
              <div className="flex items-center justify-between text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-brand" /> Verified holders
                </span>
                <span className="font-mono-tnum text-foreground">61%</span>
              </div>
              <div className="flex items-center justify-between text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-brand" /> Past CPA
                </span>
                <span className="font-mono-tnum text-foreground">$2.40</span>
              </div>
              <div className="flex items-center justify-between text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand" /> Proof Score
                </span>
                <span className="num-display rounded-pill bg-coral-bg px-2 py-0.5 font-bold text-brand">92</span>
              </div>
            </div>
          </div>

          {/* Flow connector */}
          <div className="flex items-center justify-center gap-2 text-brand lg:flex-col">
            <span className="chip chip-onchain inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Match
            </span>
            <ArrowRight className="h-6 w-6" />
          </div>

          {/* Lookalikes card */}
          <div className="card-kit shadow-float rotate-1 rounded-2xl p-6 transition hover:rotate-0 lg:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Lookalikes</span>
              <span className="text-eyebrow text-foreground/45">ranked by fit</span>
            </div>
            <div className="mt-5 space-y-3">
              {matches.map((m) => (
                <div
                  key={m.handle}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-surface-ink text-eyebrow font-bold text-white">
                    {m.handle.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                      @{m.handle}
                      <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                    </div>
                    <div className="text-eyebrow text-foreground/50">{m.niche} KOL</div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 text-eyebrow text-foreground/45">
                      <span className="font-mono-tnum text-foreground/70">{m.overlap}%</span> overlap
                    </div>
                    <div className="h-1.5 w-20 rounded-pill bg-gray-100">
                      <div
                        className="h-full rounded-pill bg-gradient-brand"
                        style={{ width: `${m.overlap}%` }}
                      />
                    </div>
                  </div>
                  <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">
                    {m.score}
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
