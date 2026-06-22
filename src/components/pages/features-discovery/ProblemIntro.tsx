import Container from '@/components/ui/Container';

/** Centered editorial problem statement (white surface, eyebrow + display-lg). */
export default function ProblemIntro() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <span className="eyebrow">The discovery tax</span>
          <h2 className="mt-4 display-lg font-display text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.25rem] text-foreground">
            Hours scrolling X, three maybes, and their reach is still unproven
          </h2>
          <p className="mt-5 mx-auto max-w-[660px] text-body md:text-body-md text-foreground/70">
            It’s always the same. You dig through Crypto Twitter, copy handles into a spreadsheet,
            and DM accounts whose followers might be bots or bought engagement — putting your
            campaign budget at the mercy of vanity metrics.
          </p>
        </div>
      </Container>
    </section>
  );
}
