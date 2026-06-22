import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm closing section (get-started style): light-weight headline on deeper
 *  warm canvas, single search box mock + pill CTA. No loud gradient bands. */
export default function Close() {
  return (
    <section className="canvas-warm2 py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-light text-[2.5rem] leading-[1.03] text-foreground md:text-[4.25rem]">
            Find the KOL you've been{' '}
            <span className="accent text-gradient-brand">searching</span> for
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-md text-foreground/60">
            Describe your campaign in plain words. Kolio returns proof-scored,
            relevance-ranked crypto KOLs — free to explore, no wallet required.
          </p>

          <Link
            to="/influencer-database"
            className="mx-auto mt-10 flex w-full max-w-md items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm transition hover:shadow-float"
          >
            <span className="flex-1 text-left text-body text-foreground/40">
              e.g. Solana memecoin KOLs, EN audience…
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-semibold text-white">
              Search <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono-tnum text-eyebrow text-foreground/45">
            <span className="rounded-pill bg-white px-3 py-1">120K+ KOLs indexed</span>
            <span className="rounded-pill bg-white px-3 py-1">38 signals each</span>
            <span className="rounded-pill bg-white px-3 py-1">Proof Score on every result</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
