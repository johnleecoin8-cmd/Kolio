import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const INFLUENCER_FILTERS = [
  'Locations & languages',
  'Average views',
  'Engagement rate',
  'Bio keywords & hashtags',
  'Shares & saves',
  'Growth rate',
];

const AUDIENCE_FILTERS = [
  'Locations (city/country)',
  'Demographics (age/gender)',
  'Language',
];

function FilterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-body font-bold text-foreground">{title}</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-body text-foreground/80"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 fill-ink text-white" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Section: screenshot left, heading + two filter-checklist columns right. */
export default function SearchFilter() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-xl bg-background-soft p-8 md:p-12">
            <img
              src={`${CDN}/691b219111448c1977bfbc9b_img_tiktok_database_01.avif`}
              width={560}
              alt="Search and filter TikTok influencers"
              loading="lazy"
              className="mx-auto w-full max-w-[520px]"
            />
          </div>

          <div>
            <h2 className="text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
              Search &amp; filter TikTok influencers
            </h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <FilterList title="Influencer filters" items={INFLUENCER_FILTERS} />
              <FilterList title="Audience filters" items={AUDIENCE_FILTERS} />
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
