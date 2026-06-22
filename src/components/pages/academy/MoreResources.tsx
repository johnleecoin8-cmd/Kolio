import Container from '@/components/ui/Container';

const CARDS = [
  {
    tag: 'Sourcing',
    chipClass: 'chip chip-brand',
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
    chipClass: 'chip chip-ink',
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
    chipClass: 'chip chip-onchain',
    read: '14 mins read',
    cover: 'from-purple to-brand',
    coverLabel: 'On-Chain ROI',
    title: 'On-Chain Attribution: How to Prove a KOL Campaign Actually Drove Volume',
    body: 'Impressions don’t pay the bills. Connect KOL posts to wallets, swaps, and sign-ups so you can see which creators moved real on-chain activity, and double down on the ones that did.',
    date: 'June 4, 2026',
    href: '/demo-confirmation',
  },
];

/** "More web3 KOL marketing resources" — 3 blog cards on card-kit tiles. */
export default function MoreResources() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mb-10 md:mb-14">
          <span className="eyebrow">Keep reading</span>
          <h2 className="display-lg mt-3 font-display text-[2rem] text-foreground md:text-[2.5rem]">
            More web3 KOL marketing resources
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="card-kit group flex flex-col overflow-hidden no-underline transition hover:-translate-y-1"
            >
              <div
                className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${c.cover}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.16]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <span className="relative px-6 text-center font-display text-[1.5rem] font-bold leading-tight text-white drop-shadow-sm">
                  {c.coverLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className={c.chipClass}>{c.tag}</span>
                  <span className="font-mono-tnum text-body-sm text-foreground/55">
                    <span className="font-semibold text-foreground/80">
                      {c.read.replace(' read', '')}
                    </span>{' '}
                    read
                  </span>
                </div>
                <h3 className="mt-3 text-[1.125rem] font-semibold leading-snug text-foreground">
                  {c.title}
                </h3>
                {c.body && (
                  <p className="mt-2 text-body-sm text-foreground/60">{c.body}</p>
                )}
                <span className="mt-auto pt-4 text-eyebrow text-foreground/45">
                  {c.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
