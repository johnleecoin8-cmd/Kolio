import Hero from '@/components/pages/engagement-rate-calculator/Hero';
import AnalyzeBlock from '@/components/pages/engagement-rate-calculator/AnalyzeBlock';
import LiveBenchmark from '@/components/pages/engagement-rate-calculator/LiveBenchmark';
import GoodRate from '@/components/pages/engagement-rate-calculator/GoodRate';
import HowToCheck from '@/components/pages/engagement-rate-calculator/HowToCheck';
import ContentFormat from '@/components/pages/engagement-rate-calculator/ContentFormat';
import Proof from '@/components/pages/engagement-rate-calculator/Proof';
import RestCta from '@/components/pages/engagement-rate-calculator/RestCta';
import EveryPlatform from '@/components/pages/engagement-rate-calculator/EveryPlatform';
import Faq from '@/components/pages/engagement-rate-calculator/Faq';

/** Kolio /engagement-rate-calculator — crypto KOL engagement tool. Top-to-bottom sections. */
export default function EngagementRateCalculator() {
  return (
    <main>
      <Hero />
      <LiveBenchmark />
      <AnalyzeBlock />
      <GoodRate />
      <div className="bg-gray-50">
        <Proof />
      </div>
      <HowToCheck />
      <ContentFormat />
      <RestCta />
      <EveryPlatform />
      <Faq />
    </main>
  );
}
