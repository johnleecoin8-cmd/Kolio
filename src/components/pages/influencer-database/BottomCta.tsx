import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA banner. */
export default function BottomCta() {
  return (
    <section className="bg-pink py-20 md:py-28">
      <Container>
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <h2 className="font-display text-[2.25rem] leading-[1.05] text-ink sm:text-[3rem] md:text-[3.5rem]">
            End-to-End Influencer marketing for shopify brands
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for free
              </ButtonA>
              <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
                Request a demo
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
