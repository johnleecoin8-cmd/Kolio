import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — display headline, dual CTA, then a pink full-bleed band with overlapping product screenshot. */
export default function Hero() {
  return (
    <section className="relative bg-background">
      <Container>
        <div className="flex flex-col items-center pt-12 text-center md:pt-16">
          <span className="mb-6 inline-flex items-center gap-2 rounded-pill bg-ink/5 px-3 py-1.5 text-eyebrow font-semibold uppercase tracking-wide text-foreground/60">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-pink text-[10px] text-ink">
              ★
            </span>
            Database
          </span>

          <h1 className="max-w-[820px] font-display text-[2.5rem] uppercase leading-[1.02] text-foreground sm:text-[3.25rem] md:text-[4rem]">
            TikTok Influencer Database With 250M+ Profiles
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            Search a database of every public TikTok influencer using AI and/or
            filters. Get emails, audience demographics, content performance, and
            past collaborations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="https://marketer.modash.io/register/marketer" variant="primary">
              Try for Free
            </ButtonA>
            <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-foreground/50">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>

      {/* pink full-bleed band with overlapping screenshot */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 top-0 h-[70%] bg-pink" />
        <div className="relative mx-auto w-full max-w-container px-4 sm:px-6">
          <img
            src={`${CDN}/691b01fa3981a89054310e0e_hero_img_tiktok_database.avif`}
            width={1185}
            alt="Modash TikTok influencer database"
            loading="eager"
            className="mx-auto w-full max-w-[1185px] rounded-xl shadow-nav"
          />
        </div>
      </div>
    </section>
  );
}
