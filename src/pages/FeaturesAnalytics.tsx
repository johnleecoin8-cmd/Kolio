import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import Testimonials from '@/components/kit/Testimonial';
import LiveStats from '@/components/live/LiveStats';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnalyticsFloatingCards from '@/components/pages/features-analytics/AnalyticsFloatingCards';
import OnchainConsole from '@/components/pages/features-analytics/OnchainConsole';
import AnalyticsClose from '@/components/pages/features-analytics/AnalyticsClose';

/** Kolio — KOL analytics & vetting for web3 campaigns.
 *  Calm-premium rebuild: HeroPanel hero, floating analytics cards with intentional
 *  charts, a dark on-chain console focal, live platform numbers, and a calm close. */
export default function FeaturesAnalytics() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="Analytics & vetting for crypto KOLs"
        title={
          <>
            Know exactly who you&rsquo;re paying — before you{' '}
            <span className="text-gradient-brand">pay</span>
          </>
        }
        subtitle="Real-follower growth, bot-filtered audiences, and on-chain attribution for every KOL across X, YouTube, TikTok and Telegram."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <AnalyticsFloatingCards />

      <StatTrio
        stats={[
          { value: 12418, label: 'Crypto KOLs indexed across X, YT, TikTok & Telegram' },
          { value: 78, suffix: '%', label: 'Median real-follower share after bot filtering' },
          { value: 0, label: 'Payout disputes — escrow releases on delivery' },
        ]}
        source="Source: Kolio platform aggregate, Q2 2026."
      />

      <OnchainConsole />

      <LiveStats heading="Analytics on real creators, live from the platform" />

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

      <AnalyticsClose />
    </main>
  );
}
