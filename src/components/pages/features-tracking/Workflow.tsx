import Container from '@/components/ui/Container';
import { Users, Search, Send, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Card = {
  Icon: LucideIcon;
  title: string;
  body: string;
  href: string;
};

const CARDS: Card[] = [
  {
    Icon: Users,
    title: 'Manage',
    body: 'Keep every KOL relationship in one place, with deal terms and history out of your head and your DMs.',
    href: '/demo-confirmation',
  },
  {
    Icon: Search,
    title: 'Discover',
    body: 'Find the right crypto KOLs across DeFi, NFTs, L1/L2, trading, and gaming, and verify their real audience before you reach out.',
    href: '/demo-confirmation',
  },
  {
    Icon: Send,
    title: 'Outreach',
    body: 'Reach more KOLs and build long-term partnerships without drowning in Telegram threads and scattered DMs.',
    href: '/demo-confirmation',
  },
  {
    Icon: Wallet,
    title: 'Pay',
    body: 'Settle deals with on-chain payments and escrow, so payouts release against verified deliverables, not promises.',
    href: '/demo-confirmation',
  },
];

/** "Track campaigns. See performance." — full workflow 4 cards. */
export default function Workflow() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2.25rem]">
            Track campaigns. Verify reach. Scale what works.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-body-md text-foreground/70">
            Kolio connects campaign performance to your entire KOL workflow. From
            discovery to on-chain payout, spend less time on admin and more time on
            partnerships that move volume.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl bg-background-soft p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-btn">
                <c.Icon className="h-5 w-5 text-brand" />
              </span>
              <h3 className="mt-5 text-body-md font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-body text-foreground/70">{c.body}</p>
              <a
                href={c.href}
                className="mt-6 inline-flex w-fit items-center justify-center rounded-sm bg-gray-200 px-4 py-2 text-body-sm font-semibold text-ink transition hover:bg-gray-300"
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
