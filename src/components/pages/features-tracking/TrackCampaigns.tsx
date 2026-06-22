import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

type Feature = { title: string; body: string };

type Row = {
  eyebrow: string;
  heading: string;
  features: Feature[];
  cta?: string;
  mockup: 'overview' | 'performance' | 'attribution';
  reverse?: boolean;
};

const ROWS: Row[] = [
  {
    eyebrow: 'Capture',
    heading: 'Every KOL post, captured automatically',
    features: [
      {
        title: 'Campaign overview at a glance',
        body: 'Track total posts, KOL participation, impressions, clicks, and on-chain conversions across X, YouTube, TikTok, and Telegram, with segmented exports.',
      },
      {
        title: '100% coverage',
        body: 'Capture every mention from your selected KOLs during the campaign window, threads, videos, and Telegram broadcasts included. Even deleted posts stay on record.',
      },
      {
        title: 'Zero KOL busywork',
        body: 'No sign-ups, no authentication, no screenshot requests. KOLs post as they always do, and you see everything in one verified dashboard.',
      },
    ],
    cta: 'Request a demo',
    mockup: 'overview',
  },
  {
    eyebrow: 'Measure',
    heading: 'Verified reach, not vanity metrics',
    features: [
      {
        title: 'Proof-based performance dashboard',
        body: 'Real impressions, engagement, and audience quality are tracked per post, per KOL, and per campaign, so bot-inflated reach has nowhere to hide.',
      },
      {
        title: 'Content library',
        body: 'View, analyze, and download every KOL post from one organized place. Export the full record whenever compliance or your DAO asks for it.',
      },
      {
        title: 'CPM and cost-per-conversion, calculated for you',
        body: 'Campaign economics appear without spreadsheet math. See which KOLs are actually worth their fee at a glance.',
      },
    ],
    cta: 'Request a demo',
    mockup: 'performance',
    reverse: true,
  },
  {
    eyebrow: 'Attribute',
    heading: 'On-chain results, wired to each KOL',
    features: [
      {
        title: 'Tracking links and referral codes',
        body: 'Spin up unique referral links and codes directly in Kolio and hand them to KOLs in a few clicks.',
      },
      {
        title: 'On-chain attribution wired to wallets',
        body: 'Connect your contract or referral program once and see swaps, mints, sign-ups, and volume attributed to each KOL, all in one dashboard.',
      },
      {
        title: 'Identify your real top performers',
        body: 'See which KOLs and campaigns drive the most verified conversions and on-chain volume. Renew the winners, drop the rest.',
      },
    ],
    cta: 'Request a demo',
    mockup: 'attribution',
  },
];

/* ---------- Overview mockup (light card) ---------- */
function OverviewMockup() {
  return (
    <div className="card-kit p-5">
      <div className="flex items-center justify-between">
        <span className="eyebrow">Campaign feed</span>
        <span className="chip chip-onchain">Live</span>
      </div>
      <div className="mt-4 flex flex-col gap-2.5">
        {[
          { h: '@defi_degen', p: 'X · Thread', v: '212K' },
          { h: '@onchain_alpha', p: 'YouTube · Review', v: '88K' },
          { h: '@tg_signals', p: 'Telegram · Broadcast', v: '41K' },
          { h: '@l2_maxi', p: 'X · Quote post', v: '156K' },
        ].map((r) => (
          <div
            key={r.h}
            className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-gradient-brand" aria-hidden />
              <div>
                <p className="text-body-sm font-semibold text-foreground">{r.h}</p>
                <p className="text-body-sm text-foreground/55">{r.p}</p>
              </div>
            </div>
            <span className="num-display text-body-md text-foreground/80">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Performance mockup (intentional bar chart + deltas) ---------- */
const PERF_BARS = [
  { m: 'Jan', v: 1.8 },
  { m: 'Feb', v: 2.4 },
  { m: 'Mar', v: 2.1 },
  { m: 'Apr', v: 3.2 },
  { m: 'May', v: 2.9 },
  { m: 'Jun', v: 3.8 },
  { m: 'Jul', v: 4.6 },
  { m: 'Aug', v: 6.1 },
];
const PERF_MAX = 6.1;

function PerformanceMockup() {
  return (
    <div className="card-kit p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="eyebrow">Verified reach</span>
          <p className="mt-1 num-display text-h4 leading-none text-foreground">6.1M</p>
        </div>
        <span className="chip chip-onchain inline-flex items-center gap-1">
          <ArrowUpRight size={13} />
          +38.2%
        </span>
      </div>

      {/* labeled bars with a real baseline + y-grid */}
      <div className="mt-5 rounded-lg bg-gray-50 p-4">
        <div className="relative flex h-[132px] items-end gap-2 border-b border-gray-200">
          {/* baseline gridline */}
          <span
            className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-200"
            aria-hidden
          />
          {PERF_BARS.map((b) => (
            <div key={b.m} className="flex flex-1 flex-col items-center justify-end gap-1.5">
              <span
                className="w-full rounded-t bg-gradient-brand"
                style={{ height: `${(b.v / PERF_MAX) * 100}%` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex gap-2">
          {PERF_BARS.map((b) => (
            <span
              key={b.m}
              className="flex-1 text-center font-mono-tnum text-[0.6rem] text-foreground/40"
            >
              {b.m}
            </span>
          ))}
        </div>
      </div>

      {/* stat row with mint %-change deltas */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { l: 'Real reach', v: '6.1M', d: '+38%' },
          { l: 'Audience quality', v: '92%', d: '+6pt' },
          { l: 'Cost / conv.', v: '$1.84', d: '−21%' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-gray-50 p-3">
            <p className="num-display text-body-lg text-foreground">{s.v}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-body-sm text-foreground/55">{s.l}</span>
              <span className="font-mono-tnum text-[0.65rem] font-semibold text-mint">
                {s.d}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Attribution mockup (DARK on-chain punctuation) ---------- */
const ATTR_ROWS = [
  { h: '@defi_degen', code: 'DEGEN10', kind: 'swaps', conv: '1,204', vol: '$312K', d: '+44%' },
  { h: '@onchain_alpha', code: 'ALPHA', kind: 'mints', conv: '880', vol: '$198K', d: '+27%' },
  { h: '@l2_maxi', code: 'L2MAXI', kind: 'swaps', conv: '642', vol: '$141K', d: '+12%' },
];

function AttributionMockup() {
  return (
    <div className="surface-onchain glow-brand rounded-xl p-5">
      <div className="flex items-center justify-between">
        <span className="eyebrow">On-chain attribution</span>
        <span className="inline-flex items-center gap-2 rounded-pill bg-white/5 px-3 py-1 text-body-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-mint" />
          Wallet-verified
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {ATTR_ROWS.map((r) => (
          <div
            key={r.h}
            className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3 ring-1 ring-white/[0.06]"
          >
            <div className="min-w-0">
              <p className="text-body-sm font-semibold text-white">{r.h}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-mono-tnum text-[0.7rem] text-white/45">
                  {r.code}
                </span>
                <span className="chip chip-onchain">{r.kind}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono-tnum text-body-md text-white">{r.vol}</p>
              <p className="font-mono-tnum text-[0.7rem] text-mint">
                {r.conv} conv · {r.d}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-body-sm text-white/55">Attributed volume</span>
        <span className="num-display text-body-lg text-white">$651K</span>
      </div>
    </div>
  );
}

function Mockup({ kind }: { kind: Row['mockup'] }) {
  if (kind === 'overview') return <OverviewMockup />;
  if (kind === 'performance') return <PerformanceMockup />;
  return <AttributionMockup />;
}

/** "Track campaigns automatically" — 3 alternating mockup/feature rows. */
export default function TrackCampaigns() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">The tracking loop</span>
          <h2 className="mt-3 display-lg font-display text-h4 text-foreground md:text-h3">
            Track KOL campaigns automatically
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-body-md text-foreground/70">
            Capture every KOL post, verify every reach number, and wire on-chain
            results back to each creator, so you can focus on scaling what actually
            works.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {ROWS.map((row) => (
            <div
              key={row.eyebrow}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* mockup */}
              <div className={row.reverse ? 'md:order-2' : ''}>
                <Mockup kind={row.mockup} />
              </div>

              {/* text */}
              <div className={row.reverse ? 'md:order-1' : ''}>
                <span className="eyebrow">{row.eyebrow}</span>
                <h3 className="mb-6 mt-3 display-lg text-h4 text-foreground">
                  {row.heading}
                </h3>
                <div className="flex flex-col gap-6">
                  {row.features.map((f) => (
                    <div key={f.title}>
                      <h4 className="text-body font-semibold text-foreground">
                        {f.title}
                      </h4>
                      <p className="mt-1.5 text-body text-foreground/70">{f.body}</p>
                    </div>
                  ))}
                </div>
                {row.cta && (
                  <div className="mt-8">
                    <ButtonA href="/demo-confirmation" variant="primary">
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
