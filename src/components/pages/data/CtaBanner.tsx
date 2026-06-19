import Container from '@/components/ui/Container';

/** Bottom CTA — full-bleed warm gradient banner that sits flush above the footer. */
export default function CtaBanner() {
  return (
    <section className="bg-gradient-brand py-16 text-center text-white md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[820px] font-display text-[2rem] uppercase leading-[1.05] text-white md:text-[3rem]">
          End-to-end KOL marketing for web3 brands
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-body-md text-white/85">
          Discover, vet, and pay crypto KOLs in one place — with proof-based
          data and on-chain escrow from first search to final payout.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo-confirmation"
              className="inline-flex h-11 items-center justify-center rounded-pill bg-white px-6 text-body font-semibold text-brand no-underline transition hover:opacity-90"
            >
              Try for Free
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex h-11 items-center justify-center rounded-pill bg-white/15 px-6 text-body font-semibold text-white no-underline transition hover:bg-white/25"
            >
              Book a demo
            </a>
          </div>
          <p className="text-body-sm text-white/75">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
