import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA block. */
export default function FinalCta() {
  return (
    <section className="bg-pink py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[900px] font-display text-[2.25rem] uppercase leading-[1.02] text-ink md:text-[3.5rem]">
            Everything you need, without the bloat and complexity
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
            >
              Try for free
            </ButtonA>
            <ButtonA
              href="https://www.modash.io/book-demo"
              variant="secondary"
            >
              Request a demo
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/70">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
