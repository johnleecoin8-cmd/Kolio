import Hero from '@/components/pages/api-raw/Hero';
import FeatureRow from '@/components/pages/api-raw/FeatureRow';
import DataPoints from '@/components/pages/api-raw/DataPoints';
import WhatYouBuild from '@/components/pages/api-raw/WhatYouBuild';
import ApiSamples from '@/components/pages/api-raw/ApiSamples';
import GettingStarted from '@/components/pages/api-raw/GettingStarted';
import Faq from '@/components/pages/api-raw/Faq';
import CtaBanner from '@/components/pages/api-raw/CtaBanner';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Kolio Raw API page — the web3 KOL data layer. Sections render top-to-bottom. */
export default function ApiRaw() {
  return (
    <main>
      <Hero />
      <FeatureRow
        image={`${CDN}/69df61a32e66b5f012b1a7a5_img_raw%20api_01.avif`}
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
        title="Granular, proof-based profiles"
        intro="Get unfiltered access to the data that actually matters for vetting crypto KOLs: real followers, audience quality, and content."
        bullets={[
          'Run channel-specific KOL analysis with follower changes, growth, and audience overlap across X, YouTube, TikTok, and Telegram.',
          'Retrieve granular, platform-specific fields for deep vetting, enrichment, and attribution — not just vanity counts.',
        ]}
      />
      <DataPoints />
      <WhatYouBuild />
      <ApiSamples />
      <GettingStarted />
      <Faq />
      <CtaBanner />
    </main>
  );
}
