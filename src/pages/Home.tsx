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
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio homepage — web3 KOL marketing platform. Sections render top-to-bottom. */
export default function Home() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <LiveStats heading="The Kolio index, live right now" />
      <WorkflowTabs />
      <CollaborationGrid />
      <WhyModash />
      <ShopifyFeature />
      <LiveCreatorRail
        title="Trending crypto KOLs right now"
        subtitle="Real creators from the Kolio index — click any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />
      <Testimonials />
      <Resources />
      <Faq />
      <CtaStack />
    </main>
  );
}
