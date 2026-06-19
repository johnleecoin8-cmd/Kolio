import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — icon pill tag, dark headline, dual CTA, product screenshot on an orange band. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* icon + tag */}
          <div className="mb-6 flex items-center gap-2">
            <img
              src={`${CDN}/684085bbd3198ac4d6722433_icon_inbox.png`}
              width={48}
              alt=""
              className="h-12 w-12"
            />
            <span className="text-body font-semibold text-foreground">
              Find and email influencers
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] leading-[1.0] text-foreground sm:text-[4rem] md:text-[5rem] lg:text-h1">
            Find influencer
            <br />
            contact emails
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            Find influencers in a database of 350M+ profiles. Get their emails,
            analyze their profiles, reach out, and more — all in the same place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
              <ButtonA href="#" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              14-day free trial・No credit card required
            </p>
          </div>
        </div>
      </Container>

      {/* orange band with full product screenshot */}
      <div className="mt-12 bg-orange py-12 md:mt-16 md:py-16">
        <Container>
          <img
            src={`${CDN}/68408684df644570da644ddb_hero_image_inbox.avif`}
            srcSet={`${CDN}/68408684df644570da644ddb_hero_image_inbox-p-500.avif 500w, ${CDN}/68408684df644570da644ddb_hero_image_inbox-p-800.avif 800w, ${CDN}/68408684df644570da644ddb_hero_image_inbox-p-1080.avif 1080w, ${CDN}/68408684df644570da644ddb_hero_image_inbox.avif 2372w`}
            sizes="(max-width: 1279px) 100vw, 1186px"
            alt="Modash inbox"
            loading="eager"
            className="mx-auto w-full max-w-[1186px]"
          />
        </Container>
      </div>
    </section>
  );
}
