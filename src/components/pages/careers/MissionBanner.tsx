import Container from '@/components/ui/Container';

/** Mission statement on a dark on-chain terminal panel — the one dark punctuation of the page. */
export default function MissionBanner() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="surface-onchain glow-brand relative overflow-hidden rounded-2xl px-6 py-16 md:px-16 md:py-24">
          <div className="relative mx-auto flex max-w-[860px] flex-col items-center text-center">
            <span className="chip chip-onchain mb-7">Why we exist</span>

            <h2 className="display-xl font-display uppercase leading-[0.9] text-[3rem] sm:text-[4.5rem] md:text-[6rem]">
              <span className="text-gradient-brand">Kolio</span> Mission
            </h2>

            <p className="mx-auto mt-8 max-w-[720px] text-body-lg font-semibold leading-snug text-white/90 md:mt-10">
              Crypto runs on influence, but the marketing around it is still
              guesswork. Inflated follower counts, no attribution, payments on a
              handshake. We&rsquo;re here to fix that &mdash; bringing the rigor of
              mature web2 creator platforms to web3, so every campaign with a KOL
              is measurable, verifiable, and worth the spend.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 font-mono-tnum text-body-sm text-white/55">
              <span>verify_reach()</span>
              <span className="text-white/25">·</span>
              <span>escrow.lock(USDC)</span>
              <span className="text-white/25">·</span>
              <span>attribution.onchain()</span>
            </div>

            <a
              href="#open-roles"
              className="mt-10 inline-flex h-11 items-center justify-center rounded-sm bg-white px-5 text-body font-semibold text-ink shadow-btn transition hover:opacity-90"
            >
              Join us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
