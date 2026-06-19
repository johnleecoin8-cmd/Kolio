import Container from '@/components/ui/Container';

/** Problem statement — large centered display heading + supporting copy. */
export default function Problem() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display text-[2.5rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[5rem]">
            Paying KOLs one wallet at a time is killing your campaign
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-foreground/70">
            You're firing off manual transfers across five chains, screenshotting
            tx hashes for proof, and fronting budget before a single post goes
            live. There's no escrow, no accountability, and no clean record when
            finance asks where the money went.
          </p>
        </div>
      </Container>
    </section>
  );
}
