import { Users, Inbox, LineChart, Coins } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

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

/** Cross-feature grid linking to the rest of the Kolio workflow. */
export default function WorkflowGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHeading>
            Finding KOLs is one thing. Running campaigns is another.
          </SectionHeading>
          <p className="mt-4 text-body md:text-body-md text-foreground/75">
            Kolio connects discovery to your entire KOL workflow and carries you from first search
            to on-chain payout, all in one place.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.title} className="flex flex-col rounded-xl bg-background-soft p-6">
              <c.Icon className="h-6 w-6 text-brand" strokeWidth={2} />
              <p className="mt-4 text-body font-semibold text-foreground">{c.title}</p>
              <p className="mt-2 flex-1 text-body-sm text-foreground/75">{c.body}</p>
              <a
                href={c.href}
                className="mt-5 inline-flex w-fit items-center justify-center h-9 px-3.5 rounded-sm bg-white border border-gray-300 text-body-sm font-semibold text-gray-700 shadow-btn transition hover:bg-gray-50"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
