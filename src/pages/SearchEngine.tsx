import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import StatTrio from '@/components/kit/StatTrio';
import Hero from '@/components/pages/search-engine/Hero';
import SearchMock from '@/components/pages/search-engine/SearchMock';
import RelevancePillars from '@/components/pages/search-engine/RelevancePillars';
import Close from '@/components/pages/search-engine/Close';

/** Kolio /search-engine — calm-premium rebuild: HeroPanel hero, a floating
 *  search + results mini-UI, live creator rail, relevance pillars, calm close. */
export default function SearchEngine() {
  return (
    <main>
      {/* soft warm canvas + big rounded dark hero panel */}
      <Hero />

      {/* signature floating search + results mini-UI */}
      <SearchMock />

      {/* live backend data — real KOLs, each with a Proof Score */}
      <LiveCreatorRail title="Search results, powered by live data" count={8} />

      {/* cited proof stats */}
      <StatTrio
        stats={[
          { value: 120, suffix: 'K+', label: 'Vetted crypto KOLs indexed' },
          { value: 38, label: 'Signals scored per KOL' },
          { value: 96, suffix: '%', label: 'Avg. relevance match on top results' },
        ]}
        source="Source: Kolio index, Q2 2026 — across X, YouTube, TikTok & Telegram."
      />

      {/* white — how relevance ranking works */}
      <RelevancePillars />

      {/* calm close */}
      <Close />
    </main>
  );
}
