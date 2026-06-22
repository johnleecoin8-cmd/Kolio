import Container from '@/components/ui/Container';

/** The page's single red moment: gradient closing CTA. */
export default function FinalCta() {
  return (
    <section className="bg-gradient-brand py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="display-xl font-display text-[2.5rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] text-white">
            Shortlist KOLs you’re confident to fund
          </h2>
          <p className="mt-6 mx-auto max-w-[580px] text-body md:text-body-md text-white/85">
            Search the crypto creator landscape, vet reach with proof, and fund the right KOLs.
            Spend the rest of your day shipping.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/demo-confirmation"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white text-brand text-body font-semibold transition hover:opacity-90"
              >
                Start free
              </a>
              <a
                href="/demo-confirmation"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white/15 text-white border border-white/30 text-body font-semibold transition hover:bg-white/25"
              >
                Book a demo
              </a>
            </div>
            <p className="text-body-sm text-white/75">Free to explore・No card required</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
