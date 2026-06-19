import Hero from '@/components/pages/podcast/Hero';
import GuestsGrid from '@/components/pages/podcast/GuestsGrid';
import Episodes from '@/components/pages/podcast/Episodes';
import WhatListeners from '@/components/pages/podcast/WhatListeners';
import BeOurGuest from '@/components/pages/podcast/BeOurGuest';
import HowWePromote from '@/components/pages/podcast/HowWePromote';
import FinalCta from '@/components/pages/podcast/FinalCta';

/** modash.io/podcast — Creator Partnerships Podcast. 1:1 clone, top-to-bottom. */
export default function Podcast() {
  return (
    <main>
      <Hero />
      <GuestsGrid />
      <Episodes />
      <WhatListeners />
      <BeOurGuest />
      <HowWePromote />
      <FinalCta />
    </main>
  );
}
