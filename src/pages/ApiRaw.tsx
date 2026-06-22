import Hero from '@/components/pages/api-raw/Hero';
import FeatureRow from '@/components/pages/api-raw/FeatureRow';
import DataPoints from '@/components/pages/api-raw/DataPoints';
import WhatYouBuild from '@/components/pages/api-raw/WhatYouBuild';
import ApiSamples from '@/components/pages/api-raw/ApiSamples';
import GettingStarted from '@/components/pages/api-raw/GettingStarted';
import Faq from '@/components/pages/api-raw/Faq';
import CtaBanner from '@/components/pages/api-raw/CtaBanner';
import StatTrio from '@/components/kit/StatTrio';
import ComparisonBlock from '@/components/kit/ComparisonBlock';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Kolio Raw API page — the web3 KOL data layer. Sections render top-to-bottom. */
export default function ApiRaw() {
  return (
    <main>
      <Hero />
      <FeatureRow
        image={`${CDN}/69df61a32e66b5f012b1a7a5_img_raw%20api_01.avif`}
        eyebrow="On-chain freshness"
        title="Real-time, on-chain freshness"
        intro="Live, unfiltered KOL data, made for web3 teams that need accuracy the moment a campaign goes live."
        bullets={[
          "Track a KOL's posts the instant they ship — threads, videos, channel broadcasts, and more.",
          'Build live dashboards by pulling up-to-the-second post metadata, reach, and engagement for every campaign you fund.',
        ]}
        reversed
      />
      <FeatureRow
        image={`${CDN}/69df62f318b139a23e0a78d8_img_raw%20api_02.avif`}
        eyebrow="Proof-based vetting"
        title="Granular, proof-based profiles"
        intro="Get unfiltered access to the data that actually matters for vetting crypto KOLs: real followers, audience quality, and content."
        bullets={[
          'Run channel-specific KOL analysis with follower changes, growth, and audience overlap across X, YouTube, TikTok, and Telegram.',
          'Retrieve granular, platform-specific fields for deep vetting, enrichment, and attribution — not just vanity counts.',
        ]}
      />
      <StatTrio
        stats={[
          { value: 30, suffix: '+', label: 'datapoints per KOL profile' },
          { value: 4, label: 'channels: X, YouTube, TikTok, Telegram' },
          { value: 40000, label: 'requests / month on the base plan' },
        ]}
        source="Source: Kolio Raw API base plan ($10,000 / yr, 40,000 requests / mo across all channels)"
      />
      <DataPoints />
      <ComparisonBlock
        heading="Vanity metrics lie. Raw, on-chain data doesn't."
        oldLabel="Vetting KOLs on dashboard exports"
        newLabel="vets them on raw API data"
        rows={[
          {
            old: 'Cached follower counts that hide bought or churned audiences.',
            better: 'Live real_follower_count and audience overlap, fetched on demand.',
          },
          {
            old: 'No way to flag undisclosed paid partnerships before a deal.',
            better: 'is_paid_partnership flags and cashtags surfaced per post.',
          },
          {
            old: 'Reach numbers you cannot tie back to wallet-level conversions.',
            better: 'Signals that feed on-chain attribution down to the wallet.',
          },
        ]}
      />
      <WhatYouBuild />
      <ApiSamples />
      <GettingStarted />
      <Faq />
      <CtaBanner />
    </main>
  );
}
