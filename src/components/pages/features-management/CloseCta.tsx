import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section — light-weight headline + single pill CTA. */
export default function CloseCta() {
  return (
    <section className="canvas-warm py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4.5rem]">
            Run every deal in{' '}
            <span className="accent text-gradient-brand">one place</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Bring your crypto KOL collaborations onto a single calm rail —
            briefs, proof and escrow, start to settled.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Start managing KOLs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-canvas-warm2"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
