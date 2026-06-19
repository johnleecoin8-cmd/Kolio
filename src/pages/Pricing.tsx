import Hero from '@/components/pages/pricing/Hero';
import PricingCards from '@/components/pages/pricing/PricingCards';
import ValueAccordion from '@/components/pages/pricing/ValueAccordion';
import PlanHelpCta from '@/components/pages/pricing/PlanHelpCta';
import LogoCarousel from '@/components/pages/pricing/LogoCarousel';
import CreatorBenefits from '@/components/pages/pricing/CreatorBenefits';
import Faq from '@/components/pages/pricing/Faq';
import FinalCta from '@/components/pages/pricing/FinalCta';

/** Kolio pricing page — web3 KOL marketing platform. Sections render top-to-bottom. */
export default function Pricing() {
  return (
    <main>
      <Hero />
      <PricingCards />
      <ValueAccordion />
      <PlanHelpCta />
      <LogoCarousel />
      <CreatorBenefits />
      <Faq />
      <FinalCta />
    </main>
  );
}
