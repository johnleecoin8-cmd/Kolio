import Container from '@/components/ui/Container';

const CARDS = [
  {
    href: 'https://www.modash.io/youtube-average-views-calculator',
    title: 'YouTube Average Views Calculator',
    description:
      'Check the average views for any YouTube creator. Free, no sign-up needed.',
  },
  {
    href: 'https://www.modash.io/tiktok-average-views-calculator',
    title: 'TikTok Average Views Calculator',
    description:
      'Check the average views for any TikTok creator. Free, no sign-up needed.',
  },
];

/** "Check average views on other platforms" — two cross-platform cards. */
export default function OtherPlatforms() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl lg:text-7xl font-normal leading-tight text-foreground">
            Check average views on other platforms
          </h2>
          <p className="max-w-xl text-body text-foreground">
            Use our free average views calculators to analyze influencer
            performance across all major social platforms.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-6 lg:grid-cols-2">
          {CARDS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="flex flex-col gap-4 rounded-xl bg-background-soft p-8 text-foreground no-underline transition hover:bg-sand"
            >
              <div className="text-xl font-semibold leading-7">{c.title}</div>
              <p className="text-body-sm leading-relaxed opacity-70">
                {c.description}
              </p>
              <span className="text-body-sm font-semibold underline">
                Try for free
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
