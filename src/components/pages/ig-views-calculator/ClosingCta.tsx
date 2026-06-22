import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm get-started close: light-weight headline on deeper warm canvas, two
 *  restrained CTAs. Checking reach is the start — Kolio runs the whole deal. */
export default function ClosingCta() {
  return (
    <section className="canvas-warm2 py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">From check to settled payout</span>
          <h2 className="display-light mt-4 text-[2.5rem] leading-[1.03] text-foreground md:text-[4rem]">
            Checking reach is just the start of vetting a{' '}
            <span className="text-gradient-brand">KOL</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Discover crypto KOLs, verify their audiences, pay them on-chain through escrow,
            and attribute every campaign end-to-end — on one rail.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Find crypto KOLs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-gray-50"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
