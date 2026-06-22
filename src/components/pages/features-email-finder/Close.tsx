import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing CTA reusing the shared hero panel language. */
export default function Close() {
  return (
    <HeroPanel
      eyebrow="Email finder + outreach"
      title={
        <>
          Stop chasing DMs. Start <span className="text-gradient-brand">closing</span>.
        </>
      }
      subtitle="Pull verified contacts, send proof-based outreach, and settle in escrow — all from one place."
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
  );
}
