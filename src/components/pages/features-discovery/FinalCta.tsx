import Container from '@/components/ui/Container';

/** Full-pink closing CTA with giant display headline. */
export default function FinalCta() {
  return (
    <section className="bg-pink py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display uppercase text-[2.5rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] text-ink">
            Shortlist KOLs you’re confident to fund
          </h2>
          <p className="mt-6 mx-auto max-w-[580px] text-body md:text-body-md text-ink/75">
            Search the crypto creator landscape, vet reach with proof, and fund the right KOLs.
            Spend the rest of your day shipping.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/demo-confirmation"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
              >
                Start free
              </a>
              <a
                href="/demo-confirmation"
                className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white/70 text-ink text-body font-semibold transition hover:bg-white"
              >
                Book a demo
              </a>
            </div>
            <p className="text-body-sm text-ink/70">Free to explore・No card required</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
