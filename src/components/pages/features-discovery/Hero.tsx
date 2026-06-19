/** Full-pink hero with eyebrow, big display headline with one gradient word, CTAs and product mockup. */
export default function Hero() {
  return (
    <section className="bg-pink">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16 text-center">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-3 text-ink">
          <span className="text-eyebrow font-semibold uppercase tracking-wide">Discover</span>
          <span className="h-5 w-px bg-ink/30" />
          <span className="text-eyebrow font-semibold uppercase tracking-wide">
            Crypto KOLs
          </span>
        </div>

        <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] uppercase text-ink max-w-[1000px] mx-auto">
          Every crypto KOL, <span className="text-gradient-brand">verified</span> in one place
        </h1>

        <p className="mt-6 mx-auto max-w-[640px] text-body md:text-body-md text-ink/75">
          Search KOLs across X, YouTube, TikTok, and Telegram by niche, chain, and audience
          quality. With proof-based reach and on-chain track records, you vet every creator before
          you open a single DM.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
            >
              Start free
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white text-ink text-body font-semibold transition hover:opacity-90"
            >
              Book a demo
            </a>
          </div>
          <p className="text-body-sm text-ink/70">Free to explore・No card required</p>
        </div>

        {/* brand-neutral product mockup — KOL discovery board */}
        <div className="mt-10 md:mt-14">
          <div className="mx-auto w-full max-w-[1100px] rounded-xl bg-white p-4 shadow-nav md:p-6">
            <div className="flex items-center gap-2 border-b border-black/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-brand/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand/10" />
              <div className="ml-3 h-7 flex-1 rounded-pill bg-background-soft px-3 text-left">
                <span className="text-body-sm leading-7 text-foreground/50">
                  DeFi KOLs · 50K–250K followers · audience in EN/KR
                </span>
              </div>
            </div>
            <div className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { tag: 'DeFi', reach: '184K', quality: '94%', eng: '6.2%' },
                { tag: 'L2 / Rollups', reach: '92K', quality: '91%', eng: '4.8%' },
                { tag: 'Trading', reach: '311K', quality: '88%', eng: '3.1%' },
                { tag: 'NFTs', reach: '47K', quality: '96%', eng: '8.4%' },
                { tag: 'Gaming', reach: '120K', quality: '90%', eng: '5.5%' },
                { tag: 'L1 / Infra', reach: '205K', quality: '93%', eng: '4.0%' },
              ].map((c) => (
                <div key={c.tag} className="rounded-lg border border-black/5 bg-background-soft p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex rounded-pill bg-pink px-2.5 py-1 text-body-sm font-medium text-ink">
                      {c.tag}
                    </span>
                    <span className="text-body-sm font-semibold text-positive">{c.quality} real</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-body-sm text-foreground/60">Verified reach</p>
                      <p className="font-display text-[1.5rem] leading-none text-foreground">{c.reach}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-body-sm text-foreground/60">Engagement</p>
                      <p className="text-body font-semibold text-foreground">{c.eng}</p>
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
