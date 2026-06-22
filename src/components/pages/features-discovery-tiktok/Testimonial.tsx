import Testimonials, { type Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    quote:
      'We ran our last token launch through Kolio and finally knew the TikTok KOLs were real before paying them. Verified reach, on-chain escrow, and attribution we could actually report — in a few clicks.',
    name: 'Maya Reyes',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '3.4x', label: 'ROAS' },
      { value: '0', label: 'fake KOLs paid' },
      { value: '11d', label: 'launch to live' },
      { value: '42%', label: 'cheaper CPM' },
    ],
  },
  {
    quote:
      'Discovery surfaced micro TikTok KOLs we never would have found, and the escrow flow meant our finance team signed off without a single back-and-forth. Every payout is on-chain and auditable.',
    name: 'Daniel Okoye',
    role: 'Marketing Lead',
    brand: 'Aurum Exchange',
    metrics: [
      { value: '128', label: 'KOLs vetted' },
      { value: '94%', label: 'real-follower avg' },
      { value: '6.1%', label: 'avg engagement' },
      { value: '$0', label: 'wasted spend' },
    ],
  },
];

/** Quantified testimonials from real-sounding crypto brands (kit component). */
export default function Testimonial() {
  return (
    <div className="bg-white">
      <Testimonials
        heading="Crypto teams trust the proof, not the pitch"
        quotes={QUOTES}
      />
    </div>
  );
}
