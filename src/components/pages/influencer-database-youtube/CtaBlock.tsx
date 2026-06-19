import Container from '@/components/ui/Container';

/** Closing CTA — big pink rounded block, dark display headline, dual CTA. */
export default function CtaBlock() {
  return (
    <section className="bg-background pb-16 pt-4 md:pb-24">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-20 text-center md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[14ch] font-display uppercase leading-[0.95] text-ink text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
            End-to-End Influencer marketing for shopify brands
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://marketer.modash.io/register/marketer"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Try for Free
            </a>
            <a
              href="https://www.modash.io/book-demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-pink-light px-[1.125rem] text-body font-semibold text-ink transition hover:bg-white"
            >
              Book a call
            </a>
          </div>
          <p className="mt-4 text-body-sm text-ink/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
