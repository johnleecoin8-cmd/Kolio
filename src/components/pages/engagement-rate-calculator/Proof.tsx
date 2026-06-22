import Testimonials, { Quote } from '@/components/kit/Testimonial';

/** Quantified proof for the engagement-rate calculator: real-sounding crypto
 *  brands + hard metrics earned by checking engagement before spending. */
const QUOTES: Quote[] = [
  {
    quote:
      'Kolio flagged two KOLs whose follower counts looked huge but whose real engagement was under 0.4%. We cut them, reallocated the budget, and the listing campaign actually moved volume.',
    name: 'Maya Aronov',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '−38%', label: 'wasted spend' },
      { value: '3.1x', label: 'qualified reach' },
      { value: '0.4%', label: 'bot ER caught' },
      { value: '11', label: 'KOLs vetted' },
    ],
  },
  {
    quote:
      'Before Kolio we paid on promises. Now every KOL ships against a real engagement-rate baseline, payment sits in USDC escrow, and we only release on delivery. The numbers finally tie out.',
    name: 'Daniel Osei',
    role: 'Marketing Lead',
    brand: 'Northwind Exchange',
    metrics: [
      { value: '4.8%', label: 'avg real ER' },
      { value: '100%', label: 'escrowed in USDC' },
      { value: '2 mo', label: 'data per KOL' },
      { value: '0', label: 'disputed payouts' },
    ],
  },
];

export default function Proof() {
  return (
    <Testimonials
      heading="What teams found before they funded a campaign"
      quotes={QUOTES}
    />
  );
}
