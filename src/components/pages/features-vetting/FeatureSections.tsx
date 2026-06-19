import FeatureRow from './FeatureRow';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** The three alternating product-feature rows of the vetting page. */
export default function FeatureSections() {
  return (
    <>
      <FeatureRow
        title="See who they've actually shilled before"
        body={
          <>
            The campaign timeline shows every project a KOL has promoted — which
            tokens, which posts, and how the market reacted. Spot conflicts with
            competing protocols, check whether they've worked with rug-adjacent
            projects, and read the audience response before you commit.
            <br />
            <br />
            Paid vs. organic reach tells you how their sponsored posts really land
            versus the content the timeline rewards on its own.
          </>
        }
        img={`${CDN}/68407cf0a997aa0a3110da19_img_analytics_02.avif`}
        imgAlt="KOL past campaign timeline"
      />

      <FeatureRow
        title="Audit for bots and bought followers"
        body={
          <>
            Crypto KOL audiences are full of bots and airdrop farmers. Kolio flags an
            inflated follower count or engagement pod instantly, so you pay for real
            humans who can actually move a token — not vanity numbers.
          </>
        }
        img={`${CDN}/68407cfc94443a66df98489c_img_analytics_03.avif`}
        imgAlt="Bot and fake follower audit"
        reverse
      />

      <FeatureRow
        title="Compare content formats across every platform"
        body={
          <>
            Break down views, engagement, and comments by format and channel — a
            YouTube deep-dive vs. a viral X thread, a Telegram alpha drop vs. a TikTok
            short. See which format each KOL converts on so you brief the right
            deliverable for your campaign.
          </>
        }
        img={`${CDN}/68407d05b9629ec4c85ed833_img_analytics_04.avif`}
        imgAlt="Compare content formats across platforms"
      />
    </>
  );
}
