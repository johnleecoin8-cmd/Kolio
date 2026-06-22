import Hero from '@/components/pages/features-email-finder/Hero';
import DataFeature from '@/components/pages/features-email-finder/DataFeature';
import OutreachSteps from '@/components/pages/features-email-finder/OutreachSteps';
import OutreachPanel from '@/components/pages/features-email-finder/OutreachPanel';
import FeatureRow from '@/components/pages/features-email-finder/FeatureRow';
import {
  BulkEmailMockup,
  FilterMockup,
  InboxMockup,
} from '@/components/pages/features-email-finder/Mockups';
import Faq from '@/components/pages/features-email-finder/Faq';
import CtaBanner from '@/components/pages/features-email-finder/CtaBanner';
import Testimonials, { Quote } from '@/components/kit/Testimonial';

const QUOTES: Quote[] = [
  {
    quote:
      'We pulled vetted contacts and ran outreach in an afternoon instead of a week of DM chasing. The fake-follower filter alone saved us from two dead-on-arrival deals.',
    name: 'Mara Velez',
    role: 'Head of Growth',
    brand: 'Helix Protocol',
    metrics: [
      { value: '3.4x', label: 'Reply rate' },
      { value: '−71%', label: 'Sourcing time' },
      { value: '38', label: 'KOLs live' },
      { value: '0', label: 'Off-platform wires' },
    ],
  },
  {
    quote:
      'Escrow inside the same thread as the contact changed how KOLs treat us — terms get agreed faster and payouts release on proof, not on trust.',
    name: 'Devin Okoro',
    role: 'Marketing Lead',
    brand: 'Northwind Exchange',
    metrics: [
      { value: '12d', label: 'Avg. close' },
      { value: '100%', label: 'On-chain settled' },
      { value: '2.1%', label: 'Disputes' },
      { value: '$0', label: 'Chargebacks' },
    ],
  },
];

export default function FeaturesEmailFinder() {
  return (
    <main>
      <Hero />

      <DataFeature />

      {/* light neutral spine: the four-step outreach workflow */}
      <OutreachSteps />

      <FeatureRow
        reverse
        eyebrow="Bulk outreach"
        heading="Reach crypto KOLs in bulk"
        visual={<BulkEmailMockup />}
      >
        <p>
          Cut the repetitive work and keep every message feeling 1:1 at scale
          using variables for handle, project, and chain.
        </p>
        <p className="mt-5">
          Use it for outreach, onboarding KOLs, sharing campaign briefs, sending
          tracking links, or any other crypto creator communication.
        </p>
      </FeatureRow>

      <FeatureRow
        eyebrow="Discovery filters"
        heading="Filter 12M+ crypto KOL profiles"
        visual={<FilterMockup />}
      >
        <p>
          Speed up discovery by showing only KOLs with public contacts and
          recent on-chain activity — across DeFi, NFTs, L1/L2, trading, and
          gaming niches.
        </p>
        <p className="mt-5">
          Then narrow by audience and performance: wallet-active followers, a
          target country, or a range of average views.
        </p>
      </FeatureRow>

      {/* dark on-chain punctuation: contact → escrow */}
      <OutreachPanel />

      <FeatureRow
        reverse
        eyebrow="Deal inbox"
        heading="Run every deal from one inbox"
        visual={<InboxMockup />}
      >
        <p>
          See only your KOL conversations, then sort them by deal stage — from
          first reply to escrow to live campaign — so nothing slips and you
          spend less time context switching.
        </p>
      </FeatureRow>

      <Testimonials
        heading="Teams that stopped guessing at outreach"
        quotes={QUOTES}
      />

      <Faq />

      <CtaBanner />
    </main>
  );
}
