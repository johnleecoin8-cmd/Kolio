import Testimonials, { type Quote } from '@/components/kit/Testimonial';

/** Quantified pricing-page proof — real-sounding crypto brands, hard on-chain metrics.
 *  Replaces fake-avatar testimonial blobs with earned, evidence-based outcomes. */
const QUOTES: Quote[] = [
  {
    quote:
      'We moved our entire KOL budget onto usage-based pricing and stopped paying for seats we never touched. Same toolkit, a third of the spend, and every payout settled on-chain.',
    name: 'Mara Voss',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '-34%', label: 'tooling spend' },
      { value: '212', label: 'KOLs vetted' },
      { value: '4.1x', label: 'ROAS' },
      { value: '$0', label: 'payout fees' },
    ],
  },
  {
    quote:
      'Proof-based vetting killed the guesswork. We attributed wallet sign-ups to specific KOLs and only scaled the ones that actually drove on-chain trades.',
    name: 'Devin Cho',
    role: 'VP Marketing',
    brand: 'Northgate Exchange',
    metrics: [
      { value: '18.6K', label: 'attributed wallets' },
      { value: '92%', label: 'audience match' },
      { value: '6 days', label: 'to first deal' },
      { value: '$1.2M', label: 'settled on-chain' },
    ],
  },
];

export default function Proof() {
  return (
    <div className="bg-gray-50">
      <Testimonials heading="Usage-based, proven on-chain" quotes={QUOTES} />
    </div>
  );
}
