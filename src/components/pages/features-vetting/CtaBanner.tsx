import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA band. */
export default function CtaBanner() {
  return (
    <section className="bg-pink">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2.25rem] uppercase leading-[1.04] text-ink sm:text-[3rem] md:text-[3.75rem]">
            Recruit influencers
            <br />
            faster, with more
            <br />
            confidence
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
              <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-ink/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
