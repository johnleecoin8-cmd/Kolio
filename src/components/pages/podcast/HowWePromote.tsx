import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const PROMOS = [
  {
    img: `${CDN}/650c2dd4af7c9702361a11cd_img_creator%20partnerships%20podcast_promo1.avif`,
    caption: 'Upload the full podcast episode on YouTube & Spotify',
  },
  {
    img: `${CDN}/650c44c98ac055167b4f1268_img_creator%20partnerships%20podcast_promo2.avif`,
    caption: 'Create 3-5 <60s short clips for sharing on LinkedIn & YouTube Shorts',
  },
  {
    img: `${CDN}/650c3a2adb8523e7f91c5252_img_creator%20partnerships%20podcast_promo3.avif`,
    caption: 'Promote the episode to 1k+ influencer marketing teams that use Modash',
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
          We'll help to share your unique story and insights with the influencer
          marketing world. As a minimum, we'll:
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMOS.map((p) => (
            <div key={p.caption} className="flex flex-col items-center text-center">
              <div className="flex h-44 w-full items-center justify-center">
                <img
                  src={p.img}
                  alt=""
                  className="max-h-44 w-auto object-contain"
                  loading="lazy"
                />
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
