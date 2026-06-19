import Hero from '@/components/pages/pricing/Hero';
import PricingCards from '@/components/pages/pricing/PricingCards';
import ValueAccordion from '@/components/pages/pricing/ValueAccordion';
import PlanHelpCta from '@/components/pages/pricing/PlanHelpCta';
import LogoCarousel from '@/components/pages/pricing/LogoCarousel';
import CreatorBenefits from '@/components/pages/pricing/CreatorBenefits';
import Faq from '@/components/pages/pricing/Faq';
import FinalCta from '@/components/pages/pricing/FinalCta';

/** modash.io pricing page — 1:1 clone. Sections render top-to-bottom. */
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
