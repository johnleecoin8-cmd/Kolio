import Container from '@/components/ui/Container';

/** Data hero — refined eyebrow + editorial display heading on soft neutral. */
export default function Hero() {
  return (
    <section className="bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-16">
      <Container>
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <span className="eyebrow">Our Data</span>
          <h1 className="mt-5 display-xl font-display text-[3rem] uppercase text-foreground sm:text-[4.75rem] md:text-[6.5rem]">
            Web3 KOL data you can{' '}
            <span className="text-gradient-brand">prove</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/70">
            Vanity metrics get crypto campaigns rugged. Kolio measures real
            reach, audience quality, and on-chain results across every crypto
            KOL on X, YouTube, TikTok, and Telegram.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <span className="chip chip-brand">120M+ profiles indexed</span>
            <span className="chip chip-onchain">On-chain verified</span>
            <span className="chip chip-ink">8 web3 niches</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
