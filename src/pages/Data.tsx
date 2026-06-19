import Hero from '@/components/pages/data/Hero';
import HowItWorks from '@/components/pages/data/HowItWorks';
import Searchable from '@/components/pages/data/Searchable';
import OpenNetwork from '@/components/pages/data/OpenNetwork';
import TrustHub from '@/components/pages/data/TrustHub';
import Faq from '@/components/pages/data/Faq';
import CtaBanner from '@/components/pages/data/CtaBanner';

/** modash.io /data ("Our Data") page — 1:1 clone. Sections render top-to-bottom. */
export default function Data() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Searchable />
      <OpenNetwork />
      <TrustHub />
      <Faq />
      <CtaBanner />
    </main>
  );
}
