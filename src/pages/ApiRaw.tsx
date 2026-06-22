import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import ComparisonBlock from '@/components/kit/ComparisonBlock';
import CodePanel from '@/components/pages/api-raw/CodePanel';
import DataLayer from '@/components/pages/api-raw/DataLayer';
import BuildWith from '@/components/pages/api-raw/BuildWith';
import ApiClose from '@/components/pages/api-raw/ApiClose';

/** Kolio Raw API — the proof-grade data layer for crypto KOL marketing.
 *  Calm-premium rebuild: HeroPanel, floating dark code panel, card-kit data
 *  surfaces, restrained red accents, and a calm closing CTA. */
export default function ApiRaw() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The web3 KOL data layer"
        title={<>The raw KOL data layer you can build on, and <span className="text-gradient-brand">trust</span></>}
        subtitle="Live, unfiltered crypto KOL data over one clean API. Real followers, audience overlap, on-chain reach, and paid-partnership flags — fetched the moment you ask."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Get an API key <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Read the docs
        </Link>
      </HeroPanel>

      <CodePanel />

      <DataLayer />

      <StatTrio
        stats={[
          { value: 30, suffix: '+', label: 'datapoints returned per KOL profile' },
          { value: 4, label: 'native channels: X, YouTube, TikTok, Telegram' },
          { value: 40000, label: 'requests / month on the base plan' },
        ]}
        source="Source: Kolio Raw API base plan ($10,000 / yr, 40,000 requests / mo across all channels)."
      />

      <ComparisonBlock
        heading={'Vanity metrics lie. Raw, on-chain data doesn’t.'}
        oldLabel="Vetting KOLs on dashboard exports"
        newLabel="vets them on raw API data"
        rows={[
          {
            old: 'Cached follower counts that hide bought or churned audiences.',
            better: 'Live real_follower_count and audience_overlap, fetched on demand.',
          },
          {
            old: 'No way to flag undisclosed paid partnerships before a deal.',
            better: 'is_paid_partnership flags and cashtags surfaced per post.',
          },
          {
            old: 'Reach numbers you can never tie back to wallet-level conversions.',
            better: 'Signals that feed on-chain attribution down to the wallet.',
          },
        ]}
      />

      <BuildWith />

      <ApiClose />
    </main>
  );
}
