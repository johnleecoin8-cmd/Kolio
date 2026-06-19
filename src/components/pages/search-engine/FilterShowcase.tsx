import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

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

/** "Search & filter every creator on Earth" — two filter cards + CTA. */
export default function FilterShowcase() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FilterCard title="Influencer filters" items={INFLUENCER} />
          <FilterCard title="Audience filters" items={AUDIENCE} />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://marketer.modash.io/register/marketer"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
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
    <div className="rounded-xl bg-violet/25 p-8 md:p-10">
      <h3 className="font-display text-[1.5rem] text-violet-dark">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 text-body text-foreground">
            <CheckCircle2 size={20} className="shrink-0 text-violet-dark" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
