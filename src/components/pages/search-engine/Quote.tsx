import Testimonials, { type Quote as TQuote } from '@/components/kit/Testimonial';

const QUOTES: TQuote[] = [
  {
    quote:
      'We sorted by relevance, shortlisted twelve KOLs in an afternoon, and every one of them already held the asset. Zero bot spend.',
    name: 'Maya Okonkwo',
    role: 'Head of Growth',
    brand: 'Arclayer',
    metrics: [
      { value: '12', label: 'KOLs / day' },
      { value: '3.1%', label: 'Bot share' },
      { value: '4.2x', label: 'ROAS' },
      { value: '0', label: 'Wire transfers' },
    ],
  },
  {
    quote:
      'Relevance ranking surfaced micro-KOLs our agency never found. On-chain escrow meant we paid creators the day they delivered.',
    name: 'Daniel Reyes',
    role: 'Marketing Lead',
    brand: 'Novachain',
    metrics: [
      { value: '+38%', label: 'Wallet reach' },
      { value: '61%', label: 'Match score' },
      { value: '9d', label: 'Launch to live' },
      { value: '100%', label: 'On-chain paid' },
    ],
  },
];

/** Quantified testimonials (real-sounding protocols + hard metrics). */
export default function Quote() {
  return (
    <div className="bg-gray-50">
      <Testimonials
        heading="Teams ship faster when results are ranked, not guessed"
        quotes={QUOTES}
      />
    </div>
  );
}
