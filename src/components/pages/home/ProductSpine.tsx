import PillarTabs, { Pillar } from '@/components/kit/PillarTabs';

/* ---- div-built visuals for each pillar (no external assets) ---- */

function DiscoverVisual() {
  const rows = [
    { h: '@chaintide', f: '184K', s: 91 },
    { h: '@degenmaria', f: '76K', s: 84 },
    { h: '@l2_oracle', f: '312K', s: 88 },
  ];
  return (
    <div className="card-kit p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip chip-ink">Kolio index</span>
        <span className="font-mono-tnum text-eyebrow text-foreground/45">12,480 KOLs</span>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.h} className="flex items-center gap-3 rounded-lg border border-hairline bg-white p-3">
            <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
              {r.h.replace('@', '').slice(0, 2).toUpperCase()}
            </span>
            <span className="flex-1">
              <span className="block text-body-sm font-semibold text-foreground">{r.h}</span>
              <span className="block font-mono-tnum text-eyebrow text-foreground/50">{r.f} reach</span>
            </span>
            <span className="num-display text-body-lg text-brand">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VetVisual() {
  const bars = [
    { label: 'Real audience', pct: 92, tone: 'bg-brand' },
    { label: 'Engagement quality', pct: 78, tone: 'bg-brand' },
    { label: 'Bot / farmed', pct: 8, tone: 'bg-gray-300' },
  ];
  return (
    <div className="card-kit p-6">
      <div className="mb-5 flex items-baseline justify-between">
        <span className="text-body-sm font-semibold text-foreground">Audience authenticity</span>
        <span className="num-display text-h4 text-brand">92<span className="text-body-md">/100</span></span>
      </div>
      <div className="space-y-4">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1.5 flex items-center justify-between text-eyebrow text-foreground/55">
              <span>{b.label}</span>
              <span className="font-mono-tnum">{b.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-pill bg-gray-100">
              <div className={`h-full rounded-pill ${b.tone}`} style={{ width: `${b.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManageVisual() {
  const steps = [
    { label: 'Brief sent', done: true },
    { label: 'Draft approved', done: true },
    { label: 'Posted live', done: true },
    { label: 'Awaiting payout', done: false },
  ];
  return (
    <div className="card-kit p-6">
      <span className="chip chip-brand mb-5">Deal #4192</span>
      <ol className="relative space-y-4 border-l border-hairline pl-5">
        {steps.map((s) => (
          <li key={s.label} className="relative">
            <span
              className={`absolute -left-[27px] top-0.5 grid h-4 w-4 place-items-center rounded-pill ${s.done ? 'bg-brand' : 'border-2 border-gray-300 bg-white'}`}
            >
              {s.done && <span className="h-1.5 w-1.5 rounded-pill bg-white" />}
            </span>
            <span className={`text-body-sm ${s.done ? 'font-semibold text-foreground' : 'text-foreground/55'}`}>
              {s.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PayVisual() {
  return (
    <div className="surface-onchain glow-brand rounded-xl p-6 text-white">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip chip-onchain">Escrow · on-chain</span>
        <span className="font-mono-tnum text-eyebrow text-white/55">Base</span>
      </div>
      <div className="text-eyebrow uppercase tracking-widest text-white/50">Released on delivery</div>
      <div className="mt-2 font-mono-tnum text-h2 leading-none text-white">8,500.00<span className="ml-2 text-body-md text-mint">USDC</span></div>
      <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4 font-mono-tnum text-eyebrow text-white/55">
        <div className="flex justify-between"><span>to</span><span>0x7a3f…e21b</span></div>
        <div className="flex justify-between"><span>status</span><span className="text-mint">settled</span></div>
        <div className="flex justify-between"><span>gas</span><span>0.0004 ETH</span></div>
      </div>
    </div>
  );
}

const PILLARS: Pillar[] = [
  {
    key: 'discover',
    label: 'Discover',
    heading: 'Find every crypto KOL that actually moves your market',
    body: 'Search 12,000+ vetted KOLs across X, YouTube, TikTok, and Telegram. Filter by audience, niche, chain, and a portable Proof Score — not vanity follower counts.',
    visual: <DiscoverVisual />,
  },
  {
    key: 'vet',
    label: 'Vet',
    heading: 'See real reach before a single dollar leaves escrow',
    body: 'Every KOL carries an authenticity breakdown — real audience, engagement quality, and farmed-follower share — so bots and bought reach surface before you commit budget.',
    visual: <VetVisual />,
  },
  {
    key: 'manage',
    label: 'Manage',
    heading: 'Run the whole deal from brief to delivery in one place',
    body: 'Briefs, draft approvals, schedules, and deliverables live in one shared workflow. No more DMs, spreadsheets, and a dozen group chats per campaign.',
    visual: <ManageVisual />,
  },
  {
    key: 'pay',
    label: 'Pay',
    heading: 'Pay on-chain, with escrow, anywhere in the world',
    body: 'Hold budget in escrow and release on delivery. Settle in stablecoins with on-chain attribution tying every payout back to the sign-ups, swaps, and mints it drove.',
    visual: <PayVisual />,
  },
];

/** Discover / Vet / Manage / Pay product spine for the homepage. */
export default function ProductSpine() {
  return <PillarTabs eyebrow="One connected deal loop" pillars={PILLARS} />;
}
