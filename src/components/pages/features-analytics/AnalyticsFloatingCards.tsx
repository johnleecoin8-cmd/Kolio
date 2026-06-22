import { TrendingUp, ArrowDownRight, Activity } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating analytics cards (calm-premium signature): intentional SVG/div charts
 *  with baselines, axis labels, tabular numbers and mint / negative deltas.
 *  Each card is a real Kolio analytics mini-UI. */

const FOLLOWER_SERIES = [22, 28, 31, 30, 38, 44, 49, 58, 64, 71, 79, 88];
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function FollowerChart() {
  const w = 280;
  const h = 96;
  const max = Math.max(...FOLLOWER_SERIES);
  const min = Math.min(...FOLLOWER_SERIES);
  const span = max - min || 1;
  const step = w / (FOLLOWER_SERIES.length - 1);
  const pts = FOLLOWER_SERIES.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / span) * (h - 8) - 4;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none" role="img" aria-label="Real-follower growth, trailing 12 months">
      <defs>
        <linearGradient id="afc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* baselines */}
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" y1={h * g} x2={w} y2={h * g} stroke="#000" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      <line x1="0" y1={h - 1} x2={w} y2={h - 1} stroke="#000" strokeOpacity="0.12" strokeWidth="1" />
      <path d={area} fill="url(#afc-fill)" />
      <path d={line} fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.5" fill="#E11D48" />
    </svg>
  );
}

export default function AnalyticsFloatingCards() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow text-brand">Analytics</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Every number on the page is <span className="text-gradient-brand">measured</span>, not claimed
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            Follower growth, authenticity, and engagement — pulled from the source and scored the same way for every KOL you compare.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Real-follower growth card */}
          <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-brand">Real-follower growth</span>
              <TrendingUp className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="num-display text-[2.75rem] leading-none text-foreground">88.4k</span>
              <span className="mb-1.5 inline-flex items-center gap-0.5 text-body-sm font-semibold text-mint">
                <TrendingUp className="h-3.5 w-3.5" /> +18.2%
              </span>
            </div>
            <div className="mt-1 text-eyebrow text-foreground/50">trailing 12 months, bots excluded</div>
            <div className="mt-4">
              <FollowerChart />
              <div className="mt-1.5 flex justify-between font-mono-tnum text-[0.6rem] text-foreground/40">
                {MONTHS.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Audience authenticity card */}
          <div className="card-kit shadow-float rounded-2xl p-6 transition hover:-translate-y-1 md:-translate-y-2">
            <div className="flex items-center justify-between">
              <span className="chip chip-onchain">Audience audit</span>
              <Activity className="h-5 w-5 text-brand" />
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="num-display text-[2.75rem] leading-none text-foreground">81%</span>
              <span className="mb-2 text-body-sm text-foreground/50">real reach</span>
            </div>
            <div className="mt-1 text-eyebrow text-foreground/50">of 112,900 followers analyzed</div>
            {/* stacked authenticity bar */}
            <div className="mt-5 flex h-3 overflow-hidden rounded-pill">
              <div className="h-full bg-brand" style={{ width: '81%' }} />
              <div className="h-full bg-brand-coral/60" style={{ width: '12%' }} />
              <div className="h-full bg-gray-300" style={{ width: '7%' }} />
            </div>
            <div className="mt-5 space-y-2.5">
              {[
                ['Engaged holders', '81%', 'bg-brand'],
                ['Dormant / low-signal', '12%', 'bg-brand-coral/60'],
                ['Bots & farms', '7%', 'bg-gray-300'],
              ].map(([l, v, c]) => (
                <div key={l} className="flex items-center justify-between text-body-sm">
                  <span className="flex items-center gap-2 text-foreground/60">
                    <span className={`h-2 w-2 rounded-pill ${c}`} /> {l}
                  </span>
                  <span className="font-mono-tnum font-semibold text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paid vs organic engagement card */}
          <div className="card-kit shadow-float rotate-1 rounded-2xl p-6 transition hover:rotate-0 md:translate-y-3">
            <div className="flex items-center justify-between">
              <span className="chip chip-ink">Paid vs organic</span>
              <ArrowDownRight className="h-5 w-5 text-brand-coral" />
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="num-display text-[2.75rem] leading-none text-foreground">5.9%</span>
              <span className="mb-1.5 inline-flex items-center gap-0.5 text-body-sm font-semibold text-brand-coral">
                <ArrowDownRight className="h-3.5 w-3.5" /> -2.1pp
              </span>
            </div>
            <div className="mt-1 text-eyebrow text-foreground/50">sponsored vs organic engagement</div>
            {/* paired bars per format */}
            <div className="mt-5 space-y-3.5">
              {[
                ['Thread', 82, 61],
                ['Quote-tweet', 74, 49],
                ['Deep-dive', 96, 71],
              ].map(([fmt, org, paid]) => (
                <div key={fmt as string}>
                  <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                    <span>{fmt}</span>
                    <span className="font-mono-tnum">
                      <span className="text-brand">{org as number}</span>
                      <span className="text-foreground/30"> / </span>
                      <span className="text-brand-coral">{paid as number}</span>
                    </span>
                  </div>
                  <div className="relative h-2 rounded-pill bg-gray-100">
                    <div className="absolute inset-y-0 left-0 rounded-pill bg-brand" style={{ width: `${org}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-pill bg-brand-coral" style={{ width: `${paid}%`, opacity: 0.5 }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-eyebrow text-foreground/50">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-pill bg-brand" /> organic</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-pill bg-brand-coral/60" /> sponsored</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
