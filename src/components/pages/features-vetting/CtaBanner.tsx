import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing — HeroPanel-style CTA, no loud gradient band. */
export default function CtaBanner() {
  return (
    <HeroPanel
      eyebrow="Vet before you wire a dollar"
      title={<>Book crypto KOLs on <span className="text-gradient-brand">proof</span>, not promises</>}
      subtitle="Run every creator through True Reach and the Proof Score in seconds. Free to explore — no wallet connect required."
    >
      <Link to="/influencer-database" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
        Vet a KOL free <ArrowRight className="h-4 w-4" />
      </Link>
      <Link to="/demo-confirmation" className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
        Book a demo
      </Link>
    </HeroPanel>
  );
}
