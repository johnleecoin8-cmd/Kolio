import { Users, Inbox, LineChart, Coins, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CARDS = [
  {
    Icon: Users,
    title: 'Manage',
    body: 'Keep every KOL relationship in one place and the details out of your head.',
    href: '/features/influencer-management',
  },
  {
    Icon: Inbox,
    title: 'Outreach',
    body: 'Reach more KOLs and build long-term relationships without drowning in DMs.',
    href: '/features/influencer-email-finder',
  },
  {
    Icon: LineChart,
    title: 'Track',
    body: 'Automatically track campaign performance with on-chain attribution built in.',
    href: '/features/influencer-tracking',
  },
  {
    Icon: Coins,
    title: 'Pay',
    body: 'Settle KOLs with on-chain payments and escrow — no invoicing back-and-forth.',
    href: '/influencer-payments',
  },
];

/** Cross-feature grid linking discovery into the full Kolio workflow. */
export default function WorkflowGrid() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <span className="eyebrow">One connected workflow</span>
          <h2 className="mt-4 display-lg font-display text-[1.75rem] leading-[1.12] md:text-[2.5rem] text-foreground">
            Finding KOLs is one thing. Running campaigns is another.
          </h2>
          <p className="mt-4 text-body md:text-body-md text-foreground/70">
            Kolio connects discovery to your entire KOL workflow and carries you from first search
            to on-chain payout, all in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="card-kit group flex flex-col p-6 transition hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-coral-bg text-brand">
                <c.Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-4 text-body font-semibold text-foreground">{c.title}</p>
              <p className="mt-2 flex-1 text-body-sm text-foreground/70">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-body-sm font-semibold text-brand">
                Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
