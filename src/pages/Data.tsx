import StatTrio from '@/components/kit/StatTrio';
import Testimonials from '@/components/kit/Testimonial';
import LogoMarquee from '@/components/kit/LogoMarquee';
import Hero from '@/components/pages/data/Hero';
import OnChainPanel from '@/components/pages/data/OnChainPanel';
import HowItWorks from '@/components/pages/data/HowItWorks';
import Searchable from '@/components/pages/data/Searchable';
import OpenNetwork from '@/components/pages/data/OpenNetwork';
import TrustHub from '@/components/pages/data/TrustHub';
import Faq from '@/components/pages/data/Faq';
import CtaBanner from '@/components/pages/data/CtaBanner';

const QUOTES = [
  {
    quote:
      'We stopped paying for screenshots. Kolio scored every KOL on real reach and on-chain volume, so the budget went to accounts that actually moved wallets — not follower counts.',
    name: 'Mara Chen',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '3.1x', label: 'ROAS' },
      { value: '41%', label: 'lower CAC' },
      { value: '9,200', label: 'wallets driven' },
      { value: '12d', label: 'to launch' },
    ],
  },
  {
    quote:
      'Vetting used to take our team a week per shortlist. Kolio surfaced fake-follower rates and audience quality up front, and escrow released only when deliverables hit on-chain.',
    name: 'Devon Park',
    role: 'Marketing Lead',
    brand: 'Aster Exchange',
    metrics: [
      { value: '85%', label: 'less vetting time' },
      { value: '0', label: 'rugged deals' },
      { value: '$1.2M', label: 'USDC settled' },
      { value: '34', label: 'KOLs onboarded' },
    ],
  },
];

/** Kolio /data ("Our Data") page — proof-based data for web3 KOL marketing. */
export default function Data() {
  return (
    <main>
      {/* soft neutral */}
      <Hero />

      {/* white — cited lead stats */}
      <StatTrio
        stats={[
          { value: 120, suffix: 'M+', label: 'crypto-native profiles indexed' },
          { value: 30, suffix: '+', label: 'audience & reach signals per KOL' },
          { value: 8, label: 'web3 niches, from DeFi to gaming' },
        ]}
        source="Source: Kolio data index (public X / YouTube / TikTok / Telegram profiles, as of Q2 2026)."
      />

      {/* white — auto-scroll partner wordmarks */}
      <LogoMarquee
        label="The data behind web3 campaigns at"
        names={['Ledger', 'Phantom', 'Arbitrum', 'OKX', 'Polygon', 'Aptos', 'Base', 'Solana']}
      />

      {/* dark punctuation — on-chain motif */}
      <OnChainPanel />

      {/* white */}
      <HowItWorks />

      {/* soft neutral — card-kit feature grid */}
      <Searchable />

      {/* white — quantified proof */}
      <Testimonials heading="Outcomes the chain already proves" quotes={QUOTES} />

      {/* white */}
      <OpenNetwork />

      {/* white */}
      <TrustHub />

      {/* white */}
      <Faq />

      {/* red gradient — the one reserved moment */}
      <CtaBanner />
    </main>
  );
}
