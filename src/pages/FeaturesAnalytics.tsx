import Hero from '@/components/pages/features-analytics/Hero';
import DataNoTabs from '@/components/pages/features-analytics/DataNoTabs';
import FeatureRow from '@/components/pages/features-analytics/FeatureRow';
import Testimonial from '@/components/pages/features-analytics/Testimonial';
import CtaBlock from '@/components/pages/features-analytics/CtaBlock';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** modash.io /features/influencer-analytics — 1:1 clone. */
export default function FeaturesAnalytics() {
  return (
    <main>
      <Hero />

      <DataNoTabs />

      <FeatureRow
        heading="Check influencers' past sponsored content"
        body={
          <>
            Use the brand collaborations timeline to see who an influencer has
            worked with, what they posted, and how it performed. Plus see Paid vs.
            Organic metrics to see how well their sponsored content performs on
            average.
          </>
        }
        image={`${CDN}/68407cf0a997aa0a3110da19_img_analytics_02.avif`}
        imageAlt="Brand collaborations timeline"
        reverse={false}
        cta={{
          label: 'Try for free',
          href: 'https://marketer.modash.io/register/marketer',
        }}
      />

      <FeatureRow
        heading="Audit for fake followers"
        body={
          <>
            See the share of an influencer&rsquo;s audience that looks
            inauthentic, so you can avoid wasting budget on bought followers and
            engagement.
          </>
        }
        image={`${CDN}/68407cfc94443a66df98489c_img_analytics_03.avif`}
        imageAlt="Fake follower audit"
        reverse
        cta={{
          label: 'Try for free',
          href: 'https://marketer.modash.io/register/marketer',
        }}
      />

      <FeatureRow
        heading="Compare post types with advanced data"
        body={
          <>
            Break down key metrics like average views, engagement rate, and
            comments by content type, like Shorts vs. long-form on YouTube, or
            Reels vs. Posts on Instagram. This helps you better predict how each
            format will perform in your campaign.
          </>
        }
        image={`${CDN}/68407d05b9629ec4c85ed833_img_analytics_04.avif`}
        imageAlt="Compare post types"
        reverse={false}
        cta={{
          label: 'Try for free',
          href: 'https://marketer.modash.io/register/marketer',
        }}
      />

      <FeatureRow
        heading="Bulk emails & sequences that feel personal"
        body={
          <>
            Send up to 100 personalized emails in one go, then let smart sequences
            handle the follow-ups. Cut the repetitive work, stay consistent, and
            keep every outreach feeling 1:1—even at scale.
          </>
        }
        image={`${CDN}/68ca79df7549b2082bdb44a9_img_email_sequences.avif`}
        imageAlt="Bulk emails and sequences"
        reverse
        cta={{
          label: 'Learn more',
          href: 'https://www.modash.io/influencer-outreach',
        }}
      />

      <Testimonial />

      <CtaBlock />
    </main>
  );
}
