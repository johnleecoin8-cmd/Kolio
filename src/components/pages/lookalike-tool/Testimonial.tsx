import Testimonials, { type Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    quote:
      'We used to source KOLs from Telegram group chats and hope the reach was real. Lookalikes let us clone our one winning creator into a full slate — every match vetted on proof, not follower count.',
    name: 'Lena Kim',
    role: 'Head of Growth',
    brand: 'Helix Exchange',
    metrics: [
      { value: '5×', label: 'Faster sourcing' },
      { value: '+38%', label: 'Verified reach' },
      { value: '0.9%', label: 'Bot rate' },
      { value: '12', label: 'New KOLs / mo' },
    ],
  },
  {
    quote:
      'One seed creator surfaced ten lookalikes with the same wallet-level audience. Our cost per qualified KOL dropped by more than half, and attribution finally tied spend to on-chain conversions.',
    name: 'Marcus Vey',
    role: 'Growth Lead',
    brand: 'Aether Protocol',
    metrics: [
      { value: '-54%', label: 'Cost / KOL' },
      { value: '94%', label: 'Audience overlap' },
      { value: '3.1×', label: 'ROAS' },
      { value: '210K', label: 'Net new reach' },
    ],
  },
];

/** Quantified, proof-based testimonials (kit) — replaces the monogram-blob card. */
export default function Testimonial() {
  return (
    <Testimonials
      heading="Teams that clone their best KOL, not their luck"
      quotes={QUOTES}
    />
  );
}
