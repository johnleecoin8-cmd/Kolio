import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const KOL_FILTERS = [
  'Crypto niche (DeFi, NFTs, L1/L2, gaming)',
  'Real reach & average views',
  'Engagement rate',
  'Bio keywords, tickers & hashtags',
  'Shares & saves',
  'Follower growth & velocity',
];

const AUDIENCE_FILTERS = [
  'Locations (city / country)',
  'Demographics (age / gender)',
  'Audience quality & bot share',
];

function FilterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-body font-bold text-foreground">{title}</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-body text-foreground/80"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 fill-ink text-white" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Brand-neutral filter-panel mockup built with divs. */
function FilterMockup() {
  const chips = ['DeFi', 'NFTs', 'L1 / L2', 'Trading', 'Gaming', 'Memecoins'];
  return (
    <div className="card-kit p-5">
      <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">Search crypto KOLs</p>
      <div className="mt-3 flex items-center gap-2 rounded-sm border border-hairline px-3 py-2 text-body-sm text-foreground/50">
        e.g. "DeFi creators with US audience over 100K"
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={c} className={i < 3 ? 'chip chip-brand' : 'chip chip-ink'}>
            {c}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">
        {[
          ['Audience quality', '82%'],
          ['Real reach', '> 100K'],
          ['Engagement', '> 4.5%'],
        ].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between text-body-sm">
            <span className="text-foreground/60">{label}</span>
            <span className="font-mono-tnum font-semibold text-foreground">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Section: filter mockup left, heading + two filter-checklist columns right. */
export default function SearchFilter() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-xl bg-background-soft p-8 md:p-12">
            <FilterMockup />
          </div>

          <div>
            <span className="eyebrow">Discover</span>
            <h2 className="display-lg mt-3 font-display text-[2.1875rem] text-foreground">
              Search &amp; filter crypto KOLs on TikTok
            </h2>
            <p className="mt-4 max-w-[480px] text-body-md text-foreground/70">
              Filter by the signals that actually predict campaign performance —
              not follower counts and not looks.
            </p>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <FilterList title="KOL filters" items={KOL_FILTERS} />
              <FilterList title="Audience filters" items={AUDIENCE_FILTERS} />
            </div>
            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
