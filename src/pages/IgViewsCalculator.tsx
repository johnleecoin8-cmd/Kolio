import Hero from '@/components/pages/ig-views-calculator/Hero';
import LiveAvgViewsBenchmark from '@/components/pages/ig-views-calculator/LiveAvgViewsBenchmark';
import WhatYouCheck from '@/components/pages/ig-views-calculator/WhatYouCheck';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import ClosingCta from '@/components/pages/ig-views-calculator/ClosingCta';

/**
 * Kolio — Crypto KOL Reach Checker. Calm-premium rebuild:
 * dark rounded hero with flowing art + floating reach-result card, live index
 * benchmark, floating "what you check" cards, real-data proof rail, calm close.
 */
export default function IgViewsCalculator() {
  return (
    <main className="canvas-warm">
      <Hero />
      <LiveAvgViewsBenchmark />
      <WhatYouCheck />
      <LiveCreatorRail
        title="Real crypto KOLs, scored on-chain"
        subtitle="A live slice of the Kolio index. Open any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />
      <ClosingCta />
    </main>
  );
}
