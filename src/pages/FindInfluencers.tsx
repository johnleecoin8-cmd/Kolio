import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import FitnessFloatingCards from '@/components/pages/find-influencers/FitnessFloatingCards';
import FitnessClose from '@/components/pages/find-influencers/FitnessClose';

/**
 * Kolio — Find fitness KOLs. Calm-premium discovery page: dark hero panel,
 * live fitness creator rail, proof-based floating cards, calm close.
 */
export default function FindInfluencers() {
  return (
    <>
      <HeroPanel
        eyebrow="Fitness creators on Kolio"
        title={
          <>
            Find fitness KOLs your audience{' '}
            <span className="accent text-gradient-brand">believes</span>
          </>
        }
        subtitle="Discover vetted fitness creators with real, engaged audiences. See their Proof Score, book with on-chain escrow, and pay only when the work ships."
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

      <LiveCreatorRail
        title="Fitness creators on Kolio"
        subtitle="Live, ranked by real engagement. Every card carries a Proof Score."
        filters={{ category: 'fitness' }}
        count={8}
      />

      <FitnessFloatingCards />

      <FitnessClose />
    </>
  );
}
