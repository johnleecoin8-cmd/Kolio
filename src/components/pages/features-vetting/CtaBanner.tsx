import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA band. */
export default function CtaBanner() {
  return (
    <section className="rounded-t-[32px] bg-pink md:rounded-t-[48px]">
      <Container className="py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2.75rem] uppercase leading-[1.02] text-ink sm:text-[4rem] md:text-[5rem] lg:text-[5.75rem]">
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
