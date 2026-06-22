import Hero from '@/components/pages/influencer-database/Hero';
import LiveDiscovery from '@/components/pages/influencer-database/LiveDiscovery';
import SearchFilterFeature from '@/components/pages/influencer-database/SearchFilterFeature';
import FeatureSection from '@/components/pages/influencer-database/FeatureSection';
import {
  VettingVisual,
  PaymentsVisual,
  AttributionVisual,
} from '@/components/pages/influencer-database/FeatureVisuals';
import EverythingElse from '@/components/pages/influencer-database/EverythingElse';
import InfluenceTiers from '@/components/pages/influencer-database/InfluenceTiers';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import StatTrio from '@/components/kit/StatTrio';
import KitTestimonials from '@/components/kit/Testimonial';
import BottomCta from '@/components/pages/influencer-database/BottomCta';

/** Kolio /influencer-database — searchable crypto KOL database product page. */
export default function InfluencerDatabase() {
  return (
    <main>
      <Hero />

      <LiveDiscovery />

      <LiveCreatorRail title="Top creators in the database" count={8} />

      <StatTrio
        stats={[
          { value: 1284, label: 'Verified crypto KOLs indexed' },
          { value: 9.3, suffix: 'M', decimals: 1, label: 'Real reach scored across the database' },
          { value: 94, suffix: '%', label: 'Median proof score of top-tier creators' },
        ]}
        source="Source: Kolio internal index, Q2 2026 (proof score = reach × audience-quality × bot-adjusted engagement)"
      />

      <SearchFilterFeature />

      <InfluenceTiers />

      <FeatureSection
        reverse
        title="Vet a KOL before a single token leaves your wallet"
        visual={<VettingVisual />}
        body={
          <>
            In crypto, follower counts lie. Kolio scores every KOL on what actually
            matters: real reach, the share of bots and fake followers, genuine
            engagement, and the quality of their audience — real holders and traders,
            not vanity numbers.
            <br />
            <br />
            You see the proof upfront, so you can commit budget to the few KOLs who
            will actually move your token, mint, or protocol.
          </>
        }
      />

      <FeatureSection
        title="Pay KOLs on-chain, with escrow built in"
        visual={<PaymentsVisual />}
        body={
          <>
            Stop wiring stablecoins on trust. Fund a campaign into escrow, let the KOL
            deliver, then release payment on-chain once the work is approved.
            <br />
            <br />
            Every deal is transparent and verifiable — protecting brands and KOLs
            alike, and bringing web2-grade accountability to crypto creator deals.
          </>
        }
      />

      <FeatureSection
        reverse
        title="Real attribution for web3 campaigns"
        visual={<AttributionVisual />}
        ctaLabel="See it live"
        ctaHref="/demo-confirmation"
        body={
          <>
            Tie wallets, clicks, and conversions back to the KOL who drove them —
            across X, YouTube, Telegram, and TikTok.
            <br />
            <br />
            Measure what each KOL actually delivered, settle payouts against real
            on-chain results, and double down on the channels that convert.
          </>
        }
      />

      <EverythingElse />

      <KitTestimonials
        heading="Outcomes from crypto teams running on Kolio"
        quotes={[
          {
            brand: 'Arbitrum',
            quote:
              'We stopped paying for inflated follower counts. Filtering by tier and proof score, we backed 18 micro and mid KOLs who actually held the token — and tracked every wallet they drove.',
            name: 'A. Mendes',
            role: 'KOL Marketing Lead',
            metrics: [
              { value: '4.2x', label: 'ROAS vs. last campaign' },
              { value: '−71%', label: 'Vetting time' },
              { value: '18', label: 'KOLs activated' },
              { value: '92', label: 'Avg proof score' },
            ],
          },
          {
            brand: 'OKX',
            quote:
              'For a listing push we needed macro reach and trustworthy data fast. Kolio surfaced the right trading KOLs in days, and on-chain attribution showed exactly who drove volume.',
            name: 'M. Niilus',
            role: 'KOL Campaign Specialist',
            metrics: [
              { value: '$3.1M', label: 'Attributed volume' },
              { value: '240+', label: 'KOLs sourced' },
              { value: '6 days', label: 'Discovery to live' },
              { value: '0', label: 'Disputed payouts' },
            ],
          },
        ]}
      />

      <BottomCta />
    </main>
  );
}
