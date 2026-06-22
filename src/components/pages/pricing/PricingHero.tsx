import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Pricing hero — calm-premium dark panel, light display headline, restrained red word. */
export default function PricingHero() {
  return (
    <HeroPanel
      eyebrow="Usage-based pricing"
      title={
        <>
          Pay for proof, not <span className="accent text-gradient-brand">promises</span>
        </>
      }
      subtitle="Start free, scale with your spend. Every plan rides the same on-chain escrow rail — you only settle when delivery is proven."
    >
      <Link
        to="/influencer-database"
        className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
      >
        Start free <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        to="/demo-confirmation"
        className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
      >
        Book a demo
      </Link>
    </HeroPanel>
  );
}
