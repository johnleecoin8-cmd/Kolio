import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    img: `${CDN}/6996e722e51b46d618ec443b_img_manage_04.avif`,
    title: 'CSV Import/Export',
    body: 'Move creator data in and out of Modash without losing context or starting from scratch.',
  },
  {
    img: `${CDN}/6996e72c67b30f986bd3e83a_img_manage_05.avif`,
    title: 'Send personalized emails at scale',
    body: 'Sync your Gmail/Outlook with Modash to send and track emails to creators (one at a time or in bulk), with templates, variables, and sequences.',
  },
  {
    img: `${CDN}/6996e739cc60581e38090586_img_manage_06.avif`,
    title: 'Your workflows',
    body: 'Adjust statuses, columns, and fields to match how your team actually works.',
  },
];

/** "Everything you need to grow your program" — three feature cards. */
export default function EverythingGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold leading-tight text-ink">
          Everything you need to grow your program
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-xl bg-background-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-background-soft">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-body-md font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-body text-foreground/70">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
