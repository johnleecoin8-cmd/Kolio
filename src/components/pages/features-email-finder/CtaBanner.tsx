import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA — pink full-width banner with dual CTA. */
export default function CtaBanner() {
  return (
    <section className="bg-pink py-24 md:py-36">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2.75rem] leading-[0.98] text-ink sm:text-[4rem] md:text-[5.25rem]">
            Ramp up your influencer
            <br className="hidden sm:block" /> marketing channel
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
              <ButtonA href="#" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-ink/70">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
