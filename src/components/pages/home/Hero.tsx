import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — dark headline on warm bg, pill tag, dual CTA, large product screenshot. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-10 pt-12 text-white md:pb-14 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* eyebrow pill tag */}
          <a
            href="/shopify"
            className="mb-6 inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-eyebrow font-semibold text-white/70 transition hover:bg-white/20"
          >
            Influencer Marketing Platform for Brands on Shopify
          </a>

          <h1 className="font-display text-[3rem] leading-[0.98] text-white sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
            Manage &amp; grow your
            <br />
            influencer program
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-white/70">
            Run paid partnerships, affiliate, and gifting campaigns. Find creators,
            track performance, and pay partners, all from one place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="accent"
              >
                Try for free
              </ButtonA>
              <ButtonA
                href="https://www.modash.io/book-demo"
                variant="secondary"
              >
                Request a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-white/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* full-bleed product screenshot collage */}
      <div className="mx-auto mt-12 w-full max-w-[1376px] px-4 sm:px-6 md:mt-16">
        <img
          src={`${CDN}/68344e756f6cb66a17259301_hero_image.avif`}
          srcSet={`${CDN}/68344e756f6cb66a17259301_hero_image-p-500.avif 500w, ${CDN}/68344e756f6cb66a17259301_hero_image-p-800.avif 800w, ${CDN}/68344e756f6cb66a17259301_hero_image-p-1080.avif 1080w, ${CDN}/68344e756f6cb66a17259301_hero_image.avif 2752w`}
          sizes="(max-width: 1439px) 100vw, 1376px"
          alt="Modash platform dashboard"
          loading="eager"
          className="hidden w-full md:block"
        />
        <img
          src={`${CDN}/6839ac39232d7714a41e6b3d_hero_image_mobile.avif`}
          alt="Modash platform dashboard"
          loading="eager"
          className="mx-auto w-full max-w-[420px] md:hidden"
        />
      </div>
    </section>
  );
}
