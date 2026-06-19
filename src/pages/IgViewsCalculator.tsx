import Hero from '@/components/pages/ig-views-calculator/Hero';
import PinkCtaBlock from '@/components/pages/ig-views-calculator/PinkCtaBlock';
import ContentSections from '@/components/pages/ig-views-calculator/ContentSections';
import OtherPlatforms from '@/components/pages/ig-views-calculator/OtherPlatforms';
import PlatformFeatures from '@/components/pages/ig-views-calculator/PlatformFeatures';
import Faq from '@/components/pages/ig-views-calculator/Faq';

/** Kolio — Crypto KOL Reach & Engagement Checker. Free vetting tool for web3 brands. */
export default function IgViewsCalculator() {
  return (
    <main>
      <Hero />
      <PinkCtaBlock
        gradient
        lead="Use Kolio to"
        title="vet crypto KOLs & their real audiences"
        description="Inside Kolio, you get a proof-based read on any crypto KOL — real reach, audience quality, engagement, regional split, and past project work — before a single dollar of budget leaves escrow."
      />
      <ContentSections />
      <PinkCtaBlock
        title="Checking reach is just the start of vetting a KOL"
        description="Kolio helps web3 brands discover crypto KOLs, verify their audiences, pay them on-chain through escrow, and attribute every campaign end-to-end."
      />
      <OtherPlatforms />
      <PlatformFeatures />
      <Faq />
    </main>
  );
}
