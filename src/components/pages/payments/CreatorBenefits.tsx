import { Zap, Coins, Globe, ShieldCheck, LayoutDashboard, Headphones } from 'lucide-react';
import Container from '@/components/ui/Container';

const CARDS = [
  {
    Icon: Zap,
    title: 'Fast payouts',
    body: 'KOLs onboard once. Once deliverables are verified, funds land on-chain in minutes — or in their bank in 1-3 days.',
  },
  {
    Icon: Coins,
    title: 'No hidden cuts',
    body: 'KOLs get the full amount you approve. Network fees are abstracted away and Kolio doesn’t skim the payout.',
  },
  {
    Icon: Globe,
    title: 'Paid in their currency',
    body: 'Stablecoins, native tokens, or fiat across 180+ countries — KOLs choose how they get paid.',
  },
  {
    Icon: ShieldCheck,
    title: 'Escrow they can see',
    body: 'The budget is locked before work starts, so KOLs know the money is real before they post.',
  },
  {
    Icon: LayoutDashboard,
    title: 'Transparent payout dashboard',
    body: 'KOLs see payout history, pending releases, and status — all in one place, all on-chain.',
  },
  {
    Icon: Headphones,
    title: 'Dedicated support',
    body: 'We handle KOL questions about payouts, wallets, and onboarding, so your team doesn’t have to.',
  },
];

/** Benefits to KOLs — 6 icon cards on soft tiles. */
export default function CreatorBenefits() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Kolio payouts are great for KOLs, and your brand
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Crypto KOLs prefer brands that pay through Kolio because it means
            escrowed budgets, fast on-chain payouts, and full transparency from
            brief to settlement.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {CARDS.map(({ Icon, title, body }) => (
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
