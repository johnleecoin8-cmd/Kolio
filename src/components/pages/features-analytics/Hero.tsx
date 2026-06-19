import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — dark display headline, dual CTA, large dashboard screenshot on a pink band. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-body font-semibold text-foreground">
            <img
              src={`${CDN}/68407b94c15a91bab0f48942_icon_analytics.png`}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
            Influencer Analytics
          </div>

          <h1 className="max-w-[16ch] font-display text-[2.75rem] uppercase leading-[0.98] text-foreground sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
            Review influencer profiles before you reach out
          </h1>

          <p className="mx-auto mt-6 max-w-[560px] text-body-md text-foreground/70">
            Skip the part where you reach out asking for audience screenshots.
            Check audience locations &amp; demographics, performance metrics like
            average views, past brand sponsorships and more — in just a few clicks.
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
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* purple-lavender band behind the screenshot */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 top-[18%] bottom-0 bg-purple-light" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1216px] px-4 sm:px-6">
          <img
            src={`${CDN}/68407c1b4d1d1717b4acf4ba_hero_image_analytics.avif`}
            alt="Modash influencer analytics profile"
            loading="eager"
            width={1186}
            className="mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
