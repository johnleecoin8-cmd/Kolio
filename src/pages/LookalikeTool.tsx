import Hero from '@/components/pages/lookalike-tool/Hero';
import FindLookalikes from '@/components/pages/lookalike-tool/FindLookalikes';
import FilteringLayers from '@/components/pages/lookalike-tool/FilteringLayers';
import AnalyzeProfiles from '@/components/pages/lookalike-tool/AnalyzeProfiles';
import Testimonial from '@/components/pages/lookalike-tool/Testimonial';
import FinalCta from '@/components/pages/lookalike-tool/FinalCta';

/** modash.io /influencer-lookalike-tool — 1:1 clone. */
export default function LookalikeTool() {
  return (
    <>
      <Hero />
      <FindLookalikes />
      <FilteringLayers />
      <AnalyzeProfiles />
      <Testimonial />
      <FinalCta />
    </>
  );
}
