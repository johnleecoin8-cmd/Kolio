import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Pink closing CTA — rounded full-width card with dual CTA. */
export default function CtaBlock() {
  return (
    <section className="px-3 py-4">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-[16ch] font-display text-[2.5rem] uppercase leading-[0.98] text-ink sm:text-[3.5rem] md:text-[4.5rem]">
              Recruit influencers faster, with more confidence
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for free
              </ButtonA>
              <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="mt-5 text-body-sm text-ink/70">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
