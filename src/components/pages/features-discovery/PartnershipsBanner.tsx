import Container from '@/components/ui/Container';

/** Editorial display headline with floating proof chips (white surface). */
export default function PartnershipsBanner() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative mx-auto max-w-[1040px]">
          <span className="absolute -top-14 left-0 hidden md:inline-flex chip chip-brand">
            Every crypto KOL, no shortage
          </span>
          <span className="absolute -top-8 right-0 hidden md:inline-flex chip chip-ink">
            Audience quality before you fund
          </span>
          <span className="absolute -bottom-14 left-1/2 hidden -translate-x-1/2 md:inline-flex chip chip-onchain">
            On-chain proof, not vanity metrics
          </span>

          <h2 className="mx-auto max-w-[880px] text-center display-lg font-display text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.5rem] text-foreground">
            Great KOL partnerships start long before the first DM
          </h2>
        </div>
      </Container>
    </section>
  );
}
