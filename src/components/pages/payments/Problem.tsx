import Container from '@/components/ui/Container';

/** Problem statement — large centered display heading + supporting copy. */
export default function Problem() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display text-[2.5rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[5rem]">
            You're apologizing to creators while chasing finance
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-foreground/70">
            While your finance team is processing 125 individual payments every
            month, you've become a help desk manager, teaching creators how to
            invoice. You're stuck in the messy middle, instead of building your
            next partnership.
          </p>
        </div>
      </Container>
    </section>
  );
}
