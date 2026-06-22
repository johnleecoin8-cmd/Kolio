import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProofScore, { computeProofScore } from '@/components/kit/ProofScore';

// last-12-post engagement, % (real proportions for the example chart)
const POSTS = [3.9, 5.1, 3.3, 5.9, 4.6, 6.7, 5.5, 7.3, 5.3, 6.4, 4.5, 6.9];
const NICHE_MEDIAN = 1.9;
const CHART_MAX = 8;
const EXAMPLE_SCORE = computeProofScore({
  engagement_rate: 0.048,
  fake_follower_pct: 0.04,
  is_verified: true,
  followers: 5_400_000,
});

/**
 * The embedded Kolio engagement-rate tool, rebuilt in the calm-premium language:
 * a soft warm canvas, light-weight display headline, and a big rounded floating
 * card holding the handle search + a worked example result (Proof Score ring,
 * engagement rate, averages, and a labelled by-post chart with a niche baseline).
 */
export default function ToolBlock() {
  const [handle, setHandle] = useState('@VitalikButerin');

  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Free tool · no login · no wallet connect</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.04] text-foreground md:text-[3.5rem]">
            Check any KOL&apos;s real{' '}
            <span className="text-gradient-brand">engagement rate</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Paste an X (Twitter) handle to see genuine reach — likes, replies and
            reposts measured against followers — before you spend a single token.
          </p>
        </div>

        {/* Search + worked-example card */}
        <div className="mx-auto mt-10 w-full max-w-[60rem]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex w-full max-w-[34rem] items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
          >
            <Search size={16} className="shrink-0 text-foreground/40" />
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="@handle"
              className="flex-1 border-none bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-pill bg-brand px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Check KOL
            </button>
          </form>

          {/* example result card */}
          <div className="card-kit shadow-float mt-8 rounded-2xl p-5 text-left md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">VB</span>
                <div>
                  <div className="text-body-sm font-semibold text-foreground">Vitalik Buterin</div>
                  <div className="text-eyebrow text-foreground/50">@VitalikButerin · X (Twitter)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ProofScore score={EXAMPLE_SCORE} size="lg" />
                <div className="rounded-pill bg-coral-bg px-4 py-2 text-center">
                  <div className="num-display text-h5 leading-none text-brand">4.8%</div>
                  <div className="text-[10px] uppercase tracking-wide text-brand/70">Engagement rate</div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[['Avg likes', '38.2K'], ['Avg replies', '2.1K'], ['Avg reposts', '6.4K']].map(([l, v]) => (
                <div key={l} className="rounded-xl bg-gray-50 py-3 text-center">
                  <div className="num-display text-h5 leading-none text-foreground">{v}</div>
                  <div className="mt-1 text-eyebrow text-foreground/50">{l}</div>
                </div>
              ))}
            </div>

            {/* Engagement-by-post bar chart: labelled, with baseline + median guide */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="eyebrow">Engagement by post · last 12</span>
                <span className="chip chip-onchain">Median {NICHE_MEDIAN}% niche</span>
              </div>
              <div className="relative flex h-28 items-end gap-1.5 border-b border-gray-200">
                <div
                  className="pointer-events-none absolute inset-x-0 border-t border-dashed border-foreground/25"
                  style={{ bottom: `${(NICHE_MEDIAN / CHART_MAX) * 100}%` }}
                />
                {POSTS.map((v, i) => (
                  <div
                    key={i}
                    className="relative flex-1 rounded-t bg-gradient-brand"
                    style={{ height: `${(v / CHART_MAX) * 100}%` }}
                    title={`Post ${i + 1}: ${v.toFixed(1)}%`}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between font-mono-tnum text-[10px] text-foreground/45">
                <span>P1</span>
                <span>last 12 posts →</span>
                <span>P12</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
