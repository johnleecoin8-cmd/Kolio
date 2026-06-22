import { ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

const AUDIENCE_GEO = [
  { region: 'North America', pct: 38 },
  { region: 'Europe', pct: 27 },
  { region: 'Asia', pct: 21 },
  { region: 'Rest of world', pct: 14 },
];

/** Dark on-chain punctuation: the vetting terminal that scores a result before outreach. */
export default function AnalyzeFeature() {
  return (
    <section className="surface-onchain py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <span className="eyebrow">Behind every rank</span>
            <h2 className="mt-3 display-lg font-display text-[2rem] text-white md:text-[2.5rem]">
              The score is proof, not a guess
            </h2>
            <p className="mt-6 text-body-md leading-relaxed text-white/70">
              Crypto audiences are full of bots and bought followers. Before a KOL
              ranks, Kolio runs the audience through bot screening, real-reach
              measurement, geography, and wallet-active share &mdash; so the voices
              at the top of your results actually move holders.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="chip chip-onchain font-mono-tnum">Bot-screened</span>
              <span className="chip chip-onchain font-mono-tnum">Wallet-active</span>
              <span className="chip chip-onchain font-mono-tnum">On-chain weighted</span>
            </div>
          </div>

          {/* on-chain vetting terminal */}
          <div className="relative md:justify-self-end">
            <div className="w-full max-w-[460px] rounded-xl border border-white/10 bg-surface-ink p-6 glow-brand">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-body font-semibold text-white">
                  <ShieldCheck className="h-5 w-5 text-brand" /> Audience report
                </span>
                <span className="chip chip-onchain font-mono-tnum">Verified</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Metric label="Real reach" value="84%" />
                <Metric label="Bot share" value="3.1%" />
                <Metric label="Engagement" value="6.4%" />
              </div>

              <p className="mt-8 text-eyebrow uppercase tracking-widest text-white/45">
                Audience by region
              </p>
              <ul className="mt-4 space-y-3">
                {AUDIENCE_GEO.map((g) => (
                  <li key={g.region}>
                    <div className="flex justify-between text-body text-white/80">
                      <span>{g.region}</span>
                      <span className="font-mono-tnum text-white">{g.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${g.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="num-display text-[1.5rem] leading-none text-mint">{value}</div>
      <div className="mt-1.5 text-eyebrow uppercase tracking-wide text-white/50">
        {label}
      </div>
    </div>
  );
}
