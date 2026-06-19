/** Brand-neutral visual mockups for the KOL database feature rows.
 *  Built with divs only — no Modash imagery, no remote assets. */

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-nav">
      {children}
    </div>
  );
}

/** Proof-based vetting card: reach, audience quality, bot share, sponsor history. */
export function VettingVisual() {
  const stats = [
    { label: 'Real reach', value: '412K', note: 'verified, not follower count' },
    { label: 'Audience quality', value: '94%', note: 'real holders & traders' },
    { label: 'Bot / fake share', value: '6%', note: 'below 10% threshold' },
    { label: 'Genuine engagement', value: '4.8%', note: '30-day rolling' },
  ];
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-gradient-brand opacity-80" />
          <div>
            <div className="text-body-sm font-semibold text-foreground">DeFi Dad</div>
            <div className="text-eyebrow text-foreground/50">@thedefidad · DeFi</div>
          </div>
        </div>
        <span className="rounded-pill bg-gradient-brand px-3 py-1 text-eyebrow font-bold text-white">
          Vetted
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-gray-100 p-3">
            <div className="text-eyebrow uppercase tracking-wide text-foreground/50">
              {s.label}
            </div>
            <div className="mt-1 text-h4 font-semibold text-foreground">{s.value}</div>
            <div className="text-eyebrow text-foreground/50">{s.note}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/** On-chain payment & escrow flow mockup. */
export function PaymentsVisual() {
  const steps = [
    { label: 'Fund escrow', amount: '$8,500 USDC', done: true },
    { label: 'KOL delivers content', amount: '3 posts · 2 threads', done: true },
    { label: 'Approve & release', amount: 'on-chain payout', done: false },
  ];
  return (
    <Panel>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-body-sm font-semibold text-foreground">Campaign escrow</div>
        <span className="text-eyebrow text-foreground/50">Settled on-chain</span>
      </div>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3"
          >
            <span
              className={
                'flex h-7 w-7 items-center justify-center rounded-full text-eyebrow font-bold ' +
                (s.done ? 'bg-gradient-brand text-white' : 'bg-gray-100 text-foreground/50')
              }
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="text-body-sm font-semibold text-foreground">{s.label}</div>
              <div className="text-eyebrow text-foreground/50">{s.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/** Attribution dashboard mockup — bars by channel. */
export function AttributionVisual() {
  const bars = [
    { label: 'X / Twitter', pct: 88, value: '1,204 conv.' },
    { label: 'YouTube', pct: 62, value: '730 conv.' },
    { label: 'Telegram', pct: 44, value: '512 conv.' },
    { label: 'TikTok', pct: 28, value: '318 conv.' },
  ];
  return (
    <Panel>
      <div className="mb-5 flex items-center justify-between">
        <div className="text-body-sm font-semibold text-foreground">
          On-chain attribution
        </div>
        <span className="text-eyebrow text-foreground/50">by channel · 30d</span>
      </div>
      <div className="space-y-4">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1 flex items-center justify-between text-eyebrow text-foreground/60">
              <span>{b.label}</span>
              <span className="tabular-nums">{b.value}</span>
            </div>
            <div className="h-2.5 w-full rounded-pill bg-gray-100">
              <div
                className="h-2.5 rounded-pill bg-gradient-brand"
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
