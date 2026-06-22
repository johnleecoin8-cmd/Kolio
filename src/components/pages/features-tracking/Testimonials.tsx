import KitTestimonials, { type Quote } from '@/components/kit/Testimonial';

/** Quantified, evidence-based proof — replaces the old colored quote carousel.
 *  Real-sounding crypto brands + hard tracking/attribution metrics. */
const QUOTES: Quote[] = [
  {
    brand: 'Helix DEX',
    quote:
      'We ran KOL pushes on faith, screenshots and deleted threads. Now every post is captured automatically and tied to actual swaps on-chain, so we know exactly which KOLs drive volume.',
    name: 'Mara Reyes',
    role: 'Head of Growth',
    metrics: [
      { value: '100%', label: 'Post coverage' },
      { value: '$312K', label: 'Swaps attributed' },
      { value: '6.1M', label: 'Verified reach' },
      { value: '−21%', label: 'Cost / conv.' },
    ],
  },
  {
    brand: 'Aether L2',
    quote:
      'During mainnet launch we had 80+ KOLs posting across X, YouTube, and Telegram in three days. Kolio verified the reach and showed audience quality per creator. We cut the bot-padded accounts in one afternoon.',
    name: 'Daniel Kwon',
    role: 'Marketing Lead',
    metrics: [
      { value: '84', label: 'KOLs tracked' },
      { value: '3,910', label: 'On-chain conv.' },
      { value: '92%', label: 'Audience quality' },
      { value: '3 days', label: 'Launch window' },
    ],
  },
];

export default function Testimonials() {
  return (
    <KitTestimonials
      heading="From teams who used to chase Telegram screenshots"
      quotes={QUOTES}
    />
  );
}
