import Container from '@/components/ui/Container';

const TRUSTED = ['Ledger', 'Arbitrum', 'OKX', 'Phantom', 'Polygon', 'Base'];

/** Full-width brand band: "Use Kolio to vet KOLs & their audiences" + trusted-by text row. */
export default function AnalyzeBlock() {
  return (
    <section className="bg-background py-8">
      <Container>
        <div className="box-border flex w-full flex-col items-center justify-center rounded-xl bg-pink px-4 py-8 md:py-16">
          <div className="flex w-full flex-col items-center justify-start gap-6 lg:max-w-[60rem]">
            <h2 className="text-center font-display text-[2.5rem] font-normal leading-tight text-ink lg:text-[4rem]">
              Use Kolio to vet crypto KOLs &amp; their audiences
            </h2>
            <p className="w-full text-center text-body-md leading-snug text-ink lg:max-w-[35rem]">
              Inside Kolio, you get proof-based analysis of any crypto KOL:
              real engagement, audience authenticity, bot-and-bought-follower
              detection, niche fit across DeFi, NFTs, L1/L2, trading and
              gaming — plus on-chain payment and escrow when you book them.
            </p>
            <a
              href="/demo-confirmation"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
            >
              Book a demo
            </a>

            {/* Trusted-by web3 brand text row */}
            <div className="mt-4 flex w-full flex-col items-center gap-3">
              <p className="text-eyebrow font-semibold uppercase tracking-wide text-ink/60">
                Trusted by teams across web3
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {TRUSTED.map((name) => (
                  <span
                    key={name}
                    className="font-display text-lg font-semibold text-ink/70"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
