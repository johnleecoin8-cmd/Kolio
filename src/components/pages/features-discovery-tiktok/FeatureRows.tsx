import FeatureRow from './FeatureRow';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** The stack of alternating illustrated feature rows. */
export default function FeatureRows() {
  return (
    <>
      <FeatureRow
        imageOn="right"
        bg="violet"
        heading="Target the right crypto audience for your project"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/5f4f61fbca8cb4f5cdfd17c4_Web_illustration_feature_02.svg`}
        imgAlt="Filtering crypto KOLs by audience on Kolio"
        body={
          <>
            <p>
              Apply filters to Kolio's index of crypto TikTok KOLs to find the
              creators whose audience actually overlaps with your token's
              buyers.
            </p>
            <p className="mt-4">
              Filter by audience age, location, language, niche (DeFi, L1/L2,
              NFTs, trading, gaming) and much more.
            </p>
            <p className="mt-4">
              Add KOLs to your shortlist, ready for outreach and on-chain deals.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="left"
        heading="Pay KOLs on-chain with built-in escrow"
        ctaLabel="See how it works"
        img={`${CDN}/634d22b0453d98031cba5037_web_illustration_feature_35.svg`}
        imgAlt="On-chain KOL payments and escrow on Kolio"
        body={
          <>
            <p>
              Found and shortlisted the KOLs you want to work with? Don't wire
              funds into a DM and hope for the best.
            </p>
            <p className="mt-4">
              Fund a campaign into escrow, release on delivery, and keep a clean
              on-chain record of every payout — so brands and KOLs both run with
              confidence.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="right"
        heading="Discover KOLs across every crypto channel"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/617958566b1c7ae8ac449a5d_web_illustration_feature_16.svg`}
        imgAlt="Crypto KOLs across TikTok, X, YouTube and Telegram"
        body={
          <>
            <p>
              Kolio covers more than TikTok. It surfaces crypto KOLs across the
              channels that drive web3 campaigns: TikTok, X (Twitter), YouTube,
              and Telegram.
            </p>
            <p className="mt-4">
              You see the real numbers behind each profile — and you see that
              there are dozens more like them reaching your audience.
            </p>
            <p className="mt-4">
              That coverage lets you weigh every option and make the right call
              fast. Never feel stuck on sourcing again.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="left"
        heading="Scale by doing more of what already converts"
        ctaLabel="Start vetting KOLs"
        img={`${CDN}/5f4f61fc9227880c921d9e97_Web_illustration_feature_04.svg`}
        imgAlt="Lookalike KOL search on Kolio"
        body={
          <p>
            Use lookalike search to find crypto KOLs with audiences and content
            similar to the partnerships that already drove conversions and
            on-chain attribution for you.
          </p>
        }
      />
    </>
  );
}
