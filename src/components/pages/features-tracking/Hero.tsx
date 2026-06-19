import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — dark headline on violet bg, breadcrumb, dual CTA, product screenshot. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-violet-light pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-eyebrow font-semibold text-foreground/50">
            <a href="/features" className="transition hover:text-foreground/70">
              Track
            </a>
            <span>›</span>
            <span className="text-foreground/70">Simplify</span>
          </div>

          <h1 className="font-display text-[2.5rem] uppercase leading-[1.02] text-foreground sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
            Your content and metrics,
            <br />
            tracked automatically
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            See all your creator content and performance data in one dashboard, no
            manual tracking, no spreadsheet math, no wasted hours.
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

      {/* product screenshot — sits on white below the violet */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-background" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <img
            src={`${CDN}/699d54887fa7999c802e5350_img_hero_manage.avif`}
            alt="Modash campaign tracking dashboard"
            loading="eager"
            className="hidden w-full rounded-xl shadow-nav md:block"
          />
          <img
            src={`${CDN}/699d68521f86538f202cf743_img_hero_track_mobile.avif`}
            alt="Modash campaign tracking dashboard"
            loading="eager"
            className="mx-auto w-full max-w-[420px] rounded-xl shadow-nav md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
