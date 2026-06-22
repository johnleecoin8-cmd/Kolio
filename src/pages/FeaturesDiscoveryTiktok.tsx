import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import LogoMarquee from '@/components/kit/LogoMarquee';
import Hero from '@/components/pages/features-discovery-tiktok/Hero';
import UnmatchedScale from '@/components/pages/features-discovery-tiktok/UnmatchedScale';
import PerformanceTabs from '@/components/pages/features-discovery-tiktok/PerformanceTabs';
import FeatureRows from '@/components/pages/features-discovery-tiktok/FeatureRows';
import Testimonial from '@/components/pages/features-discovery-tiktok/Testimonial';
import Faq from '@/components/pages/features-discovery-tiktok/Faq';
import CtaBand from '@/components/pages/features-discovery-tiktok/CtaBand';

/** Web3 brands & exchanges that vet TikTok KOLs on Kolio — text wordmarks. */
const BRANDS = [
  'OKX',
  'Ledger',
  'Phantom',
  'Arbitrum',
  'Polygon',
  'Kaito',
  'Lido',
  'Optimism',
  'dYdX',
  'Aave',
  'Pendle',
  'Jupiter',
];

/**
 * Kolio — Crypto KOL discovery for TikTok.
 * Web3 influencer marketing: find, verify, pay & attribute crypto KOLs.
 * Sections render top-to-bottom.
 */
export default function FeaturesDiscoveryTiktok() {
  return (
    <main>
      <Hero />
      <LogoMarquee
        label="Trusted by web3 brands, exchanges & protocols"
        names={BRANDS}
      />
      <LiveCreatorRail title="Discover TikTok creators" filters={{ platform: 'tiktok' }} count={8} />
      <UnmatchedScale />
      <PerformanceTabs />
      <FeatureRows />
      <Testimonial />
      <Faq />
      <CtaBand />
    </main>
  );
}
