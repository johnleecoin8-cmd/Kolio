import PageHeader from '@/components/pages/find-influencers/PageHeader';
import ResultsPanel from '@/components/pages/find-influencers/ResultsPanel';
import RelatedSearches from '@/components/pages/find-influencers/RelatedSearches';
import Faq from '@/components/pages/find-influencers/Faq';
import PlatformCta from '@/components/pages/find-influencers/PlatformCta';

/**
 * Kolio "Top 20 DeFi KOLs on X" SEO list page — the web3 influencer
 * marketing platform. Proof-based KOL discovery and vetting for crypto.
 */
export default function FindInfluencers() {
  return (
    <>
      <PageHeader />
      <ResultsPanel />
      <RelatedSearches />
      <Faq />
      <PlatformCta />
    </>
  );
}
