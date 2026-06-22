import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm get-started style close for the content library. */
export default function LibraryClose() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">Your turn</span>
          <h2 className="display-light mt-3 text-[2.5rem] leading-[1.03] text-foreground md:text-[4rem]">
            Brief a KOL, ship proof you can <span className="text-gradient-brand">show</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Pick a creator from the library, fund escrow, and get every post back with its real numbers attached.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
            >
              Browse the library <ArrowRight className="h-4 w-4" />
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
