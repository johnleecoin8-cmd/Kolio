import { ButtonA } from '@/components/ui/Button';

/** Final full-bleed pink CTA band with huge display heading. */
export default function EndCta() {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="rounded-xl bg-pink px-6 py-20 text-center md:py-32">
          <h2 className="mx-auto max-w-[1000px] font-display uppercase text-[2.5rem] leading-[0.95] text-ink sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem]">
            End-to-End Influencer marketing for shopify brands
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="https://marketer.modash.io/register/marketer" variant="primary">
              Try for Free
            </ButtonA>
            <ButtonA
              href="https://www.modash.io/book-demo"
              variant="primary"
              className="bg-ink/10 text-ink shadow-none hover:bg-ink/20"
            >
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
