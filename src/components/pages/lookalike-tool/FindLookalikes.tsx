import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const TABS = [
  {
    key: 'similar',
    label: 'Find similar KOLs',
    body: "Drop in an @handle, and instantly get a ranked list of related KOLs. Layer on filters to narrow it down to the perfect fit.",
    results: [
      { handle: '@defi_degenz', niche: 'DeFi', reach: '142K', match: 98 },
      { handle: '@chainwatch', niche: 'L1 / L2', reach: '88K', match: 95 },
      { handle: '@nftcurator', niche: 'NFTs', reach: '61K', match: 91 },
      { handle: '@onchain_alpha', niche: 'Trading', reach: '47K', match: 89 },
    ],
  },
  {
    key: 'audience',
    label: 'Audience lookalikes',
    body: 'Find KOLs who reach the same wallets, regions, and trader demographics as your best performer.',
    results: [
      { handle: '@apac_crypto', niche: 'APAC', reach: '210K', match: 96 },
      { handle: '@eu_builders', niche: 'EU / DeFi', reach: '74K', match: 93 },
      { handle: '@latam_chain', niche: 'LATAM', reach: '52K', match: 90 },
      { handle: '@kr_web3', niche: 'KR', reach: '39K', match: 88 },
    ],
  },
  {
    key: 'topic',
    label: 'Topic lookalikes',
    body: 'Find KOLs who publish on the same crypto topics — from perps to restaking to gaming.',
    results: [
      { handle: '@perps_pilot', niche: 'Perps', reach: '118K', match: 97 },
      { handle: '@restake_daily', niche: 'Restaking', reach: '66K', match: 94 },
      { handle: '@gamefi_gg', niche: 'Gaming', reach: '83K', match: 92 },
      { handle: '@stable_signals', niche: 'Stables', reach: '41K', match: 87 },
    ],
  },
];

/** "Find KOL lookalikes for any profile" — heading + brand-neutral result mockup
 *  with a left card listing switchable lookalike tabs. */
export default function FindLookalikes() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-[840px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
            Find KOL lookalikes for any profile
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-body-md text-foreground/75">
            Kolio indexes crypto KOLs across X, YouTube, TikTok, and Telegram —
            every profile verified for real reach and audience quality, not
            follower counts. Search any handle and get KOLs who cover the same
            topics or reach the same wallets. Start with the creators who already
            converted for you.
          </p>
        </div>
      </Container>

      {/* gradient band wrapping the mockup + CTA row */}
      <div className="mt-12 bg-gradient-to-b from-[#f1f2ff] to-[#d8dcff] pb-16 pt-14 md:mt-16 md:pb-24 md:pt-20">
        <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="relative">
            {/* brand-neutral product mockup: a KOL result table */}
            <div className="w-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-nav">
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                <div className="text-body font-semibold text-foreground">
                  Lookalikes for{' '}
                  <span className="text-blue">@your_top_kol</span>
                </div>
                <div className="hidden text-body-sm text-foreground/50 sm:block">
                  {tab.results.length} matches · verified reach
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 px-5 py-3 text-body-sm font-medium text-foreground/45">
                <span>KOL</span>
                <span className="hidden text-right sm:block">Niche</span>
                <span className="text-right">Reach</span>
                <span className="text-right">Match</span>
              </div>
              {tab.results.map((r) => (
                <div
                  key={r.handle}
                  className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-4 border-t border-black/5 px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-brand" />
                    <span className="text-body font-medium text-foreground">
                      {r.handle}
                    </span>
                  </div>
                  <span className="hidden text-right text-body-sm text-foreground/65 sm:block">
                    {r.niche}
                  </span>
                  <span className="text-right text-body-sm font-medium text-foreground">
                    {r.reach}
                  </span>
                  <span className="text-right text-body-sm font-semibold text-blue">
                    {r.match}%
                  </span>
                </div>
              ))}
            </div>

            {/* tab card — bottom-left overlay on desktop, stacked below on mobile */}
            <div className="mt-6 w-full rounded-lg border border-black/5 bg-white p-6 shadow-nav md:absolute md:bottom-8 md:left-0 md:mt-0 md:w-[320px]">
              {TABS.map((t, i) => {
                const on = i === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(i)}
                    className={cn(
                      'block w-full text-left transition',
                      i > 0 && 'mt-5',
                    )}
                  >
                    <span
                      className={cn(
                        'text-body-md font-semibold',
                        on ? 'text-blue' : 'text-foreground',
                      )}
                    >
                      {t.label}
                    </span>
                    {on && (
                      <span className="mt-2 block text-body-sm text-foreground/70">
                        {t.body}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 md:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                to="/demo-confirmation"
                variant="primary"
                className="!bg-blue !text-white hover:!opacity-90"
              >
                Find KOLs for free
              </ButtonLink>
              <ButtonLink to="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonLink>
            </div>
            <p className="text-body-sm text-foreground/60">
              Free to start・No wallet connection required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
