import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CHECK = `${CDN}/698c63747b29c00343b657e5_ic_Check%20Circle.avif`;

const ITEMS = [
  'Managing 50-300+ creators',
  'Multiple team members doing outreach',
  'Running always-on programs',
  'Your store is on Shopify',
  'Done with spreadsheet chaos',
  'Ready to move beyond messy workflows',
];

/** "Is Modash Manage right for you?" — soft card with check chips. */
export default function RightForYou() {
  return (
    <section className="bg-background py-8 md:py-12">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
              Is Modash Manage right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
              Perfect if you&rsquo;re managing 30+ active creator relationships
              and your team keeps stepping on each other&rsquo;s toes.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[940px] flex-wrap justify-center gap-3">
            {ITEMS.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-btn"
              >
                <img src={CHECK} alt="" className="h-4 w-4" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
