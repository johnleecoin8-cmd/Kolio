import Container from '@/components/ui/Container';

const AUDIENCE_GEO = [
  { region: 'North America', pct: 38 },
  { region: 'Europe', pct: 27 },
  { region: 'Asia', pct: 21 },
  { region: 'Rest of world', pct: 14 },
];

/** "Vet KOLs before you reach out" — audience-quality mockup left, copy right. */
export default function AnalyzeFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* brand-neutral audience-quality mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[460px] rounded-xl border border-foreground/10 bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-body font-semibold text-violet-dark">
                  Audience quality
                </span>
                <span className="rounded-full bg-coral-bg px-3 py-1 text-body font-semibold text-violet-dark">
                  Verified
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <Metric label="Real reach" value="84%" />
                <Metric label="Bot share" value="3.1%" />
                <Metric label="Engagement" value="6.4%" />
              </div>

              <p className="mt-8 text-body font-medium text-foreground/70">
                Audience by region
              </p>
              <ul className="mt-4 space-y-3">
                {AUDIENCE_GEO.map((g) => (
                  <li key={g.region}>
                    <div className="flex justify-between text-body text-foreground">
                      <span>{g.region}</span>
                      <span className="font-medium">{g.pct}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-gradient-brand"
                        style={{ width: `${g.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Vet every KOL before you reach out
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              Crypto audiences are full of bots and bought followers. Kolio
              scores each KOL on proof &mdash; real reach, audience geography,
              wallet-active share, and bot screening &mdash; so you fund voices
              that move actual holders, not vanity counts. All in one place.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try For Free
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-violet/40 p-4">
      <div className="font-display text-[1.5rem] leading-none text-violet-dark">
        {value}
      </div>
      <div className="mt-1 text-body text-foreground/70">{label}</div>
    </div>
  );
}
