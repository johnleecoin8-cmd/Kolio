import Hero from '@/components/pages/influencer-database-youtube/Hero';
import SearchFilter from '@/components/pages/influencer-database-youtube/SearchFilter';
import FeatureRow from '@/components/pages/influencer-database-youtube/FeatureRow';
import ApiFeature from '@/components/pages/influencer-database-youtube/ApiFeature';
import PlusGrid from '@/components/pages/influencer-database-youtube/PlusGrid';
import Testimonials from '@/components/pages/influencer-database-youtube/Testimonials';
import CtaBlock from '@/components/pages/influencer-database-youtube/CtaBlock';
import LiveStats from '@/components/live/LiveStats';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio — the web3 influencer marketing platform. YouTube crypto KOL database page. */
export default function InfluencerDatabaseYoutube() {
  return (
    <main>
      <Hero />

      <LiveStats heading="The YouTube creator graph, live" />
      <LiveCreatorRail
        title="Top YouTube creators"
        filters={{ platform: 'youtube' }}
        count={8}
      />

      <SearchFilter />

      <FeatureRow
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
          <div className="w-full rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-body-sm font-semibold text-foreground">
              Audience quality breakdown
            </p>
            <div className="mt-5 space-y-4">
              {[
                { label: 'Real, engaged audience', pct: 94 },
                { label: 'Audience in target geo', pct: 71 },
                { label: 'Suspected bots', pct: 6 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-foreground/70">{row.label}</span>
                    <span className="font-semibold text-foreground">{row.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-background-soft">
                    <div
                      className="h-2 rounded-full bg-gradient-brand"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <FeatureRow
        imageLeft
        title="Run campaigns and pay KOLs on-chain"
        body={
          <>
            <p>
              When a KOL has a public contact or wallet, Kolio surfaces it — so
              you can go from discovery to deal without the back-and-forth.
            </p>
            <p>
              Fund campaigns into escrow and release payment automatically on
              delivery. On-chain settlement means transparent, instant payouts.
            </p>
            <p>
              Onboard creators, send briefs, track live content and referral
              links, and reconcile every payout — all in one workflow built for
              web3.
            </p>
          </>
        }
        media={
          <div className="w-full rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <span className="text-body-sm font-semibold text-foreground">
                Campaign escrow
              </span>
              <span className="rounded-full bg-pink-light px-2.5 py-1 text-body-sm font-semibold text-ink">
                Funded
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { name: 'DeFi Daily', amt: '5,000 USDC', status: 'Released' },
                { name: 'L2 Signal', amt: '3,200 USDC', status: 'In escrow' },
                { name: 'Chain Trader', amt: '4,100 USDC', status: 'In escrow' },
              ].map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between rounded-md border border-black/10 bg-background-soft px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-gradient-brand" />
                    <span className="text-body-sm font-semibold text-foreground">
                      {d.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-body-sm font-semibold text-foreground">
                      {d.amt}
                    </p>
                    <p className="text-body-sm text-foreground/55">{d.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <ApiFeature />
      <PlusGrid />
      <Testimonials />
      <CtaBlock />
    </main>
  );
}
