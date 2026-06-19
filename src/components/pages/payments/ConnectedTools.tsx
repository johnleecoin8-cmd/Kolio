import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const TOOLS = [
  {
    icon: `${CDN}/68370b6a349bf837c4481e3b_ic_manage%20relationships.avif`,
    title: 'Manage',
    body: 'Keep every relationship under control and details out of your head.',
    href: 'https://www.modash.io/manage',
  },
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Discover',
    body: "Find the right creators for your brand and know they're a fit before you reach out.",
    href: 'https://www.modash.io/discover',
  },
  {
    icon: `${CDN}/68370b6b110cbb6fa07e64a9_ic_send%20emails.avif`,
    title: 'Inbox',
    body: 'Reach out to more creators and build long-term relationships without drowning in emails.',
    href: 'https://www.modash.io/inbox',
  },
  {
    icon: `${CDN}/68370b6b8dcc81bc9e714810_ic_analyze%20profiles.png`,
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map(({ icon, title, body, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl bg-background-soft p-6 md:p-7"
            >
              <img
                src={icon}
                alt=""
                loading="lazy"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
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
