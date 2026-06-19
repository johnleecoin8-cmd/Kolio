import Container from '@/components/ui/Container';

const TRUSTED_BY = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Polygon',
  'Optimism',
];

/** Closing CTA band — "Kolio grows your token faster" + web3 trusted-by text row. */
export default function GrowCta() {
  return (
    <section className="bg-violet/55 py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
            Kolio grows your token faster
          </h2>
          <p className="mt-6 max-w-[920px] text-body text-violet-dark/90">
            Find and vet crypto KOLs, screen their audiences for bots, pay them
            on-chain, and build attributable influencer programs that survive
            the next launch cycle.
          </p>
          <p className="mt-4 max-w-[920px] text-body text-violet-dark/90">
            Onboard a handful of high-trust KOLs into ongoing programs and
            compound real, wallet-active reach over the year &mdash; with every
            conversion tracked back to source.
          </p>
          <a
            href="/demo-confirmation"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            get started
          </a>

          <p className="mt-14 text-body font-medium uppercase tracking-wide text-violet-dark/60">
            Trusted by web3 teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                className="font-display text-[1.25rem] text-violet-dark/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
