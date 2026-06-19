import Container from '@/components/ui/Container';

/** Big display problem statement on white. */
export default function ProblemStatement() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="font-display uppercase text-[2.25rem] leading-[0.92] text-ink sm:text-[3.5rem] md:text-[5rem]">
            83 creators, 2 colleagues, 1 sheet &amp; stuff&rsquo;s starting to
            break
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-body-md text-foreground/70">
            Contracts can&rsquo;t be found, emails go unanswered, and your
            colleague reached out to the same creator yesterday. Your brain is
            one tab away from requesting time off.
          </p>
        </div>
      </Container>
    </section>
  );
}
