import Container from '@/components/ui/Container';

/** Centered customer quote with attribution and a text-based web3 brand name. */
export default function Testimonial() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
          <span
            aria-hidden
            className="mb-6 font-display text-[3rem] leading-none text-gradient-brand"
          >
            &ldquo;
          </span>
          <blockquote className="font-sans text-[1.5rem] font-medium leading-[1.35] tracking-tight text-foreground md:text-[1.875rem]">
            Before Kolio we were paying KOLs off vibes and screenshots. Now we
            vet every profile for real reach and bot ratio first, run the deal
            through escrow, and track it down to wallet connects. We onboarded
            80+ crypto KOLs for our token launch without a single payout
            dispute.
          </blockquote>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-display text-[1.25rem] uppercase text-white">
              M
            </div>
            <div className="text-left">
              <p className="text-body font-semibold text-foreground">
                Maya Renaud
              </p>
              <p className="text-body-sm text-foreground/60">
                Head of Growth
              </p>
            </div>
            <div className="mx-2 h-10 w-px bg-ink/15" aria-hidden />
            <span className="font-display text-[1.125rem] uppercase tracking-tight text-foreground">
              Arbitrum
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
