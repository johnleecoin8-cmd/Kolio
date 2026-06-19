import Container from '@/components/ui/Container';

/** Pricing hero — centered display heading + subtext. */
export default function Hero() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Pricing &amp; Billing
          </p>
          <h1 className="font-display text-[2.75rem] leading-[1.05] text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
            Simple &amp; transparent
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/70">
            Every plan comes with the same core capabilities and price goes up
            based on usage.
          </p>
        </div>
      </Container>
    </section>
  );
}
