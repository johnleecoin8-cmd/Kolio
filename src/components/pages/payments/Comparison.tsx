import { X, Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const BAD = [
  'Manual transfers across 5 chains',
  '"Did the payment land?" DMs',
  'Budget paid before delivery',
  'No escrow, no recourse',
  'Tx hashes pasted into a spreadsheet',
];

const GOOD = [
  'One funded campaign wallet',
  'Escrow released on verified delivery',
  'Stablecoin or fiat payouts',
  'On-chain audit trail by default',
  'KOL self-service payout dashboard',
];

function Pill({
  label,
  good,
}: {
  label: string;
  good?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm">
      {good ? (
        <Check className="h-4 w-4 shrink-0 rounded-full bg-positive p-0.5 text-white" />
      ) : (
        <X className="h-4 w-4 shrink-0 rounded-full bg-negative p-0.5 text-white" />
      )}
      {label}
    </span>
  );
}

/** Escrow vs manual — two-column comparison (gray "Manual" vs purple "Kolio escrow"). */
export default function Comparison() {
  return (
    <section className="bg-background pb-12 md:pb-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Fund one campaign, not a hundred transfers
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Spend your time finding the right KOLs. Kolio handles escrow, payout
            rails, and the on-chain paper trail.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* 100+ invoices — gray */}
          <div className="rounded-xl bg-background-soft p-8 md:p-10">
            <h3 className="font-display text-[2rem] uppercase leading-none text-ink md:text-[2.5rem]">
              Manual payouts
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {BAD.map((b) => (
                <Pill key={b} label={b} />
              ))}
            </div>
          </div>

          {/* 1 invoice — purple */}
          <div className="rounded-xl bg-purple p-8 md:p-10">
            <h3 className="font-display text-[2rem] uppercase leading-none text-ink md:text-[2.5rem]">
              Kolio escrow
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {GOOD.map((g) => (
                <Pill key={g} label={g} good />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
