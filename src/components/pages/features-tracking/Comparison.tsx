import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CLOSE = `${CDN}/698c624b2c263cf06555df11_ic_Close%20Circle.avif`;
const CHECK = `${CDN}/698c63747b29c00343b657e5_ic_Check%20Circle.avif`;

const MANUAL = [
  'Chasing screenshots',
  'Incomplete data',
  'Spreadsheet of disconnected metrics',
  'Hours spent aggregating data',
  'Manual work',
];

const AUTO = [
  '100% content coverage',
  'Connected Shopify data',
  'Live performance dashboard',
  '10-minute setup',
  'Automatically updated metrics',
];

/** Manual vs Automatic tracking comparison columns. */
export default function Comparison() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            See all your performance data in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Stop spending weekends saving content and start spending time on the
            creators and campaigns that actually perform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Manual */}
          <div className="rounded-xl bg-background-soft p-6 md:p-8">
            <h3 className="mb-6 font-display text-[1.5rem] uppercase leading-tight text-foreground md:text-[1.875rem]">
              manual tracking
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {MANUAL.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-2.5 text-body-sm text-foreground/80"
                >
                  <img src={CLOSE} alt="" className="h-5 w-5 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Automatic */}
          <div className="rounded-xl bg-violet-light p-6 md:p-8">
            <h3 className="mb-6 font-display text-[1.5rem] uppercase leading-tight text-foreground md:text-[1.875rem]">
              automatic tracking
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {AUTO.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2.5 text-body-sm text-foreground/80"
                >
                  <img src={CHECK} alt="" className="h-5 w-5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
