import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    icon: `${CDN}/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif`,
    title: 'Manage',
    body: 'Keep every relationship under control and details out of your head.',
    href: 'https://www.modash.io/features/influencer-relationship-management',
  },
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Discover',
    body: 'Find the right creators for your brand and know they’re a fit before you reach out.',
    href: 'https://www.modash.io/discovery',
  },
  {
    icon: `${CDN}/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif`,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/features/influencer-outreach',
  },
  {
    icon: `${CDN}/6839880de4b9dfb7a7cb6c5e_ic_pay.avif`,
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
          <h2 className="text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2.25rem]">
            Track campaigns. See performance. Scale what works.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Modash connects campaign performance to your entire creator workflow. From
            discovery to payment, spend less time on admin and more time on
            partnerships that drive results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl bg-background-soft p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-btn">
                <img
                  src={c.icon}
                  alt={c.title}
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
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
