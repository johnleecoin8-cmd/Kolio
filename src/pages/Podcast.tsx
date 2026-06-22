import { Link } from 'react-router-dom';
import { ArrowRight, Mic } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import EpisodeCards from '@/components/pages/podcast/EpisodeCards';
import GuestProof from '@/components/pages/podcast/GuestProof';
import GetStarted from '@/components/pages/podcast/GetStarted';

/** Kolio /podcast — Proof of Reach, the crypto-KOL marketing podcast.
 *  Calm-premium rebuild: HeroPanel hero, floating episode cards, calm close. */
export default function Podcast() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="Proof of Reach — the Kolio podcast"
        title={
          <>
            Conversations with the operators who <span className="accent text-gradient-brand">prove</span> their reach
          </>
        }
        subtitle="Every other week we pull apart a real crypto KOL campaign — the numbers, the escrow, the attribution — with the founders and creators who ran it. No hype reels, just receipts."
      >
        <Link
          to="/content-library"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          <Mic className="h-4 w-4" /> Listen now
        </Link>
        <Link
          to="/demo-confirmation"
          className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Pitch your story <ArrowRight className="h-4 w-4" />
        </Link>
      </HeroPanel>

      <EpisodeCards />

      <StatTrio
        stats={[
          { value: 42, label: 'Episodes shipped, every one with on-chain proof' },
          { value: 31000, suffix: '+', label: 'Operators on the bi-weekly listen list' },
          { value: 18, label: 'Avg. minutes — tight, no filler' },
        ]}
        source="Kolio podcast analytics, rolling 90-day average · updated 2026-06"
      />

      <GuestProof />

      <GetStarted />
    </main>
  );
}
