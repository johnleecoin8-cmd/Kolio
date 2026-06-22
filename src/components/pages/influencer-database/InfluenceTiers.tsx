import Container from '@/components/ui/Container';

type Tier = {
  key: string;
  label: string;
  range: string;
  note: string;
  fill: number; // bar proportion 0-100
};

const TIERS: Tier[] = [
  { key: 'nano', label: 'Nano', range: '1K – 10K', note: 'Tight degens, highest trust-per-follower', fill: 18 },
  { key: 'micro', label: 'Micro', range: '10K – 100K', note: 'Niche DeFi / NFT communities that convert', fill: 42 },
  { key: 'mid', label: 'Mid', range: '100K – 500K', note: 'Cross-chain reach with real holder overlap', fill: 70 },
  { key: 'macro', label: 'Macro', range: '500K+', note: 'Listing-grade volume for exchanges & L1s', fill: 100 },
];

/** Dark on-chain punctuation: influence-tier framing (nano/micro/mid/macro) as chips
 *  with a proportional, labelled bar baseline. One focal dark surface for the page. */
export default function InfluenceTiers() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="surface-onchain relative overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16">
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* left: framing */}
            <div>
              <span className="eyebrow">Influence tiers</span>
              <h2 className="mt-3 display-lg text-h3 text-white">
                Filter by the tier that{' '}
                <span className="glow-brand text-gradient-brand">moves your token</span>
              </h2>
              <p className="mt-5 max-w-[460px] text-body-md text-white/65">
                Crypto KOLs are not interchangeable. A 4K-follower degen can out-convert a
                500K macro on a fresh-mint launch. Kolio sizes every creator into a clear
                tier so you spend budget where the audience actually trades.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {TIERS.map((t) => (
                  <span key={t.key} className="chip chip-onchain font-mono-tnum">
                    {t.label}
                    <span className="ml-1.5 text-white/45">{t.range}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* right: proportional tier ladder */}
            <div className="space-y-5">
              {TIERS.map((t) => (
                <div key={t.key}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-body-sm font-semibold text-white">{t.label}</span>
                    <span className="font-mono-tnum text-eyebrow text-white/45">{t.range} followers</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-pill bg-white/10">
                    <div
                      className="h-full rounded-pill bg-gradient-brand"
                      style={{ width: `${t.fill}%` }}
                    />
                  </div>
                  <p className="mt-2 text-eyebrow text-white/50">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
