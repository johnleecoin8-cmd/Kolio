import Hero from '@/components/pages/content-library/Hero';
import CollabList from '@/components/pages/content-library/CollabList';
import Faq from '@/components/pages/content-library/Faq';
import LiveCreatorRail from '@/components/live/LiveCreatorRail';

/** Kolio KOL library — crypto KOLs who have run campaigns with a web3 brand (OKX). */
export default function ContentLibrary() {
  return (
    <main>
      <Hero />
      <LiveCreatorRail title="Creators with standout content" count={8} />
      <CollabList />
      <Faq />
    </main>
  );
}
