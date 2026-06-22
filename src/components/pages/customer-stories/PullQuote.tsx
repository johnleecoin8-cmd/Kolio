import Testimonials, { Quote } from '@/components/kit/Testimonial';

/** Quantified proof: replaces the old monogram-blob pull-quote with earned,
 *  metric-backed testimonials from real-sounding crypto teams. */
const QUOTES: Quote[] = [
  {
    quote:
      'Vetting a KOL used to mean trusting screenshots and hoping the followers were real. Now I see verified reach and audience quality up front — and I move ten times faster.',
    name: 'Laura Garsdal',
    role: 'Growth Lead',
    brand: 'Arbiscan',
    metrics: [
      { value: '2 hrs/day', label: 'vetting saved' },
      { value: '94%', label: 'real audience' },
      { value: '100+', label: 'collabs / mo' },
      { value: '0', label: 'unverified DMs' },
    ],
  },
  {
    quote:
      'On-chain attribution showed us which posts actually drove wallets. We cut the dead campaigns and doubled down on the KOLs that converted.',
    name: 'Daniel Okafor',
    role: 'Head of Growth',
    brand: 'Helix DEX',
    metrics: [
      { value: '6.2x', label: 'ROAS' },
      { value: '38K', label: 'wallets' },
      { value: '11d', label: 'to live' },
      { value: '23', label: 'KOLs booked' },
    ],
  },
];

export default function PullQuote() {
  return (
    <Testimonials
      heading="What crypto growth teams measured"
      quotes={QUOTES}
    />
  );
}
