import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — dark display headline, dual CTA, large dashboard screenshot on a pink band. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <a
            href="/features"
            className="mb-6 inline-flex items-center gap-2 rounded-pill bg-ink/5 px-3 py-1.5 text-eyebrow font-semibold text-foreground/70 transition hover:bg-ink/10"
          >
            Influencer Analytics
          </a>

          <h1 className="font-display text-[2.5rem] uppercase leading-[1.02] text-foreground sm:text-[3.5rem] md:text-[4.75rem] lg:text-[5.25rem]">
            Review influencer
            <br />
            profiles before you
            <br />
            reach out
          </h1>

          <p className="mx-auto mt-6 max-w-[660px] text-body-md text-foreground/70">
            Skip the part where you reach out asking for audience screenshots.
            Check audience locations &amp; demographics, performance metrics like
            average views, past brand sponsorships and more — in just a few clicks.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="accent"
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

      {/* pink band behind the screenshot */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 top-1/2 bottom-0 bg-pink" aria-hidden />
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
