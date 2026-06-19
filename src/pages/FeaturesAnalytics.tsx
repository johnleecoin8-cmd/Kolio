import Hero from '@/components/pages/features-analytics/Hero';
import DataNoTabs from '@/components/pages/features-analytics/DataNoTabs';
import FeatureRow from '@/components/pages/features-analytics/FeatureRow';
import Testimonial from '@/components/pages/features-analytics/Testimonial';
import CtaBlock from '@/components/pages/features-analytics/CtaBlock';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Kolio — KOL analytics & vetting for web3 campaigns. */
export default function FeaturesAnalytics() {
  return (
    <main>
      <Hero />

      <DataNoTabs />

      <FeatureRow
        heading="See every campaign a KOL has run before"
        body={
          <>
            Pull up a KOL&rsquo;s sponsorship history across X, YouTube, and
            Telegram — which projects they shilled, what they posted, and how
            those calls actually landed. Compare paid versus organic engagement
            so you know whether their audience trusts a sponsored mention or
            scrolls past it.
          </>
        }
        image={`${CDN}/68407cf0a997aa0a3110da19_img_analytics_02.avif`}
        imageAlt="KOL campaign history timeline"
        reverse={false}
        cta={{
          label: 'Start vetting KOLs',
          href: '/demo-confirmation',
        }}
      />

      <FeatureRow
        heading="Screen out bots and bought followers"
        body={
          <>
            Crypto is full of inflated follower counts and engagement farms.
            Kolio scores every audience for authenticity so you can spot padded
            numbers instantly — and pay only for KOLs whose reach is real.
          </>
        }
        image={`${CDN}/68407cfc94443a66df98489c_img_analytics_03.avif`}
        imageAlt="Fake follower and bot audit"
        reverse
        cta={{
          label: 'Start vetting KOLs',
          href: '/demo-confirmation',
        }}
      />

      <FeatureRow
        heading="Know which format actually moves your token"
        body={
          <>
            Break down reach, engagement rate, and watch time by content type —
            a thread versus a quote-tweet on X, a Short versus a deep-dive on
            YouTube, or a pinned message in a Telegram channel. Predict how each
            format will perform before you brief your KOL.
          </>
        }
        image={`${CDN}/68407d05b9629ec4c85ed833_img_analytics_04.avif`}
        imageAlt="Compare KOL content formats"
        reverse={false}
        cta={{
          label: 'Start vetting KOLs',
          href: '/demo-confirmation',
        }}
      />

      <FeatureRow
        heading="Outreach that reaches KOLs where they live"
        body={
          <>
            Send up to 100 personalized intros in one pass, then let sequences
            handle the follow-ups across email and Telegram. Cut the repetitive
            DMs, stay consistent, and keep every pitch feeling 1:1 — even when
            you&rsquo;re lining up a hundred KOLs for a launch.
          </>
        }
        image={`${CDN}/68ca79df7549b2082bdb44a9_img_email_sequences.avif`}
        imageAlt="KOL outreach and sequences"
        reverse
        cta={{
          label: 'Book a demo',
          href: '/demo-confirmation',
        }}
      />

      <Testimonial />

      <CtaBlock />
    </main>
  );
}
