import Hero from '@/components/pages/home/Hero';
import LogoBar from '@/components/pages/home/LogoBar';
import WorkflowTabs from '@/components/pages/home/WorkflowTabs';
import CollaborationGrid from '@/components/pages/home/CollaborationGrid';
import WhyModash from '@/components/pages/home/WhyModash';
import ShopifyFeature from '@/components/pages/home/ShopifyFeature';
import Testimonials from '@/components/pages/home/Testimonials';
import Resources from '@/components/pages/home/Resources';
import Faq from '@/components/pages/home/Faq';
import CtaStack from '@/components/pages/home/CtaStack';

/** modash.io homepage — 1:1 clone. Sections render top-to-bottom. */
export default function Home() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <WorkflowTabs />
      <CollaborationGrid />
      <WhyModash />
      <ShopifyFeature />
      <Testimonials />
      <Resources />
      <Faq />
      <CtaStack />
    </main>
  );
}
