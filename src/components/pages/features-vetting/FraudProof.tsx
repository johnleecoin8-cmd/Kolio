import { Bot, Users, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProofScore, { computeProofScore } from '@/components/kit/ProofScore';

/** Floating fraud-proof surface: True Reach vs raw followers, a live bot-share
 *  chip, and a worked-out large Proof Score — built as overlapping mini-UI
 *  cards in the calm-premium language. */
export default function FraudProof() {
  // Worked example — one creator, scored deterministically by the shared kit.
  const sample = { engagement_rate: 0.061, fake_follower_pct: 0.14, is_verified: true, followers: 184_000 };
  const score = computeProofScore(sample);
  const followers = 184_000;
  const botPct = 14;
  const trueReach = Math.round(followers * (1 - botPct / 100));
  const fmt = (n: number) => n.toLocaleString('en-US');

  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy column */}
          <div>
            <span className="eyebrow text-brand">Fraud, made obvious</span>
            <h2 className="display-light mt-4 max-w-[16ch] text-h2 leading-[1.05] text-foreground">
              A follower count hides the bots. <span className="text-gradient-brand">True Reach</span> removes them.
            </h2>
            <p className="mt-5 max-w-md text-body-md text-foreground/60">
              Kolio re-counts every audience from scratch — purging bots, dormant
              wallets, and pod activity — then folds authenticity, engagement
              quality, and on-chain proof into one Proof Score you can rank on.
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {[
                ['Audiences re-scored', '38k+'],
                ['Avg. bots removed', '17%'],
                ['Score signals', '4'],
              ].map(([label, val]) => (
                <div key={label} className="rounded-2xl border border-hairline bg-white/70 p-4">
                  <div className="num-display text-[1.75rem] leading-none text-foreground">{val}</div>
                  <div className="mt-1.5 text-eyebrow text-foreground/50">{label}</div>
                </div>
              ))}
            </dl>
          </div>

          {/* Floating card cluster */}
          <div className="relative">
            {/* True Reach card */}
            <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0">
              <div className="flex items-center justify-between">
                <span className="chip chip-brand">True Reach</span>
                <Users className="h-5 w-5 text-brand" />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <div className="text-eyebrow text-foreground/45">Claimed followers</div>
                  <div className="num-display mt-1 text-[1.5rem] leading-none text-foreground/35 line-through">{fmt(followers)}</div>
                </div>
                <div className="text-right">
                  <div className="text-eyebrow text-brand">Reachable after vetting</div>
                  <div className="num-display mt-1 text-[2.75rem] leading-none text-foreground">{fmt(trueReach)}</div>
                </div>
              </div>
              <div className="mt-5 h-2.5 overflow-hidden rounded-pill bg-gray-100">
                <div className="h-full rounded-pill bg-gradient-brand" style={{ width: `${100 - botPct}%` }} />
              </div>
              <div className="mt-2 flex justify-between font-mono-tnum text-eyebrow text-foreground/50">
                <span>{100 - botPct}% real audience</span>
                <span>{botPct}% stripped</span>
              </div>
            </div>

            {/* Bot-share chip card, floating up-right */}
            <div className="card-kit shadow-float-sm absolute -right-2 -top-7 hidden rotate-2 rounded-2xl p-4 transition hover:rotate-0 sm:block md:-right-6">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-pill bg-coral-bg"><Bot className="h-4 w-4 text-brand" /></span>
                <div>
                  <div className="num-display text-body-md leading-none text-foreground">{botPct}%</div>
                  <div className="text-eyebrow text-foreground/50">bots &amp; fakes</div>
                </div>
              </div>
            </div>

            {/* Worked Proof Score card, floating below */}
            <div className="surface-onchain shadow-float relative z-10 mt-5 rotate-1 rounded-2xl p-6 text-white transition hover:rotate-0">
              <div className="flex items-center justify-between">
                <span className="chip chip-onchain">Proof Score</span>
                <Sparkles className="h-5 w-5 text-mint" />
              </div>
              <div className="mt-5 flex items-center gap-5">
                <div className="rounded-2xl bg-white/95 p-3">
                  <ProofScore score={score} size="lg" />
                </div>
                <div className="min-w-0 flex-1 space-y-2 font-mono-tnum text-eyebrow">
                  {[
                    ['Real followers', `${100 - botPct}%`, 'text-mint'],
                    ['Engagement quality', '6.1%', 'text-mint'],
                    ['On-chain attribution', 'verified', 'text-mint'],
                    ['Risk flags', 'none', 'text-white/70'],
                  ].map(([l, v, c]) => (
                    <div key={l} className="flex justify-between gap-3">
                      <span className="text-white/60">{l}</span>
                      <span className={c}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
