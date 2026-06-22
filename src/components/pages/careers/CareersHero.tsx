import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Careers hero — shared calm-premium HeroPanel, light-weight display headline. */
export default function CareersHero() {
  return (
    <HeroPanel
      eyebrow="Careers at Kolio"
      title={<>Build the proof layer crypto marketing can <span className="accent text-gradient-brand">trust</span></>}
      subtitle="We are a small, on-chain-native team making KOL campaigns measurable, escrowed, and honest. Help us turn opaque influencer spend into outcomes you can verify."
    >
      <a href="#open-roles" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
        See open roles <ArrowRight className="h-4 w-4" />
      </a>
      <Link to="/demo-confirmation" className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
        Meet the team
      </Link>
    </HeroPanel>
  );
}
