import Container from '@/components/ui/Container';

/** Full-pink closing CTA with giant display headline. */
export default function FinalCta() {
  return (
    <section className="bg-pink py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display uppercase text-[2.5rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] text-ink">
            Shortlist creators you’re confident to reach out to
          </h2>
          <p className="mt-6 mx-auto max-w-[560px] text-body md:text-body-md text-ink/75">
            Search 380M+ creators and find the right ones quickly. Spend the rest of your day on
            outreach.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://marketer.modash.io/register/marketer"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
              >
                Try for free
              </a>
              <a
                href="https://www.modash.io/book-demo"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white/70 text-ink text-body font-semibold transition hover:bg-white"
              >
                Request a demo
              </a>
            </div>
            <p className="text-body-sm text-ink/70">14-day free trial・No credit card required</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
