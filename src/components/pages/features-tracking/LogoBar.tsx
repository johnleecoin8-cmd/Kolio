import LogoMarquee from '@/components/kit/LogoMarquee';

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

/** Auto-scrolling trusted-by ribbon (replaces the flat gray wordmark wall). */
export default function LogoBar() {
  return (
    <LogoMarquee
      label="Trusted by 1,200+ web3 brands, exchanges, and protocols"
      names={BRANDS}
    />
  );
}
