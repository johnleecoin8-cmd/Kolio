import HeroCalculator from '@/components/pages/tiktok-views-calculator/HeroCalculator';
import AnalyzeHero from '@/components/pages/tiktok-views-calculator/AnalyzeHero';
import HowWeCalculate from '@/components/pages/tiktok-views-calculator/HowWeCalculate';
import ContentFormat from '@/components/pages/tiktok-views-calculator/ContentFormat';
import JustTheBeginning from '@/components/pages/tiktok-views-calculator/JustTheBeginning';
import OtherPlatforms from '@/components/pages/tiktok-views-calculator/OtherPlatforms';
import FeatureGrid from '@/components/pages/tiktok-views-calculator/FeatureGrid';
import Faq from '@/components/pages/tiktok-views-calculator/Faq';

/** Kolio — TikTok average-views calculator for vetting crypto KOLs. */
export default function TiktokViewsCalculator() {
  return (
    <main>
      <HeroCalculator />
      <AnalyzeHero />
      <HowWeCalculate />
      <ContentFormat />
      <JustTheBeginning />
      <OtherPlatforms />
      <FeatureGrid />
      <Faq />
    </main>
  );
}
