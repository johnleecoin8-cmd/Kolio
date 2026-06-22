import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import Hero from '@/components/pages/lookalike-tool/Hero';
import FindLookalikes from '@/components/pages/lookalike-tool/FindLookalikes';
import FilteringLayers from '@/components/pages/lookalike-tool/FilteringLayers';
import AnalyzeProfiles from '@/components/pages/lookalike-tool/AnalyzeProfiles';
import Testimonial from '@/components/pages/lookalike-tool/Testimonial';
import FinalCta from '@/components/pages/lookalike-tool/FinalCta';

/** Kolio — KOL Lookalike Tool. Find more crypto KOLs like the ones that convert. */
export default function LookalikeTool() {
  return (
    <>
      <Hero />
      <LiveCreatorRail
        title="Lookalike creators"
        subtitle="Find creators similar to your top performers — open a profile to see its lookalikes."
        count={8}
      />
      <FindLookalikes />
      <FilteringLayers />
      <AnalyzeProfiles />
      <Testimonial />
      <FinalCta />
    </>
  );
}
