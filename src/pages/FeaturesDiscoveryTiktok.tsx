import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import Hero from '@/components/pages/features-discovery-tiktok/Hero';
import UnmatchedScale from '@/components/pages/features-discovery-tiktok/UnmatchedScale';
import PerformanceTabs from '@/components/pages/features-discovery-tiktok/PerformanceTabs';
import FeatureRows from '@/components/pages/features-discovery-tiktok/FeatureRows';
import Testimonial from '@/components/pages/features-discovery-tiktok/Testimonial';
import Faq from '@/components/pages/features-discovery-tiktok/Faq';
import CtaBand from '@/components/pages/features-discovery-tiktok/CtaBand';

/**
 * Kolio — Crypto KOL discovery for TikTok.
 * Web3 influencer marketing: find, verify, pay & attribute crypto KOLs.
 * Sections render top-to-bottom.
 */
export default function FeaturesDiscoveryTiktok() {
  return (
    <main>
      <Hero />
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
