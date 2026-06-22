import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing CTA for the tracking page — light-weight headline, two pills. */
export default function TrackingClose() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.02] text-foreground md:text-[4rem]">
            See what your KOLs <span className="text-gradient-brand">actually</span> drove
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Connect a campaign and watch every swap and mint resolve to a wallet — measured
            against your baseline, settled in escrow.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Start tracking <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-black/5"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
