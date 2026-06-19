import Container from '@/components/ui/Container';

const LOGOS: string[] = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Optimism',
  'MetaMask',
  'Base',
  'Polygon',
  'Uniswap',
  'Aptos',
  'Sui',
  'Magic Eden',
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {LOGOS.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap font-display text-[1.5rem] font-bold tracking-tight text-foreground/45"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

/** Trusted-by logo marquee — two duplicated rows scrolling right→left. */
export default function LogoBar() {
  return (
    <section className="bg-white pb-16 pt-20 md:pb-24 md:pt-28">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-body-sm font-bold text-foreground/50">
            Trusted by web3 teams
          </p>
          <h2 className="mt-3 font-display text-h4 text-foreground md:text-[2.5rem]">
            Where exchanges, protocols &amp; projects run KOL marketing
          </h2>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow />
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Container>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
