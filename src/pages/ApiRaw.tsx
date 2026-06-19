import Hero from '@/components/pages/api-raw/Hero';
import FeatureRow from '@/components/pages/api-raw/FeatureRow';
import DataPoints from '@/components/pages/api-raw/DataPoints';
import WhatYouBuild from '@/components/pages/api-raw/WhatYouBuild';
import ApiSamples from '@/components/pages/api-raw/ApiSamples';
import GettingStarted from '@/components/pages/api-raw/GettingStarted';
import Faq from '@/components/pages/api-raw/Faq';
import CtaBanner from '@/components/pages/api-raw/CtaBanner';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** modash.io Raw API page — 1:1 clone. Sections render top-to-bottom. */
export default function ApiRaw() {
  return (
    <main>
      <Hero />
      <FeatureRow
        image={`${CDN}/69df61a32e66b5f012b1a7a5_img_raw%20api_01.avif`}
        title="Real-time freshness"
        intro="Live, unfiltered data, perfect for applications that demand immediate accuracy."
        bullets={[
          "Track content the instant it's posted including feed, hastags, reels, and more.",
          'Build live-updating dashboards by pulling up-to-the-second post metadata, metrics, and URLs.',
        ]}
        reversed
      />
      <FeatureRow
        image={`${CDN}/69df62f318b139a23e0a78d8_img_raw%20api_02.avif`}
        title="Granular and unfiltered"
        intro="Get unfiltered access to all the profile data like followers, tags, and content."
        bullets={[
          'Do channel-specific creator analysis with follower list changes, growth, and more.',
          'Retrieve granular and platform specific data fields for deep analysis, enrichment, or monitoring.',
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
