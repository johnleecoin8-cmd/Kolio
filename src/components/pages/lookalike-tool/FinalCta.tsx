import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Closing CTA — later.com-inspired warm gradient panel. */
export default function FinalCta() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl bg-gradient-brand px-6 py-16 text-center md:px-12 md:py-20">
          <div className="mx-auto flex max-w-[760px] flex-col items-center">
            <h2 className="font-display text-[2rem] leading-[1.1] text-white md:text-[2.75rem]">
              Web2-grade influencer marketing, built for crypto
            </h2>
            <p className="mt-6 max-w-[640px] text-body-md text-white/90">
              Kolio brings KOL{' '}
              <Link to="/features/influencer-discovery" className="text-white underline">
                discovery
              </Link>
              ,{' '}
              <Link to="/features/influencer-analytics" className="text-white underline">
                proof-based vetting
              </Link>
              ,{' '}
              <Link to="/features/influencer-tracking" className="text-white underline">
                attribution
              </Link>
              , and on-chain payments together — the rigor web2 brands take for
              granted, now wired for web3 campaigns.
            </p>
            <div className="mt-8">
              <ButtonLink
                to="/demo-confirmation"
                variant="primary"
                size="lg"
                className="!bg-white !text-ink hover:!opacity-90"
              >
                Get started
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
