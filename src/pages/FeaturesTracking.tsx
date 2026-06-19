import Hero from '@/components/pages/features-tracking/Hero';
import PainIntro from '@/components/pages/features-tracking/PainIntro';
import Comparison from '@/components/pages/features-tracking/Comparison';
import TrackCampaigns from '@/components/pages/features-tracking/TrackCampaigns';
import LogoBar from '@/components/pages/features-tracking/LogoBar';
import MeasureGrid from '@/components/pages/features-tracking/MeasureGrid';
import WeekendsBack from '@/components/pages/features-tracking/WeekendsBack';
import RightForYou from '@/components/pages/features-tracking/RightForYou';
import SeeItInAction from '@/components/pages/features-tracking/SeeItInAction';
import Testimonials from '@/components/pages/features-tracking/Testimonials';
import Workflow from '@/components/pages/features-tracking/Workflow';
import Faq from '@/components/pages/features-tracking/Faq';
import FinalCta from '@/components/pages/features-tracking/FinalCta';

/** Kolio /features/kol-tracking — web3 KOL campaign tracking. Sections top-to-bottom. */
export default function FeaturesTracking() {
  return (
    <main>
      <Hero />
      <PainIntro />
      <Comparison />
      <TrackCampaigns />
      <LogoBar />
      <MeasureGrid />
      <WeekendsBack />
      <RightForYou />
      <SeeItInAction />
      <Testimonials />
      <Workflow />
      <Faq />
      <FinalCta />
    </main>
  );
}
