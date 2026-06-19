import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Closing CTA banner on a warm brand-gradient panel. */
export default function CtaBanner() {
  return (
    <section className="bg-violet-light">
      <Container className="py-16 md:py-20">
        <div className="rounded-2xl bg-gradient-brand px-8 py-12 text-white md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <h2 className="font-display text-h4 leading-tight md:text-h3">
              Want to run crypto KOL campaigns as cleanly as Arbiscan?
            </h2>
            <div className="md:justify-self-end md:text-right">
              <div className="flex flex-wrap gap-3 md:justify-end">
                <ButtonLink
                  to="/demo-confirmation"
                  variant="primary"
                  className="uppercase tracking-wide"
                >
                  Start free
                </ButtonLink>
                <ButtonLink
                  to="/demo-confirmation"
                  variant="secondary"
                  className="uppercase tracking-wide"
                >
                  Talk to sales
                </ButtonLink>
              </div>
              <p className="mt-3 text-body-sm text-white/80">
                Free to explore&middot;No card, no wallet connect required
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
