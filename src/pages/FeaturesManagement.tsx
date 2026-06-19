import Hero from '@/components/pages/features-management/Hero';
import ProblemStatement from '@/components/pages/features-management/ProblemStatement';
import Comparison from '@/components/pages/features-management/Comparison';
import FeatureBlocks from '@/components/pages/features-management/FeatureBlocks';
import LogoBar from '@/components/pages/features-management/LogoBar';
import EverythingGrid from '@/components/pages/features-management/EverythingGrid';
import BrainBack from '@/components/pages/features-management/BrainBack';
import RightForYou from '@/components/pages/features-management/RightForYou';
import SeeItInAction from '@/components/pages/features-management/SeeItInAction';
import Testimonials from '@/components/pages/features-management/Testimonials';
import WorkflowGrid from '@/components/pages/features-management/WorkflowGrid';
import Faq from '@/components/pages/features-management/Faq';
import CtaBlock from '@/components/pages/features-management/CtaBlock';

/** modash.io /features/influencer-management — 1:1 clone. Sections top-to-bottom. */
export default function FeaturesManagement() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Comparison />
      <FeatureBlocks />
      <LogoBar />
      <EverythingGrid />
      <BrainBack />
      <RightForYou />
      <SeeItInAction />
      <Testimonials />
      <WorkflowGrid />
      <Faq />
      <CtaBlock />
    </main>
  );
}
