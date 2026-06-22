/**
 * Dark on-chain punctuation band: explains how the proof-tier ranking is built.
 * The single dark surface on the page — sets the "vetting terminal" tone.
 */
const TIERS = [
  {
    chip: 'chip chip-brand',
    tier: 'S',
    label: 'Proof-verified',
    desc: 'Real reach ≥ 60th pct · fake-follower share < 6% · on-chain payout history.',
    threshold: '< 6.0%',
    metric: 'fake followers',
  },
  {
    chip: 'chip chip-ink',
    tier: 'A',
    label: 'High-signal',
    desc: 'Strong engagement with verified audience quality and consistent delivery.',
    threshold: '6 – 10%',
    metric: 'fake followers',
  },
  {
    chip: 'chip chip-onchain',
    tier: 'B',
    label: 'Emerging',
    desc: 'Growing reach, audience under active verification before first campaign.',
    threshold: '> 10%',
    metric: 'fake followers',
  },
];

export default function TierMethodology() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="surface-onchain overflow-hidden rounded-xl px-6 py-14 md:px-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
            <div>
              <span className="eyebrow mb-4 text-brand-coral">How the tiers work</span>
              <h2 className="font-display display-lg text-[2rem] text-white md:text-[2.75rem]">
                Every KOL is graded, not just listed.
              </h2>
              <p className="mt-5 max-w-[420px] text-body text-white/65">
                Kolio runs each handle through a proof check — real reach,
                audience authenticity, and on-chain payout history — then assigns
                a tier. No vanity metrics, no pay-to-rank.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-pill bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-mint" />
                <span className="font-mono-tnum text-body-sm text-white/70">
                  690 handles scanned · 20 surfaced
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {TIERS.map((t) => (
                <div
                  key={t.tier}
                  className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono-tnum num-display flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-h4 text-white">
                      {t.tier}
                    </span>
                    <div>
                      <span className={t.chip}>{t.label}</span>
                      <p className="mt-2 max-w-[380px] text-body-sm text-white/55">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 border-white/10 pl-0 sm:border-l sm:pl-6">
                    <div className="font-mono-tnum num-display text-h4 text-white">
                      {t.threshold}
                    </div>
                    <div className="mt-1 text-eyebrow uppercase tracking-wide text-white/40">
                      {t.metric}
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
