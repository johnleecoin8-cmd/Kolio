import Container from '@/components/ui/Container';

const CONTACTS = [
  { handle: '@defi_degen', via: 'Telegram' },
  { handle: '@nft_curator', via: 'Email' },
  { handle: '@l2_research', via: 'X DM' },
];

/** "From result to deal" — copy left, outreach + on-chain escrow card-kit mock right. */
export default function EmailsFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <span className="eyebrow">From result to deal</span>
            <h2 className="mt-3 display-lg font-display text-[2rem] text-foreground md:text-[2.5rem]">
              Reach the shortlist, pay on-chain
            </h2>
            <p className="mt-6 text-body text-foreground/75">
              Every result carries a verified contact channel &mdash; Telegram,
              email, or X DM &mdash; surfaced in one click. No scraping, no
              guessing which handle is real.
            </p>
            <p className="mt-4 text-body text-foreground/75">
              Move straight from outreach to a deal: lock budget in on-chain
              escrow, release on delivery, and skip the wire transfers and
              invoicing back-and-forth.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-brand px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>

          {/* outreach + escrow card-kit mock */}
          <div className="md:justify-self-end">
            <div className="card-kit w-full max-w-[460px] p-6">
              <span className="eyebrow">Outreach shortlist</span>
              <ul className="mt-4 divide-y divide-gray-200">
                {CONTACTS.map((c) => (
                  <li
                    key={c.handle}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <div className="font-mono-tnum text-body font-medium text-foreground">
                        {c.handle}
                      </div>
                      <div className="text-body text-foreground/55">
                        via {c.via}
                      </div>
                    </div>
                    <span className="chip chip-onchain">Reachable</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3.5">
                <span className="text-body font-medium text-foreground/60">
                  Escrow funded
                </span>
                <span className="num-display font-mono-tnum text-[1.25rem] text-brand">
                  12,000 USDC
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
