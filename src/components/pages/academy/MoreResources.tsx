import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';

const CARDS = [
  {
    tag: 'Recruitment',
    tagClass: 'bg-orange-light text-orange-dark',
    read: '11 mins read',
    img: `${CDN}/6a21479c04d6b0310d8f458d_69788444f5f8bf421ee31b33_Risk%20in%20influencer%20marketing.avif`,
    title: "How to Find Your Competitors' Affiliates (And Recruit Them for Your Program)",
    body: "Competitor affiliates already convert for brands like yours. Here's how to find them, using search, social, affiliate networks, and tools like Modash, and how to approach them the right way.",
    date: 'June 14, 2026',
    href: 'https://www.modash.io/blog/how-to-find-competitors-affiliates',
  },
  {
    tag: 'Programs',
    tagClass: 'bg-pink text-ink',
    read: '4 mins read',
    img: `${CDN}/6a10227c1ea94049e2b114eb_Gifting%20Survey%20Cover.png`,
    title: '[Survey] Are Creators Really Over Gifting?',
    body: 'Marketers said creators aren’t open to gifting collabs. But is that true? We asked 25 creators to weigh in on gifting: the good, the bad, and the ugly.',
    date: 'June 12, 2026',
    href: 'https://www.modash.io/blog/creator-gifting-survey',
  },
  {
    tag: 'Relationships',
    tagClass: 'bg-pink-dark text-white',
    read: '14 mins read',
    img: `${CDN}/69c56fc7fd146c17d6a768e6_68efab9808d0e9e998a3d4ba_micro%20influencer%20examples.avif`,
    title: 'Affiliate Onboarding: How to Set Up New Affiliates So They Actually Start Posting',
    body: '',
    date: 'June 4, 2026',
    href: 'https://www.modash.io/blog/affiliate-onboarding',
  },
];

/** "More influencer marketing resources" — 3 blog cards. */
export default function MoreResources() {
  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <h2 className="mb-10 text-center font-display text-[1.75rem] font-normal leading-tight text-violet-dark md:mb-14 md:text-h3">
          More influencer marketing resources
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <a key={c.title} href={c.href} className="group flex flex-col no-underline">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className={`rounded-sm px-2 py-1 text-body-sm font-semibold ${c.tagClass}`}>
                  {c.tag}
                </span>
                <span className="text-body-sm text-foreground/55">
                  <span className="font-semibold text-foreground/80">
                    {c.read.replace(' read', '')}
                  </span>{' '}
                  read
                </span>
              </div>
              <h3 className="mt-3 text-[1.125rem] font-semibold leading-snug text-violet-dark">
                {c.title}
              </h3>
              {c.body && (
                <p className="mt-2 text-body-sm text-foreground/60">{c.body}</p>
              )}
              <span className="mt-3 text-eyebrow text-foreground/45">{c.date}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
