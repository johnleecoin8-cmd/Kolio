import PageHeader from '@/components/pages/find-influencers/PageHeader';
import ResultsPanel from '@/components/pages/find-influencers/ResultsPanel';
import RelatedSearches from '@/components/pages/find-influencers/RelatedSearches';
import Faq from '@/components/pages/find-influencers/Faq';
import ShopifyCta from '@/components/pages/find-influencers/ShopifyCta';

/**
 * modash.io "Top 20 American Fitness Influencers" SEO list page.
 * 1:1 clone of /find-influencers/united-states/fitness.
 */
export default function FindInfluencers() {
  return (
    <>
      <PageHeader />
      <ResultsPanel />
      <RelatedSearches />
      <Faq />
      <ShopifyCta />
    </>
  );
}
