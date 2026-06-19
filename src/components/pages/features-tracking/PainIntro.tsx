import Container from '@/components/ui/Container';

/** "Your boss asks for performance" pain statement. */
export default function PainIntro() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="font-display text-[2rem] uppercase leading-[1.05] text-foreground sm:text-[2.75rem] md:text-[3.5rem]">
            Your boss asks for performance.
            <br className="hidden sm:block" /> You&apos;re stuck with screenshots.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-body-md text-foreground/70">
            You&apos;re manually checking profiles for content, chasing creators for
            analytics that never arrive, and piecing together performance data across
            multiple tools.
          </p>
        </div>
      </Container>
    </section>
  );
}
