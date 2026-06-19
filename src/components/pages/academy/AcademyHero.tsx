import Container from '@/components/ui/Container';

/** Top banner: bold display headline with one gradient-highlighted word + intro. */
export default function AcademyHero() {
  return (
    <section className="bg-violet-light pt-12 pb-10 md:pt-16 md:pb-12">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h1 className="font-display text-[2.25rem] font-bold leading-[1.05] tracking-tight text-foreground md:text-[3.5rem]">
            The Kolio Academy for{' '}
            <span className="text-gradient-brand">web3</span> KOL marketing
          </h1>
          <p className="mx-auto mt-5 max-w-[700px] text-body-sm font-semibold text-foreground/85 md:text-[1.25rem] md:leading-relaxed">
            Everything a crypto brand, exchange, or protocol needs to run KOL
            campaigns that actually move metrics. From finding and vetting real
            key opinion leaders, to negotiating deals, paying on-chain with escrow,
            and attributing on-chain results, at scale. Bring web2-grade rigor to
            crypto. Jump in and get started.
          </p>
        </div>
      </Container>
    </section>
  );
}
