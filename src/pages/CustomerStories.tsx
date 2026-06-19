import Hero from '@/components/pages/customer-stories/Hero';
import PullQuote from '@/components/pages/customer-stories/PullQuote';
import Article from '@/components/pages/customer-stories/Article';
import CtaBanner from '@/components/pages/customer-stories/CtaBanner';

/** Kolio customer story — Arbiscan crypto KOL case study. Sections render top-to-bottom. */
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
