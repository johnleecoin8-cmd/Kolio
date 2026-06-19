import Container from '@/components/ui/Container';

/** Big centered display headline with three floating colored pills. */
export default function PartnershipsBanner() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="relative mx-auto max-w-[900px]">
          {/* floating pills */}
          <div className="pointer-events-none absolute inset-x-0 -top-6 hidden justify-between md:flex">
            <span className="inline-flex items-center gap-2 rounded-pill bg-pink px-4 py-2 text-body-sm font-medium text-ink shadow-btn">
              <span className="h-2 w-2 rounded-full bg-pink-dark" />
              Access to 380M+ creators, no shortage
            </span>
            <span className="mt-10 inline-flex items-center gap-2 rounded-pill bg-purple px-4 py-2 text-body-sm font-medium text-ink shadow-btn">
              <span className="h-2 w-2 rounded-full bg-ink" />
              Know audience data before reaching out
            </span>
          </div>
          <span className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-pill bg-sand px-4 py-2 text-body-sm font-medium text-ink shadow-btn md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-ink" />
            Create shortlists with confidence
          </span>

          <h2 className="text-center font-display uppercase text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.5rem] text-foreground">
            Great partnerships start way before the first email
          </h2>
        </div>
      </Container>
    </section>
  );
}
