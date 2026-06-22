import Hero from '@/components/pages/home/Hero';
import PartnerMarquee from '@/components/pages/home/PartnerMarquee';
import AudienceFork from '@/components/kit/AudienceFork';
import HomeStats from '@/components/pages/home/HomeStats';
import ProductSpine from '@/components/pages/home/ProductSpine';
import HomeComparison from '@/components/pages/home/HomeComparison';
import CollaborationGrid from '@/components/pages/home/CollaborationGrid';
import WhyModash from '@/components/pages/home/WhyModash';
import ShopifyFeature from '@/components/pages/home/ShopifyFeature';
import HomeTestimonials from '@/components/pages/home/Testimonials';
import Resources from '@/components/pages/home/Resources';
import Faq from '@/components/pages/home/Faq';
import CtaStack from '@/components/pages/home/CtaStack';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio homepage — web3 KOL marketing platform.
 *  Surface rhythm: dark hero -> white marquee -> fork -> neutral stats ->
 *  white spine -> comparison -> use cases -> live proof -> testimonials ->
 *  resources/faq -> dark on-chain CTA punctuation + single red finale. */
export default function Home() {
  return (
    <main>
      <Hero />
      <PartnerMarquee />
      <AudienceFork />
      <HomeStats />
      <ProductSpine />
      <HomeComparison />
      <CollaborationGrid />
      <WhyModash />
      <ShopifyFeature />
      <LiveStats heading="The Kolio index, live right now" />
      <LiveCreatorRail
        title="Trending crypto KOLs right now"
        subtitle="Real creators from the Kolio index — click any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />
      <HomeTestimonials />
      <Resources />
      <Faq />
      <CtaStack />
    </main>
  );
}
