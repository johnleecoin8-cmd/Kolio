import Container from '@/components/ui/Container';

const PROMOS = [
  {
    step: '01',
    caption: 'Publish the full episode on YouTube & Spotify',
  },
  {
    step: '02',
    caption: 'Cut 3-5 short clips for sharing on X & YouTube Shorts',
  },
  {
    step: '03',
    caption: 'Push the episode to 1,000+ web3 marketing teams on Kolio',
  },
];

export default function HowWePromote() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Distribution</span>
          <h2 className="mt-3 display-lg font-display text-h4 md:text-h3 text-foreground">
            How we promote the show
          </h2>
          <p className="mt-5 text-body-sm text-foreground/70">
            We'll get your story in front of the people running crypto KOL
            campaigns. At a minimum, we'll:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROMOS.map((p) => (
            <div key={p.caption} className="card-kit flex flex-col p-7">
              <span className="num-display text-h3 leading-none text-gradient-brand">
                {p.step}
              </span>
              <p className="mt-5 text-body-md font-semibold leading-snug text-foreground">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
