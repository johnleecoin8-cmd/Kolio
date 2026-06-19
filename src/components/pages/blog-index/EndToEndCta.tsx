import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing pink CTA block: big headline + Try for free / Book a call buttons. */
export default function EndToEndCta() {
  return (
    <section className="bg-pink py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[1000px] font-display text-[2.75rem] uppercase leading-[0.95] text-ink md:text-[5rem]">
            End-to-end influencer marketing for Shopify
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
            >
              Try for Free
            </ButtonA>
            <ButtonA
              href="#"
              variant="secondary"
              className="border-transparent bg-ink/10 text-ink hover:bg-ink/20"
            >
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/70">
            14-day free trial·No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
