import Container from '@/components/ui/Container';

type Cell = { lead?: string; body: React.ReactNode };
type Row = { label: string; optin: Cell; open: Cell };

const ROWS: Row[] = [
  {
    label: 'Most suitable for',
    optin: {
      body: 'One-off promo deals with whichever KOLs happened to register — usually a narrow pool of large, generalist crypto accounts.',
    },
    open: {
      body: 'Web3 brands, exchanges, and protocols running serious campaigns who need to find, vet, and partner with KOLs of every size, in every niche.',
    },
  },
  {
    label: 'Options',
    optin: {
      lead: 'Limited',
      body: (
        <>
          Once you narrow a registered KOL roster by chain, language, and
          niche, you’ll run out of accounts fast.
          <br />
          <br />
          Need KOLs covering Solana DeFi, a Korean L2 community, or a niche
          gaming token? Opt-in rosters rarely go that deep.
        </>
      ),
    },
    open: {
      lead: 'Comprehensive',
      body: (
        <>
          You won’t run dry, because Kolio indexes every crypto KOL who posts
          publicly. As web3 grows, so does the dataset.
          <br />
          <br />
          From a micro-KOL with a sharp DeFi audience to a top-tier trading
          influencer, if they’re building an audience on-chain, you’ll find
          them in Kolio.
        </>
      ),
    },
  },
  {
    label: 'KOL quality',
    optin: {
      lead: 'Pay-to-list, lightly checked',
      body: 'Registered rosters reward whoever signs up — including farmed-follower accounts and engagement pods that inflate reach for the next paid shill.',
    },
    open: {
      lead: 'Proof-based, independently verified',
      body: 'Kolio scores every KOL on real reach, audience authenticity, and engagement quality — measured from public data, not self-reported decks. You see the proof before you fund a deal.',
    },
  },
  {
    label: 'Opportunity',
    optin: {
      lead: 'Same names, same shills',
      body: 'Closed rosters become echo chambers — the same handful of big accounts promoting every project, while sharp niche KOLs and smaller brands get locked out.',
    },
    open: {
      lead: 'Open & meritocratic',
      body: 'An open network is a flywheel: any web3 brand can discover the right KOL, and any credible KOL can be found on merit — not on who paid to be listed.',
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
          <h2 className="font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
            Kolio is proud to be an open crypto KOL network
          </h2>
          <p className="mt-4 text-body-md text-foreground/75">
            Unlike pay-to-list rosters, we index every crypto KOL who posts
            publicly. Here’s how we’re different.
          </p>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[180px_1fr_1fr]">
            {/* header */}
            <div />
            <div className="border-b border-black/10 px-6 pb-5">
              <div className="text-body-lg font-bold text-foreground">
                Pay-to-list KOL roster
              </div>
              <div className="mt-2 text-eyebrow text-foreground/55">
                Registered rosters list only the KOLs who signed up and paid to
                join a specific marketplace.
              </div>
            </div>
            <div className="border-b border-black/10 px-6 pb-5">
              <div className="text-body-lg font-bold text-foreground">
                Open crypto KOL network
              </div>
              <div className="mt-2 text-eyebrow text-foreground/55">
                Open networks index every crypto KOL who chooses to post
                publicly. KOLs can opt out at any time.
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
                    i === 0 ? 'rounded-t-xl' : ''
                  } ${i === ROWS.length - 1 ? 'rounded-b-xl border-b-0' : ''}`}
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
