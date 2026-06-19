import Container from '@/components/ui/Container';

/** Bottom CTA — full-bleed pink accent banner that sits flush above the footer. */
export default function CtaBanner() {
  return (
    <section className="bg-pink py-16 text-center text-ink md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[760px] font-display text-[2rem] uppercase leading-[1.05] text-ink md:text-[3rem]">
          End-to-End Influencer marketing for shopify brands
        </h2>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://marketer.modash.io/register/marketer"
              className="inline-flex h-11 items-center justify-center rounded-pill bg-ink px-6 text-body font-semibold text-white no-underline transition hover:opacity-90"
            >
              Try for Free
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-pill bg-ink/10 px-6 text-body font-semibold text-ink no-underline transition hover:bg-ink/20"
            >
              Book a call
            </a>
          </div>
          <p className="text-body-sm text-ink/70">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
