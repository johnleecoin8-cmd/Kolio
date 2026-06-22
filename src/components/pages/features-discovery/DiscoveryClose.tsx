import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing CTA — light-weight headline, single pill action, no loud bands. */
export default function DiscoveryClose() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Start with discovery</span>
          <h2 className="display-light mt-4 text-[2.5rem] leading-[1.02] text-foreground md:text-[4.25rem]">
            Find your next KOL with <span className="accent text-gradient-brand">Kolio</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Browse the scored index free. No wallet connect required until you fund a deal.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Explore the index <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-coral-bg"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
