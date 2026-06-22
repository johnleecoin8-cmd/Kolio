import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing — HeroPanel-style CTA in the shared design language. */
export default function AnalyticsClose() {
  return (
    <HeroPanel
      eyebrow="Stop paying KOLs on vibes"
      title={
        <>
          Vet, measure, and <span className="text-gradient-brand">prove</span> every campaign
        </>
      }
      subtitle="Run your next launch on real numbers — authenticity, on-chain reach, and escrow that settles on delivery."
    >
      <Link
        to="/influencer-database"
        className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
      >
        Find KOLs <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        to="/demo-confirmation"
        className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
      >
        Book a demo
      </Link>
    </HeroPanel>
  );
}
