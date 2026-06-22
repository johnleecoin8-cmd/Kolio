import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing CTA — reuses the shared hero panel language as a focal close,
 *  inviting learners to put the lessons to work inside Kolio. */
export default function AcademyClose() {
  return (
    <HeroPanel
      eyebrow="Ready when you are"
      title={
        <>
          Put the lessons to work and run a{' '}
          <span className="accent text-gradient-brand">proof-based</span> campaign
        </>
      }
      subtitle="Free to explore, no wallet connect required. Bring a shortlist or start from a single search — every step you just learned is built into the product."
    >
      <Link
        to="/influencer-database"
        className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
      >
        Find KOLs <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        to="/demo-confirmation"
        className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
      >
        Book a demo
      </Link>
    </HeroPanel>
  );
}
