import PricingHero from '@/components/pages/pricing/PricingHero';
import PricingTiers from '@/components/pages/pricing/PricingTiers';
import PricingFaq from '@/components/pages/pricing/PricingFaq';
import PricingClose from '@/components/pages/pricing/PricingClose';

/** Kolio pricing — calm-premium rebuild: dark HeroPanel, usage-based 3-tier floating
 *  cards (middle dark "Recommended" with strikethrough anchor), calm FAQ, get-started close. */
export default function Pricing() {
  return (
    <main className="canvas-warm">
      <PricingHero />
      <PricingTiers />
      <PricingFaq />
      <PricingClose />
    </main>
  );
}
