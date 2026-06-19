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
        <h2 className="text-center font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
          How we promote the show
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-center text-body-sm text-foreground/70">
          We'll get your story in front of the people running crypto KOL
          campaigns. At a minimum, we'll:
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMOS.map((p) => (
            <div key={p.caption} className="flex flex-col items-center text-center">
              <div className="flex h-44 w-full items-center justify-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand font-sans font-bold text-white text-h3">
                  {p.step}
                </span>
              </div>
              <p className="mt-5 max-w-[240px] text-body-sm font-semibold text-foreground">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
