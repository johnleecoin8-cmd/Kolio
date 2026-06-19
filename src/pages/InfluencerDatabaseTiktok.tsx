import Hero from '@/components/pages/influencer-database-tiktok/Hero';
import SearchFilter from '@/components/pages/influencer-database-tiktok/SearchFilter';
import GoodFit from '@/components/pages/influencer-database-tiktok/GoodFit';
import BulkEmail from '@/components/pages/influencer-database-tiktok/BulkEmail';
import ApiSection from '@/components/pages/influencer-database-tiktok/ApiSection';
import EverythingElse from '@/components/pages/influencer-database-tiktok/EverythingElse';
import Testimonials from '@/components/pages/influencer-database-tiktok/Testimonials';
import EndCta from '@/components/pages/influencer-database-tiktok/EndCta';

/** modash.io /influencer-database/tiktok — 1:1 clone. Sections render top-to-bottom. */
export default function InfluencerDatabaseTiktok() {
  return (
    <main>
      <Hero />
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
