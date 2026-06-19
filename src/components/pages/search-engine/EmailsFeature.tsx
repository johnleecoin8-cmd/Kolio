import Container from '@/components/ui/Container';

const CONTACTS = [
  { handle: '@defi_degen', via: 'Telegram', status: 'Reachable' },
  { handle: '@nft_curator', via: 'Email', status: 'Reachable' },
  { handle: '@l2_research', via: 'X DM', status: 'Reachable' },
];

/** "Reach KOLs & pay on-chain" — copy left, outreach/escrow mockup right. */
export default function EmailsFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Reach KOLs and pay on-chain
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              Surface verified contact channels &mdash; Telegram, email, or X
              DM &mdash; for every KOL in your shortlist, in one click.
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Move straight from outreach to a deal: lock budget in on-chain
              escrow, release on delivery, and skip the wire transfers and
              invoicing back-and-forth.
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Drastically cut the time you spend recruiting crypto KOLs.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>

          {/* brand-neutral outreach + escrow mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[460px] rounded-xl border border-foreground/10 bg-background p-6 shadow-sm">
              <span className="text-body font-semibold text-violet-dark">
                Outreach shortlist
              </span>
              <ul className="mt-4 divide-y divide-foreground/10">
                {CONTACTS.map((c) => (
                  <li
                    key={c.handle}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <div className="text-body font-medium text-foreground">
                        {c.handle}
                      </div>
                      <div className="text-body text-foreground/60">
                        via {c.via}
                      </div>
                    </div>
                    <span className="rounded-full bg-coral-bg px-3 py-1 text-body font-semibold text-violet-dark">
                      {c.status}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg bg-gradient-brand p-px">
                <div className="flex items-center justify-between rounded-[7px] bg-background px-4 py-3">
                  <span className="text-body font-medium text-foreground/70">
                    Escrow funded
                  </span>
                  <span className="font-display text-[1.25rem] text-violet-dark">
                    12,000 USDC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
