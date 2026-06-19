import Container from '@/components/ui/Container';

const BRANDS = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Polygon',
  'Aptos',
];

/** Trusted-by row — web3 brand names rendered as clean styled text (no logos). */
export default function TrustedBy() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <p className="text-center text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
          The data behind web3 campaigns at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((name) => (
            <span
              key={name}
              className="font-display text-[1.375rem] uppercase leading-none text-foreground/35 transition hover:text-foreground/70 md:text-[1.625rem]"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
