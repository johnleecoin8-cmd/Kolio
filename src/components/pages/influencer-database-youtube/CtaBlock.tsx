import Container from '@/components/ui/Container';

/** Closing CTA — warm gradient-brand rounded block, display headline, dual CTA. */
export default function CtaBlock() {
  return (
    <section className="bg-background pb-16 pt-4 md:pb-24">
      <Container>
        <div className="rounded-xl bg-gradient-brand px-6 py-24 text-center md:px-12 md:py-36">
          <h2 className="mx-auto max-w-[16ch] font-display uppercase leading-[0.95] text-white text-[2.75rem] sm:text-[4rem] md:text-[5.25rem]">
            End-to-End Crypto KOL marketing for web3 brands
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo-confirmation"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Get started free
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-white px-[1.125rem] text-body font-semibold text-ink transition hover:opacity-90"
            >
              Book a demo
            </a>
          </div>
          <p className="mt-4 text-body-sm text-white/75">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
