import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA block. */
export default function FinalCta() {
  return (
    <section className="bg-pink py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[880px] font-display text-[2.75rem] uppercase leading-[0.95] text-ink sm:text-[4rem] md:text-[5.25rem]">
            Everything you need, without the bloat and complexity
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
            >
              Try for free
            </ButtonA>
            <a
              href="https://www.modash.io/book-demo"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-ink/10 px-[1.125rem] text-body font-semibold text-ink transition hover:bg-ink/15"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-4 text-body-sm text-ink/70">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
