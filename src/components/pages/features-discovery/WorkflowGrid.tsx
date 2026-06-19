import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const CARDS = [
  {
    icon: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif',
    title: 'Manage',
    body: 'Keep every relationship under control and details out of your head.',
    href: '/features/influencer-management',
  },
  {
    icon: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif',
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: '/features/inbox',
  },
  {
    icon: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/68370b6b8dcc81bc9e714810_ic_analyze%20profiles.png',
    title: 'Track',
    body: 'Automatically track campaigns and spend your time doing literally anything else.',
    href: '/features/influencer-tracking',
  },
  {
    icon: 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6878ecfd01a1d81e6a0b37e8_Coin.avif',
    title: 'Pay',
    body: 'Cut down on financial admin, invoicing back-and-forth, and tax headaches.',
    href: '/influencer-payments',
  },
];

/** Cross-feature grid linking to the rest of the Modash workflow. */
export default function WorkflowGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHeading>
            Finding creators is one thing. Working with them is another.
          </SectionHeading>
          <p className="mt-4 text-body md:text-body-md text-foreground/75">
            Modash connects discovery to your entire creator workflow and brings you from first
            search to payment sent, all in one place.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl bg-background-soft p-6"
            >
              <img src={c.icon} width={24} height={24} alt="" className="h-6 w-6" />
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
