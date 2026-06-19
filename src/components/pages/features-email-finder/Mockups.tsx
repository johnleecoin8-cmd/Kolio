import { Mail, Inbox, Filter } from 'lucide-react';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

/** Bulk outreach mockup — a list of personalized KOL emails queued to send. */
export function BulkEmailMockup() {
  const rows = [
    { name: '@l2_alpha', note: 'gm {first} — your Arbitrum thread' },
    { name: '@nft_curator', note: 'gm {first} — drop collab for {project}' },
    { name: '@defi_signal', note: 'gm {first} — testnet review brief' },
    { name: '@chain_daily', note: 'gm {first} — TGE announcement push' },
  ];
  return (
    <Frame>
      <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-3">
        <Mail className="h-5 w-5 text-foreground/70" />
        <span className="text-body font-semibold text-foreground">
          Outreach sequence
        </span>
        <span className="ml-auto rounded-full bg-gradient-brand px-3 py-1 text-body-sm font-semibold text-white">
          {rows.length} queued
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-lg border border-black/10 bg-background-soft p-3"
          >
            <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-brand" />
            <div className="min-w-0">
              <div className="text-body-sm font-semibold text-foreground">
                {r.name}
              </div>
              <div className="truncate text-body-sm text-foreground/60">
                {r.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** Discovery filter mockup — niche + reach filters with result count. */
export function FilterMockup() {
  const filters = [
    { l: 'Niche: DeFi, L1/L2', on: true },
    { l: 'Public contact available', on: true },
    { l: 'Posted in last 30 days', on: true },
    { l: 'Avg. views: 25K+', on: true },
    { l: 'Fake followers under 5%', on: false },
  ];
  return (
    <Frame>
      <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-3">
        <Filter className="h-5 w-5 text-foreground/70" />
        <span className="text-body font-semibold text-foreground">Filters</span>
        <span className="ml-auto text-body-sm text-foreground/60">
          3,148 KOLs match
        </span>
      </div>
      <div className="space-y-3">
        {filters.map((f) => (
          <div key={f.l} className="flex items-center gap-3">
            <span
              className={`h-5 w-9 rounded-full p-0.5 ${
                f.on ? 'bg-gradient-brand' : 'bg-black/10'
              }`}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white transition-transform ${
                  f.on ? 'translate-x-4' : ''
                }`}
              />
            </span>
            <span className="text-body text-foreground/80">{f.l}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** Inbox mockup — KOL emails sorted by deal pipeline stage. */
export function InboxMockup() {
  const stages = [
    { l: 'New replies', n: 6, w: 'w-[80%]' },
    { l: 'In negotiation', n: 4, w: 'w-[55%]' },
    { l: 'In escrow', n: 3, w: 'w-[40%]' },
    { l: 'Live campaign', n: 2, w: 'w-[28%]' },
  ];
  return (
    <Frame>
      <div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-3">
        <Inbox className="h-5 w-5 text-foreground/70" />
        <span className="text-body font-semibold text-foreground">
          KOL inbox
        </span>
      </div>
      <div className="space-y-4">
        {stages.map((s) => (
          <div key={s.l}>
            <div className="mb-1 flex justify-between text-body-sm text-foreground/70">
              <span>{s.l}</span>
              <span className="font-semibold text-foreground">{s.n}</span>
            </div>
            <div className="h-2 rounded-full bg-black/5">
              <div className={`h-2 rounded-full bg-gradient-brand ${s.w}`} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
