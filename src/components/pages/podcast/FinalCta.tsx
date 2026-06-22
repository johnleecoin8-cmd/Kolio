import Container from '@/components/ui/Container';
import LogoMarquee from '@/components/kit/LogoMarquee';

const BRANDS = [
  'Ledger',
  'Phantom',
  'Arbitrum',
  'OKX',
  'Polygon',
  'Sui',
  'Magic Eden',
  'Bitpanda',
];

export default function FinalCta() {
  return (
    <>
      <LogoMarquee
        label="Guests from the teams running crypto KOL programs"
        names={BRANDS}
      />
      <section className="bg-background py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[860px] text-center">
            <span className="eyebrow">Join the network</span>
            <h2 className="mt-3 display-lg font-display text-h4 md:text-h3 text-foreground">
              Join 1,200+ web3 brands using Kolio to find, vet, and run
              accountable crypto KOL campaigns
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href="/demo-confirmation"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-brand px-8 text-body font-semibold text-white transition hover:opacity-90"
              >
                Try for free
              </a>
            </div>
            <p className="mt-4 text-body-sm text-foreground/55">
              Try for free. No credit card required.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
