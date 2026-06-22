import LogoMarquee from '@/components/kit/LogoMarquee';

const NAMES = [
  'OKX', 'Ledger', 'Phantom', 'Arbitrum', 'Kaito', 'zkSync', 'Pyth',
  'Optimism', 'Sei', 'Berachain', 'EigenLayer', 'Jupiter', 'Polygon', 'Aptos',
];

/** Auto-scrolling partner wordmark marquee (kit). */
export default function LogoStrip() {
  return (
    <LogoMarquee
      label="Web3 teams running KOL campaigns on Kolio"
      names={NAMES}
    />
  );
}
