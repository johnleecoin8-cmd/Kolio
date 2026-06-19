import Container from '@/components/ui/Container';

const CARDS = [
  {
    title: 'YouTube KOL Engagement Calculator',
    body: 'Review likes, comments, and views to gauge how a crypto creator really performs on YouTube. Instantly calculate engagement for any public channel or video and benchmark their pull across DeFi, NFTs, and L1/L2 niches.',
  },
  {
    title: 'TikTok KOL Engagement Calculator',
    body: 'Measure engagement on TikTok using real performance data, not vanity views. Quickly check whether a crypto KOL drives genuine attention before you fund a campaign or airdrop.',
  },
];

/** "Calculate KOL engagement across every channel" — two platform cards. */
export default function EveryPlatform() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full max-w-[55rem] flex-col items-center gap-4 text-center">
            <h2 className="w-full font-display text-5xl font-normal leading-tight text-foreground lg:text-7xl">
              Calculate KOL engagement across every channel
            </h2>
            <p className="max-w-[45rem] text-base font-normal leading-6 text-foreground">
              Crypto audiences live on X, YouTube, TikTok and Telegram. Check
              engagement for any KOL across each one with the same fast, free
              calculator &mdash; then run the full campaign inside Kolio.
            </p>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-start gap-5 rounded-xl bg-background-soft p-8"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="text-body leading-relaxed text-foreground/75">
                  {c.body}
                </p>
                <a
                  href="/demo-confirmation"
                  className="mt-auto text-base font-semibold text-foreground underline underline-offset-2 transition-opacity hover:opacity-70"
                >
                  Try for free
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
