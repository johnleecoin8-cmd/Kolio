import FeatureRow from './FeatureRow';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** The three alternating product-feature rows of the vetting page. */
export default function FeatureSections() {
  return (
    <>
      <FeatureRow
        title="Check influencers' past sponsored content"
        body={
          <>
            Use the brand collaborations timeline during your vetting process to see
            who an influencer has worked with, what they posted, and how it performed.
            Check for competitors, see how the audience reacted, and more.
            <br />
            <br />
            Plus see Paid vs. Organic metrics to see how well their sponsored content
            performs on average.
          </>
        }
        img={`${CDN}/68407cf0a997aa0a3110da19_img_analytics_02.avif`}
        imgAlt="Brand collaborations timeline"
      />

      <FeatureRow
        title="Audit for fake followers"
        body={
          <>
            Quickly spot if a profile has an unusually high number of fake followers,
            and make decisions with more confidence.
          </>
        }
        img={`${CDN}/68407cfc94443a66df98489c_img_analytics_03.avif`}
        imgAlt="Fake follower audit"
        reverse
      />

      <FeatureRow
        title="Compare post types with advanced data"
        body={
          <>
            Break down key metrics like average views, engagement rate, and comments
            by content type, like Shorts vs. long-form on YouTube, or Reels vs. Posts
            on Instagram. This helps you better predict how each format will perform in
            your campaign.
          </>
        }
        img={`${CDN}/68407d05b9629ec4c85ed833_img_analytics_04.avif`}
        imgAlt="Compare post types"
      />
    </>
  );
}
