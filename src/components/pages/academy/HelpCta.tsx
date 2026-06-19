import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Lavender CTA banner at page bottom. */
export default function HelpCta() {
  return (
    <section className="bg-violet-bg py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[1.75rem] leading-tight text-foreground md:text-h3">
            Looking for help using Modash?
          </h2>
          <p className="mx-auto mt-4 max-w-[460px] text-body-sm text-foreground/75 md:text-body">
            We know a thing or two about influencer marketing. Ask us for help:{' '}
            <a href="mailto:hello@modash.io" className="font-semibold underline">
              hello@modash.io
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonA href="https://app.modash.io/register" variant="primary" size="lg">
              Start Using Modash
            </ButtonA>
          </div>
          <p className="mt-8 text-body-sm text-foreground/65">
            Got a suggestion for the Academy lesson?&nbsp;{' '}
            <a href="mailto:hello@modash.io" className="font-semibold underline">
              Let us know
            </a>
          </p>
          <p className="mt-1 text-body-sm text-foreground/65">
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
