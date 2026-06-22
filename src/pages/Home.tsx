import Hero from '@/components/pages/home/Hero';
import FloatingCards from '@/components/pages/home/FloatingCards';
import PartnerMarquee from '@/components/pages/home/PartnerMarquee';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';
import GetStarted from '@/components/pages/home/GetStarted';

/** Kolio homepage — calm-premium rebuild (phantom.com structure, Kolio brand):
 *  soft warm canvas, big rounded dark hero with flowing art, floating product
 *  cards, trust marquee, live real-data proof, calm get-started closing. */
export default function Home() {
  return (
    <main className="canvas-warm">
      <Hero />
      <FloatingCards />
      <PartnerMarquee />
      <LiveCreatorRail
        title="Real crypto KOLs, scored on-chain"
        subtitle="A live slice of the Kolio index. Open any card for the full proof report."
        filters={{ category: 'crypto' }}
        count={8}
      />
      <GetStarted />
    </main>
  );
}
