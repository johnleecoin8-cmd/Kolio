import Container from '@/components/ui/Container';

/** Pricing hero — centered display heading + subtext. */
export default function Hero() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="mb-5 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Pricing &amp; Billing
          </p>
          <h1 className="font-display text-[3.25rem] uppercase leading-[0.95] text-foreground sm:text-[4.5rem] md:text-[6rem] lg:text-[6.5rem]">
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
