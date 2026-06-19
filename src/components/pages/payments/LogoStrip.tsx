import Container from '@/components/ui/Container';

const BRANDS = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Optimism',
  'MetaMask',
  'Polygon',
  'dYdX',
];

/** Social proof — heading + text row of web3 brand names. */
export default function LogoStrip() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold text-ink">
          Kolio is trusted by 600+ web3 brands and exchanges
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {BRANDS.map((b) => (
            <span
              key={b}
              className="whitespace-nowrap font-display text-[1.35rem] font-bold tracking-tight text-foreground/40 transition-colors hover:text-foreground/70 md:text-[1.6rem]"
            >
              {b}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
