import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroPanel from '@/components/kit/HeroPanel';

/** Calm closing: a HeroPanel-style dark focal panel with a light-weight headline and
 *  two restrained CTAs — replaces the old loud uppercase pink banner. */
export default function EndCta() {
  return (
    <div className="canvas-warm2 pb-10 pt-4 md:pb-16">
      <HeroPanel
        eyebrow="14-day free trial · no card required"
        title={
          <>
            The proof layer for crypto KOL marketing, in one{' '}
            <span className="text-gradient-brand">rail</span>
          </>
        }
        subtitle="Proof-based vetting, on-chain escrow, and real attribution — without stitching three tools and a spreadsheet together."
      >
        <Link
          to="/demo-confirmation"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Try Kolio free <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>
    </div>
  );
}
