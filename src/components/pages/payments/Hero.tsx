import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Payments hero — purple bg, big display headline, dual CTA, product screenshot. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-purple pt-28 md:pt-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* eyebrow: Pay · Shopify */}
          <div className="mb-5 flex items-center gap-2 text-eyebrow font-semibold text-foreground/60">
            <span>Pay</span>
            <span className="text-foreground/30">·</span>
            <span className="inline-flex items-center gap-1">
              <img
                src={`${CDN}/68e50bdc9d9b9f6e11584e90_ic_Shopify_black.avif`}
                alt=""
                className="h-3.5 w-3.5"
              />
              Shopify
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
            The way to pay creators fast,
            <br className="hidden md:block" /> with zero fees
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            All you send are payment links. Modash collects invoices, pays creators
            in their currency, and handles all tax and regulatory compliance.
          </p>

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
            <p className="text-body-sm text-foreground/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* product screenshot */}
      <div className="mx-auto mt-12 w-full max-w-[1200px] px-4 sm:px-6 md:mt-16">
        <img
          src={`${CDN}/69a571b0fbf2d3319c073602_img_hero_payments.avif`}
          alt="Modash Payments dashboard"
          loading="eager"
          className="hidden w-full md:block"
        />
        <img
          src={`${CDN}/69a572e4ee196284c2aa9a2a_img_hero_payments_mobile.avif`}
          alt="Modash Payments dashboard"
          loading="eager"
          className="mx-auto w-full max-w-[440px] md:hidden"
        />
      </div>
    </section>
  );
}
