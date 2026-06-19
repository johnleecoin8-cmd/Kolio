import FeatureRow from './FeatureRow';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** The stack of alternating illustrated feature rows. */
export default function FeatureRows() {
  return (
    <>
      <FeatureRow
        imageOn="right"
        bg="violet"
        heading="Find the perfect TikTok audiences for your brand"
        ctaLabel="Try for free"
        img={`${CDN}/5f4f61fbca8cb4f5cdfd17c4_Web_illustration_feature_02.svg`}
        imgAlt="An illustrative image on Modash's influencer discovery filters"
        body={
          <>
            <p>
              Apply filters to our global database of TikTok influencers to find
              the creators who speak directly to your target audience.
            </p>
            <p className="mt-4">
              Filter by audience age, gender, location &amp; much much more.
            </p>
            <p className="mt-4">
              Add TikTok accounts to your shortlist(s) ready for the next steps.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="left"
        heading="Find TikTok influencer emails in bulk"
        ctaLabel="Try For Free"
        img={`${CDN}/634d22b0453d98031cba5037_web_illustration_feature_35.svg`}
        imgAlt="An illustrative image on Modash's bulk email export feature"
        body={
          <>
            <p>
              Found &amp; shortlisted some TikTok influencers that you'd love to
              work with? Perfect.
            </p>
            <p className="mt-4">
              Whether it's one TikTok influencer or hundreds, you can find (and
              export) all available email addresses in just a couple of clicks,
              ready for outreach.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="right"
        heading="Discover influencers across platforms"
        ctaLabel="Try for free"
        img={`${CDN}/617958566b1c7ae8ac449a5d_web_illustration_feature_16.svg`}
        imgAlt="An illustrative image of Modash's social media platforms"
        body={
          <>
            <p>
              Modash covers more than just TikTok. It gives you access to every
              influencer in the world, on 3 major platforms:{' '}
              <a
                href="https://www.modash.io/features/influencer-discovery/youtube"
                className="font-semibold text-violet-dark underline"
              >
                YouTube
              </a>
              ,{' '}
              <a
                href="https://www.modash.io/features/influencer-discovery/"
                className="font-semibold text-violet-dark underline"
              >
                Instagram
              </a>
              , and TikTok.
            </p>
            <p className="mt-4">
              You know everything about their performance and you know that there
              are thousands like them who reach your audience.
            </p>
            <p className="mt-4">
              That power allows you to discover every option and make the right
              decision, quickly. Never feel stuck again.
            </p>
          </>
        }
      />

      <FeatureRow
        imageOn="left"
        heading="Grow faster by doing more of what works"
        ctaLabel="Try For Free"
        img={`${CDN}/5f4f61fc9227880c921d9e97_Web_illustration_feature_04.svg`}
        imgAlt="An illustrative image on Modash's lookalikes feature"
        body={
          <p>
            Use lookalike searches to find TikTok creators with similar audiences
            &amp; content compared with your most successful partnerships.
          </p>
        }
      />
    </>
  );
}
