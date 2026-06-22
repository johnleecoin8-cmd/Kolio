import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import Terminal from '@/components/pages/api/Terminal';
import Endpoints from '@/components/pages/api/Endpoints';
import GetStarted from '@/components/pages/api/GetStarted';

/** Kolio Web3 KOL Data API — calm-premium rebuild:
 *  HeroPanel hero, floating dark on-chain code terminal, endpoint cards on a
 *  warm canvas, calm get-started close. */
export default function Api() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The proof API for crypto KOL data"
        title={<>One API for crypto KOL reach you can <span className="accent text-gradient-brand">prove</span></>}
        subtitle="Query vetted KOLs, score real audiences, and settle USDC escrow — straight from your own stack. REST, typed SDKs, on-chain attribution."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Get an API key <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <Terminal />

      <StatTrio
        stats={[
          { value: 41280, label: 'Crypto KOLs indexed and Proof-Scored' },
          { value: 99.95, suffix: '%', decimals: 2, label: 'Endpoint uptime, trailing 90 days' },
          { value: 120, suffix: 'ms', label: 'Median p50 response, edge-cached' },
        ]}
        source="Source: Kolio platform telemetry, rolling 90-day window (2026)."
      />

      <Endpoints />

      <GetStarted />
    </main>
  );
}
