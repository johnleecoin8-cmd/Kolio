import { Search, Inbox, LineChart, Coins } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';

type Card = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    Icon: Search,
    title: 'Discover',
    body: 'Find the right crypto KOLs across DeFi, NFTs, L1/L2, trading, and gaming, and know they fit before you reach out.',
  },
  {
    Icon: Inbox,
    title: 'Outreach',
    body: 'Reach more KOLs and build long-term relationships without drowning in DMs and inboxes.',
  },
  {
    Icon: LineChart,
    title: 'Attribute',
    body: 'Track on-chain conversions and campaign performance, and spend your time on strategy instead of guesswork.',
  },
  {
    Icon: Coins,
    title: 'Pay',
    body: 'Settle KOLs on-chain with escrow, cutting out invoicing back-and-forth and cross-border headaches.',
  },
];

const STATS = [
  ['300+', 'web3 brands & protocols'],
  ['50K+', 'vetted crypto KOLs'],
  ['100%', 'proof-based reach data'],
];

/** "Managing KOLs gets easy" — stat band + four workflow cards. */
export default function WorkflowGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        {/* later.com-inspired warm gradient stat band */}
        <div className="mb-14 grid gap-6 rounded-xl bg-gradient-brand px-6 py-10 text-center text-white sm:grid-cols-3 md:px-12">
          {STATS.map(([n, label]) => (
            <div key={label}>
              <p className="font-display text-[2.5rem] leading-none md:text-[3.25rem]">
                {n}
              </p>
              <p className="mt-2 text-body-sm text-white/85">{label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            Managing KOLs gets easy when everything&rsquo;s in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Kolio connects your entire KOL workflow, from discovery to on-chain
            payout, so you spend less time on admin and more time building
            relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl bg-background-soft p-6"
            >
              <Icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              <h3 className="mt-4 text-body-sm font-bold text-ink">{title}</h3>
              <p className="mt-3 flex-1 text-body-sm text-foreground/70">
                {body}
              </p>
              <a
                href="/demo-confirmation"
                className="mt-5 inline-flex w-fit items-center rounded-sm bg-gray-200 px-3.5 py-2 text-body-sm font-semibold text-ink transition hover:bg-gray-300"
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
