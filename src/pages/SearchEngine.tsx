import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import LiveStats from '@/components/live/LiveStats';
import StatTrio from '@/components/kit/StatTrio';
import Hero from '@/components/pages/search-engine/Hero';
import RelevanceSpine from '@/components/pages/search-engine/RelevanceSpine';
import FilterShowcase from '@/components/pages/search-engine/FilterShowcase';
import AnalyzeFeature from '@/components/pages/search-engine/AnalyzeFeature';
import EmailsFeature from '@/components/pages/search-engine/EmailsFeature';
import Quote from '@/components/pages/search-engine/Quote';
import Faq from '@/components/pages/search-engine/Faq';
import GrowCta from '@/components/pages/search-engine/GrowCta';

/** Kolio /search-engine — web3 KOL discovery & vetting, search-engine framing. */
export default function SearchEngine() {
  return (
    <main>
      {/* white — focal search + results mock */}
      <Hero />

      {/* live data (keep) */}
      <LiveCreatorRail title="Search results, powered by Kolio" count={8} />
      <LiveStats />

      {/* cited proof stats */}
      <StatTrio
        stats={[
          { value: 120, suffix: 'K+', label: 'Vetted crypto KOLs indexed' },
          { value: 4, label: 'Platforms: X, YouTube, TikTok, Telegram' },
          { value: 96, suffix: '%', label: 'Avg. relevance match on top results' },
        ]}
        source="Source: Kolio index, Q2 2026 — across X, YouTube, TikTok & Telegram."
      />

      {/* soft neutral — relevance-sort spine */}
      <RelevanceSpine />

      {/* soft neutral — query inputs as chips */}
      <FilterShowcase />

      {/* DARK punctuation — on-chain vetting terminal */}
      <AnalyzeFeature />

      {/* white — outreach + escrow */}
      <EmailsFeature />

      {/* soft neutral — quantified testimonials */}
      <Quote />

      {/* white — FAQ */}
      <Faq />

      {/* the single red gradient moment + marquee */}
      <GrowCta />
    </main>
  );
}
