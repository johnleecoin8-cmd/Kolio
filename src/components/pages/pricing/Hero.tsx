import Container from '@/components/ui/Container';

/** Pricing hero — centered display heading + subtext. */
export default function Hero() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <span className="eyebrow">Pricing &amp; billing</span>
          <h1 className="display-xl mt-5 font-display text-[3.25rem] leading-[0.95] text-foreground sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.25rem]">
            Priced for <span className="text-gradient-brand">proof</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            Every plan ships with the full Kolio toolkit — proof-based KOL
            vetting, on-chain escrow, and campaign attribution. You only pay
            more as your crypto campaigns scale.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-pill bg-gray-50 px-4 py-2">
            <span className="chip chip-brand">Usage-based</span>
            <span className="text-body-sm font-medium text-foreground/70">
              Everything in every plan — the price scales with usage, not with features.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
