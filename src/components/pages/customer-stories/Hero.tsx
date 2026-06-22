import Container from '@/components/ui/Container';
import StatTrio from '@/components/kit/StatTrio';
import { ShieldCheck } from 'lucide-react';

/** Customer story hero: outcome-led headline on a clean white surface,
 *  brand wordmark card, then a cited count-up StatTrio. Red is the accent, not the wallpaper. */
export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="pt-12 pb-4 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow">Customer story · L2 explorer</span>
            <h1 className="display-xl mt-4 font-display text-h2 leading-none text-foreground md:text-h1">
              How Arbiscan vets crypto KOLs for{' '}
              <span className="text-gradient-brand">100 collabs a month</span>
            </h1>
            <p className="mt-6 max-w-xl text-body-md leading-snug text-foreground/70">
              Arbiscan has run KOL campaigns across X, YouTube, and Telegram
              since its token launch. We spoke to{' '}
              <strong className="font-semibold text-foreground">
                growth lead Laura Garsdal
              </strong>{' '}
              about how her 14-person team finds, verifies, and pays crypto
              creators — without trusting a single screenshot.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-brand">Discovery</span>
              <span className="chip chip-onchain">On-chain escrow</span>
              <span className="chip chip-ink">Attribution</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="card-kit w-full max-w-sm p-8 text-center">
              <p className="font-display text-h3 leading-none tracking-tight text-foreground">
                Arbiscan
              </p>
              <p className="mt-3 text-body text-foreground/55">
                L2 block explorer &amp; analytics
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-coral-bg px-3 py-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span className="text-body-sm font-semibold text-brand">
                  Verified Kolio customer
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <StatTrio
        stats={[
          { value: 3, suffix: ' yrs', label: 'running campaigns on Kolio' },
          { value: 2, suffix: ' hrs/day', label: 'saved on manual KOL vetting' },
          { value: 100, suffix: '+', label: 'collabs a month across DeFi & L2' },
        ]}
        source="Source: Arbiscan growth team, reported usage over 36 months on Kolio."
      />
    </section>
  );
}
