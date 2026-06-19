import Container from '@/components/ui/Container';

const CARDS = [
  {
    title: 'Instagram Average Views Calculator',
    body: 'Check the average Reel plays for any Instagram influencer. Free, no sign-up needed.',
    href: 'https://www.modash.io/tools/instagram-average-views-calculator',
  },
  {
    title: 'YouTube Average Views Calculator',
    body: 'Check the average views for any YouTube creator. Free, no sign-up needed.',
    href: 'https://www.modash.io/tools/youtube-average-views-calculator',
  },
];

/** "Check average views on other platforms" — centered heading + 2 soft cards. */
export default function OtherPlatforms() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[16ch] text-center font-display text-[2.25rem] uppercase leading-[1.05] text-foreground md:text-[3.5rem]">
          Check average views on other platforms
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-body text-foreground/75 md:text-body-md">
          Use our free average views calculators to analyze influencer
          performance across all major social platforms.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-lg bg-background-soft p-8"
            >
              <h3 className="text-body-md font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-body-sm font-medium text-foreground/70">
                {c.body}
              </p>
              <a
                href={c.href}
                className="mt-6 inline-block text-body-sm font-semibold text-foreground underline underline-offset-4"
              >
                Try for free
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
