import Hero from '@/components/pages/customer-stories/Hero';
import OutcomeCases from '@/components/pages/customer-stories/OutcomeCases';
import LogoMarquee from '@/components/kit/LogoMarquee';
import Article from '@/components/pages/customer-stories/Article';
import PullQuote from '@/components/pages/customer-stories/PullQuote';
import CtaBanner from '@/components/pages/customer-stories/CtaBanner';

/** Kolio customer story — outcome-led proof. Sections render top-to-bottom:
 *  white hero + cited stats → outcome-titled case grid (dark lead card) →
 *  partner marquee → Arbiscan deep-dive → quantified testimonials → red CTA moment. */
export default function CustomerStories() {
  return (
    <main>
      <Hero />
      <OutcomeCases />
      <LogoMarquee
        names={[
          'Arbiscan',
          'Helix DEX',
          'Lumen Wallet',
          'Parity Protocol',
          'Stride Labs',
          'Nova Bridge',
          'Quanta',
          'Orbit L2',
        ]}
      />
      <Article />
      <PullQuote />
      <CtaBanner />
    </main>
  );
}
