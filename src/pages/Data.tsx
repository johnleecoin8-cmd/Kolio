import Hero from '@/components/pages/data/Hero';
import LiveStats from '@/components/live/LiveStats';
import TrustedBy from '@/components/pages/data/TrustedBy';
import HowItWorks from '@/components/pages/data/HowItWorks';
import Searchable from '@/components/pages/data/Searchable';
import OpenNetwork from '@/components/pages/data/OpenNetwork';
import TrustHub from '@/components/pages/data/TrustHub';
import Faq from '@/components/pages/data/Faq';
import CtaBanner from '@/components/pages/data/CtaBanner';

/** Kolio /data ("Our Data") page — proof-based data for web3 KOL marketing. */
export default function Data() {
  return (
    <main>
      <Hero />
      <LiveStats heading="The numbers behind Kolio data" />
      <TrustedBy />
      <HowItWorks />
      <Searchable />
      <OpenNetwork />
      <TrustHub />
      <Faq />
      <CtaBanner />
    </main>
  );
}
