import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Centered pink feature block: "Checking average views is just the beginning". */
export default function JustTheBeginning() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-20 text-ink md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[13ch] text-center font-display text-[2.75rem] uppercase leading-[0.98] text-ink md:text-[6.25rem]">
            Checking average views is just the beginning
          </h2>
          <p className="mx-auto mt-8 max-w-[460px] text-center text-body text-ink/80 md:text-body-md">
            Modash helps you find creators, evaluate their audiences, and run
            campaigns end-to-end.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA href="https://www.modash.io/" variant="primary" size="md">
              Get a 14-day free trial
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
