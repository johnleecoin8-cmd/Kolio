import { Lock, PackageCheck, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Focal dark on-chain section: escrow -> delivery -> release (USDC).
 * Uses .surface-onchain terminal panel, .font-mono-tnum amounts, mint "released"
 * chip on the active/final step, and .glow-brand on the live step. This is the
 * single dark punctuation moment on the page.
 */

type Step = {
  key: string;
  Icon: typeof Lock;
  label: string;
  state: string;
  amount: string;
  detail: string;
  active?: boolean;
  released?: boolean;
};

const STEPS: Step[] = [
  {
    key: 'escrow',
    Icon: Lock,
    label: '1 · Escrow funded',
    state: 'Locked',
    amount: '12,500.00',
    detail: 'Budget locked the moment the campaign is funded — verifiable by both sides.',
  },
  {
    key: 'delivery',
    Icon: PackageCheck,
    label: '2 · Deliverable verified',
    state: 'Confirmed',
    amount: '12,500.00',
    detail: 'Posts go live, reach is checked against the brief, the release is armed.',
    active: true,
  },
  {
    key: 'release',
    Icon: ArrowRight,
    label: '3 · Payout released',
    state: 'Released',
    amount: '12,375.00',
    detail: 'Funds settle to the KOL wallet in seconds and the tx is written on-chain.',
    released: true,
  },
];

export default function OnchainFlow() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="surface-onchain overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="max-w-[680px]">
            <span className="eyebrow">On-chain settlement</span>
            <h2 className="mt-3 display-lg text-h3 text-white">
              Escrow, delivery, release — every dollar traceable.
            </h2>
            <p className="mt-4 text-body-md text-white/65">
              No invoices, no net-30, no wires lost in compliance. The budget sits
              in escrow until deliverables clear, then USDC settles to the KOL and
              the receipt lives on-chain forever.
            </p>
          </div>

          {/* flow rail */}
          <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {STEPS.map((s, i) => (
              <FlowStep key={s.key} step={s} connectorAfter={i < STEPS.length - 1} />
            ))}
          </div>

          {/* settlement ledger line */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-body-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono-tnum">
              tx 0x9f3c…a21e · USDC · Base · settled in 4.1s
            </span>
            <span className="font-mono-tnum">
              gas <span className="text-mint">$0.002</span> · fee 1% · net to KOL{' '}
              <span className="text-white">$12,375.00</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FlowStep({ step, connectorAfter }: { step: Step; connectorAfter: boolean }) {
  const { Icon } = step;
  return (
    <>
      <div
        className={[
          'relative flex flex-col rounded-2xl border p-6 transition-colors',
          step.active
            ? 'glow-brand border-brand/40 bg-white/[0.06]'
            : 'border-white/10 bg-white/[0.03]',
        ].join(' ')}
      >
        <div className="flex items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.08] text-white">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          {step.released ? (
            <span className="chip chip-onchain">Released</span>
          ) : step.active ? (
            <span className="chip chip-brand">Live</span>
          ) : (
            <span className="chip bg-white/10 text-white/70">Locked</span>
          )}
        </div>

        <div className="mt-5 text-eyebrow uppercase tracking-wide text-white/45">
          {step.label}
        </div>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="font-mono-tnum text-body-sm text-white/50">USDC</span>
          <span
            className={[
              'num-display font-mono-tnum text-h4 leading-none',
              step.released ? 'text-mint' : 'text-white',
            ].join(' ')}
          >
            {step.amount}
          </span>
        </div>
        <div className="mt-1 text-eyebrow uppercase tracking-wide text-white/40">
          {step.state}
        </div>
        <p className="mt-4 text-body-sm leading-snug text-white/55">{step.detail}</p>
      </div>

      {connectorAfter && (
        <div className="hidden items-center justify-center md:flex">
          <ArrowRight className="h-6 w-6 text-white/30" strokeWidth={2} />
        </div>
      )}
    </>
  );
}
