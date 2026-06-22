import Hero from '@/components/pages/payments/Hero';
import Problem from '@/components/pages/payments/Problem';
import Comparison from '@/components/pages/payments/Comparison';
import FeatureBlocks from '@/components/pages/payments/FeatureBlocks';
import LogoStrip from '@/components/pages/payments/LogoStrip';
import EverythingGrid from '@/components/pages/payments/EverythingGrid';
import HowItWorks from '@/components/pages/payments/HowItWorks';
import OnchainFlow from '@/components/pages/payments/OnchainFlow';
import PayoutStats from '@/components/pages/payments/PayoutStats';
import TeamSpeed from '@/components/pages/payments/TeamSpeed';
import RightForYou from '@/components/pages/payments/RightForYou';
import CreatorBenefits from '@/components/pages/payments/CreatorBenefits';
import SeeItInAction from '@/components/pages/payments/SeeItInAction';
import Testimonials from '@/components/pages/payments/Testimonials';
import ConnectedTools from '@/components/pages/payments/ConnectedTools';
import Faq from '@/components/pages/payments/Faq';
import FinalCta from '@/components/pages/payments/FinalCta';
import LiveStats from '@/components/live/LiveStats';

/** Kolio /payments — on-chain payouts for crypto KOLs. Sections render top-to-bottom. */
export default function Payments() {
  return (
    <main>
      <Hero />
      <LiveStats heading="Paying real creators, on-chain" />
      <PayoutStats />
      <Problem />
      <Comparison />
      <FeatureBlocks />
      <LogoStrip />
      <EverythingGrid />
      <HowItWorks />
      <OnchainFlow />
      <TeamSpeed />
      <RightForYou />
      <CreatorBenefits />
      <SeeItInAction />
      <Testimonials />
      <ConnectedTools />
      <Faq />
      <FinalCta />
    </main>
  );
}
