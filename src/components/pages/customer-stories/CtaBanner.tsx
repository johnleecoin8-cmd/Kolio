import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing moment — light-weight headline + pill CTAs on a deeper warm
 *  surface. No loud gradient band; the page lands softly. */
export default function CtaBanner() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Your record, next</span>
          <h2 className="display-light mt-4 text-[2.5rem] leading-[1.03] text-foreground md:text-[4rem]">
            Write a case file you can <span className="text-gradient-brand">prove</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Discover vetted crypto KOLs, fund escrow in USDC, and let on-chain
            attribution settle the result. Start free — no wallet connect required.
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
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 bg-white px-6 py-3.5 font-semibold text-foreground transition hover:bg-white/70"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
