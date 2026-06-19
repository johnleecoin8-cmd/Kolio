import { Check as CheckIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const INFLUENCER = [
  'Locations & languages',
  'Average views',
  'Engagement rate',
  'Bio keywords & hashtags',
  'Views growth',
  'Transcript keywords',
];

const AUDIENCE = [
  'Locations (city/country)',
  'Demographics (age/gender)',
  'Language',
];

function Check({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-3 border-b border-black/10 py-3 text-body text-foreground">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <CheckIcon className="h-3 w-3" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

/** Search & filter — soft image card left, two filter checklists + CTA right. */
export default function SearchFilter() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* image card */}
          <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
            <img
              src={`${CDN}/691b217240ad1f6c80594084_img_youtube_database_01.avif`}
              alt="Search and filter YouTube influencers"
              loading="lazy"
              className="w-full max-w-[460px]"
            />
          </div>

          {/* copy */}
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              Search &amp; filter YouTube influencers
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="border-b border-black/10 pb-3 text-body-md font-semibold text-foreground">
                  Influencer filters
                </h3>
                <ul className="mt-2">
                  {INFLUENCER.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="border-b border-black/10 pb-3 text-body-md font-semibold text-foreground">
                  Audience filters
                </h3>
                <ul className="mt-2">
                  {AUDIENCE.map((f) => (
                    <Check key={f}>{f}</Check>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <ButtonA href="https://marketer.modash.io/register/marketer" variant="primary">
                Try for Free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
