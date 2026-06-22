import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import TierChips from '@/components/pages/influencer-database-tiktok/TierChips';

/** Kolio /influencer-database/tiktok — calm-premium rebuild.
 *  Crypto-KOL discovery for TikTok: HeroPanel hero, live creator graph,
 *  graded creator tiers with a floating sample card, and a calm CTA close. */
export default function InfluencerDatabaseTiktok() {
  return (
    <main>
      <HeroPanel
        eyebrow="The TikTok crypto KOL index"
        title={
          <>
            Find TikTok KOLs your token can actually{' '}
            <span className="accent text-gradient-brand">trust</span>
          </>
        }
        subtitle="Every creator graded on real, on-chain audience quality — not raw follower counts. Discover, vet, and book in escrow on one rail."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Browse TikTok KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <LiveStats heading="The TikTok creator graph, live" />

      <LiveCreatorRail
        title="Top TikTok creators right now"
        subtitle="Ranked by engagement and Proof Score across the live index."
        filters={{ platform: 'tiktok' }}
        count={8}
      />

      <TierChips />

      {/* Calm close — HeroPanel-style CTA */}
      <HeroPanel
        title={
          <>
            Your first proof-based TikTok campaign starts{' '}
            <span className="accent text-gradient-brand">here</span>
          </>
        }
        subtitle="Shortlist vetted crypto creators, fund a slot into escrow, and pay only on verified delivery. No wallet connect required to explore."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Start exploring <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Talk to us
        </Link>
      </HeroPanel>
    </main>
  );
}
