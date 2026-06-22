import Container from '@/components/ui/Container';

/** Top banner: eyebrow + editorial display headline + intro on a soft neutral surface. */
export default function AcademyHero() {
  return (
    <section className="bg-gray-50 pt-14 pb-12 md:pt-20 md:pb-16">
      <Container>
        <div className="mx-auto max-w-[860px] text-center">
          <span className="eyebrow">Kolio Academy</span>
          <h1 className="display-xl mt-5 font-display text-[2.4rem] text-foreground md:text-[3.75rem]">
            Run web3 KOL marketing that{' '}
            <span className="text-gradient-brand">actually moves metrics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-body-sm font-medium text-foreground/70 md:text-[1.2rem] md:leading-relaxed">
            Everything a crypto brand, exchange, or protocol needs to find and
            vet real key opinion leaders, negotiate deals, pay on-chain with
            escrow, and attribute on-chain results, at scale. Bring web2-grade
            rigor to crypto. Jump in and get started.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <span className="chip chip-brand">KOL Marketing 101</span>
            <span className="chip chip-ink">Discovery &amp; Vetting</span>
            <span className="chip chip-onchain">On-Chain Attribution</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
