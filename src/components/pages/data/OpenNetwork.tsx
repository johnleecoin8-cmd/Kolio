import Container from '@/components/ui/Container';

type Cell = { lead?: string; body: React.ReactNode };
type Row = { label: string; optin: Cell; open: Cell };

const ROWS: Row[] = [
  {
    label: 'Most suitable for',
    optin: {
      body: 'Small-scale, one-time, local collaborations in highly mature influencer industries, like fashion and beauty.',
    },
    open: {
      body: 'Efficient in-house marketers for brands with global audiences in any niche looking to partner with creators of all sizes.',
    },
  },
  {
    label: 'Options',
    optin: {
      lead: 'Limited',
      body: (
        <>
          Once you start narrowing down a vetted influencer list by platform,
          location, and niche, you’ll quickly run out of options.
          <br />
          <br />
          Looking for creators &amp; influencers in countries other than the US,
          the UK, or Canada? You’ll have no options.
        </>
      ),
    },
    open: {
      lead: 'Infinite',
      body: (
        <>
          You’ll never run out of options because of the sheer size of an open
          network creator database. As the creator economy grows, so too does
          Modash.
          <br />
          <br />
          If a creator is on this planet, whether in the smallest town or the
          trendiest city, you’ll find them in Modash.
        </>
      ),
    },
  },
  {
    label: 'Creator types',
    optin: {
      lead: 'More get-rich-quick influencers',
      body: 'Influencers on opt-in platforms usually produce basic quality content & are in the creator economy to make a quick buck.',
    },
    open: {
      lead: 'More authentic & relatable creators',
      body: 'Modash has millions of small creators who are posting relatable content because they love creating. (Some might even be fans of your brand already!)',
    },
  },
  {
    label: 'Opportunity',
    optin: {
      lead: 'Gatekeep-y status quo',
      body: 'Opt-in networks can become echo chambers. Same voices, same faces, same brands. A higher barrier to entry also means that smaller brands & creators don’t get a piece of the pie.',
    },
    open: {
      lead: 'Fair & equitable',
      body: 'Open creator networks can act as a flywheel, creating more opportunities for more people and brands to become part of the creator economy. Everyone is invited to play.',
    },
  },
];

function CellContent({ cell }: { cell: Cell }) {
  return (
    <>
      {cell.lead && (
        <div className="mb-2 text-body-md font-bold text-foreground">
          {cell.lead}
        </div>
      )}
      <div className="text-body-sm text-foreground/75">{cell.body}</div>
    </>
  );
}

/** Open network comparison table. */
export default function OpenNetwork() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <h2 className="font-display text-[2rem] leading-tight text-foreground md:text-[2.5rem]">
            Modash is proud to be an open network creator database
          </h2>
          <p className="mt-4 text-body-md text-foreground/75">
            Unlike opt-in networks, we list all influencers who post publicly.
            Here’s how we’re different.
          </p>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[180px_1fr_1fr]">
            {/* header */}
            <div />
            <div className="border-b border-black/10 px-6 pb-5">
              <div className="text-body-lg font-bold text-foreground">
                Opt-in Creator Database
              </div>
              <div className="mt-2 text-eyebrow text-foreground/55">
                Opt-in databases offer vetted lists of influencers who have put
                up their hand and agreed to join the specific network.
              </div>
            </div>
            <div className="rounded-t-xl bg-purple-bg border-b border-black/10 px-6 pb-5 pt-6">
              <div className="text-body-lg font-bold text-foreground">
                Open network Creator Database
              </div>
              <div className="mt-2 text-eyebrow text-foreground/55">
                Open creator networks list every influencer &amp; creator who
                has chosen to post publicly. Creators can opt out at any time.
              </div>
            </div>

            {/* rows */}
            {ROWS.map((row, i) => (
              <div key={row.label} className="contents">
                <div className="border-b border-black/10 py-6 pr-4">
                  <div className="text-body font-bold text-foreground">
                    {row.label}
                  </div>
                </div>
                <div className="border-b border-black/10 px-6 py-6">
                  <CellContent cell={row.optin} />
                </div>
                <div
                  className={`bg-purple-bg border-b border-black/10 px-6 py-6 ${
                    i === ROWS.length - 1 ? 'rounded-b-xl border-b-0' : ''
                  }`}
                >
                  <CellContent cell={row.open} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked two cards */}
        <div className="space-y-6 md:hidden">
          <div className="rounded-xl border border-black/10 p-6">
            <div className="text-body-lg font-bold text-foreground">
              Opt-in Creator Database
            </div>
            <div className="mt-2 text-eyebrow text-foreground/55">
              Opt-in databases offer vetted lists of influencers who have put up
              their hand and agreed to join the specific network.
            </div>
            <div className="mt-5 space-y-5">
              {ROWS.map((row) => (
                <div key={row.label} className="border-t border-black/10 pt-5">
                  <div className="mb-2 text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
                    {row.label}
                  </div>
                  <CellContent cell={row.optin} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-purple-bg p-6">
            <div className="text-body-lg font-bold text-foreground">
              Open network Creator Database
            </div>
            <div className="mt-2 text-eyebrow text-foreground/55">
              Open creator networks list every influencer &amp; creator who has
              chosen to post publicly. Creators can opt out at any time.
            </div>
            <div className="mt-5 space-y-5">
              {ROWS.map((row) => (
                <div key={row.label} className="border-t border-black/10 pt-5">
                  <div className="mb-2 text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
                    {row.label}
                  </div>
                  <CellContent cell={row.open} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
