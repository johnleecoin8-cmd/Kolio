import Container from '@/components/ui/Container';

const STEPS = [
  {
    n: '01',
    title: 'Collection',
    body: 'Data is collected about every public creator profile several times a month from places like about sections, captions & descriptions of posts, images, videos, and other public info.',
  },
  {
    n: '02',
    title: 'Organization',
    body: 'The public creator information is organized and brought together in one place. You could do this process manually, but it would take about 100x longer per profile.',
  },
  {
    n: '03',
    title: 'Analysis',
    body: 'Public creator data is put through different Machine Learning models to bring you rich insights about creators & their audiences, e.g. growth rate, engagement rate, & number of fake followers. Computers do the complex math stuff to analyze all info so you can vet & verify influencers & creators quickly.',
  },
];

/** How it works — 3 numbered steps. */
export default function HowItWorks() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <h2 className="mb-12 text-center font-display text-[2rem] leading-tight text-foreground md:text-[2.5rem]">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col">
              <div className="font-display text-[2.5rem] leading-none text-foreground">
                {s.n}
              </div>
              <div className="mt-4 text-body-md font-semibold text-foreground">
                {s.title}
              </div>
              <p className="mt-3 text-body-sm text-foreground/75">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
