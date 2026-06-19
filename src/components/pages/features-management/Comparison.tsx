import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CLOSE = `${CDN}/698c624b2c263cf06555df11_ic_Close%20Circle.avif`;
const CHECK = `${CDN}/698c63747b29c00343b657e5_ic_Check%20Circle.avif`;

const BAD = [
  '5 open tabs per creator',
  'Lost conversations',
  'Duplicate outreach',
  'Missing context',
  'All in your head',
];
const GOOD = [
  'One centralized view',
  'Full history visible',
  'Aligned team',
  'Campaign data at hand',
  'Always up to date',
];

function Chip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-btn">
      <img src={icon} alt="" className="h-4 w-4" />
      {label}
    </div>
  );
}

/** "Manage more relationships with less mess" — gray vs coral comparison cards. */
export default function Comparison() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
            Manage more relationships with less mess
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Because when everything is organized and under control, you get to
            focus on the stuff that actually builds relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* all over the place */}
          <div className="rounded-xl bg-background-soft p-7 md:p-10">
            <h3 className="font-display uppercase text-[1.75rem] leading-none text-ink md:text-[2.25rem]">
              All over the place
            </h3>
            <div className="mt-10 flex flex-wrap gap-3">
              {BAD.map((t) => (
                <Chip key={t} icon={CLOSE} label={t} />
              ))}
            </div>
          </div>

          {/* all in one place */}
          <div className="rounded-xl bg-coral p-7 md:p-10">
            <h3 className="font-display uppercase text-[1.75rem] leading-none text-ink md:text-[2.25rem]">
              All in one place
            </h3>
            <div className="mt-10 flex flex-wrap gap-3">
              {GOOD.map((t) => (
                <Chip key={t} icon={CHECK} label={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
