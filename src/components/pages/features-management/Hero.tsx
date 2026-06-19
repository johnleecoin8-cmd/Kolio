import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — full coral section, breadcrumb pills, display headline, dual CTA, product screenshot. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-coral pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* breadcrumb pills */}
          <div className="mb-6 flex items-center gap-2 text-eyebrow font-semibold text-ink/60">
            <span className="rounded-pill bg-ink/5 px-3 py-1.5">Manage</span>
            <span className="rounded-pill bg-ink/5 px-3 py-1.5">Shopify</span>
          </div>

          <h1 className="mx-auto max-w-[1100px] font-display uppercase text-[2.75rem] leading-[0.92] text-ink sm:text-[4rem] md:text-[5.25rem] lg:text-[6rem]">
            The place to keep all of your relationships organized
          </h1>

          <p className="mx-auto mt-6 max-w-[560px] text-body-md text-ink/70">
            See every creator, all partnership details, and up-to-date campaign
            metrics in the same place.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
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
            <p className="text-body-sm text-ink/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* product screenshot */}
      <div className="mx-auto mt-10 w-full max-w-[1100px] px-4 sm:px-6 md:mt-12">
        <img
          src={`${CDN}/699c14c10e6b2d047611244a_img_hero_manage.avif`}
          alt="Modash Manage dashboard"
          loading="eager"
          className="hidden w-full md:block"
        />
        <img
          src={`${CDN}/699c165f9ae9a99a063d47bc_img_hero_manage_mobile.avif`}
          alt="Modash Manage dashboard"
          loading="eager"
          className="mx-auto w-full max-w-[420px] md:hidden"
        />
      </div>
    </section>
  );
}
