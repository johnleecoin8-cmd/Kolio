import Hero from '@/components/pages/features-email-finder/Hero';
import DataFeature from '@/components/pages/features-email-finder/DataFeature';
import FeatureRow from '@/components/pages/features-email-finder/FeatureRow';
import {
  BulkEmailMockup,
  FilterMockup,
  InboxMockup,
} from '@/components/pages/features-email-finder/Mockups';
import Faq from '@/components/pages/features-email-finder/Faq';
import CtaBanner from '@/components/pages/features-email-finder/CtaBanner';

export default function FeaturesEmailFinder() {
  return (
    <main>
      <Hero />

      <DataFeature />

      <FeatureRow reverse heading="Reach crypto KOLs in bulk" visual={<BulkEmailMockup />}>
        <p>
          Cut the repetitive work and keep every message feeling 1:1 at scale
          using variables for handle, project, and chain.
        </p>
        <p className="mt-5">
          Use it for outreach, onboarding KOLs, sharing campaign briefs, sending
          tracking links, or any other crypto creator communication.
        </p>
      </FeatureRow>

      <FeatureRow heading="Filter 12M+ crypto KOL profiles" visual={<FilterMockup />}>
        <p>
          Speed up discovery by showing only KOLs with public contacts and
          recent on-chain activity — across DeFi, NFTs, L1/L2, trading, and
          gaming niches.
        </p>
        <p className="mt-5">
          Then narrow by audience and performance: wallet-active followers, a
          target country, or a range of average views.
        </p>
      </FeatureRow>

      <FeatureRow reverse heading="Run every deal from one inbox" visual={<InboxMockup />}>
        <p>
          See only your KOL conversations, then sort them by deal stage — from
          first reply to escrow to live campaign — so nothing slips and you
          spend less time context switching.
        </p>
      </FeatureRow>

      <Faq />

      <CtaBanner />
    </main>
  );
}
