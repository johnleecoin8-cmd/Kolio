import Container from '@/components/ui/Container';

/** Single customer quote with brand-neutral initials avatar. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto h-8 w-8 select-none text-center font-display text-5xl leading-none text-violet-dark/30">
            &ldquo;
          </div>
          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-display text-4xl text-white sm:h-40 sm:w-40">
              MR
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[1.375rem] leading-[1.3] text-violet-dark md:text-[1.625rem]">
                "We ran our last token launch through Kolio and finally knew the
                KOLs were real before paying them. Verified reach, on-chain
                escrow, and attribution we could actually report to the team —
                in a few clicks."
              </h3>
              <div className="mt-6 text-body text-foreground/75">
                <span className="font-semibold text-foreground">Maya Reyes</span>
                <br />
                Head of Growth at a Layer-2 protocol
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
