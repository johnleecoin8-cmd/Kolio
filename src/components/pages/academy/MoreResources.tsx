import Container from '@/components/ui/Container';

const CARDS = [
  {
    tag: 'Sourcing',
    tagClass: 'bg-orange-light text-orange-dark',
    read: '11 mins read',
    // Brand-neutral gradient tile (replaces modash-branded blog screenshot).
    cover: 'from-brand to-brand-coral',
    coverLabel: 'Competitor KOLs',
    title: "How to Find the KOLs Already Shilling Your Competitors (And Win Them Over)",
    body: "The KOLs already driving holders to projects like yours are the fastest path to traction. Here's how to surface them with Kolio's proof-based search, then approach them the right way, without overpaying.",
    date: 'June 14, 2026',
    href: '/demo-confirmation',
  },
  {
    tag: 'Campaigns',
    tagClass: 'bg-pink text-ink',
    read: '4 mins read',
    cover: 'from-brand-coral to-pink',
    coverLabel: 'KOL Survey 2026',
    title: '[Survey] What Crypto KOLs Really Think About Token-Only Deals',
    body: 'Brands assume KOLs won’t touch token-only collabs. Is that true? We asked 25 active crypto KOLs to weigh in on payment terms: cash, tokens, escrow, and what actually gets a yes.',
    date: 'June 12, 2026',
    href: '/demo-confirmation',
  },
  {
    tag: 'Attribution',
    tagClass: 'bg-pink-dark text-white',
    read: '14 mins read',
    cover: 'from-purple to-brand',
    coverLabel: 'On-Chain ROI',
    title: 'On-Chain Attribution: How to Prove a KOL Campaign Actually Drove Volume',
    body: 'Impressions don’t pay the bills. Connect KOL posts to wallets, swaps, and sign-ups so you can see which creators moved real on-chain activity, and double down on the ones that did.',
    date: 'June 4, 2026',
    href: '/demo-confirmation',
  },
];

/** "More web3 KOL marketing resources" — 3 blog cards with brand-neutral gradient covers. */
export default function MoreResources() {
  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <h2 className="mb-10 text-center font-display text-[1.75rem] font-normal leading-tight text-violet-dark md:mb-14 md:text-h3">
          More web3 KOL marketing resources
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <a key={c.title} href={c.href} className="group flex flex-col no-underline">
              <div
                className={`flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br ${c.cover} transition group-hover:scale-[1.02]`}
              >
                <span className="px-6 text-center font-display text-[1.5rem] font-bold leading-tight text-white">
                  {c.coverLabel}
                </span>
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
