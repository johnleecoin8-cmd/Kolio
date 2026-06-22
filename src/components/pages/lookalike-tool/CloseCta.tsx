import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section — light-weight headline + two restrained CTAs. */
export default function CloseCta() {
  return (
    <section className="canvas-warm2 py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4.5rem]">
            Clone your best <span className="text-gradient-brand">performer</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Start from one creator who already delivered, and let Kolio build the
            shortlist. Every match arrives with a Proof Score, no wallet connect
            required.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Find lookalikes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-white/70"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
