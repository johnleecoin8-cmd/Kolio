import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Lavender CTA banner at page bottom. */
export default function HelpCta() {
  return (
    <section className="bg-violet-light py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[1.75rem] font-normal leading-tight text-violet-dark md:text-h3">
            Looking for help using Modash?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-body-sm text-foreground/90 md:text-body">
            We know a thing or two about influencer marketing. Ask us for help:{' '}
            <a href="mailto:hello@modash.io" className="font-semibold underline">
              hello@modash.io
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
              size="lg"
              className="uppercase tracking-wide"
            >
              Start Using Modash
            </ButtonA>
          </div>
          <p className="mt-8 text-body-sm text-foreground/80">
            Got a suggestion for the Academy lesson?&nbsp;{' '}
            <a href="mailto:hello@modash.io" className="font-semibold underline">
              Let us know
            </a>
          </p>
          <p className="mt-1 text-body-sm text-foreground/80">
            Need more help? Want to report a bug?{' '}
            <a href="mailto:hello@modash.io" className="font-semibold underline">
              Contact support
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
