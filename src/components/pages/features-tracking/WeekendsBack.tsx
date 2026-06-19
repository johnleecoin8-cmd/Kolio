import Container from '@/components/ui/Container';

/** Big "weekends back" headline with floating accent pills. */
export default function WeekendsBack() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <Container>
        <div className="relative mx-auto max-w-[1000px]">
          {/* floating pills */}
          <span className="absolute -top-6 left-6 z-10 inline-flex items-center gap-2 rounded-pill bg-pink px-5 py-2.5 text-body-sm font-semibold text-ink shadow-btn md:-top-8 md:left-16">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-dark" />
            100% content coverage
          </span>
          <span className="absolute -top-4 right-4 z-10 inline-flex items-center gap-2 rounded-pill bg-sand px-5 py-2.5 text-body-sm font-semibold text-ink shadow-btn md:-top-6 md:right-12">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            10-minute setup
          </span>
          <span className="absolute -bottom-5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-pill bg-purple px-5 py-2.5 text-body-sm font-semibold text-ink shadow-btn md:-bottom-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Connected Shopify data
          </span>

          <h2 className="text-center font-display text-[2rem] uppercase leading-[1.0] text-foreground sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem]">
            when automatic tracking is on, you get your weekends back
          </h2>
        </div>
      </Container>
    </section>
  );
}
