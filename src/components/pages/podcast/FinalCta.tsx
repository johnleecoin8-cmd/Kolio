import Container from '@/components/ui/Container';

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
    <section className="bg-[#d6daff] py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((name) => (
            <span
              key={name}
              className="text-body md:text-body-md font-bold uppercase tracking-wide text-navy/70"
            >
              {name}
            </span>
          ))}
        </div>
        <h2 className="mx-auto mt-12 max-w-[860px] text-center font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
          Join 1,200+ web3 brands using Kolio to find, vet, and run
          accountable crypto KOL campaigns
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="/demo-confirmation"
            className="inline-flex items-center justify-center h-12 px-7 rounded-sm bg-blue text-white text-body font-semibold uppercase tracking-wide transition hover:opacity-90"
          >
            Try for free
          </a>
        </div>
        <p className="mt-4 text-center text-body-sm text-foreground/60">
          Try for free. No credit card required.
        </p>
      </Container>
    </section>
  );
}
