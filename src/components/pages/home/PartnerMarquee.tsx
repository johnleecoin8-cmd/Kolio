import LogoMarquee from '@/components/kit/LogoMarquee';

const NAMES = [
  'Ledger', 'Phantom', 'Arbitrum', 'OKX', 'Optimism', 'MetaMask',
  'Base', 'Polygon', 'Uniswap', 'Aptos', 'Sui', 'Magic Eden',
];

/** Auto-scrolling partner wordmark ribbon for the homepage. */
export default function PartnerMarquee() {
  return (
    <LogoMarquee
      label="Where exchanges, protocols & projects run KOL marketing"
      names={NAMES}
    />
  );
}
