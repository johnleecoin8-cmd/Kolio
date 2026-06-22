import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm close: light-weight headline + two pill CTAs on a soft warm base. */
export default function CloseCta() {
  return (
    <section className="canvas-warm py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.03] text-foreground md:text-[4rem]">
            Stop guessing.{' '}
            <span className="text-gradient-brand">Start proving.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            The calculator is the free first look. Kolio takes it the rest of the
            way — vetted KOLs, on-chain audience proof, and escrowed payouts on one
            rail.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
            >
              Find crypto KOLs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/15 px-6 py-3.5 font-semibold text-foreground transition hover:bg-black/[0.04]"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
