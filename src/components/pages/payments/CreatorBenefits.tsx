import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    icon: `${CDN}/686bb5ba4d1341d4ccab2ca2_Flash.avif`,
    title: 'Fast payments',
    body: 'Creators sign up once. Payments land in their account in 1-3 days.',
  },
  {
    icon: `${CDN}/6878ecfd01a1d81e6a0b37e8_Coin.avif`,
    title: 'Zero fees',
    body: "Creators get the full amount you approve. Modash doesn't take a cut.",
  },
  {
    icon: `${CDN}/69130f2b422bd9bf3d5b91ff_ic_web.avif`,
    title: 'Paid in their local currency',
    body: 'We support 180+ countries and 36 currencies. Creators get paid in their currency.',
  },
  {
    icon: `${CDN}/688b29d047d224c3d89fcf9c_ic_details.avif`,
    title: 'Automatic invoice generation',
    body: 'Creators can auto-generate invoices with one click or upload their own.',
  },
  {
    icon: `${CDN}/69a68b8e7a1fa0f0821357ee_Platform.avif`,
    title: 'Transparent creator dashboard',
    body: 'Creators see payment history, upcoming payouts, and status—all in one place.',
  },
  {
    icon: `${CDN}/6842ca952d91864160ff1a1c_Fistbump.avif`,
    title: 'Dedicated support',
    body: "We handle creator questions about payments and onboarding, so you don't have to.",
  },
];

/** Benefits to creators — 6 icon cards on soft tiles. */
export default function CreatorBenefits() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Modash payments is great for creators, and your brand
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Creators love working with brands that work with Modash because they
            know it means fast payouts, zero fees, and full transparency from
            start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {CARDS.map(({ icon, title, body }) => (
            <div key={title} className="rounded-xl bg-background-soft p-6 md:p-8">
              <div className="flex items-center gap-3">
                <img
                  src={icon}
                  alt=""
                  loading="lazy"
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0 object-contain"
                />
                <h3 className="text-body font-bold text-ink">{title}</h3>
              </div>
              <p className="mt-3 text-body-sm text-foreground/70">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
