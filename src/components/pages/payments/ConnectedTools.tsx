import { Users, Search, Inbox, LineChart } from 'lucide-react';
import Container from '@/components/ui/Container';

const TOOLS = [
  {
    Icon: Users,
    title: 'Manage',
    body: 'Keep every KOL relationship, brief, and deliverable in one place instead of scattered DMs.',
    href: '/demo-confirmation',
  },
  {
    Icon: Search,
    title: 'Discover',
    body: 'Find proof-vetted crypto KOLs across DeFi, NFTs, L1/L2, trading, and gaming — and know they’re real before you reach out.',
    href: '/demo-confirmation',
  },
  {
    Icon: Inbox,
    title: 'Outreach',
    body: 'Reach more KOLs and build long-term partnerships without drowning in Telegram threads.',
    href: '/demo-confirmation',
  },
  {
    Icon: LineChart,
    title: 'Track',
    body: 'See every post, every click, and every on-chain conversion, attributed automatically.',
    href: '/demo-confirmation',
  },
];

/** Paying quickly builds trust — 4 connected-tool cards. */
export default function ConnectedTools() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Paying on-chain builds trust
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Kolio connects payouts to everything that comes before — discovery,
            outreach, management, and attribution — so the whole campaign runs in
            one platform.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map(({ Icon, title, body, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl bg-background-soft p-6 md:p-7"
            >
              <Icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
              <h3 className="mt-7 text-body font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-body-sm text-foreground/70">{body}</p>
              <a
                href={href}
                className="mt-6 inline-flex w-fit items-center rounded-sm bg-gray-200 px-3 py-1.5 text-body-sm font-semibold text-ink transition hover:bg-gray-300"
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
