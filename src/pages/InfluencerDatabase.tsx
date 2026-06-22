import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import Container from '@/components/ui/Container';
import LiveDiscovery from '@/components/pages/influencer-database/LiveDiscovery';
import FilterRail from '@/components/pages/influencer-database/FilterRail';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio /influencer-database — calm-premium rebuild.
 *  HeroPanel hero, restyled live/preview discovery, a floating filter-rail card
 *  with influence-tier chips, live creator proof, and a calm closing CTA. */
export default function InfluencerDatabase() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="The crypto KOL database"
        title={<>Find the crypto KOLs you can actually <span className="text-gradient-brand">trust</span></>}
        subtitle="Search a vetted index of crypto creators, see real on-chain reach and Proof Scores, and shortlist by influence tier — before a single token leaves your wallet."
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

      <LiveDiscovery />

      <FilterRail />

      <StatTrio
        stats={[
          { value: 1284, label: 'Verified crypto KOLs indexed' },
          { value: 9.3, suffix: 'M', decimals: 1, label: 'Real reach scored across the database' },
          { value: 94, suffix: '%', label: 'Median proof score of top-tier creators' },
        ]}
        source="Source: Kolio internal index, Q2 2026 (proof score = reach × audience-quality × bot-adjusted engagement)"
      />

      <LiveCreatorRail
        title="Top creators in the index, scored on-chain"
        subtitle="A live slice of the database. Open any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />

      {/* calm close */}
      <section className="canvas-warm2 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-light text-[2.5rem] leading-[1.03] text-foreground md:text-[4rem]">
              Shortlist your first <span className="text-gradient-brand">campaign</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
              Browse the index free, filter by proof and tier, and book the KOLs who
              will actually move your token — paid in escrow, settled on-chain.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/influencer-database"
                className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
              >
                Search the database <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/demo-confirmation"
                className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:border-black/20"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
