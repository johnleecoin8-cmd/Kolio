import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Feature = { title: string; body: string };

type Row = {
  eyebrow: string;
  features: Feature[];
  cta?: string;
  img: string;
  imgAlt: string;
  reverse?: boolean;
};

const ROWS: Row[] = [
  {
    eyebrow: 'Collect every post automatically',
    features: [
      {
        title: 'Campaign overview at a glance',
        body: 'Track total posts, influencer participation, views, clicks, and sales across all platforms with segmented data exports.',
      },
      {
        title: '100% coverage',
        body: 'Track every brand mention from selected creators during your campaign window. Stories included.',
      },
      {
        title: 'Zero creator work required',
        body: 'No sign-ups, no authentication, no screenshot requests. Creators post normally, you see everything in one dashboard.',
      },
    ],
    cta: 'Request a demo',
    img: `${CDN}/699d65862241ce8a4761a7dc_img_track_01.avif`,
    imgAlt: 'Campaign overview dashboard',
  },
  {
    eyebrow: 'Track real performance',
    features: [
      {
        title: 'Automatic performance dashboard',
        body: 'Views, engagement, and clicks are automatically tracked per post, per creator, and per campaign.',
      },
      {
        title: 'Content library',
        body: 'View, analyze, and download all creator content from one organized place. Export everything when you need it.',
      },
      {
        title: 'EMV, CPM, ROAS calculated automatically',
        body: 'Performance metrics appear without spreadsheet math. See what’s working at a glance.',
      },
    ],
    cta: 'Request a demo',
    img: `${CDN}/69b12f41c08035330b97dd5d_img_track_02.avif`,
    imgAlt: 'Performance dashboard',
    reverse: true,
  },
  {
    eyebrow: 'Connect sales data to creator content automatically',
    features: [
      {
        title: 'Discount code and tracking links',
        body: 'Create unique codes and links directly in Modash.',
      },
      {
        title: 'Shopify integration connects revenue to creators',
        body: 'Connect Shopify once and see sales data attributed to each creator, all in one dashboard.',
      },
      {
        title: 'Identify top performers easily',
        body: 'See which creators and campaigns drive the most engagement and sales. Double down on what works.',
      },
    ],
    cta: 'Request a demo',
    img: `${CDN}/699d65edc8a8c320b5fcc2f4_img_track_03.avif`,
    imgAlt: 'Sales attribution dashboard',
  },
];

/** "Track campaigns automatically" — 3 alternating image/feature rows. */
export default function TrackCampaigns() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            Track campaigns automatically
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-body-md text-foreground/70">
            Let Modash collect every post, track every metric, and connect your
            Shopify data, so you can focus on scaling what works.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {ROWS.map((row) => (
            <div
              key={row.eyebrow}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* image */}
              <div className={row.reverse ? 'md:order-2' : ''}>
                <img
                  src={row.img}
                  alt={row.imgAlt}
                  loading="lazy"
                  className="w-full rounded-xl bg-background-soft"
                />
              </div>

              {/* text */}
              <div className={row.reverse ? 'md:order-1' : ''}>
                <p className="mb-6 text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
                  {row.eyebrow}
                </p>
                <div className="flex flex-col gap-6">
                  {row.features.map((f) => (
                    <div key={f.title}>
                      <h3 className="text-body-md font-semibold text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-body text-foreground/70">{f.body}</p>
                    </div>
                  ))}
                </div>
                {row.cta && (
                  <div className="mt-8">
                    <ButtonA
                      href="https://www.modash.io/book-demo"
                      variant="primary"
                    >
                      {row.cta}
                    </ButtonA>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
