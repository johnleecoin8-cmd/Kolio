import Hero from '@/components/pages/api/Hero';
import Foundation from '@/components/pages/api/Foundation';
import ProductFeature from '@/components/pages/api/ProductFeature';
import Testimonials from '@/components/pages/api/Testimonials';
import UseCases from '@/components/pages/api/UseCases';
import DeveloperExperience from '@/components/pages/api/DeveloperExperience';
import CodeSample from '@/components/pages/api/CodeSample';
import GettingStarted from '@/components/pages/api/GettingStarted';
import Faq from '@/components/pages/api/Faq';
import FinalCta from '@/components/pages/api/FinalCta';

/** Kolio Web3 KOL Data API page. */
export default function Api() {
  return (
    <main>
      <Hero />
      <Foundation />
      <ProductFeature
        title="Discovery API"
        intro="The proof-based search engine for the entire crypto KOL economy."
        bullets={[
          'Query a vetted database of crypto KOLs across X, YouTube, TikTok, and Telegram.',
          'Find KOLs with AI search, or filter by niche — DeFi, NFTs, L1/L2, trading, gaming — region, and audience quality.',
          'Surface real reach and audience authenticity, not vanity follower counts.',
          'Pull verification reports: engagement rate, average views, audience overlap, and fake-follower scoring.',
        ]}
        image="chart"
        imageAlt="Kolio Discovery API audience-quality analytics"
        learnMore="/demo-confirmation"
      />
      <ProductFeature
        title="Raw API"
        intro="Stream live campaign and on-chain performance data as it happens."
        bullets={[
          'Query live, unfiltered data straight from KOL profiles across every crypto-native channel.',
          'Track sponsored posts, monitor token mentions, and watch campaign momentum in real time.',
          'Tie social activity to on-chain attribution — wallet conversions, referral clicks, and post-level ROI.',
        ]}
        image="stream"
        imageAlt="Kolio Raw API live profile and on-chain attribution data"
        learnMore="/demo-confirmation"
        reverse
      />
      <Testimonials />
      <UseCases />
      <DeveloperExperience />
      <CodeSample />
      <GettingStarted />
      <Faq />
      <FinalCta />
    </main>
  );
}
