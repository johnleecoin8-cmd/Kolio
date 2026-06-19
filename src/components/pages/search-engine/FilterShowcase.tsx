import Container from '@/components/ui/Container';

const CHECK =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/5f31064063b9d1edd97e2b2f_checkmark_circle.svg';

const INFLUENCER = [
  'Locations & languages',
  'Follower range',
  'Engagement rate',
  'Bio keywords & hashtags',
  'Hashtags used',
  'Growth rate',
];

const AUDIENCE = [
  'Locations (city/country)',
  'Demographics (age/gender)',
  'Fake followers',
  'Languages',
  'Interests',
  'Language',
];

/** "Search & filter every creator on Earth" — two filter checklists + CTA. */
export default function FilterShowcase() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="text-center font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
            Search &amp; filter every creator on Earth
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] text-center text-body text-foreground/80">
            Modash lists every creator on Instagram, YouTube, and TikTok with 1k+
            followers. That&apos;s 200M profiles. Your perfect partners{' '}
            <strong className="font-semibold">are</strong> in there; you just have
            to find them. Here&apos;s some examples of the filters you can use to
            search.
          </p>

          <div className="mt-12 grid w-full gap-10 md:grid-cols-2 md:gap-16">
            <FilterCard title="Influencer filters" items={INFLUENCER} />
            <FilterCard title="Audience filters" items={AUDIENCE} />
          </div>

          <a
            href="https://marketer.modash.io/register/marketer"
            className="mt-12 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Try For Free
          </a>
        </div>
      </Container>
    </section>
  );
}

function FilterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="font-display text-h4 text-violet-dark">{title}</h4>
      <ul className="mt-8 w-full max-w-[320px] space-y-4">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-center gap-3 text-body text-foreground"
          >
            <img src={CHECK} alt="" className="h-6 w-6 shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
