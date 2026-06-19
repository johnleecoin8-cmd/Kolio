import Container from '@/components/ui/Container';

type Card = {
  mockup: 'workflow' | 'links' | 'export';
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    mockup: 'workflow',
    title: 'Custom workflows & bulk actions',
    body: 'Build statuses that match how your team runs KOL deals, from outreach to escrow release. Track every KOL across campaigns and move them in bulk.',
  },
  {
    mockup: 'links',
    title: 'Referral links & on-chain codes',
    body: 'Create unique referral links, UTM links, QR codes, and on-chain referral codes inside Kolio. Hand them to KOLs in a few clicks and track usage automatically.',
  },
  {
    mockup: 'export',
    title: 'Date range, currency & full export',
    body: 'Segment by date and export everything to CSV. Report in any currency and keep a clean record for finance, compliance, or your DAO.',
  },
];

/** Brand-neutral mini-mockup per card. */
function CardMockup({ kind }: { kind: Card['mockup'] }) {
  if (kind === 'workflow') {
    return (
      <div className="w-full space-y-2">
        {['Outreach', 'Negotiating', 'Posting live', 'Payout escrowed'].map(
          (s, i) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-btn"
            >
              <span className="flex items-center gap-2 text-body-sm font-medium text-foreground/80">
                <span
                  className={
                    i === 2
                      ? 'h-2 w-2 rounded-full bg-positive'
                      : 'h-2 w-2 rounded-full bg-foreground/25'
                  }
                />
                {s}
              </span>
              <span className="text-body-sm text-foreground/45">{4 - i}</span>
            </div>
          )
        )}
      </div>
    );
  }
  if (kind === 'links') {
    return (
      <div className="w-full space-y-2">
        {[
          { c: 'DEGEN10', t: 'Referral code' },
          { c: 'kol.io/r/alpha', t: 'Tracking link' },
          { c: 'UTM · launch', t: 'UTM link' },
        ].map((r) => (
          <div
            key={r.c}
            className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 shadow-btn"
          >
            <span className="font-mono text-body-sm font-semibold text-foreground">
              {r.c}
            </span>
            <span className="text-body-sm text-foreground/45">{r.t}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="w-full space-y-3">
      <div className="flex items-end gap-1.5">
        {[30, 48, 38, 60, 52, 70].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t bg-gradient-brand"
            style={{ height: `${h}px` }}
            aria-hidden
          />
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-btn">
        <span className="text-body-sm font-medium text-foreground/80">
          Export · CSV
        </span>
        <span className="text-body-sm text-foreground/45">Jan – Mar</span>
      </div>
    </div>
  );
}

/** "Everything you need to measure what matters" — 3 mockup cards. */
export default function MeasureGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[660px] text-center text-[1.75rem] font-bold leading-[1.15] text-foreground md:text-[2rem]">
          Everything you need to measure what matters
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="flex flex-col">
              <div className="flex min-h-[180px] items-center justify-center overflow-hidden rounded-xl bg-background-soft p-6">
                <CardMockup kind={c.mockup} />
              </div>
              <h3 className="mt-6 text-body-md font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-body text-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
