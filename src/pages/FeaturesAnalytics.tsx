import Hero from '@/components/pages/features-analytics/Hero';
import DataNoTabs from '@/components/pages/features-analytics/DataNoTabs';
import FeatureRow from '@/components/pages/features-analytics/FeatureRow';
import MetricGrid from '@/components/pages/features-analytics/MetricGrid';
import OnchainDashboard from '@/components/pages/features-analytics/OnchainDashboard';
import CtaBlock from '@/components/pages/features-analytics/CtaBlock';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import StatTrio from '@/components/kit/StatTrio';
import Testimonials from '@/components/kit/Testimonial';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Kolio — KOL analytics & vetting for web3 campaigns. */
export default function FeaturesAnalytics() {
  return (
    <main>
      <Hero />

      <StatTrio
        stats={[
          { value: 12418, label: 'Crypto KOLs indexed across X, YT, TikTok & Telegram' },
          { value: 78, suffix: '%', label: 'Median real-follower share after bot filtering' },
          { value: 0, label: 'Payout disputes — escrow releases on delivery' },
        ]}
        source="Source: Kolio platform aggregate, Q2 2026."
      />

      <MetricGrid />

      <LiveStats heading="Analytics on real creators" />

      <LiveCreatorRail
        title="Open any creator for full analytics"
        subtitle="Each profile has live follower-growth charts and audience breakdowns."
        count={8}
      />

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

      <OnchainDashboard />

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

      <Testimonials
        heading="Brands that stopped paying KOLs on vibes"
        quotes={[
          {
            quote:
              'We vetted every profile for real reach and bot ratio first, ran each deal through escrow, and tracked it down to wallet connects. 80+ KOLs onboarded for our token launch — zero payout disputes.',
            name: 'Maya Renaud',
            role: 'Head of Growth',
            brand: 'Arbitrum',
            metrics: [
              { value: '80+', label: 'KOLs onboarded' },
              { value: '0', label: 'payout disputes' },
              { value: '3.2x', label: 'on wallet ROAS' },
              { value: '11d', label: 'launch to live' },
            ],
          },
          {
            quote:
              'Kolio caught two creators with 40%+ bought followers before we wired a cent. We reallocated the budget to vetted KOLs and watched cost-per-real-reach drop by more than half.',
            name: 'Devon Park',
            role: 'Marketing Lead',
            brand: 'LayerZero',
            metrics: [
              { value: '-54%', label: 'cost / real reach' },
              { value: '2', label: 'bot KOLs filtered' },
              { value: '6.1%', label: 'avg organic eng.' },
              { value: '94', label: 'proof score' },
            ],
          },
        ]}
      />

      <CtaBlock />
    </main>
  );
}
