import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import StatTrio from '@/components/kit/StatTrio';
import Hero from '@/components/pages/lookalike-tool/Hero';
import SeedLookalikes from '@/components/pages/lookalike-tool/SeedLookalikes';
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
      <SeedLookalikes />
      <StatTrio
        stats={[
          { value: 50000, suffix: '+', label: 'Crypto KOLs indexed across X, YouTube, TikTok & Telegram' },
          { value: 92, suffix: '%', label: 'Median audience authenticity on matched lookalikes' },
          { value: 5, suffix: '×', label: 'Faster sourcing vs. manual Telegram outreach' },
        ]}
        source="Source: Kolio platform index & customer cohort data, 2026 (illustrative)"
      />
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
