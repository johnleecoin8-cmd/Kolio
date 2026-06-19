import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Bottom CTA — pink accent banner. */
export default function CtaBanner() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-16 text-center text-ink md:py-24">
          <h2 className="mx-auto max-w-[760px] font-display text-[2rem] leading-[1.05] text-ink md:text-[3rem]">
            End-to-End Influencer marketing for shopify brands
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3">
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
