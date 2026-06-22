import Hero from '@/components/pages/influencer-database-youtube/Hero';
import SearchFilter from '@/components/pages/influencer-database-youtube/SearchFilter';
import FeatureRow from '@/components/pages/influencer-database-youtube/FeatureRow';
import OnchainSettlement from '@/components/pages/influencer-database-youtube/OnchainSettlement';
import ApiFeature from '@/components/pages/influencer-database-youtube/ApiFeature';
import PlusGrid from '@/components/pages/influencer-database-youtube/PlusGrid';
import Testimonials from '@/components/pages/influencer-database-youtube/Testimonials';
import CtaBlock from '@/components/pages/influencer-database-youtube/CtaBlock';
import StatTrio from '@/components/kit/StatTrio';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio — the web3 influencer marketing platform. YouTube crypto KOL database page. */
export default function InfluencerDatabaseYoutube() {
  return (
    <main>
      <Hero />

      <LiveStats heading="The YouTube creator graph, live" />

      <StatTrio
        stats={[
          { value: 4.2, suffix: 'M', decimals: 1, label: 'YouTube creator profiles indexed' },
          { value: 94, suffix: '%', label: 'Median real-audience share, verified KOLs' },
          { value: 1284, label: 'KOLs matching a typical DeFi brief' },
        ]}
        source="Source: Kolio creator graph, YouTube segment (sampled June 2026)"
      />

      <LiveCreatorRail
        title="Top YouTube creators"
        filters={{ platform: 'youtube' }}
        count={8}
      />

      <SearchFilter />

      <FeatureRow
        eyebrow="Vet with proof"
        title="Vet crypto KOLs with proof BEFORE you reach out"
        body={
          <p>
            Vetting is the riskiest part of crypto KOL marketing — anyone can buy
            followers. Kolio gives you the proof upfront: real average views,
            engagement, audience demographics, bot share, and past sponsorships,
            so you back genuine influence instead of vanity metrics.
          </p>
        }
        media={
          <div className="card-kit w-full p-5">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <p className="text-body-sm font-semibold text-foreground">
                Audience quality breakdown
              </p>
              <span className="chip chip-onchain">Verified</span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                { label: 'Real, engaged audience', pct: 94, flag: false },
                { label: 'Audience in target geo', pct: 71, flag: false },
                { label: 'Suspected bots', pct: 6, flag: true },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-foreground/70">{row.label}</span>
                    <span className="num-display text-foreground">{row.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-gray-100">
                    <div
                      className={`h-2 rounded-full ${row.flag ? 'bg-gray-400' : 'bg-gradient-brand'}`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono-tnum text-eyebrow text-foreground/40">
              Source: Kolio audience graph · sampled 2.1M YouTube viewers
            </p>
          </div>
        }
      />

      <OnchainSettlement />

      <ApiFeature />
      <PlusGrid />
      <Testimonials />
      <CtaBlock />
    </main>
  );
}
