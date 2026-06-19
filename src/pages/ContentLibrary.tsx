import Hero from '@/components/pages/content-library/Hero';
import CollabList from '@/components/pages/content-library/CollabList';
import Faq from '@/components/pages/content-library/Faq';

/** modash.io content-library brand page (Red Bull influencers) — 1:1 clone. */
export default function ContentLibrary() {
  return (
    <main>
      <Hero />
      <CollabList />
      <Faq />
    </main>
  );
}
