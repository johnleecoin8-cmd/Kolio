import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Point = { title: string; body: string };

type Block = {
  visual: ReactNode;
  heading: string;
  points: Point[];
  reverse?: boolean;
};

/** Brand-neutral payout-rails visual built from divs. */
function RailsVisual() {
  const rails = [
    { chain: 'USDC · Ethereum', amt: '$1,000.00' },
    { chain: 'USDT · Solana', amt: '$640.00' },
    { chain: 'USDC · Base', amt: '$1,547.00' },
    { chain: 'Bank · SEPA (EUR)', amt: '€890.00' },
  ];
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
      <p className="text-[13px] font-semibold text-ink">Payout rails</p>
      <div className="mt-4 space-y-2.5">
        {rails.map((r) => (
          <div
            key={r.chain}
            className="flex items-center justify-between rounded-lg bg-background-soft px-3.5 py-3"
          >
            <span className="flex items-center gap-2.5 text-[13px] text-ink">
              <span className="h-2 w-2 rounded-full bg-positive" />
              {r.chain}
            </span>
            <span className="text-[13px] font-semibold text-ink">{r.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Brand-neutral escrow timeline visual. */
function EscrowVisual() {
  const steps = [
    { l: 'Budget funded', done: true },
    { l: 'Held in escrow', done: true },
    { l: 'Deliverables verified', done: true },
    { l: 'Payout released', done: false },
  ];
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
      <p className="text-[13px] font-semibold text-ink">Escrow status</p>
      <div className="mt-4 space-y-3.5">
        {steps.map((s) => (
          <div key={s.l} className="flex items-center gap-3">
            <span
              className={
                'h-2.5 w-2.5 shrink-0 rounded-full ' +
                (s.done ? 'bg-ink' : 'bg-gray-200')
              }
            />
            <span className={s.done ? 'text-[13px] text-ink' : 'text-[13px] text-gray-400'}>
              {s.l}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg bg-background-soft px-3.5 py-3 text-[12px] text-gray-600">
        Funds release automatically when posts are live and metrics are confirmed.
      </div>
    </div>
  );
}

/** Brand-neutral attribution / audit visual. */
function AuditVisual() {
  const rows = [
    { tx: '0x9f…41a2', label: 'Payout · @defi_degen' },
    { tx: '0x3c…88bd', label: 'Payout · @l2_maxi' },
    { tx: '0x71…0e44', label: 'Refund · unverified post' },
  ];
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
      <p className="text-[13px] font-semibold text-ink">On-chain audit trail</p>
      <div className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.tx}
            className="flex items-center justify-between rounded-lg bg-background-soft px-3.5 py-3"
          >
            <span className="text-[13px] text-ink">{r.label}</span>
            <span className="font-mono text-[12px] text-gray-500">{r.tx}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const BLOCKS: Block[] = [
  {
    visual: <RailsVisual />,
    heading: 'Pay any KOL, on any chain, in any currency',
    points: [
      {
        title: 'Stablecoins or fiat, KOL’s choice',
        body: 'Pay in USDC, USDT, ETH, or settle to a bank account. Set automatic payouts or review-and-approve. You stay in control.',
      },
      {
        title: 'Multi-chain in seconds',
        body: 'Ethereum, Solana, Base, Arbitrum and more — Kolio routes each payout to the chain the KOL actually uses.',
      },
      {
        title: 'No gas surprises for KOLs',
        body: 'KOLs receive the full approved amount. Network fees are abstracted away, with nothing deducted on arrival.',
      },
    ],
  },
  {
    visual: <EscrowVisual />,
    heading: 'Escrow that pays on proof, not promises',
    reverse: true,
    points: [
      {
        title: 'Budget locked up front',
        body: 'Fund the campaign once and the budget sits in escrow — KOLs see it’s real before they commit.',
      },
      {
        title: 'Release on verified delivery',
        body: 'Funds unlock automatically when posts go live and reach metrics are confirmed. No chasing, no fronting cash.',
      },
      {
        title: 'KOL payout dashboard',
        body: 'KOLs track status, pending releases, and history themselves. No more "did it land?" DMs.',
      },
    ],
  },
  {
    visual: <AuditVisual />,
    heading: 'Attribution and audit — fully on-chain',
    points: [
      {
        title: 'Every payout is verifiable',
        body: 'Each release maps to a tx hash and a deliverable, so finance and partners can audit the whole campaign on-chain.',
      },
      {
        title: 'Referral attribution built in',
        body: 'Tie wallets and referral links to each KOL to see exactly which creator drove on-chain conversions.',
      },
      {
        title: 'Balance and spend at a glance',
        body: 'Track escrowed balance, funds in flight, and total spent across every campaign in one view.',
      },
    ],
  },
];

function FeatureBlock({ visual, heading, points, reverse }: Block) {
  return (
    <div className="overflow-hidden rounded-xl bg-background-soft p-6 md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className={reverse ? 'md:order-2' : ''}>{visual}</div>
        <div className={reverse ? 'md:order-1' : ''}>
          <h3 className="text-body-lg font-bold leading-tight text-ink">{heading}</h3>
          <div className="mt-6 space-y-5">
            {points.map((p) => (
              <div key={p.title}>
                <p className="text-body-md font-bold text-ink">{p.title}</p>
                <p className="mt-1 text-body-sm text-foreground/70">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonA href="/demo-confirmation" variant="primary">
              Request a demo
            </ButtonA>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Three alternating feature blocks under "Pay crypto KOLs globally". */
export default function FeatureBlocks() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Pay crypto KOLs globally, without the headache
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Fund campaigns once, escrow the budget, and let Kolio handle payout
            rails and the on-chain record so you can move on to the next launch.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {BLOCKS.map((b) => (
            <FeatureBlock key={b.heading} {...b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
