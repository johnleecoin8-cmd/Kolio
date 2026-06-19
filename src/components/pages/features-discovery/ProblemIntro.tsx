import Container from '@/components/ui/Container';

/** Centered big display heading describing the problem. */
export default function ProblemIntro() {
  return (
    <section className="pt-24 md:pt-32 pb-8">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display uppercase text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.25rem] text-foreground">
            Scrolling X for hours, found 3 maybes &amp; their reach is still unproven
          </h2>
          <p className="mt-5 mx-auto max-w-[660px] text-body md:text-body-md text-foreground/75">
            It’s always the same. You dig through Crypto Twitter, copy handles into a spreadsheet,
            and DM accounts whose followers might be bots or bought engagement. The kind of work
            that puts your campaign budget at the mercy of vanity metrics.
          </p>
        </div>
      </Container>
    </section>
  );
}
