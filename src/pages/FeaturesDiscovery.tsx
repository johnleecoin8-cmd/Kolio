import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import DiscoveryBoard from '@/components/pages/features-discovery/DiscoveryBoard';
import DiscoveryFeatures from '@/components/pages/features-discovery/DiscoveryFeatures';
import DiscoveryClose from '@/components/pages/features-discovery/DiscoveryClose';

/** Kolio /features/influencer-discovery — calm-premium rebuild.
 *  Soft warm canvas, big rounded dark hero, a floating discovery mini-UI,
 *  live real-data proof rail, calm feature cards, calm get-started close. */
export default function FeaturesDiscovery() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="Discovery, scored on-chain"
        title={<>Find crypto KOLs you can actually <span className="accent text-gradient-brand">trust</span></>}
        subtitle="Search 40,000+ vetted crypto creators by chain, narrative, and audience quality. Every handle carries a Proof Score, so reach is something you verify, not something you hope for."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <DiscoveryBoard />

      <LiveCreatorRail
        title="Discover real creators now"
        subtitle="A live slice of the Kolio discovery index. Open any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />

      <DiscoveryFeatures />
      <DiscoveryClose />
    </main>
  );
}
