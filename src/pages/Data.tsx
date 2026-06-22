import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import OnChainLedger from '@/components/pages/data/OnChainLedger';
import DataFeatures from '@/components/pages/data/DataFeatures';
import DataClose from '@/components/pages/data/DataClose';

/** Kolio /data ("Our Data") — calm-premium rebuild.
 *  HeroPanel hero, cited StatTrio, dark on-chain ledger focal, card-kit
 *  feature grid, calm get-started close. Original crypto-KOL copy + art. */
export default function Data() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The data layer for crypto KOL marketing"
        title={
          <>
            Audience data you can <span className="accent text-gradient-brand">verify</span> on-chain
          </>
        }
        subtitle="Every KOL on Kolio is indexed across socials and settled wallets — so reach, holders, and outcomes are measured, not pitched."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Explore the index <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      {/* white — cited lead stats */}
      <StatTrio
        stats={[
          { value: 120, suffix: 'M+', label: 'crypto-native profiles indexed' },
          { value: 30, suffix: '+', label: 'audience & reach signals per KOL' },
          { value: 8, label: 'web3 niches, from DeFi to gaming' },
        ]}
        source="Source: Kolio data index — public X / YouTube / TikTok / Telegram profiles, as of Q2 2026."
      />

      {/* dark focal — on-chain verified ledger */}
      <OnChainLedger />

      {/* soft warm — card-kit feature grid */}
      <DataFeatures />

      {/* calm close */}
      <DataClose />
    </main>
  );
}
