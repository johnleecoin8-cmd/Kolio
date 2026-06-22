import Container from '@/components/ui/Container';
import StatTrio from '@/components/kit/StatTrio';

type Stage = 'Negotiating' | 'In production' | 'Live' | 'Settled';

type Row = {
  handle: string;
  platform: string;
  campaign: string;
  stage: Stage;
  value: string;
  payout: string;
  payoutState: 'Escrowed' | 'Released' | 'Pending';
};

const ROWS: Row[] = [
  {
    handle: '@defi_degen',
    platform: 'X · 412K',
    campaign: 'Perp DEX launch',
    stage: 'Live',
    value: '8,500',
    payout: '4,250',
    payoutState: 'Escrowed',
  },
  {
    handle: '@l2maxi',
    platform: 'YouTube · 326K',
    campaign: 'Rollup mainnet',
    stage: 'In production',
    value: '12,000',
    payout: '0',
    payoutState: 'Escrowed',
  },
  {
    handle: '@chartwizard',
    platform: 'X · 521K',
    campaign: 'Token listing',
    stage: 'Settled',
    value: '6,000',
    payout: '6,000',
    payoutState: 'Released',
  },
  {
    handle: '@gamefi_guild',
    platform: 'TikTok · 97K',
    campaign: 'NFT mint drop',
    stage: 'Negotiating',
    value: '3,200',
    payout: '0',
    payoutState: 'Pending',
  },
  {
    handle: '@nftcurator',
    platform: 'Telegram · 188K',
    campaign: 'Airdrop S2',
    stage: 'Live',
    value: '4,800',
    payout: '2,400',
    payoutState: 'Escrowed',
  },
];

const STAGE_CHIP: Record<Stage, string> = {
  Negotiating: 'chip chip-ink',
  'In production': 'chip chip-ink',
  Live: 'chip chip-brand',
  Settled: 'chip chip-onchain',
};

const PAYOUT_TONE: Record<Row['payoutState'], string> = {
  Escrowed: 'text-brand',
  Released: 'text-mint',
  Pending: 'text-foreground/45',
};

/**
 * Relationship/CRM framing: a single card-kit table that shows every
 * collaboration in one view — stage, deal value, and on-chain payout state —
 * punctuated by a dark on-chain settlement panel.
 */
export default function CollaborationView() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Relationship system of record</span>
          <h2 className="display-lg mt-3 font-display text-[2rem] text-ink sm:text-[2.75rem] md:text-[3.25rem]">
            A single view of every collaboration
          </h2>
          <p className="mt-4 text-body-md text-foreground/65">
            Stop reconstructing deals from DMs and spreadsheets. Every KOL,
            every stage, and every on-chain payout lives in one auditable
            roster.
          </p>
        </div>

        {/* CRM table — the lead card */}
        <div className="card-kit mt-12 overflow-hidden p-0">
          {/* toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-5 py-4 md:px-6">
            <div className="flex items-baseline gap-3">
              <p className="text-body-md font-bold text-ink">Collaborations</p>
              <span className="num-display text-body text-foreground/45">128 active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="chip chip-ink">All stages</span>
              <span className="chip chip-ink">This quarter</span>
            </div>
          </div>

          {/* column headers */}
          <div className="hidden grid-cols-[1.4fr_1fr_1.2fr_1.1fr_0.9fr_1fr] gap-4 border-b border-hairline px-6 py-3 text-eyebrow font-semibold text-foreground/45 lg:grid">
            <span>KOL</span>
            <span>Platform · reach</span>
            <span>Campaign</span>
            <span>Stage</span>
            <span>Deal (USDC)</span>
            <span>Payout</span>
          </div>

          <div className="divide-y divide-hairline">
            {ROWS.map((r) => (
              <div
                key={r.handle}
                className="grid grid-cols-2 gap-x-4 gap-y-2 px-5 py-4 text-body-sm md:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr_1.1fr_0.9fr_1fr] lg:items-center"
              >
                <span className="font-semibold text-ink">{r.handle}</span>
                <span className="text-right text-foreground/60 lg:text-left">{r.platform}</span>
                <span className="text-foreground/70">{r.campaign}</span>
                <span className="text-right lg:text-left">
                  <span className={STAGE_CHIP[r.stage]}>{r.stage}</span>
                </span>
                <span className="font-mono-tnum text-ink">${r.value}</span>
                <span className="text-right lg:text-left">
                  <span className={`font-mono-tnum ${PAYOUT_TONE[r.payoutState]}`}>
                    ${r.payout}
                  </span>
                  <span className="ml-2 hidden text-[0.7rem] text-foreground/40 lg:inline">
                    {r.payoutState}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* footer summary */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-gray-50/60 px-5 py-4 md:px-6">
            <span className="text-body-sm text-foreground/55">
              5 of 128 collaborations shown
            </span>
            <span className="font-mono-tnum text-body-sm text-foreground/70">
              Escrowed: <span className="text-brand">$6,650</span> · Released:{' '}
              <span className="text-mint">$6,000</span>
            </span>
          </div>
        </div>

        {/* dark on-chain punctuation: settlement ledger */}
        <div className="surface-onchain mt-6 overflow-hidden rounded-2xl p-6 md:p-8">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="eyebrow">On-chain settlement</span>
              <h3 className="display-lg mt-3 text-h4 text-white">
                Every payout reconciles to a transaction hash
              </h3>
              <p className="mt-3 max-w-[420px] text-body-sm text-white/60">
                The roster isn't a CRM that hopes the money moved. Each released
                payout links straight to the on-chain transfer, so finance and
                marketing read from the same source of truth.
              </p>
            </div>

            {/* ledger lines */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
              {[
                { to: '@chartwizard', amt: '6,000', tx: '0x8f3a…c41b' },
                { to: '@defi_degen', amt: '4,250', tx: '0x2d90…ef07' },
                { to: '@nftcurator', amt: '2,400', tx: '0x71be…9a22' },
              ].map((l, i) => (
                <div
                  key={l.to}
                  className={`flex items-center justify-between gap-3 py-3 font-mono-tnum text-body-sm ${
                    i > 0 ? 'border-t border-white/10' : ''
                  }`}
                >
                  <span className="text-white/70">{l.to}</span>
                  <span className="text-mint">+${l.amt} USDC</span>
                  <span className="hidden text-white/40 sm:inline">{l.tx}</span>
                  <span className="chip chip-onchain">Confirmed</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <StatTrio
        stats={[
          { value: 128, label: 'Active KOL relationships tracked' },
          { value: 0, label: 'Spreadsheets reconciled by hand', suffix: '' },
          { value: 100, label: 'Payouts matched to a tx hash', suffix: '%' },
        ]}
        source="Source: Kolio roster telemetry, illustrative workspace (2026)"
      />
    </section>
  );
}
