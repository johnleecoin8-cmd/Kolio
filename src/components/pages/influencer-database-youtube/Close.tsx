import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm get-started close for the YouTube KOL database page. */
export default function Close() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.25rem] leading-[1.04] text-foreground md:text-[3.5rem]">
            Find your next YouTube KOL <span className="text-gradient-brand">today</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Search the live creator graph, read the proof, and book in escrow — no
            wallet connect needed to explore.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
            >
              Browse YouTube KOLs <ArrowRight className="h-4 w-4" />
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
