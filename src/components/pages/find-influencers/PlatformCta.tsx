/** Bottom gradient CTA block: big heading, stat callouts, two buttons, trial note. */
export default function PlatformCta() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-brand px-6 py-24 text-center">
          <h2 className="mb-8 max-w-[820px] font-display text-[2.5rem] uppercase leading-[1.05] text-white md:text-[3.75rem]">
            The web3 influencer marketing platform for crypto KOLs
          </h2>

          {/* Stat callouts (later.com-inspired) */}
          <div className="mb-10 grid w-full max-w-[680px] grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { stat: 'Proof-based', label: 'reach & audience vetting' },
              { stat: 'On-chain', label: 'payments & escrow' },
              { stat: 'Full-funnel', label: 'campaign attribution' },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="font-display text-[1.75rem] leading-none md:text-[2rem]">
                  {s.stat}
                </p>
                <p className="mt-2 text-body-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="/demo-confirmation"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-body font-semibold text-white no-underline shadow-btn transition hover:opacity-90"
            >
              Try for Free
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/40 bg-white px-6 text-body font-semibold text-gray-700 no-underline shadow-btn transition hover:bg-gray-50"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-6 text-body-sm text-white/80">
            14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
