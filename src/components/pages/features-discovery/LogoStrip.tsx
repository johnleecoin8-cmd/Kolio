import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

// Text-based "trusted by" row — plausible web3 exchanges, wallets, chains & protocols.
const ROW_1 = ['OKX', 'Ledger', 'Phantom', 'Arbitrum', 'Kaito', 'zkSync', 'Pyth'];
const ROW_2 = ['Optimism', 'Sei', 'Berachain', 'EigenLayer', 'Jupiter', 'Polygon', 'Aptos'];

function Row({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
      {items.map((name) => (
        <span
          key={name}
          className="font-display text-[1.25rem] md:text-[1.5rem] uppercase tracking-tight text-foreground/45 transition hover:text-foreground/70"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

/** "Trusted by web3 teams" heading + two text logo rows. */
export default function LogoStrip() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading className="text-center">
          Trusted by web3 teams running KOL campaigns
        </SectionHeading>
        <div className="mt-8 flex flex-col gap-5 md:gap-6">
          <Row items={ROW_1} />
          <Row items={ROW_2} />
        </div>
      </Container>
    </section>
  );
}
