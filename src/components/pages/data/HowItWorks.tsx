import Container from '@/components/ui/Container';

const STEPS = [
  {
    n: '01',
    title: 'Collection',
    body: 'Data is collected about every public creator profile several times a month from places like about sections, captions & descriptions of posts, images, videos, and other public info.',
    bg: 'bg-background-soft',
    z: 'z-30',
  },
  {
    n: '02',
    title: 'Organization',
    body: 'The public creator information is organized and brought together in one place. You could do this process manually, but it would take about 100x longer per profile.',
    bg: 'bg-purple-light',
    z: 'z-20',
  },
  {
    n: '03',
    title: 'Analysis',
    body: 'Public creator data is put through different Machine Learning models to bring you rich insights about creators & their audiences, e.g. growth rate, engagement rate, & number of fake followers. Computers do the complex math stuff to analyze all info so you can vet & verify influencers & creators quickly.',
    bg: 'bg-purple',
    z: 'z-10',
  },
];

/** How it works — 3 numbered steps shown as overlapping color cards. */
export default function HowItWorks() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <h2 className="mb-12 text-center font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`relative flex flex-col rounded-3xl p-8 md:p-10 ${s.bg} ${s.z} ${
                i > 0 ? 'md:-ml-6' : ''
              }`}
            >
              <div className="font-display text-[2.5rem] leading-none text-foreground">
                {s.n}
              </div>
              <div className="mt-5 text-[1.75rem] font-bold leading-tight text-foreground">
                {s.title}
              </div>
              <p className="mt-4 text-body-sm text-foreground/80">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
