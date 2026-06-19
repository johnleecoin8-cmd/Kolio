import Hero from '@/components/pages/search-engine/Hero';
import FilterShowcase from '@/components/pages/search-engine/FilterShowcase';
import AnalyzeFeature from '@/components/pages/search-engine/AnalyzeFeature';
import EmailsFeature from '@/components/pages/search-engine/EmailsFeature';
import Quote from '@/components/pages/search-engine/Quote';
import Faq from '@/components/pages/search-engine/Faq';
import GrowCta from '@/components/pages/search-engine/GrowCta';

/** Kolio /search-engine — web3 KOL discovery & vetting. */
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
