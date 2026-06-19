import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const SMALL = [
  {
    tag: 'Return on Influence',
    img: `${CDN}/694013ac4e94bd043b8bb0b6_img_thumbnail_newsletter.avif`,
    title: 'Read our latest playbooks',
    body: 'Get tactics from operators running real crypto KOL campaigns — discovery, vetting, and attribution. Direct to your inbox, twice a month.',
    href: '/demo-confirmation',
  },
  {
    tag: 'Data Stories',
    img: `${CDN}/694013bed5274e17d8575a5b_img_thumbnail_blog.avif`,
    title: 'See what other web3 teams do',
    body: 'How much should you pay a KOL? Which niches convert around a listing? How common is bot-inflated reach? We dug into the data.',
    href: '/demo-confirmation',
  },
  {
    tag: 'Benchmarks',
    img: `${CDN}/6943de5be000eace5d14a79e_img_resources_simone_tiktok.avif`,
    title: 'Crypto KOL rate benchmarks',
    body: 'See real reach-to-cost ratios across X, YouTube, and Telegram so you never overpay for a thread or a shill again.',
    href: '/demo-confirmation',
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
            Run the smartest KOL campaigns in the room
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/75">
            A mix of playbooks, benchmarks, and data stories from across web3 — made to
            help you spend with confidence.
          </p>
        </div>

        {/* featured webinar */}
        <div className="grid gap-8 rounded-xl border border-black/5 p-6 md:grid-cols-2 md:items-center md:p-8">
          <a href="/demo-confirmation" className="block overflow-hidden rounded-lg">
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
            <a href="/demo-confirmation" className="font-sans text-h4 font-bold text-foreground">
              How web3 teams actually run KOL marketing
            </a>
            <p className="text-body-sm text-foreground/60">
              Growth leads from leading exchanges and protocols join a special edition of
              Kolio Live. Hear how they brief KOLs ahead of a listing, vet audiences before
              they pay, and use on-chain attribution to prove what actually drove sign-ups.
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
