import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const CARDS = [
  {
    img: `${CDN}/69943a036c9c92f2263649a9_img_discover_01.avif`,
    title: 'Creator onboarding & verification',
    body: 'We collect and verify banking details, tax information, and documentation from every creator.',
  },
  {
    img: `${CDN}/69a57239febf638f476f45b8_img_payments_04.avif`,
    title: 'Affiliate commissions your way',
    body: 'Choose between a percentage of sales or a fixed amount per order for new or returning customers.',
    link: true,
  },
  {
    img: `${CDN}/69a57241e35ba4c9cd70d8ad_img_payments_05.avif`,
    title: 'Issues resolution',
    body: "Our support team handles creator questions about payments, onboarding, and account issues—so your team doesn't have to.",
  },
];

/** Everything you need — 3 image cards. */
export default function EverythingGrid() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-display text-h4 text-ink md:text-h3">
          Everything you need to pay creators from one place
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title}>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-background-soft">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 text-body-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-body text-foreground/70">
                {c.body}
                {c.link && (
                  <>
                    {' '}
                    <a
                      href="https://www.modash.io/affiliate"
                      className="font-medium text-ink underline"
                    >
                      Learn more
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
