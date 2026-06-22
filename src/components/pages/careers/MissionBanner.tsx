import Container from '@/components/ui/Container';
import StatTrio from '@/components/kit/StatTrio';

/** Why we exist — calm warm section: light-weight headline + restrained copy,
 *  closed with three shared count-up stats. No loud full-bleed gradient band. */
export default function MissionBanner() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 justify-center">Why we exist</p>
          <h2 className="display-light text-[2.25rem] leading-[1.05] text-foreground md:text-[3.5rem]">
            Crypto runs on influence. The marketing around it is still <span className="accent text-gradient-brand">guesswork</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-md text-foreground/65">
            Inflated follower counts, no attribution, payouts on a handshake. Kolio
            brings the rigor of mature creator platforms to web3 &mdash; so every
            campaign with a KOL is measurable, verifiable, and worth the spend. The
            standard we build into the product is the standard we hire for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono-tnum text-body-sm text-foreground/45">
            <span>verify_reach()</span>
            <span className="text-foreground/25">&middot;</span>
            <span>escrow.lock(USDC)</span>
            <span className="text-foreground/25">&middot;</span>
            <span>attribution.onchain()</span>
          </div>
        </div>
      </Container>

      <StatTrio
        stats={[
          { value: 120, suffix: 'K+', label: 'Crypto KOLs profiled' },
          { value: 40, suffix: '+', label: 'Web3 niches covered' },
          { value: 100, suffix: '%', label: 'Payouts settled on-chain' },
        ]}
        source="Kolio index, June 2026 — every figure traceable to a source."
      />
    </section>
  );
}
