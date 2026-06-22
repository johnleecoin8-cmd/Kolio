import KitTestimonials, { type Quote } from '@/components/kit/Testimonial';
import LogoMarquee from '@/components/kit/LogoMarquee';

const TRUSTED_BY = ['Ledger', 'Phantom', 'Arbitrum', 'OKX', 'Polygon', 'dYdX', 'Jupiter', 'Pendle'];

const QUOTES: Quote[] = [
  {
    brand: 'Ledger',
    quote:
      'We used to vet TikTok KOLs off screenshots and gut feel. Kolio gave us real reach and bot data on every creator — campaign ROI doubled in a quarter.',
    name: 'Rugile Paleviciute',
    role: 'Head of Growth',
    metrics: [
      { value: '2.1x', label: 'ROI' },
      { value: '−63%', label: 'bot spend' },
      { value: '14d', label: 'to live' },
      { value: '38', label: 'KOLs run' },
    ],
  },
  {
    brand: 'Phantom',
    quote:
      'First KOL tool that actually understands crypto — niche filters, audience quality, and on-chain payouts in one place. Nothing else came close on TikTok.',
    name: 'Ayme Mendes Da Costa',
    role: 'KOL Marketing Manager',
    metrics: [
      { value: '+47%', label: 'install lift' },
      { value: '4.9%', label: 'avg ER' },
      { value: '0', label: 'invoice chase' },
      { value: '120', label: 'creators' },
    ],
  },
  {
    brand: 'Arbitrum',
    quote:
      'Escrow and attribution changed everything. We finally know which KOLs drove actual deposits — not just impressions. Core to our launch playbook now.',
    name: 'Laura Garsdal',
    role: 'Ecosystem Lead',
    metrics: [
      { value: '$1.4M', label: 'attributed TVL' },
      { value: '31%', label: 'click→deposit' },
      { value: '9', label: 'campaigns' },
      { value: '100%', label: 'on-chain paid' },
    ],
  },
  {
    brand: 'OKX',
    quote:
      'For large micro-KOL campaigns across regions, Kolio is unmatched. The data pool let us shortlist hundreds of verified creators with the right audience in days.',
    name: 'Maris Niilus',
    role: 'Campaign Specialist',
    metrics: [
      { value: '430+', label: 'verified KOLs' },
      { value: '6', label: 'regions' },
      { value: '3d', label: 'to shortlist' },
      { value: '92', label: 'avg score' },
    ],
  },
];

/** Trusted-by marquee + quantified, evidence-based testimonials (kit). */
export default function Testimonials() {
  return (
    <>
      <LogoMarquee names={TRUSTED_BY} />
      <KitTestimonials heading="What crypto teams ship with Kolio" quotes={QUOTES} />
    </>
  );
}
