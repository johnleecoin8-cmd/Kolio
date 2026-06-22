import Container from '@/components/ui/Container';

type Metric = {
  value: string;
  label: string;
  sub: string;
  delta: number; // signed %-change
  chip: 'brand' | 'onchain' | 'ink';
  tag: string;
};

const METRICS: Metric[] = [
  {
    value: '12.4k',
    label: 'Crypto KOLs indexed',
    sub: 'X · YouTube · TikTok · Telegram',
    delta: 9.2,
    chip: 'brand',
    tag: 'Discovery',
  },
  {
    value: '78%',
    label: 'Median real-follower share',
    sub: 'after bot & farm filtering',
    delta: 4.1,
    chip: 'onchain',
    tag: 'Authenticity',
  },
  {
    value: '6.4%',
    label: 'Avg organic engagement',
    sub: 'weighted by audience quality',
    delta: -1.3,
    chip: 'ink',
    tag: 'Engagement',
  },
  {
    value: '0',
    label: 'Payout disputes',
    sub: 'escrow released on delivery',
    delta: 0,
    chip: 'onchain',
    tag: 'On-chain',
  },
];

function Delta({ delta }: { delta: number }) {
  if (delta === 0) {
    return (
      <span className="font-mono-tnum text-eyebrow text-foreground/45">— flat</span>
    );
  }
  const up = delta > 0;
  return (
    <span
      className={`font-mono-tnum text-eyebrow font-semibold ${
        up ? 'text-mint' : 'text-brand'
      }`}
    >
      {up ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}% vs. last quarter
    </span>
  );
}

/** Premium card-kit metric grid: tabular numerals + signed %-change deltas.
 *  One lead card on a soft neutral band, the rest white. */
export default function MetricGrid() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-[640px]">
          <span className="eyebrow">The dashboard</span>
          <h2 className="mt-3 display-lg font-display text-h3 text-foreground">
            Numbers your finance team can actually trust
          </h2>
          <p className="mt-4 text-body-md text-foreground/65">
            Every figure is derived from real platform data and audited audiences —
            no vanity counts, no screenshots. Deltas show movement quarter over quarter.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="card-kit flex flex-col p-6">
              <span
                className={`chip ${
                  m.chip === 'brand'
                    ? 'chip-brand'
                    : m.chip === 'onchain'
                      ? 'chip-onchain'
                      : 'chip-ink'
                } self-start`}
              >
                {m.tag}
              </span>
              <div className="mt-5 num-display font-mono-tnum text-h2 leading-none text-foreground">
                {m.value}
              </div>
              <div className="mt-3 text-body-sm font-semibold text-foreground">
                {m.label}
              </div>
              <div className="mt-1 text-body-sm text-foreground/55">{m.sub}</div>
              <div className="mt-4 border-t border-gray-200 pt-3">
                <Delta delta={m.delta} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono-tnum text-eyebrow text-foreground/40">
          Source: Kolio platform aggregate, Q2 2026 (12,418 indexed creators).
        </p>
      </Container>
    </section>
  );
}
