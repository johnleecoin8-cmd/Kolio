import Hero from '@/components/pages/features-vetting/Hero';
import TrustedBy from '@/components/pages/features-vetting/TrustedBy';
import DataYouNeed from '@/components/pages/features-vetting/DataYouNeed';
import FeatureSections from '@/components/pages/features-vetting/FeatureSections';
import Testimonial from '@/components/pages/features-vetting/Testimonial';
import CtaBanner from '@/components/pages/features-vetting/CtaBanner';

/** Kolio — KOL vetting feature page. Proof-based vetting for web3 KOLs. */
export default function FeaturesVetting() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <DataYouNeed />
      <FeatureSections />
      <Testimonial />
      <CtaBanner />
    </main>
  );
}
