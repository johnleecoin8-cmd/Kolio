import Container from '@/components/ui/Container';

/** Centered big display heading describing the problem. */
export default function ProblemIntro() {
  return (
    <section className="pt-24 md:pt-32 pb-8">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display uppercase text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[3.25rem] text-foreground">
            Scrolling for hours, found 3 maybes &amp; they still need vetting
          </h2>
          <p className="mt-5 mx-auto max-w-[640px] text-body md:text-body-md text-foreground/75">
            It’s always the same. You hunt through hashtags, copy handles into spreadsheets, and
            reach out to creators whose followers might be bots. It's the kind of work that makes
            you revisit your life choices.
          </p>
        </div>
      </Container>
    </section>
  );
}
