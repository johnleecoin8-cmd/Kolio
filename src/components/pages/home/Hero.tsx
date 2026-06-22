import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import FlowingArt from './FlowingArt';

/** Kolio hero — calm-premium structure: soft warm canvas, big rounded dark panel
 *  with flowing art, light-weight large display headline, single pill CTA. */
export default function Hero() {
  return (
    <section className="canvas-warm px-3 pb-6 pt-3 md:px-5 md:pb-10 md:pt-4">
      <div className="hero-panel mx-auto min-h-[560px] max-w-[1320px] md:min-h-[640px]">
        <FlowingArt />
        {/* readability veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-ink/30 via-hero-ink/10 to-hero-ink/60" />
        <Container>
          <div className="relative flex min-h-[560px] flex-col items-center justify-center px-4 py-24 text-center md:min-h-[640px]">
            <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-body-sm font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-pill bg-brand-coral" /> The proof layer for crypto KOL marketing
            </span>
            <h1 className="display-light max-w-[18ch] text-[2.75rem] leading-[1.02] text-hero-text sm:text-6xl md:text-[5rem]">
              Run crypto KOL campaigns you can <span className="accent text-gradient-brand">prove</span>
            </h1>
            <p className="mt-6 max-w-xl text-body-md text-white/70">
              Discover vetted KOLs, see real on-chain reach, and pay in escrow. One rail from first contact to settled payout.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/influencer-database" className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90">
                Find crypto KOLs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo-confirmation" className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Book a demo
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
