import Hero from '@/components/pages/features-vetting/Hero';
import TrustedBy from '@/components/pages/features-vetting/TrustedBy';
import FraudProof from '@/components/pages/features-vetting/FraudProof';
import DataYouNeed from '@/components/pages/features-vetting/DataYouNeed';
import FeatureSections from '@/components/pages/features-vetting/FeatureSections';
import Testimonial from '@/components/pages/features-vetting/Testimonial';
import CtaBanner from '@/components/pages/features-vetting/CtaBanner';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import ComparisonBlock from '@/components/kit/ComparisonBlock';

/** Kolio — KOL vetting feature page. Proof-based vetting for web3 KOLs. */
export default function FeaturesVetting() {
  return (
    <main>
      <Hero />
      <LiveCreatorRail
        title="Vet any creator in seconds"
        subtitle="Open a profile to see audience credibility, real-follower %, and bot detection."
        count={8}
      />
      <TrustedBy />
      <FraudProof />
      <ComparisonBlock
        heading="Stop trusting vanity metrics. Start trusting proof."
        oldLabel="Vetting on follower count & screenshots"
        newLabel="vets every KOL on hard proof"
        rows={[
          { old: 'Judge reach by a follower number that 18% bots inflate', better: 'True Reach strips bots and dead accounts before you pay' },
          { old: 'Take a creator’s “engagement” screenshot at face value', better: 'Engagement authenticity scored against recycled & pod activity' },
          { old: 'Hope a KOL actually moved wallets last campaign', better: 'On-chain attribution proves which KOLs drove real conversions' },
          { old: 'No single signal to compare two creators fast', better: 'One 0–100 Proof Score ranks credibility at a glance' },
        ]}
      />
      <DataYouNeed />
      <FeatureSections />
      <Testimonial />
      <CtaBanner />
    </main>
  );
}
