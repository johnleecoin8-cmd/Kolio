import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import TiersAndProof from '@/components/pages/influencer-database-youtube/TiersAndProof';
import Close from '@/components/pages/influencer-database-youtube/Close';

/** Kolio — YouTube crypto KOL database. Calm-premium rebuild:
 *  rounded dark hero panel, live platform proof, reach tiers + signature
 *  floating cards, and a calm get-started close. */
export default function InfluencerDatabaseYoutube() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The YouTube crypto KOL database"
        title={
          <>
            The YouTube creators worth your budget, <span className="text-gradient-brand">proven</span>
          </>
        }
        subtitle="Search vetted crypto YouTubers by real watch time and on-chain audience, then book in escrow — one rail from discovery to settled payout."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Find YouTube KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <LiveStats heading="The YouTube creator graph, live" />

      <LiveCreatorRail
        title="Top YouTube crypto KOLs"
        subtitle="A live slice of the Kolio index, ranked by engagement. Open any card for the full proof report."
        filters={{ platform: 'youtube' }}
        count={8}
      />

      <TiersAndProof />

      <Close />
    </main>
  );
}
