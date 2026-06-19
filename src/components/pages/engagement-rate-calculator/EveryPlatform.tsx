import Container from '@/components/ui/Container';

const CARDS = [
  {
    title: 'YouTube Engagement Rate Calculator',
    body: 'Review likes, comments, and views to understand YouTube performance. Instantly calculate engagement rates for any public channel or video and benchmark creator impact.',
  },
  {
    title: 'TikTok Engagement Rate Calculator',
    body: 'Analyze engagement on TikTok using real performance data. Quickly calculate engagement rates to evaluate creators, campaigns, and viral potential.',
  },
];

/** "Calculate Engagement Across Every Platform" — two platform cards. */
export default function EveryPlatform() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full max-w-[55rem] flex-col items-center gap-4 text-center">
            <h2 className="w-full font-display text-5xl font-normal leading-tight text-foreground lg:text-7xl">
              Calculate Engagement Across Every Platform
            </h2>
            <p className="max-w-[45rem] text-base font-normal leading-6 text-foreground">
              Compare creator performance across platforms. Check engagement
              rates for Instagram, YouTube, and TikTok using the same fast, free
              calculator experience.
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
                  href="https://app.modash.io/signup"
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
