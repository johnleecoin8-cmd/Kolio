import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing for the TikTok calculator: light-weight headline, soft warm
 *  surface, two restrained CTAs. Checking views is the start — Kolio is the
 *  full proof rail. */
export default function CalmClose() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Beyond the view count</span>
          <h2 className="display-light mt-4 text-[2.5rem] leading-[1.04] text-foreground md:text-[3.75rem]">
            Average views is where vetting <span className="text-gradient-brand">starts</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Kolio lets web3 brands discover TikTok crypto KOLs, verify real reach,
            pay through on-chain escrow, and attribute every campaign end to end.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/influencer-database"
              className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
            >
              Find crypto KOLs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo-confirmation"
              className="inline-flex items-center gap-2 rounded-pill border border-black/10 px-6 py-3.5 font-semibold text-foreground transition hover:bg-black/[0.03]"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
