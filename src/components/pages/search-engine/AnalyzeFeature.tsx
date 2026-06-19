import Container from '@/components/ui/Container';

const ANALYTICS =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/63763ea56955540d2be518d8_Analytics.svg';

/** "Analyze audience & performance data" — illustration left, copy right. */
export default function AnalyzeFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <img
              src={ANALYTICS}
              alt="Analyze audience & performance data"
              className="w-full max-w-[520px]"
              loading="lazy"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Analyze audience &amp; performance data
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              Before you even reach out, use Modash to ensure they&apos;re a good
              fit. Check their audience locations, age, &amp; gender -- their
              engagement rates &amp; growth rates, check for fake followers, and
              more. All in one place.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try For Free
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
