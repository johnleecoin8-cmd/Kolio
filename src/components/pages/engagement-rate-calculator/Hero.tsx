import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProofScore, { computeProofScore } from '@/components/kit/ProofScore';

const NAV_LINKS = ['Discovery', 'API', 'Brands', 'Resources', 'Pricing'];

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
 * Hero: page H1 with a single gradient-highlighted word (later.com pattern),
 * then the embedded Kolio engagement-rate tool rendered as a framed card
 * (mini app-nav + intro copy + handle search + result placeholder).
 */
export default function Hero() {
  const [handle, setHandle] = useState('@VitalikButerin');

  return (
    <section className="bg-background pt-6 md:pt-10">
      <Container>
        <div className="flex flex-col items-center px-4 pb-6 pt-4 text-center md:pb-8 md:pt-8">
          <span className="eyebrow">Free tool · No login</span>
          <h1 className="display-xl m-0 mt-4 max-w-[60rem] text-center font-display text-4xl text-foreground md:text-6xl xl:text-[5rem]">
            Crypto KOL{' '}
            <span className="text-gradient-brand">Engagement Rate</span>{' '}
            Calculator
          </h1>
        </div>

        {/* Embedded tool card */}
        <div className="mx-auto mb-20 w-full max-w-[71rem] overflow-hidden rounded-xl border border-black/10 bg-white shadow-nav">
          {/* mini app nav */}
          <div className="flex items-center justify-between gap-4 border-b border-black/5 px-5 py-3">
            <span className="text-gradient-brand font-display text-lg font-semibold leading-none">
              Kolio
            </span>
            <nav className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((l) => (
                <span
                  key={l}
                  className="text-sm font-medium text-foreground/70"
                >
                  {l}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground/70">
                Request a demo
              </span>
              <span className="hidden text-sm font-medium text-foreground/70 sm:inline">
                Login
              </span>
              <span className="rounded-md bg-background-soft px-3 py-1.5 text-sm font-semibold text-foreground">
                Try for Free
              </span>
            </div>
          </div>

          {/* tool body */}
          <div className="flex flex-col items-center gap-5 px-4 py-8 md:px-8 md:py-10">
            <p className="my-0 max-w-[38rem] text-center text-body leading-6 text-foreground">
              Check the real engagement rate of any crypto KOL on X (Twitter)
              before you spend a single token. Analyze likes, replies, reposts,
              and post-level engagement to separate genuine reach from inflated
              follower counts.
            </p>

            <div className="w-full max-w-[35rem]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inline-flex w-full items-center gap-2 overflow-hidden rounded-xl bg-background-soft p-3"
              >
                <Search size={16} className="ml-2 shrink-0 text-ink" />
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="@handle"
                  className="flex-1 border-none bg-transparent text-sm font-normal leading-5 text-foreground outline-none placeholder:text-foreground/40"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold leading-tight text-white transition-colors hover:bg-[#333333]"
                >
                  Check KOL
                </button>
              </form>
            </div>

            {/* example result card */}
            <div className="mt-2 w-full max-w-[59rem] rounded-lg border border-black/10 bg-white p-5 text-left shadow-nav md:p-7">
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
                  <div key={l} className="rounded-md bg-gray-50 py-3 text-center">
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
                  {/* niche-median guide line */}
                  <div
                    className="pointer-events-none absolute inset-x-0 border-t border-dashed border-foreground/25"
                    style={{ bottom: `${(NICHE_MEDIAN / CHART_MAX) * 100}%` }}
                  />
                  {POSTS.map((v, i) => (
                    <div
                      key={i}
                      className="group relative flex-1 rounded-t bg-gradient-brand"
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
        </div>
      </Container>
    </section>
  );
}
