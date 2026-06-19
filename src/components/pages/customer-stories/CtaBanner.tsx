import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Closing CTA banner on a light-violet block. */
export default function CtaBanner() {
  return (
    <section className="bg-violet-light">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <h2 className="font-display text-h4 leading-tight text-violet-dark md:text-h3">
            Want to be as prolific as NordVPN is with influencer marketing?
          </h2>
          <div className="md:justify-self-end md:text-right">
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ButtonA href="#" variant="primary" className="uppercase tracking-wide">
                Try for free
              </ButtonA>
              <ButtonA href="#" variant="secondary" className="uppercase tracking-wide">
                Talk to sales
              </ButtonA>
            </div>
            <p className="mt-3 text-body-sm text-foreground/60">
              14-day free trial&middot;No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
