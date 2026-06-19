import Container from '@/components/ui/Container';

/** Plausible web3 brands / exchanges / protocols, rendered as styled text. */
const BRANDS = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Optimism',
  'MetaMask',
  'Polygon',
  'Uniswap',
  'Aptos',
  'Base',
  'Sui',
  'dYdX',
];

/** Trusted-by text wall. */
export default function LogoBar() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="text-center text-[1.5rem] font-bold leading-tight text-foreground md:text-[1.875rem]">
          Kolio is trusted by 1,200+ web3 brands, exchanges, and protocols
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:mt-12">
          {BRANDS.map((b) => (
            <span
              key={b}
              className="font-display text-[1.25rem] font-semibold tracking-tight text-foreground/45 transition hover:text-foreground/70 md:text-[1.5rem]"
            >
              {b}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
