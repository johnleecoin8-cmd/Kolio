import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const ITEMS = [
  'Paying KOLs across multiple chains',
  'Running global crypto campaigns',
  'Need escrow before you commit budget',
  'Want stablecoin or fiat payouts',
  'Running referral & affiliate programs',
  'Need an on-chain audit trail',
];

/** Is Kolio Payments right for you — soft panel with check pills. */
export default function RightForYou() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-14 md:px-16 md:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-display text-h4 text-ink md:text-h3">
              Is Kolio Payments right for you?
            </h2>
            <p className="mt-4 text-body-md text-foreground/70">
              Perfect if you run crypto KOL campaigns at scale and need to escrow
              budget, pay out across chains, and keep every transaction verifiable
              on-chain — without manual transfers or trust gaps.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {ITEMS.map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm"
              >
                <Check className="h-4 w-4 shrink-0 rounded-full bg-positive p-0.5 text-white" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
