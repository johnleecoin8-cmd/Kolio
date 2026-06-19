import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const SMALL = [
  {
    tag: 'Return on Influence',
    img: `${CDN}/694013ac4e94bd043b8bb0b6_img_thumbnail_newsletter.avif`,
    title: 'Read our latest tips',
    body: 'Get ideas from pro influencer marketers about how to run influencer marketing. Direct to your inbox, twice a month.',
    href: '/newsletter',
  },
  {
    tag: 'Survey Says',
    img: `${CDN}/694013bed5274e17d8575a5b_img_thumbnail_blog.avif`,
    title: 'See what everyone else is doing',
    body: 'How do you pay influencers? When do you start planning for Black Friday? Is it normal to get ghosted this much? We have the answers.',
    href: 'https://www.modash.io/category/data-stories',
  },
  {
    tag: 'MoTok',
    img: `${CDN}/6943de5be000eace5d14a79e_img_resources_simone_tiktok.avif`,
    title: 'Watch what Simone’s up to',
    body: 'Follow Modash on TikTok to watch what Simone is revealing about the world of influencer marketing.',
    href: 'https://www.tiktok.com/@modash.io',
  },
];

/** "Become everyone's favorite marketer" — featured webinar + 3 resource cards. */
export default function Resources() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="text-body-sm font-bold text-foreground/50">
            Resources
          </p>
          <h2 className="mt-3 font-sans text-[2rem] font-extrabold leading-[1.1] text-foreground md:text-[2.5rem]">
            Become everyone’s favorite marketer
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/75">
            With a mix of insights, surveys, and stories created with love to make your
            work feel easier.
          </p>
        </div>

        {/* featured webinar */}
        <div className="grid gap-8 rounded-xl border border-black/5 p-6 md:grid-cols-2 md:items-center md:p-8">
          <a
            href="https://watch.getcontrast.io/register/modash-how-brands-do-influencer-marketing"
            className="block overflow-hidden rounded-lg"
          >
            <img
              src={`${CDN}/69aad1863cb11547b1560806_image%20(23).avif`}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </a>
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-pill bg-pink px-3 py-1 text-eyebrow font-semibold text-ink">
              Webinars
            </span>
            <a
              href="https://watch.getcontrast.io/register/modash-how-brands-do-influencer-marketing"
              className="font-sans text-h4 font-bold text-foreground"
            >
              How brands actually run influencer marketing
            </a>
            <p className="text-body-sm text-foreground/60">
              Join Georgia Humphries (Stanley 1913), Tess Goodwin (Goodwipes), and Enara
              Roy (Oddball) in this special edition of Modash Live. Hear how they build
              ambassador programs, run creator led campaigns, and use unexpected
              partnerships to grow their brands through influencers.
            </p>
            <span className="text-eyebrow text-foreground/50">March 25, 2026</span>
          </div>
        </div>

        {/* 3 resource cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {SMALL.map((s) => (
            <div key={s.tag} className="flex flex-col">
              <a href={s.href} className="block overflow-hidden rounded-lg">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[320/200] w-full object-cover"
                />
              </a>
              <a
                href={s.href}
                className="mt-4 inline-flex w-fit rounded-pill bg-ink/5 px-3 py-1 text-eyebrow font-semibold text-foreground/70"
              >
                {s.tag}
              </a>
              <a
                href={s.href}
                className="mt-3 font-sans text-body-lg font-bold text-foreground"
              >
                {s.title}
              </a>
              <p className="mt-2 text-body-sm text-foreground/60">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
