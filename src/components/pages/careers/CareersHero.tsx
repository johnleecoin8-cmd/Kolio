import Container from '@/components/ui/Container';

/** Careers hero — centered big headline with one gradient-highlighted word, subtitle, dual CTA. */
export default function CareersHero() {
  return (
    <section className="bg-background pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">
            Careers
          </p>
          <h1 className="font-display uppercase leading-[0.95] text-foreground text-[2.75rem] sm:text-[4rem] md:text-[5rem]">
            Build the future of
            <br />
            <span className="text-gradient-brand">web3</span> marketing
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-body-md text-foreground/70">
            Help us bring web2-grade rigor to crypto influence. We&rsquo;re
            building the platform that brands, exchanges, and protocols trust to
            find, vet, and run campaigns with crypto KOLs.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#open-roles"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-ink px-[1.125rem] text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              View open roles
            </a>
            <a
              href="/demo-confirmation"
              className="inline-flex h-10 items-center justify-center rounded-sm border border-gray-300 bg-white px-[1.125rem] text-body font-semibold text-gray-700 shadow-btn transition hover:bg-gray-50"
            >
              See Kolio in action
            </a>
          </div>
        </div>
      </Container>

      {/* full-width stat band — later.com-inspired big stat callouts on a warm gradient panel */}
      <div className="mx-auto mt-10 w-full max-w-[1376px] px-4 sm:px-6 md:mt-14">
        <div className="bg-gradient-brand rounded-xl px-6 py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { n: '120K+', l: 'Crypto KOLs profiled' },
              { n: '4', l: 'Platforms tracked' },
              { n: '40+', l: 'Web3 niches covered' },
              { n: 'On-chain', l: 'Escrow & payouts' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="font-display text-h3 leading-none md:text-h2">
                  {n}
                </div>
                <div className="mt-2 text-body-sm text-white/80">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
