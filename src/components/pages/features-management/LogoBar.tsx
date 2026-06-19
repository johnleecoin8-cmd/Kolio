import Container from '@/components/ui/Container';

/** Plausible web3 brands / exchanges / protocols — rendered as styled text, no logos. */
const BRANDS: string[] = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Polygon',
  'Optimism',
  'MetaMask',
  'Sui',
  'Base',
  'Aptos',
  'Uniswap',
  'Lido',
  'Sei',
  'Starknet',
  'Jupiter',
  'Blast',
];

function Item({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center px-6">
      <span className="whitespace-nowrap font-display text-body-lg font-semibold uppercase tracking-tight text-ink/70">
        {name}
      </span>
    </div>
  );
}

/** Trusted-by row, two flowing lines of web3 brand names. */
export default function LogoBar() {
  const rowA = BRANDS.slice(0, 8);
  const rowB = BRANDS.slice(8);
  return (
    <section className="overflow-hidden bg-background py-16 md:py-20">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold text-ink">
          Trusted by 300+ web3 brands, exchanges, and protocols
        </h2>
      </Container>

      <div className="mt-10 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {rowA.map((b) => (
            <Item key={b} name={b} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {rowB.map((b) => (
            <Item key={b} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
