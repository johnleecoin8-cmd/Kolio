import Container from '@/components/ui/Container';

// Text-based names of plausible web3 brands/exchanges — rendered as a styled
// text row (no fake logos, no Modash customer images).
const BRANDS = [
  'OKX',
  'Ledger',
  'Phantom',
  'Arbitrum',
  'Polygon',
  'Kaito',
];

/** Clean editorial trust band: "trusted by" web3 brands as styled text. */
export default function TrustedBy() {
  return (
    <section className="bg-background pt-10 md:pt-14">
      <Container className="max-w-[896px]">
        <p className="text-center text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
          Trusted by the teams building web3
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {BRANDS.map((b) => (
            <span
              key={b}
              className="font-display text-[1.25rem] uppercase tracking-tight text-foreground/55 transition-colors hover:text-foreground md:text-[1.5rem]"
            >
              {b}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
