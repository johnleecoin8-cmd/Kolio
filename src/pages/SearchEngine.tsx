import Hero from '@/components/pages/search-engine/Hero';
import FilterShowcase from '@/components/pages/search-engine/FilterShowcase';
import AnalyzeFeature from '@/components/pages/search-engine/AnalyzeFeature';
import EmailsFeature from '@/components/pages/search-engine/EmailsFeature';
import Quote from '@/components/pages/search-engine/Quote';
import Faq from '@/components/pages/search-engine/Faq';
import GrowCta from '@/components/pages/search-engine/GrowCta';

/** modash.io /influencer-search-engine — 1:1 clone. */
export default function SearchEngine() {
  return (
    <main>
      <Hero />
      <FilterShowcase />
      <AnalyzeFeature />
      <EmailsFeature />
      <Quote />
      <Faq />
      <GrowCta />
    </main>
  );
}
