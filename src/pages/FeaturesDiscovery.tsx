import Hero from '@/components/pages/features-discovery/Hero';
import ProblemIntro from '@/components/pages/features-discovery/ProblemIntro';
import OldVsNew from '@/components/pages/features-discovery/OldVsNew';
import FeatureBlocks from '@/components/pages/features-discovery/FeatureBlocks';
import LogoStrip from '@/components/pages/features-discovery/LogoStrip';
import EverythingGrid from '@/components/pages/features-discovery/EverythingGrid';
import PartnershipsBanner from '@/components/pages/features-discovery/PartnershipsBanner';
import FitSection from '@/components/pages/features-discovery/FitSection';
import DemoSection from '@/components/pages/features-discovery/DemoSection';
import Testimonials from '@/components/pages/features-discovery/Testimonials';
import WorkflowGrid from '@/components/pages/features-discovery/WorkflowGrid';
import Faq from '@/components/pages/features-discovery/Faq';
import FinalCta from '@/components/pages/features-discovery/FinalCta';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import LiveStats from '@/components/live/LiveStats';

/** Kolio /features/influencer-discovery — crypto KOL discovery. Sections render top-to-bottom. */
export default function FeaturesDiscovery() {
  return (
    <main>
      <Hero />
      <LiveCreatorRail
        title="Discover real creators now"
        subtitle="A live slice of the Kolio discovery index."
        count={8}
      />
      <ProblemIntro />
      <OldVsNew />
      <FeatureBlocks />
      <LogoStrip />
      <EverythingGrid />
      <PartnershipsBanner />
      <FitSection />
      <DemoSection />
      <Testimonials />
      <WorkflowGrid />
      <LiveStats />
      <Faq />
      <FinalCta />
    </main>
  );
}
