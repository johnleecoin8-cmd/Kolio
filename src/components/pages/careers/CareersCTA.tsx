import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing CTA — HeroPanel-style focal close, not a stack of loud bands. */
export default function CareersCTA() {
  return (
    <HeroPanel
      eyebrow="Don't see your role?"
      title={<>Come help define the <span className="accent text-gradient-brand">category</span>, not join one</>}
      subtitle="We hire for judgment and ownership. If you want to build the verification layer for crypto influence, tell us where you'd make Kolio better."
    >
      <a href="#open-roles" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
        Browse open roles <ArrowRight className="h-4 w-4" />
      </a>
      <Link to="/demo-confirmation" className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
        Introduce yourself
      </Link>
    </HeroPanel>
  );
}
