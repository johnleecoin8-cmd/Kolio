import Container from '@/components/ui/Container';

/** Big "weekends back" headline with floating accent pills. */
export default function WeekendsBack() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <Container>
        <div className="relative mx-auto max-w-[1000px] py-8 md:py-12">
          {/* floating pills */}
          <span className="absolute -top-2 left-6 z-10 inline-flex items-center gap-2 rounded-pill bg-pink px-6 py-3 text-body-md font-semibold text-ink shadow-btn md:-top-4 md:left-12">
            <span className="h-2 w-2 rounded-full bg-pink-dark" />
            100% post coverage
          </span>
          <span className="absolute top-0 right-4 z-10 inline-flex items-center gap-2 rounded-pill bg-sand px-6 py-3 text-body-md font-semibold text-ink shadow-btn md:-top-2 md:right-12">
            <span className="h-2 w-2 rounded-full bg-ink" />
            Setup in minutes
          </span>
          <span className="absolute -bottom-2 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-pill bg-purple px-6 py-3 text-body-md font-semibold text-ink shadow-btn md:bottom-0">
            <span className="h-2 w-2 rounded-full bg-ink" />
            On-chain attribution
          </span>

          <h2 className="text-center font-display text-[2.5rem] uppercase leading-[0.95] text-foreground sm:text-[3.5rem] md:text-[4.75rem] lg:text-[5.5rem]">
            when KOL tracking runs itself, you get your weekends back
          </h2>
        </div>
      </Container>
    </section>
  );
}
