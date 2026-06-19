import Container from '@/components/ui/Container';

const THUMB =
  'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41a41d4ba001370265a96_68efa820d3afe14813784845_Klear%20Alternatives%20Influencer%20Marketing.avif';
const AUTHOR_AVATAR =
  'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/66dad82f68010bced8ff8a36_1517376322625.avif';

const ARTICLES = [
  {
    img: THUMB,
    title: '10 Best Tapfiliate Alternatives to Use in 2026',
    date: 'June 14, 2026',
    read: '14 mins',
  },
  {
    img: THUMB,
    title: '9 Best Creator Affiliate Management Tools to Use in 2026',
    date: 'June 14, 2026',
    read: '10 mins',
  },
  {
    img: THUMB,
    title: '9 Best Impact Alternatives to Use in 2026',
    date: 'May 29, 2026',
    read: '18 mins',
  },
];

/** "Recent Articles" — 3-up card grid below the article. */
export default function RecentArticles() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="mb-8 font-display text-h4 uppercase leading-tight text-foreground">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <a
              key={i}
              href="#"
              className="group flex flex-col transition hover:-translate-y-0.5"
            >
              <div className="aspect-[16/12] w-full overflow-hidden rounded-xl bg-pink-bg">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col pt-4">
                <span className="mb-3 w-fit rounded-pill bg-orange-light px-3 py-1 text-eyebrow font-semibold text-orange-dark">
                  Tools
                </span>
                <h3 className="text-body-md font-bold leading-snug text-foreground">
                  {a.title}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <img
                    src={AUTHOR_AVATAR}
                    alt="Phil Norris"
                    loading="lazy"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <p className="text-body-sm text-foreground/55">
                    {a.date} <span className="mx-1">•</span> {a.read}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
