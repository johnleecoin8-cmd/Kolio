import KitTestimonials, { Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    quote:
      'We start every launch in Discover. Seeing real reach and audience quality before we commit budget killed the bot-heavy accounts that used to eat our spend.',
    name: 'Alíz S.',
    role: 'Head of Growth',
    brand: 'Zenith L2',
    metrics: [
      { value: '70+', label: 'KOLs run' },
      { value: '500+', label: 'Nano voices' },
      { value: '6×', label: 'Faster shortlist' },
      { value: '0', label: 'Bot accounts funded' },
    ],
  },
  {
    quote:
      'I’ve used Kolio across two crypto projects. We polled the team on discovery tools — 17 of 23 voted it #1. The audience-quality data alone saved us from funding farmed engagement.',
    name: 'Rugile P.',
    role: 'Head of Global Partnerships',
    brand: 'Meridian Exchange',
    metrics: [
      { value: '17/23', label: 'Team vote #1' },
      { value: '2', label: 'Projects standardized' },
      { value: '94%', label: 'Avg real-audience' },
      { value: '3d', label: 'To first campaign' },
    ],
  },
];

/** Quantified, evidence-based testimonials (kit). */
export default function Testimonials() {
  return (
    <KitTestimonials
      heading="From teams who used to scroll Crypto Twitter for hours"
      quotes={QUOTES}
    />
  );
}
