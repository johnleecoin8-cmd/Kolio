import Hero from '@/components/pages/ig-views-calculator/Hero';
import PinkCtaBlock from '@/components/pages/ig-views-calculator/PinkCtaBlock';
import ContentSections from '@/components/pages/ig-views-calculator/ContentSections';
import OtherPlatforms from '@/components/pages/ig-views-calculator/OtherPlatforms';
import PlatformFeatures from '@/components/pages/ig-views-calculator/PlatformFeatures';
import Faq from '@/components/pages/ig-views-calculator/Faq';

/** modash.io Instagram Average Views Calculator — 1:1 clone. */
export default function IgViewsCalculator() {
  return (
    <main>
      <Hero />
      <PinkCtaBlock
        title="Use Modash to analyze Instagram creators & their audiences"
        description="Inside Modash, you get a complete analysis of any Instagram creator, including average views, engagement, audience quality, location, and more."
      />
      <ContentSections />
      <PinkCtaBlock
        title="Checking average views is just the beginning"
        description="Modash helps you find creators, evaluate their audiences, and run campaigns end-to-end."
      />
      <OtherPlatforms />
      <PlatformFeatures />
      <Faq />
    </main>
  );
}
