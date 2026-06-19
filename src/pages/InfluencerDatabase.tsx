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
import Testimonials from '@/components/pages/influencer-database/Testimonials';
import BottomCta from '@/components/pages/influencer-database/BottomCta';

/** Kolio /influencer-database — searchable crypto KOL database product page. */
export default function InfluencerDatabase() {
  return (
    <main>
      <Hero />

      <LiveDiscovery />

      <SearchFilterFeature />

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

      <Testimonials />

      <BottomCta />
    </main>
  );
}
