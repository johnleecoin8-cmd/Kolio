import Container from '@/components/ui/Container';

const ARTICLES = [
  {
    title: 'How to Vet a Crypto KOL: 7 Proof-Based Signals That Beat Follower Count',
    date: 'June 14, 2026',
    read: '14 mins',
  },
  {
    title: 'On-Chain Escrow for KOL Deals: Pay Without Trusting a Stranger',
    date: 'June 14, 2026',
    read: '10 mins',
  },
  {
    title: 'Attributing a Token Launch to the KOLs Who Actually Drove Wallets',
    date: 'May 29, 2026',
    read: '18 mins',
  },
];

/** "Recent Articles" — 3-up card grid below the article. Thumbnails are brand-neutral
 * gradient panels (no external imagery), with a styled "K" wordmark badge. */
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
              <div className="flex aspect-[16/12] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-brand">
                <span className="font-display text-[2.5rem] uppercase leading-none text-white/90">
                  Kolio
                </span>
              </div>
              <div className="flex flex-1 flex-col pt-4">
                <span className="mb-3 w-fit rounded-pill bg-orange-light px-3 py-1 text-eyebrow font-semibold text-orange-dark">
                  Web3 KOL
                </span>
                <h3 className="text-body-md font-bold leading-snug text-foreground">
                  {a.title}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-eyebrow font-bold text-white">
                    K
                  </div>
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
