import Hero from '@/components/pages/features-vetting/Hero';
import TrustedBy from '@/components/pages/features-vetting/TrustedBy';
import DataYouNeed from '@/components/pages/features-vetting/DataYouNeed';
import FeatureSections from '@/components/pages/features-vetting/FeatureSections';
import Testimonial from '@/components/pages/features-vetting/Testimonial';
import CtaBanner from '@/components/pages/features-vetting/CtaBanner';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

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
      <DataYouNeed />
      <FeatureSections />
      <Testimonial />
      <CtaBanner />
    </main>
  );
}
