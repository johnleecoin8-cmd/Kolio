import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Card = {
  icon: string;
  title: string;
  body: string;
  href: string;
};

const CARDS: Card[] = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Discover',
    body: "Find the right creators for your brand and know they're a fit before you reach out.",
    href: 'https://www.modash.io/discovery',
  },
  {
    icon: `${CDN}/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif`,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/features/influencer-outreach',
  },
  {
    icon: `${CDN}/68370b6b8dcc81bc9e714810_ic_analyze%20profiles.png`,
    title: 'Track',
    body: 'Automatically track campaigns and spend your time doing literally anything else.',
    href: 'https://www.modash.io/monitoring',
  },
  {
    icon: `${CDN}/6878ecfd01a1d81e6a0b37e8_Coin.avif`,
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
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            Managing relationships gets easy when everything&rsquo;s in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Modash connects your entire creator workflow. From discovery to
            payment, spend less time on admin and more time on building
            relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl bg-background-soft p-6"
            >
              <img src={c.icon} alt="" width={24} className="h-6 w-6" />
              <h3 className="mt-4 text-body-sm font-bold text-ink">{c.title}</h3>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
