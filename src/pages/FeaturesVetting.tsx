import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import ComparisonBlock from '@/components/kit/ComparisonBlock';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import FraudProof from '@/components/pages/features-vetting/FraudProof';
import CtaBanner from '@/components/pages/features-vetting/CtaBanner';

/** Kolio — KOL vetting feature page, calm-premium rebuild.
 *  HeroPanel hero → floating fraud-proof card cluster (True Reach / bot % /
 *  worked Proof Score) → vanity-vs-proof comparison → live scored creators →
 *  calm HeroPanel close. */
export default function FeaturesVetting() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The vetting layer for crypto KOLs"
        title={<>Know a KOL is real before you <span className="text-gradient-brand">pay</span></>}
        subtitle="Strip bots from reach, score audience authenticity, and rank every creator on one on-chain-weighted Proof Score."
      >
        <Link to="/influencer-database" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/demo-confirmation" className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
          Book a demo
        </Link>
      </HeroPanel>

      <FraudProof />

      <ComparisonBlock
        heading="Stop trusting vanity metrics. Start trusting proof."
        oldLabel="Vetting on follower count & screenshots"
        newLabel="vets every KOL on hard proof"
        rows={[
          { old: 'Judge reach by a follower number that bots inflate', better: 'True Reach strips bots and dead accounts before you pay' },
          { old: 'Take a creator’s “engagement” screenshot at face value', better: 'Engagement authenticity scored against recycled & pod activity' },
          { old: 'Hope a KOL actually moved wallets last campaign', better: 'On-chain attribution proves which KOLs drove real conversions' },
          { old: 'No single signal to compare two creators fast', better: 'One 0–100 Proof Score ranks credibility at a glance' },
        ]}
      />

      <LiveCreatorRail
        title="Vet any creator in seconds"
        subtitle="Open a profile to see audience credibility, real-follower %, and bot detection — every card scored live."
        filters={{ category: 'crypto' }}
        count={8}
      />

      <CtaBanner />
    </main>
  );
}
