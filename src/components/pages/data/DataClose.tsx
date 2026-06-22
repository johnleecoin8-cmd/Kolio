import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section for /data — light-weight headline, two pill CTAs. */
export default function DataClose() {
  return (
    <section className="canvas-warm py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.04] text-foreground md:text-[4rem]">
            See a KOL’s real numbers with <span className="accent text-gradient-brand">Kolio</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Open any profile in the index for a full proof report — reach, holders,
            and on-chain outcomes. Free to explore, no wallet connect required.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Explore the index <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-black/[0.03]"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
