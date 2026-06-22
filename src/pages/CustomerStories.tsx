import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import OutcomeCases from '@/components/pages/customer-stories/OutcomeCases';
import LogoMarquee from '@/components/kit/LogoMarquee';
import Testimonials, { type Quote } from '@/components/kit/Testimonial';
import CtaBanner from '@/components/pages/customer-stories/CtaBanner';

const QUOTES: Quote[] = [
  {
    quote:
      'We stopped paying for follower counts and started paying for holders. Kolio scored every KOL the same way, so the budget went where the wallets actually moved.',
    name: 'Mara Velez',
    role: 'Head of Growth',
    brand: 'Helix DEX',
    metrics: [
      { value: '+412%', label: 'holder reach' },
      { value: '6.2x', label: 'ROAS' },
      { value: '17', label: 'KOLs settled' },
      { value: '0', label: 'disputes' },
    ],
  },
  {
    quote:
      'The escrow loop killed invoice chasing entirely. Funds released on delivery, attribution was on-chain, and finance signed off without a single back-and-forth.',
    name: 'Devin Asante',
    role: 'Marketing Lead',
    brand: 'Lumen Wallet',
    metrics: [
      { value: '9,140', label: 'wallets attributed' },
      { value: '21d', label: 'to live' },
      { value: '23', label: 'KOLs booked' },
      { value: '100%', label: 'on-time payout' },
    ],
  },
  {
    quote:
      'Proof Score let us cut the roster from forty maybes to twelve verified voices. Same spend, a third of the noise, and a cost per action we could defend to the board.',
    name: 'Priya Nandi',
    role: 'VP Marketing',
    brand: 'Parity Protocol',
    metrics: [
      { value: '$0.38', label: 'cost / action' },
      { value: '89', label: 'avg Proof Score' },
      { value: '31%', label: 'bots filtered' },
    ],
  },
  {
    quote:
      'Screenshot vetting was eating two hours a day. Now reach is verified before a DM goes out, and we run a hundred collabs a month without a spreadsheet in sight.',
    name: 'Oren Katz',
    role: 'Partnerships',
    brand: 'Arbiscan',
    metrics: [
      { value: '100', label: 'collabs / month' },
      { value: '94%', label: 'real audience' },
      { value: '2 hrs', label: 'saved daily' },
    ],
  },
];

/** Kolio customer stories — calm-premium rebuild. Soft warm canvas, big rounded
 *  dark hero with flowing art, outcome-titled floating case cards (the number is
 *  the headline), partner marquee, quantified testimonials, calm closing CTA. */
export default function CustomerStories() {
  return (
    <main className="canvas-warm">
      <HeroPanel
        eyebrow="Customer stories"
        title={
          <>
            Real campaigns, results you can <span className="text-gradient-brand">prove</span>
          </>
        }
        subtitle="Crypto teams run discovery, vetting, escrow and payout on one rail — then close with a settled, on-chain record. Here is what that earned them."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Find crypto KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <OutcomeCases />

      <LogoMarquee
        label="Crypto teams writing proof-based KOL records on Kolio"
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

      <Testimonials heading="Outcomes, in their words" quotes={QUOTES} />

      <CtaBanner />
    </main>
  );
}
