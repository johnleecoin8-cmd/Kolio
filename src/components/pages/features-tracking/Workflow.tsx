import Container from '@/components/ui/Container';
import { Users, Search, Mail, DollarSign } from 'lucide-react';

const CARDS = [
  {
    icon: Users,
    title: 'Manage',
    body: 'Keep every relationship under control and details out of your head.',
    href: 'https://www.modash.io/features/influencer-relationship-management',
  },
  {
    icon: Search,
    title: 'Discover',
    body: 'Find the right creators for your brand and know they’re a fit before you reach out.',
    href: 'https://www.modash.io/discovery',
  },
  {
    icon: Mail,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/features/influencer-outreach',
  },
  {
    icon: DollarSign,
    title: 'Pay',
    body: 'Cut down on financial admin, invoicing back-and-forth, and tax headaches.',
    href: 'https://www.modash.io/features/influencer-payments',
  },
];

/** "Track campaigns. See performance." — full workflow 4 cards. */
export default function Workflow() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Track campaigns. See performance. Scale what works.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Modash connects campaign performance to your entire creator workflow. From
            discovery to payment, spend less time on admin and more time on
            partnerships that drive results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-xl bg-background-soft p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink shadow-btn">
                  <Icon size={20} />
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
