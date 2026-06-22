import Container from '@/components/ui/Container';

/* Follower-growth series (weekly snapshots, in thousands). Real-looking proportions. */
const GROWTH = [
  { wk: 'W1', v: 182 },
  { wk: 'W2', v: 196 },
  { wk: 'W3', v: 207 },
  { wk: 'W4', v: 221 },
  { wk: 'W5', v: 248 },
  { wk: 'W6', v: 271 },
  { wk: 'W7', v: 309 },
  { wk: 'W8', v: 341 },
];

/* Audience authenticity breakdown (sums to 100). */
const AUDIENCE = [
  { label: 'Real / active', pct: 78, tone: 'mint' as const },
  { label: 'Low activity', pct: 14, tone: 'amber' as const },
  { label: 'Bots & farms', pct: 8, tone: 'red' as const },
];

/* Engagement by content format — paid vs organic, real proportions (engagement %). */
const FORMATS = [
  { label: 'X thread', organic: 6.1, paid: 4.8 },
  { label: 'Quote tweet', organic: 4.4, paid: 3.1 },
  { label: 'YT deep-dive', organic: 8.7, paid: 7.9 },
  { label: 'YT short', organic: 5.2, paid: 3.4 },
  { label: 'TG pinned', organic: 9.3, paid: 8.6 },
];

const W = 560;
const H = 200;
const PAD = 28;

function LineChart() {
  const min = 170;
  const max = 350;
  const xStep = (W - PAD * 2) / (GROWTH.length - 1);
  const y = (v: number) => H - PAD - ((v - min) / (max - min)) * (H - PAD * 2);
  const x = (i: number) => PAD + i * xStep;
  const line = GROWTH.map((g, i) => `${x(i)},${y(g.v)}`).join(' ');
  const area = `${PAD},${H - PAD} ${line} ${x(GROWTH.length - 1)},${H - PAD}`;
  const gridVals = [350, 300, 250, 200];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Follower growth over eight weeks">
      <defs>
        <linearGradient id="oc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.32" />
          <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* baseline gridlines + value labels */}
      {gridVals.map((g) => (
        <g key={g}>
          <line x1={PAD} x2={W - PAD} y1={y(g)} y2={y(g)} stroke="hsl(var(--hairline) / 0.5)" strokeWidth="1" />
          <text x={W - PAD + 2} y={y(g) + 3} className="font-mono-tnum" fontSize="9" fill="rgba(255,255,255,0.4)">
            {g}k
          </text>
        </g>
      ))}
      {/* baseline */}
      <line x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <polygon points={area} fill="url(#oc-fill)" />
      <polyline points={line} fill="none" stroke="hsl(var(--brand))" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {GROWTH.map((g, i) => (
        <g key={g.wk}>
          <circle cx={x(i)} cy={y(g.v)} r="2.6" fill="#fff" />
          <text x={x(i)} y={H - PAD + 14} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)">
            {g.wk}
          </text>
        </g>
      ))}
    </svg>
  );
}

function StackBar() {
  return (
    <div>
      <div className="flex h-3.5 w-full overflow-hidden rounded-pill">
        {AUDIENCE.map((a) => (
          <div
            key={a.label}
            style={{ width: `${a.pct}%` }}
            className={
              a.tone === 'mint'
                ? 'bg-mint'
                : a.tone === 'amber'
                  ? 'bg-amber-400'
                  : 'bg-brand'
            }
          />
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2.5">
        {AUDIENCE.map((a) => (
          <div key={a.label} className="flex items-center justify-between text-body-sm">
            <span className="flex items-center gap-2 text-white/70">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  a.tone === 'mint' ? 'bg-mint' : a.tone === 'amber' ? 'bg-amber-400' : 'bg-brand'
                }`}
              />
              {a.label}
            </span>
            <span className="font-mono-tnum num-display text-body-sm text-white">{a.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormatBars() {
  const maxV = 10;
  return (
    <div className="flex flex-col gap-3.5">
      {FORMATS.map((f) => (
        <div key={f.label}>
          <div className="mb-1.5 flex items-center justify-between text-eyebrow text-white/55">
            <span>{f.label}</span>
            <span className="font-mono-tnum text-white/80">
              {f.organic.toFixed(1)}% org · {f.paid.toFixed(1)}% paid
            </span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded-sm bg-white/5">
            {/* organic (back, full tone) */}
            <div
              className="absolute inset-y-0 left-0 rounded-sm bg-mint/30"
              style={{ width: `${(f.organic / maxV) * 100}%` }}
            />
            {/* paid (front, brand) */}
            <div
              className="absolute inset-y-0 left-0 rounded-sm bg-gradient-brand"
              style={{ width: `${(f.paid / maxV) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Dark on-chain terminal punctuation: a real-looking analytics console with
 *  a follower-growth line chart, audience authenticity stack, and paid-vs-organic
 *  format bars. One focal red glow on the live verdict card. */
export default function OnchainDashboard() {
  return (
    <section className="px-3 py-4">
      <Container>
        <div className="surface-onchain overflow-hidden rounded-xl p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-mint">Live profile · vetting console</span>
              <h2 className="mt-3 display-lg font-display text-h3 text-white">
                One creator, every on-chain signal
              </h2>
              <p className="mt-3 max-w-[44ch] text-body text-white/55">
                This is the verdict surface a brand sees before funding a deal —
                growth, audience authenticity, and format ROI on a single pane.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="chip chip-onchain">@degenmaxi.eth</span>
              <span className="chip chip-onchain">Base · Solana</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Follower growth — lead, spans wide */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 lg:col-span-7">
              <div className="flex items-baseline justify-between">
                <span className="text-body-sm font-semibold text-white/80">Follower growth</span>
                <span className="font-mono-tnum text-body-sm text-mint">+87.4% · 8 wk</span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="num-display font-mono-tnum text-h3 leading-none text-white">341k</span>
                <span className="mb-1 text-eyebrow text-white/40">real reach</span>
              </div>
              <div className="mt-4">
                <LineChart />
              </div>
            </div>

            {/* Audience authenticity */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 lg:col-span-5">
              <div className="flex items-baseline justify-between">
                <span className="text-body-sm font-semibold text-white/80">Audience authenticity</span>
                <span className="font-mono-tnum text-body-sm text-mint">92 / 100</span>
              </div>
              <p className="mt-1 mb-5 text-eyebrow text-white/40">
                Real-follower share, bot & farm filtered
              </p>
              <StackBar />
            </div>

            {/* Format ROI bars */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 lg:col-span-7">
              <div className="flex items-baseline justify-between">
                <span className="text-body-sm font-semibold text-white/80">Engagement by format</span>
                <span className="font-mono-tnum text-eyebrow text-white/45">organic vs paid</span>
              </div>
              <div className="mt-5">
                <FormatBars />
              </div>
            </div>

            {/* Verdict card — single focal glow */}
            <div className="glow-brand flex flex-col justify-between rounded-lg border border-brand/40 bg-white/[0.03] p-5 lg:col-span-5">
              <div>
                <span className="chip chip-brand">Kolio verdict</span>
                <p className="mt-4 text-body text-white/70">
                  Reach is real, bot ratio is low, and organic beats paid — this
                  creator&rsquo;s audience trusts sponsored calls.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <div className="num-display font-mono-tnum text-h4 leading-none text-white">8%</div>
                  <div className="mt-1 text-eyebrow text-white/45">bot & farm ratio</div>
                </div>
                <div>
                  <div className="num-display font-mono-tnum text-h4 leading-none text-mint">6.4%</div>
                  <div className="mt-1 text-eyebrow text-white/45">avg organic eng.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
