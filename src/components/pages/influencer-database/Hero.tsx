import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Database hero — pill tag, dark headline, dual CTA, screenshot on a pink block. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-20">
      <Container>
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* product tag */}
          <div className="mb-6 inline-flex items-center gap-2">
            <img
              src={`${CDN}/682f2374bc508bf278f85776_icon_discover.png`}
              width={40}
              alt=""
              className="h-10 w-10"
            />
            <span className="text-body-md font-semibold text-foreground">
              Database
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] text-foreground sm:text-[3.25rem] md:text-[4rem]">
            An influencer database with 380m+ profiles
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-body-md text-foreground/70">
            A searchable database of every public influencer profile on Instagram,
            TikTok &amp; Youtube. With audience demographics, content performance, and
            past collaborations.
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

      {/* pink block with product screenshot */}
      <div className="mt-12 md:mt-16">
        <div className="bg-pink pt-12 md:pt-16">
          <Container>
            <img
              src={`${CDN}/682f1ed5fc18d2eca013972c_hero_image_discover.avif`}
              srcSet={`${CDN}/682f1ed5fc18d2eca013972c_hero_image_discover-p-500.avif 500w, ${CDN}/682f1ed5fc18d2eca013972c_hero_image_discover-p-800.avif 800w, ${CDN}/682f1ed5fc18d2eca013972c_hero_image_discover-p-1080.avif 1080w, ${CDN}/682f1ed5fc18d2eca013972c_hero_image_discover.avif 2370w`}
              sizes="(max-width: 1279px) 100vw, 1136px"
              alt="Modash influencer database"
              loading="eager"
              className="mx-auto block w-full max-w-[1136px] rounded-t-xl shadow-2xl"
            />
          </Container>
        </div>
      </div>
    </section>
  );
}
