import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import AttributionFlow from '@/components/pages/features-tracking/AttributionFlow';
import TrackingClose from '@/components/pages/features-tracking/TrackingClose';
import LiveStats from '@/components/live/LiveStats';

/** Kolio /features/kol-tracking — calm-premium rebuild. Dark HeroPanel hero,
 *  floating on-chain attribution card, live real-data proof, calm closing CTA. */
export default function FeaturesTracking() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="On-chain attribution"
        title={
          <>
            Track the campaigns you can <span className="text-gradient-brand">prove</span>
          </>
        }
        subtitle="Tie every KOL post to the swaps and mints it drove. No screenshots — signed on-chain events, measured against your baseline."
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

      <AttributionFlow />

      <LiveStats heading="Tracking real campaign reach" />

      <TrackingClose />
    </main>
  );
}
