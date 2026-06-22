import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import ComparisonBlock from '@/components/kit/ComparisonBlock';
import Testimonials from '@/components/kit/Testimonial';
import LogoMarquee from '@/components/kit/LogoMarquee';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import Container from '@/components/ui/Container';
import TiktokDiscovery from '@/components/pages/features-discovery-tiktok/TiktokDiscovery';

/** Web3 brands & exchanges that vet TikTok KOLs on Kolio — text wordmarks. */
const BRANDS = ['OKX', 'Ledger', 'Phantom', 'Arbitrum', 'Polygon', 'Kaito', 'Lido', 'Optimism', 'dYdX', 'Aave', 'Pendle', 'Jupiter'];

const COMPARE = [
  { old: 'You hire a TikTok creator off a screenshot of their view count', better: 'You see a Proof Score that strips bought views before you reach out' },
  { old: 'Crypto-native fit is a guess — most TikTok audiences never touch a wallet', better: 'Holder overlap shows which creators actually move on-chain audiences' },
  { old: 'Short-form spikes, then you lose the trail to swaps or sign-ups', better: 'Attribution links each TikTok to wallets, referrals and settled payouts' },
];

/**
 * Kolio — Crypto KOL discovery for TikTok (calm-premium rebuild).
 * HeroPanel + floating TikTok discovery UIs + live tiktok creator rail + calm close.
 */
export default function FeaturesDiscoveryTiktok() {
  return (
    <main>
      <HeroPanel
        eyebrow="Crypto KOL discovery · TikTok"
        title={<>Find TikTok crypto KOLs you can <span className="text-gradient-brand">prove</span></>}
        subtitle="Search short-form crypto creators by niche and chain, see the audience that's real, and book the ones who actually move holders — not view counts."
      >
        <Link to="/influencer-database" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
          Find TikTok KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/demo-confirmation" className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
          Book a demo
        </Link>
      </HeroPanel>

      <LogoMarquee label="Vetting TikTok KOLs for web3 brands, exchanges & protocols" names={BRANDS} />

      <TiktokDiscovery />

      <LiveCreatorRail
        title="Discover TikTok creators now"
        subtitle="A live slice of the Kolio index, filtered to TikTok crypto creators."
        filters={{ platform: 'tiktok' }}
        count={8}
      />

      <StatTrio
        stats={[
          { value: 14200, suffix: '+', label: 'TikTok crypto creators indexed' },
          { value: 71, suffix: '%', label: 'Median real-audience share, post-filter' },
          { value: 9, prefix: '<', suffix: '%', label: 'Bought-view accounts that pass review' },
        ]}
        source="Kolio internal index, rolling 90-day window · figures illustrative"
      />

      <ComparisonBlock
        heading="The old way buys TikTok views. The Kolio way proves the audience."
        oldLabel="Sourcing TikTok crypto KOLs the old way"
        newLabel="on TikTok"
        rows={COMPARE}
      />

      <Testimonials
        heading="What TikTok campaigns look like with proof"
        quotes={[
          {
            quote: 'We stopped paying for inflated view counts. Kolio surfaced four TikTok creators whose audiences actually held our token after the drop.',
            name: 'Mara Velez',
            role: 'Head of Growth',
            brand: 'Orbit Labs',
            metrics: [
              { value: '3.1M', label: 'Verified views' },
              { value: '+18%', label: 'Holder lift' },
              { value: '6.2x', label: 'ROAS' },
              { value: '0', label: 'Bought-view buys' },
            ],
          },
          {
            quote: 'Short-form used to be a black box for us. Now every TikTok ties back to wallets and referral codes, so the payout matches the proof.',
            name: 'Daniel Cho',
            role: 'Marketing Lead',
            brand: 'Mintwave',
            metrics: [
              { value: '42', label: 'Creators booked' },
              { value: '91', label: 'Avg Proof Score' },
              { value: '$0', label: 'Wasted spend' },
              { value: '100%', label: 'Attributed' },
            ],
          },
        ]}
      />

      {/* Calm close */}
      <section className="canvas-warm2 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-light text-[2.25rem] leading-[1.03] text-foreground md:text-[4rem]">
              Run a TikTok campaign you can <span className="text-gradient-brand">prove</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
              Browse vetted TikTok crypto KOLs, check the Proof Score, and book with on-chain escrow. No wallet connect required to explore.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/influencer-database" className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90">
                Find TikTok KOLs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo-confirmation" className="rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-gray-50">
                Book a demo
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
