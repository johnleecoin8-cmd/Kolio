import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const STEPS = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: '1. Fund your wallet',
    body: 'Transfer funds to your Modash payment wallet.',
  },
  {
    icon: `${CDN}/6979f75c8f82dc047c9ed943_ic_click.avif`,
    title: '2. Set up payments',
    body: 'Select creators, amounts, deliverables, and currencies.',
  },
  {
    icon: `${CDN}/6842ca952d91864160ff1a1c_Fistbump.avif`,
    title: '3. Creator onboarding',
    body: 'Creators add their personal and banking details for the first time.',
  },
  {
    icon: `${CDN}/68370b6b9eae2d6b80f9cac2_ic_measure%20results.avif`,
    title: '4. Send payment link',
    body: 'Share a secure payment link with creators.',
  },
  {
    icon: `${CDN}/688b29d047d224c3d89fcf9c_ic_details.avif`,
    title: '5. Invoice submission',
    body: 'Creators upload or auto-generate compliant invoices.',
  },
  {
    icon: `${CDN}/6878ecfd01a1d81e6a0b37e8_Coin.avif`,
    title: '6. Payment processing',
    body: 'Modash validates, handles compliance, and processes payment.',
  },
];

/** How it works — 6 numbered steps. */
export default function HowItWorks() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">How it works</h2>
          <p className="mt-4 text-body-md text-foreground/70">
            From wallet funding to creator payment in six simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map(({ icon, title, body }) => (
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
