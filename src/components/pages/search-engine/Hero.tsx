import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Kolio /search-engine hero — calm-premium HeroPanel framing the discovery
 *  engine: search vetted crypto KOLs, ranked by relevance you can prove. */
export default function Hero() {
  return (
    <HeroPanel
      eyebrow="The crypto KOL search engine"
      title={
        <>
          Search 120K crypto KOLs by the signals you can{' '}
          <span className="accent text-gradient-brand">trust</span>
        </>
      }
      subtitle="Type what you actually want — DeFi, real holders, English audience — and Kolio ranks vetted KOLs by relevance and Proof Score, not follower vanity."
    >
      <Link
        to="/influencer-database"
        className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
      >
        Start a search <ArrowRight className="h-4 w-4" />
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
