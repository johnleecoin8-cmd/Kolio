import Container from '@/components/ui/Container';

/** Plausible web3 brands, exchanges, and protocols — rendered as styled text, not logos. */
const ROW_ONE = [
  'OKX',
  'Ledger',
  'Phantom',
  'Arbitrum',
  'Polygon',
  'MetaMask',
  'Kaito',
  'Optimism',
];

const ROW_TWO = [
  'Uniswap',
  'Aave',
  'Chainlink',
  'Lido',
  'dYdX',
  'Magic Eden',
  'Base',
  'Solana',
];

function LogoRow({ names }: { names: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {names.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap font-display text-[1.5rem] font-bold tracking-tight text-foreground/35"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

/** Trusted-by brand strip — two marquee rows scrolling opposite ways. */
export default function LogoCarousel() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center text-[1.5rem] font-bold leading-tight text-foreground md:text-[1.75rem]">
          Kolio is trusted by 300+ web3 teams running KOL campaigns
        </h2>

        <div className="relative space-y-8 overflow-hidden">
          {/* row 1: scrolls right → left */}
          <div className="flex w-max animate-[marqueePricing_45s_linear_infinite]">
            <LogoRow names={ROW_ONE} />
            <LogoRow names={ROW_ONE} />
          </div>
          {/* row 2: scrolls left → right */}
          <div className="flex w-max animate-[marqueePricingAlt_45s_linear_infinite]">
            <LogoRow names={ROW_TWO} />
            <LogoRow names={ROW_TWO} />
          </div>

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>

      <style>{`
        @keyframes marqueePricing {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueePricingAlt {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
