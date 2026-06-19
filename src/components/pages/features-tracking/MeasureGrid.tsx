import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    img: `${CDN}/699d6608aa862b409f4f6496_img_track_04.avif`,
    title: 'Custom workflows & bulk actions',
    body: 'Create unique statuses for each campaign based on your workflow. Track every creator’s progress across multiple campaigns and take bulk actions to move faster.',
  },
  {
    img: `${CDN}/699d661beddc542ff0d2429a_img_track_05.avif`,
    title: 'Make tracking links & promo codes',
    body: 'Create unique UTM links, affiliate links, QR codes, or Shopify promo codes — all within Modash. Send them to influencers in a few clicks to automatically track usage.',
  },
  {
    img: `${CDN}/699d66236e2a686047a8f9fa_img_track_06.avif`,
    title: 'Date range and currency',
    body: 'Segment data by dates and export everything to CSV. Customize how you view and report on your campaigns.',
  },
];

/** "Everything you need to measure what matters" — 3 screenshot cards. */
export default function MeasureGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[640px] text-center font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
          Everything you need to measure what matters
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl bg-background-soft p-5"
            >
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <h3 className="mt-6 text-body-md font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-body text-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
