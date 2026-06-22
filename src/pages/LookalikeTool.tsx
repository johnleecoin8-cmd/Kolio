import { Link } from 'react-router-dom';
import HeroPanel from '@/components/kit/HeroPanel';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import SeedLookalikes from '@/components/pages/lookalike-tool/SeedLookalikes';
import CloseCta from '@/components/pages/lookalike-tool/CloseCta';

/** Kolio — KOL Lookalike Tool. Rebuilt in the calm-premium language:
 *  HeroPanel hero, floating seed→lookalikes mini-UI, live rail, calm close. */
export default function LookalikeTool() {
  return (
    <>
      <HeroPanel
        eyebrow="Lookalike engine"
        title={
          <>
            Find more crypto KOLs like the ones that already{' '}
            <span className="text-gradient-brand">convert</span>
          </>
        }
        subtitle="Drop in a creator who performed for you. Kolio surfaces a ranked shortlist of similar KOLs — matched on audience overlap, on-chain holders and a verifiable Proof Score."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Find KOLs
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <SeedLookalikes />

      <LiveCreatorRail
        title="Lookalike creators"
        subtitle="Find creators similar to your top performers — open a profile to see its lookalikes."
        count={8}
      />

      <CloseCta />
    </>
  );
}
