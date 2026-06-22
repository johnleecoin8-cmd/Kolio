import ProofScore from '@/components/kit/ProofScore';

/** Hero on a clean neutral surface (red is reserved as accent, not wallpaper).
 *  Editorial display headline + chips + a premium discovery-board mockup card. */
export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16 text-center">
        <span className="eyebrow">Discover · Crypto KOLs</span>

        <h1 className="mt-5 display-xl font-display text-[2.75rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] text-foreground max-w-[1000px] mx-auto">
          Every crypto KOL, <span className="text-gradient-brand">verified</span> in one place
        </h1>

        <p className="mt-6 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/70">
          Search KOLs across X, YouTube, TikTok, and Telegram by niche, chain, and audience
          quality. With proof-based reach and on-chain track records, you vet every creator before
          you open a single DM.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="chip chip-brand">Proof-based reach</span>
          <span className="chip chip-onchain">On-chain track record</span>
          <span className="chip chip-ink">4 platforms, one search</span>
        </div>

        <div className="mt-7 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-brand text-white text-body font-semibold transition hover:opacity-90"
            >
              Start free
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white border border-hairline text-ink text-body font-semibold transition hover:bg-gray-50"
            >
              Book a demo
            </a>
          </div>
          <p className="text-body-sm text-foreground/60">Free to explore・No card required</p>
        </div>

        {/* discovery-board mockup — premium card with proof scores */}
        <div className="mt-10 md:mt-14">
          <div className="card-kit mx-auto w-full max-w-[1100px] p-4 md:p-6">
            <div className="flex items-center gap-2 border-b border-hairline pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/15" />
              <div className="ml-3 h-7 flex-1 rounded-pill bg-gray-100 px-3 text-left">
                <span className="font-mono-tnum text-body-sm leading-7 text-foreground/55">
                  DeFi KOLs · 50K–250K followers · audience in EN/KR
                </span>
              </div>
            </div>
            <div className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { tag: 'DeFi', reach: '184K', score: 94, eng: '6.2%' },
                { tag: 'L2 / Rollups', reach: '92K', score: 91, eng: '4.8%' },
                { tag: 'Trading', reach: '311K', score: 88, eng: '3.1%' },
                { tag: 'NFTs', reach: '47K', score: 96, eng: '8.4%' },
                { tag: 'Gaming', reach: '120K', score: 90, eng: '5.5%' },
                { tag: 'L1 / Infra', reach: '205K', score: 93, eng: '4.0%' },
              ].map((c) => (
                <div key={c.tag} className="rounded-lg border border-hairline bg-white p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="chip chip-ink">{c.tag}</span>
                    <ProofScore score={c.score} size="sm" />
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-body-sm text-foreground/55">Verified reach</p>
                      <p className="num-display font-mono-tnum text-[1.5rem] leading-none text-foreground">{c.reach}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-body-sm text-foreground/55">Engagement</p>
                      <p className="num-display font-mono-tnum text-body font-semibold text-foreground">{c.eng}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
