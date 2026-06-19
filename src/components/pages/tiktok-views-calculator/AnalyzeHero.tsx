import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Web3 brands that vet KOLs on Kolio — rendered as a tasteful text row
 *  (no third-party logos), borrowing later.com's clean credibility strip. */
const TRUSTED_BY = ['Ledger', 'Arbitrum', 'Phantom', 'OKX', 'Polygon', 'Kaito'];

/** Big brand-panel feature block: "Use Kolio to vet crypto KOLs & their real audiences". */
export default function AnalyzeHero() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-20 text-ink md:px-12 md:py-28">
          <h2 className="mx-auto max-w-[15ch] text-center font-display text-[2.75rem] uppercase leading-[0.98] md:text-[6.25rem]">
            <span className="text-ink/35">Use Kolio to</span>{' '}
            <span className="text-ink">vet crypto KOLs &amp; their real audiences</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[520px] text-center text-body text-ink/80 md:text-body-md">
            Inside Kolio, you get proof-based analysis of any crypto KOL:
            verified reach, real engagement, audience quality, holder regions,
            and on-chain campaign attribution — not vanity follower counts.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA href="/demo-confirmation" variant="primary" size="md">
              Book a demo
            </ButtonA>
          </div>

          {/* later.com-style credibility strip — text names, not logos */}
          <div className="mt-14 border-t border-ink/15 pt-8">
            <p className="text-center text-eyebrow font-semibold uppercase tracking-wide text-ink/45">
              Web3 brands &amp; exchanges run their KOL programs on Kolio
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {TRUSTED_BY.map((name) => (
                <span
                  key={name}
                  className="font-display text-body-md font-semibold uppercase tracking-tight text-ink/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
