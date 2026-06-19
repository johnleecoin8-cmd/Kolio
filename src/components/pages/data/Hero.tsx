import Container from '@/components/ui/Container';

/** Data hero — "Our Data" eyebrow, big title with one highlighted word. */
export default function Hero() {
  return (
    <section className="bg-background pt-12 md:pt-16">
      <Container>
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <div className="mb-5 text-body-sm font-bold text-foreground/55">
            Our Data
          </div>
          <h1 className="font-display text-[3rem] uppercase leading-[0.95] text-foreground sm:text-[5rem] md:text-[7rem]">
            Web3 KOL data you can{' '}
            <span className="text-gradient-brand">prove</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-body-md text-foreground/70">
            Vanity metrics get crypto campaigns rugged. Kolio measures real
            reach, audience quality, and on-chain results across every crypto
            KOL on X, YouTube, TikTok, and Telegram.
          </p>
        </div>
      </Container>

      <div className="mt-10 md:mt-14">
        <div className="bg-purple-light py-10 md:py-16">
          <Container>
            <div className="mx-auto grid w-full max-w-[1136px] gap-4 sm:grid-cols-3">
              {[
                { stat: '120M+', label: 'crypto-native profiles indexed' },
                { stat: '30+', label: 'audience & reach signals per KOL' },
                { stat: '8', label: 'web3 niches, from DeFi to gaming' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-background p-8 text-center shadow-sm"
                >
                  <div className="font-display text-[2.75rem] leading-none text-gradient-brand">
                    {s.stat}
                  </div>
                  <div className="mt-3 text-body-sm text-foreground/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
