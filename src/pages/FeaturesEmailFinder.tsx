import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';
import StatTrio from '@/components/kit/StatTrio';
import OutreachUI from '@/components/pages/features-email-finder/OutreachUI';
import Steps from '@/components/pages/features-email-finder/Steps';
import Close from '@/components/pages/features-email-finder/Close';

export default function FeaturesEmailFinder() {
  return (
    <main>
      <HeroPanel
        eyebrow="Email finder + outreach"
        title={
          <>
            Find crypto KOLs you can actually <span className="text-gradient-brand">reach</span>
          </>
        }
        subtitle="Verified contacts, on-chain reach, and escrow-backed outreach — one rail from first message to settled payout."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm"
        >
          Find KOLs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      <OutreachUI />

      <StatTrio
        stats={[
          { value: 12, suffix: 'M+', label: 'Crypto KOL profiles searchable' },
          { value: 34, suffix: '%', label: 'Avg. reply rate on warm sends' },
          { value: 0, label: 'Off-platform wires required' },
        ]}
        source="Kolio aggregate, verified-contact campaigns, 2026."
      />

      <Steps />

      <Close />
    </main>
  );
}
