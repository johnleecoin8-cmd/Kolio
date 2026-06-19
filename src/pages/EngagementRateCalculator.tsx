import Hero from '@/components/pages/engagement-rate-calculator/Hero';
import AnalyzeBlock from '@/components/pages/engagement-rate-calculator/AnalyzeBlock';
import GoodRate from '@/components/pages/engagement-rate-calculator/GoodRate';
import HowToCheck from '@/components/pages/engagement-rate-calculator/HowToCheck';
import ContentFormat from '@/components/pages/engagement-rate-calculator/ContentFormat';
import RestCta from '@/components/pages/engagement-rate-calculator/RestCta';
import EveryPlatform from '@/components/pages/engagement-rate-calculator/EveryPlatform';
import Faq from '@/components/pages/engagement-rate-calculator/Faq';

/** Kolio /engagement-rate-calculator — crypto KOL engagement tool. Top-to-bottom sections. */
export default function EngagementRateCalculator() {
  return (
    <main>
      <Hero />
      <AnalyzeBlock />
      <GoodRate />
      <HowToCheck />
      <ContentFormat />
      <RestCta />
      <EveryPlatform />
      <Faq />
    </main>
  );
}
