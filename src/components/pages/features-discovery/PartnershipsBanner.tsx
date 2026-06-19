import Container from '@/components/ui/Container';

/** Big centered display headline with three floating colored pills (no text overlap). */
export default function PartnershipsBanner() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <div className="relative mx-auto max-w-[1040px]">
          {/* floating pills — positioned clear of the heading text */}
          <span className="absolute -top-16 left-0 hidden items-center gap-2 rounded-pill bg-pink px-4 py-2 text-body-sm font-medium text-ink shadow-btn md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-pink-dark" />
            Every crypto KOL, no shortage
          </span>
          <span className="absolute -top-10 right-0 hidden items-center gap-2 rounded-pill bg-purple px-4 py-2 text-body-sm font-medium text-ink shadow-btn md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-ink" />
            Audience quality before you fund
          </span>
          <span className="absolute -bottom-16 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-pill bg-sand px-4 py-2 text-body-sm font-medium text-ink shadow-btn md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-ink" />
            On-chain proof, not vanity metrics
          </span>

          <h2 className="mx-auto max-w-[880px] text-center font-display uppercase text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.5rem] text-foreground">
            Great KOL partnerships start long before the first DM
          </h2>
        </div>
      </Container>
    </section>
  );
}
