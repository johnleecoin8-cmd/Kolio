import Container from '@/components/ui/Container';

const OFFSITES = [
  {
    id: 'KvyYHv9MgQ4',
    caption: 'In 2025, 60+ Modashians strutted into Sesimbra, Portugal.',
  },
  {
    id: 'GRnuPV22MTI',
    caption: 'In 2024, 40+ Modashians descended on Split, Croatia.',
  },
  {
    id: 'FkWKyoiHo-0',
    caption: 'In 2023, 20+ Modashians met up in Madeira, Portugal.',
  },
];

/** Our annual offsite — heading, intro copy, three YouTube video embeds with captions. */
export default function AnnualOffsite() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
            Our annual offsite
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/70">
            As a remote-first company, we&rsquo;re totally comfortable and
            productive collaborating online. But once per year (at least!), we get
            together in person. It gives us a chance to get to know each other
            better, have fun, and create a bunch of great memories as a team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1136px] space-y-12 md:mt-16 md:space-y-16">
          {OFFSITES.map(({ id, caption }) => (
            <div key={id}>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&controls=0&autoplay=0&mute=0&start=0`}
                  title={caption}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <p className="mt-4 text-center text-body text-foreground/60">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
