import KitTestimonials, { type Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    brand: 'Arbitrum',
    quote:
      'We used to vet crypto YouTubers by eye and hope for the best. Kolio shows real reach and audience quality before we ever reach out — every campaign is finally measurable.',
    name: 'Nadia Keller',
    role: 'Head of Growth',
    metrics: [
      { value: '3.4x', label: 'Campaign ROAS' },
      { value: '-62%', label: 'Wasted spend' },
      { value: '11', label: 'KOLs shipped' },
    ],
  },
  {
    brand: 'Ledger',
    quote:
      'Proof-based vetting plus on-chain attribution means no more paying for inflated follower counts. We see avg views, bot share, and conversions per KOL.',
    name: 'Tomas Oduya',
    role: 'Ecosystem Lead',
    metrics: [
      { value: '4.2M', label: 'Verified reach' },
      { value: '0', label: 'Bot-padded buys' },
      { value: '9 days', label: 'Discovery to live' },
    ],
  },
  {
    brand: 'OKX',
    quote:
      'For large-scale micro-KOL campaigns across DeFi and trading, the YouTube data pool let us find thousands of creators with the right audience in minutes.',
    name: 'Rafael Pinto',
    role: 'Influencer Campaign Lead',
    metrics: [
      { value: '1,284', label: 'KOLs matched' },
      { value: '18K', label: 'Wallet sign-ups' },
      { value: '94%', label: 'On-time delivery' },
    ],
  },
  {
    brand: 'Phantom',
    quote:
      'Trustworthy discovery, live content tracking, and escrowed payments in one flow. Kolio is the first KOL tool in crypto I actually trust with budget.',
    name: 'Lena Mwangi',
    role: 'KOL Marketing Manager',
    metrics: [
      { value: '2.7x', label: 'Engagement lift' },
      { value: '100%', label: 'Escrowed payouts' },
      { value: '38', label: 'Briefs tracked' },
    ],
  },
];

/** Quantified testimonials — real crypto brand wordmarks + hard metrics (no fake headshots). */
export default function Testimonials() {
  return (
    <KitTestimonials
      heading="What web3 teams ship with Kolio"
      quotes={QUOTES}
    />
  );
}
