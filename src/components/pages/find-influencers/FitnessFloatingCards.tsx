import { Activity, BadgeCheck, ShieldCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Fitness-niche floating product cards: Proof Score for a fitness KOL,
 *  audience-fit discovery, and on-chain escrow payout. Original Kolio surfaces. */
export default function FitnessFloatingCards() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow text-brand">Built for fitness niches</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            See who actually moves a{' '}
            <span className="accent text-gradient-brand">fitness audience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body-md text-foreground/60">
            Every fitness creator on Kolio comes with a Proof Score, real audience
            fit, and escrow-backed payouts. No vanity follower counts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Proof Score card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Proof Score</span>
              <ShieldCheck className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-6 flex items-end gap-3">
              <span className="num-display text-[3.5rem] leading-none text-foreground">89</span>
              <span className="mb-2 text-body-sm text-foreground/50">/ 100</span>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ['Real followers', '91%', 'bg-brand'],
                ['Active gym-goers', '57%', 'bg-brand-coral'],
                ['Bots / fake', '6%', 'bg-gray-300'],
              ].map(([l, v, c]) => (
                <div key={l}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                    <span>{l}</span>
                    <span className="font-mono-tnum">{v}</span>
                  </div>
                  <div className="h-1.5 rounded-pill bg-gray-100">
                    <div className={`h-full rounded-pill ${c}`} style={{ width: v as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery card — fitness handles */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Discover</span>
              <Activity className="h-5 w-5 text-brand-coral" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['LiftWithLena', 'Strength', 89],
                ['MacroMike', 'Nutrition', 86],
                ['RunnerRaj', 'Endurance', 83],
              ].map(([h, n, s]) => (
                <div
                  key={h as string}
                  className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                    {(h as string).slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
                      @{h}
                      <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                    </div>
                    <div className="text-eyebrow text-foreground/50">{n} KOL</div>
                  </div>
                  <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">
                    {s as number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* On-chain payout card */}
          <div className="surface-onchain shadow-float rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Escrow</span>
              <Wallet className="h-5 w-5 text-mint" />
            </div>
            <div className="mt-6">
              <div className="text-eyebrow text-white/50">Released on delivery</div>
              <div className="num-display mt-1 text-[2.75rem] leading-none text-white">
                4,200<span className="text-body-md text-white/50"> USDC</span>
              </div>
            </div>
            <div className="mt-5 space-y-2 font-mono-tnum text-eyebrow">
              <div className="flex justify-between text-white/70">
                <span>funded to escrow</span>
                <span className="text-mint">✓</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>workout post live</span>
                <span className="text-mint">✓</span>
              </div>
              <div className="flex justify-between text-white">
                <span>released</span>
                <span className="text-mint">4,200.00</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
