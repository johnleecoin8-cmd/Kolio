import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section for the fitness discovery page — light-weight headline,
 *  generous whitespace, two restrained CTAs. No loud gradient bands. */
export default function FitnessClose() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Start your search</span>
          <h2 className="display-light mt-3 text-[2.5rem] leading-[1.02] text-foreground md:text-[4rem]">
            Find fitness KOLs you can{' '}
            <span className="accent text-gradient-brand">trust</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Browse vetted fitness creators, check their Proof Score, and book a
            campaign with on-chain escrow. No long-term contracts, no guesswork.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
            >
              Browse fitness KOLs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-foreground/5"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
