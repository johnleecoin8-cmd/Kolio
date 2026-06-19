import { Wallet, SlidersHorizontal, ShieldCheck, Link2, CheckCircle2, Coins } from 'lucide-react';
import Container from '@/components/ui/Container';

const STEPS = [
  {
    Icon: Wallet,
    title: '1. Fund your campaign',
    body: 'Deposit stablecoins or fiat into your Kolio campaign wallet.',
  },
  {
    Icon: SlidersHorizontal,
    title: '2. Set up payouts',
    body: 'Choose KOLs, amounts, deliverables, chains, and payout currencies.',
  },
  {
    Icon: ShieldCheck,
    title: '3. KOL onboarding',
    body: 'KOLs verify their wallet and identity once, the first time they’re paid.',
  },
  {
    Icon: Link2,
    title: '4. Budget held in escrow',
    body: 'The budget locks in escrow — visible and verifiable for both sides.',
  },
  {
    Icon: CheckCircle2,
    title: '5. Deliverables verified',
    body: 'Posts go live and reach metrics are confirmed against the brief.',
  },
  {
    Icon: Coins,
    title: '6. Payout released on-chain',
    body: 'Kolio releases funds to each KOL and writes the transaction on-chain.',
  },
];

/** How it works — 6 numbered steps. */
export default function HowItWorks() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">How it works</h2>
          <p className="mt-4 text-body-md text-foreground/70">
            From funded campaign to verified payout in six simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-xl bg-background-soft p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.75} />
                <h3 className="text-body font-bold text-ink">{title}</h3>
              </div>
              <p className="mt-3 text-body-sm text-foreground/70">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
