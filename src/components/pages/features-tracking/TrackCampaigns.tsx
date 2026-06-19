import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Feature = { title: string; body: string };

type Row = {
  eyebrow: string;
  features: Feature[];
  cta?: string;
  mockup: 'overview' | 'performance' | 'attribution';
  reverse?: boolean;
};

const ROWS: Row[] = [
  {
    eyebrow: 'Capture every KOL post automatically',
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
    eyebrow: 'Track verified reach, not vanity metrics',
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
    eyebrow: 'Connect on-chain results to each KOL automatically',
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

/** Brand-neutral product mockup built with divs (no external imagery). */
function Mockup({ kind }: { kind: Row['mockup'] }) {
  if (kind === 'overview') {
    return (
      <div className="rounded-xl border border-black/10 bg-white p-5 shadow-nav">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
          Campaign feed
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {[
            { h: '@defi_degen', p: 'X · Thread', v: '212K' },
            { h: '@onchain_alpha', p: 'YouTube · Review', v: '88K' },
            { h: '@tg_signals', p: 'Telegram · Broadcast', v: '41K' },
            { h: '@l2_maxi', p: 'X · Quote post', v: '156K' },
          ].map((r) => (
            <div
              key={r.h}
              className="flex items-center justify-between rounded-lg bg-background-soft px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-gradient-brand" aria-hidden />
                <div>
                  <p className="text-body-sm font-semibold text-foreground">{r.h}</p>
                  <p className="text-body-sm text-foreground/55">{r.p}</p>
                </div>
              </div>
              <span className="text-body-sm font-semibold text-foreground/80">
                {r.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'performance') {
    return (
      <div className="rounded-xl border border-black/10 bg-white p-5 shadow-nav">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
          Verified reach
        </p>
        <div className="mt-4 flex items-end gap-2 rounded-lg bg-background-soft p-4">
          {[52, 71, 60, 88, 74, 96, 81, 90, 66, 84, 78, 99].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-brand"
              style={{ height: `${h}px` }}
              aria-hidden
            />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { l: 'Real reach', v: '6.1M' },
            { l: 'Audience quality', v: '92%' },
            { l: 'Cost / conv.', v: '$1.84' },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-background-soft p-3">
              <p className="text-body-md font-bold text-foreground">{s.v}</p>
              <p className="text-body-sm text-foreground/55">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-nav">
      <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
        On-chain attribution
      </p>
      <div className="mt-4 flex flex-col gap-3">
        {[
          { h: '@defi_degen', code: 'DEGEN10', conv: '1,204', vol: '$312K' },
          { h: '@onchain_alpha', code: 'ALPHA', conv: '880', vol: '$198K' },
          { h: '@l2_maxi', code: 'L2MAXI', conv: '642', vol: '$141K' },
        ].map((r) => (
          <div
            key={r.h}
            className="flex items-center justify-between rounded-lg bg-background-soft px-4 py-3"
          >
            <div>
              <p className="text-body-sm font-semibold text-foreground">{r.h}</p>
              <p className="text-body-sm text-foreground/55">code {r.code}</p>
            </div>
            <div className="text-right">
              <p className="text-body-sm font-semibold text-foreground">{r.vol}</p>
              <p className="text-body-sm text-foreground/55">{r.conv} conv.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "Track campaigns automatically" — 3 alternating mockup/feature rows. */
export default function TrackCampaigns() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2rem]">
            Track KOL campaigns automatically
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-body-md text-foreground/70">
            Let Kolio capture every KOL post, verify every reach number, and wire
            on-chain results back to each creator, so you can focus on scaling what
            actually works.
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
                <h3 className="mb-6 text-[1.5rem] font-bold leading-tight text-foreground">
                  {row.eyebrow}
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
