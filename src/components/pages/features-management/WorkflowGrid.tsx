import { Search, Mail, BarChart3, DollarSign, LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';

type Card = {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
};

const CARDS: Card[] = [
  {
    icon: Search,
    title: 'Discover',
    body: "Find the right creators for your brand and know they're a fit before you reach out.",
    href: 'https://www.modash.io/discovery',
  },
  {
    icon: Mail,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/features/influencer-outreach',
  },
  {
    icon: BarChart3,
    title: 'Track',
    body: 'Automatically track campaigns and spend your time doing literally anything else.',
    href: 'https://www.modash.io/monitoring',
  },
  {
    icon: DollarSign,
    title: 'Pay',
    body: 'Cut down on financial admin, invoicing back-and-forth, and tax headaches.',
    href: 'https://www.modash.io/features/influencer-payments',
  },
];

/** "Managing relationships gets easy" — four workflow cards. */
export default function WorkflowGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
            Managing relationships gets easy when everything&rsquo;s in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Modash connects your entire creator workflow. From discovery to
            payment, spend less time on admin and more time on building
            relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-xl bg-background-soft p-6"
              >
                <Icon className="h-6 w-6 text-ink" strokeWidth={2.2} />
                <h3 className="mt-6 text-body font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-body-sm text-foreground/70">
                  {c.body}
                </p>
                <a
                  href={c.href}
                  className="mt-5 inline-flex w-fit items-center rounded-sm bg-gray-200 px-3.5 py-2 text-body-sm font-semibold text-ink transition hover:bg-gray-300"
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
