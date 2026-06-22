import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import StatTrio from '@/components/kit/StatTrio';
import Hero from '@/components/pages/influencer-database-tiktok/Hero';
import SearchFilter from '@/components/pages/influencer-database-tiktok/SearchFilter';
import GoodFit from '@/components/pages/influencer-database-tiktok/GoodFit';
import BulkEmail from '@/components/pages/influencer-database-tiktok/BulkEmail';
import ApiSection from '@/components/pages/influencer-database-tiktok/ApiSection';
import EverythingElse from '@/components/pages/influencer-database-tiktok/EverythingElse';
import Testimonials from '@/components/pages/influencer-database-tiktok/Testimonials';
import EndCta from '@/components/pages/influencer-database-tiktok/EndCta';

/** Kolio /influencer-database/tiktok — crypto KOL discovery for TikTok. Sections render top-to-bottom. */
export default function InfluencerDatabaseTiktok() {
  return (
    <main>
      <Hero />
      <StatTrio
        stats={[
          { value: 1.04, suffix: 'B', label: 'TikTok monthly active users', decimals: 2 },
          { value: 18, suffix: '%', label: 'Gen Z who first heard of crypto on TikTok', decimals: 0 },
          { value: 4.25, suffix: '%', label: 'Median TikTok engagement rate (vs 0.6% IG)', decimals: 2 },
        ]}
        source="Source: TikTok newsroom (1.04B MAU, 2024); Pew Research crypto-awareness; Socialinsider 2024 engagement benchmarks."
      />
      <LiveStats heading="The TikTok creator graph, live" />
      <LiveCreatorRail title="Top TikTok creators" filters={{ platform: 'tiktok' }} count={8} />
      <SearchFilter />
      <GoodFit />
      <BulkEmail />
      <ApiSection />
      <EverythingElse />
      <Testimonials />
      <EndCta />
    </main>
  );
}
