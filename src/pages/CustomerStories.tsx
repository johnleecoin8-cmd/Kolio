import Hero from '@/components/pages/customer-stories/Hero';
import PullQuote from '@/components/pages/customer-stories/PullQuote';
import Article from '@/components/pages/customer-stories/Article';
import CtaBanner from '@/components/pages/customer-stories/CtaBanner';

/** modash.io customer story — NordVPN. 1:1 clone, sections render top-to-bottom. */
export default function CustomerStories() {
  return (
    <main>
      <Hero />
      <PullQuote />
      <Article />
      <CtaBanner />
    </main>
  );
}
