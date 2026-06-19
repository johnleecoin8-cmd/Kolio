import Container from '@/components/ui/Container';

/** Giant "KOLIO MISSION" wordmark + mission statement + Join us CTA. */
export default function MissionBanner() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display uppercase leading-[0.9] text-foreground text-[3rem] sm:text-[5rem] md:text-[7rem]">
            <span className="text-gradient-brand">Kolio</span>
            <br />
            Mission
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-body-lg font-semibold leading-snug text-foreground md:mt-10">
            Crypto runs on influence, but the marketing around it is still
            guesswork. Inflated follower counts, no attribution, payments on a
            handshake. We&rsquo;re here to fix that &mdash; bringing the rigor of
            mature web2 creator platforms to web3, so every campaign with a KOL is
            measurable, verifiable, and worth the spend.
          </p>

          <a
            href="#open-roles"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Join us
          </a>
        </div>
      </Container>
    </section>
  );
}
