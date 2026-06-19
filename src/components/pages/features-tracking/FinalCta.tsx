import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing violet CTA band. */
export default function FinalCta() {
  return (
    <section className="bg-violet py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[820px] font-display text-[2rem] uppercase leading-[1.05] text-ink md:text-[3rem]">
            See all your performance data in one place
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-ink/75">
            See every post, track every click, connect your Shopify data,
            automatically. No more fuss required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          <p className="mt-4 text-body-sm text-ink/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
