import Testimonials, { Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    quote:
      'Half the accounts we used to pay turned out to be bots. Kolio caught the farmed reach before a dollar left escrow — our cost per real sign-up dropped by two thirds in one launch.',
    name: 'Regina Kacajeva',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '-67%', label: 'Cost / sign-up' },
      { value: '3.1x', label: 'Verified reach' },
      { value: '0', label: 'Bot payouts' },
      { value: '11 days', label: 'Brief to live' },
    ],
  },
  {
    quote:
      'The escrow paid for itself. Funds release on delivery, KOLs trust the process, and I finally have on-chain attribution I can take to the team without hand-waving.',
    name: 'Rugile Paleviciute',
    role: 'Head of Partnerships',
    brand: 'Aster Exchange',
    metrics: [
      { value: '$2.4M', label: 'Settled in escrow' },
      { value: '42', label: 'KOLs run' },
      { value: '4.8x', label: 'Tracked ROAS' },
      { value: '100%', label: 'On-time payout' },
    ],
  },
];

/** Homepage proof: two quantified, brand-attributed testimonials. */
export default function HomeTestimonials() {
  return (
    <Testimonials
      heading="Outcomes web3 teams could take to their board"
      quotes={QUOTES}
    />
  );
}
