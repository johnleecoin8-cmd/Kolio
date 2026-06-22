import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import CollabBoard from '@/components/pages/features-management/CollabBoard';
import FeatureCards from '@/components/pages/features-management/FeatureCards';
import CloseCta from '@/components/pages/features-management/CloseCta';

/** Kolio — KOL collaboration management page, rebuilt in the calm-premium
 *  language: rounded dark hero panel, one floating "single view of every
 *  collaboration" board, calm feature cards, calm close. */
export default function FeaturesManagement() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="Collaboration management"
        title={
          <>
            Every KOL collaboration, in one view you can{' '}
            <span className="accent text-gradient-brand">trust</span>
          </>
        }
        subtitle="Stop chasing deals across DMs and spreadsheets. Track briefs, deliverables, escrow and proof for every creator on a single calm rail."
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

      <CollabBoard />

      <LiveCreatorRail
        title="Manage real creator relationships"
        subtitle="A live slice of the Kolio index. Every collaboration on your board carries the same proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />

      <FeatureCards />

      <CloseCta />
    </main>
  );
}
