import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — dark display headline, pink badge eyebrow, dual CTA, pink product block. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* badge eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink text-ink">
              <Search className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-body font-semibold text-foreground">Database</span>
          </div>

          <h1 className="max-w-[16ch] font-display uppercase leading-[0.9] text-foreground text-[3rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.5rem]">
            YouTube Influencer Database With 13M+ Profiles
          </h1>

          <p className="mx-auto mt-7 max-w-[560px] text-body-md text-foreground/75">
            Search a database of every public YouTube influencer using filters. Get
            emails, audience demographics, content performance, and past
            collaborations.
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

      {/* pink product block */}
      <div className="mx-auto mt-12 w-full max-w-[1376px] px-4 sm:px-6 md:mt-16">
        <div className="overflow-hidden rounded-t-xl bg-pink px-4 pt-10 sm:px-10 sm:pt-16 md:px-16 md:pt-20">
          <img
            src={`${CDN}/691b22393c700dcb47a31938_hero_img_youtube_database.avif`}
            alt="Modash YouTube influencer database"
            loading="eager"
            className="mx-auto block w-full max-w-[1040px] rounded-t-lg"
          />
        </div>
      </div>
    </section>
  );
}
