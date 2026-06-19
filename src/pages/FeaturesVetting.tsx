import Hero from '@/components/pages/features-vetting/Hero';
import DataYouNeed from '@/components/pages/features-vetting/DataYouNeed';
import FeatureSections from '@/components/pages/features-vetting/FeatureSections';
import Testimonial from '@/components/pages/features-vetting/Testimonial';
import CtaBanner from '@/components/pages/features-vetting/CtaBanner';

/** modash.io /features/influencer-vetting — 1:1 clone. */
export default function FeaturesVetting() {
  return (
    <main>
      <Hero />
      <DataYouNeed />
      <FeatureSections />
      <Testimonial />
      <CtaBanner />
    </main>
  );
}
