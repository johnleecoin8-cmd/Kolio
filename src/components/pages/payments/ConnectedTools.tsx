import { Users, Search, Mail, BarChart3 } from 'lucide-react';
import Container from '@/components/ui/Container';

const TOOLS = [
  {
    icon: Users,
    title: 'Manage',
    body: 'Keep every relationship under control and details out of your head.',
    href: 'https://www.modash.io/manage',
  },
  {
    icon: Search,
    title: 'Discover',
    body: "Find the right creators for your brand and know they're a fit before you reach out.",
    href: 'https://www.modash.io/discover',
  },
  {
    icon: Mail,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/inbox',
  },
  {
    icon: BarChart3,
    title: 'Track',
    body: 'See every post, every click, every sale, automatically.',
    href: 'https://www.modash.io/track',
  },
];

/** Paying quickly builds trust — 4 connected-tool cards. */
export default function ConnectedTools() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Paying quickly builds trust
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Modash connects global payouts to everything that comes before:
            discovery, outreach, management, and tracking. Spend less time on admin
            and more time on partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map(({ icon: Icon, title, body, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl bg-background-soft p-6 md:p-7"
            >
              <Icon className="h-6 w-6 text-ink" strokeWidth={2} />
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
