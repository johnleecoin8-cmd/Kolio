import Container from '@/components/ui/Container';
import LogoMarquee from '@/components/kit/LogoMarquee';

const TRUSTED_BY = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Polygon',
  'Optimism',
  'Arclayer',
  'Novachain',
];

/** Closing CTA — the single red gradient moment + auto-scroll partner marquee. */
export default function GrowCta() {
  return (
    <>
      <LogoMarquee names={TRUSTED_BY} />

      <section className="bg-gradient-brand py-16 md:py-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="eyebrow text-white/80">Start searching</span>
            <h2 className="mt-3 display-xl font-display text-[2rem] leading-tight text-white md:text-[2.75rem]">
              The right crypto KOL is one search away
            </h2>
            <p className="mt-6 max-w-[640px] text-body-md text-white/85">
              Search 120K proof-scored KOLs, sorted by how well they match your
              token. Screen audiences for bots, pay on-chain, and build
              attributable programs that survive the next launch cycle.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-white px-7 text-body font-semibold uppercase tracking-wide text-brand transition hover:opacity-90"
            >
              Run your first search
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
