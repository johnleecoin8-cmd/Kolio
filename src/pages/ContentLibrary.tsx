import Hero from '@/components/pages/content-library/Hero';
import CollabList from '@/components/pages/content-library/CollabList';
import Faq from '@/components/pages/content-library/Faq';

/** Kolio KOL library — crypto KOLs who have run campaigns with a web3 brand (OKX). */
export default function ContentLibrary() {
  return (
    <main>
      <Hero />
      <CollabList />
      <Faq />
    </main>
  );
}
