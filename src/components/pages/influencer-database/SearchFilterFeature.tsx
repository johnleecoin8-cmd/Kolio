import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Check } from 'lucide-react';

function CheckDot() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
      <Check className="h-3 w-3 text-background" strokeWidth={3} />
    </span>
  );
}

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const INFLUENCER_FILTERS = [
  'Locations & languages',
  'Follower range',
  'Engagement rate',
  'Bio keywords & hashtags',
  'Fake followers',
  'Interests',
];

const AUDIENCE_FILTERS = [
  'Locations (city/country)',
  'Demographics (age/gender)',
  'Language',
  'Engagement rate',
  'Hashtags used',
  'Growth rate',
];

/** First feature — image left, headline + two-column filter checklist right. */
export default function SearchFilterFeature() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <img
              src={`${CDN}/682dd6038189e57dfc1b6c4f_Figure.avif`}
              srcSet={`${CDN}/682dd6038189e57dfc1b6c4f_Figure-p-500.avif 500w, ${CDN}/682dd6038189e57dfc1b6c4f_Figure.avif 1120w`}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 49vw, 560px"
              alt="Influencer search and filters"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              Search &amp; filter every creator on Earth
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="text-body font-semibold text-foreground sm:col-span-1">
                Influencer filters
              </div>
              <div className="hidden text-body font-semibold text-foreground sm:block">
                Audience filters
              </div>

              <ul className="space-y-3">
                {INFLUENCER_FILTERS.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckDot />
                    <span className="text-body-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-body font-semibold text-foreground sm:hidden">
                Audience filters
              </div>

              <ul className="space-y-3">
                {AUDIENCE_FILTERS.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckDot />
                    <span className="text-body-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
