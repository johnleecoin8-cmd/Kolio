import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

/** Web3 brand names rendered as styled text — no fake logo images. */
const BRANDS = ['Arbitrum', 'OKX', 'Phantom', 'Ledger', 'Kaito', 'Optimism'];

/**
 * later.com-inspired band: a big stat callout next to a clean text-only
 * "trusted by" row of plausible web3 brands. No imagery — styled names only.
 */
export default function TrustedBy() {
  return (
    <section className="bg-background pt-16 md:pt-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[auto,1fr] md:gap-16">
          {/* Stat callout */}
          <div className="text-center md:text-left">
            <div className="font-display text-[3rem] leading-none text-foreground md:text-[3.75rem]">
              <span className="text-gradient-brand">80,000+</span>
            </div>
            <p className="mt-2 max-w-[18ch] text-body-md text-foreground/60">
              crypto KOLs vetted by teams that ship serious launches
            </p>
          </div>

          {/* Text-only brand row */}
          <div className="md:border-l md:border-black/10 md:pl-16">
            <p className="text-body-sm font-medium uppercase tracking-wide text-foreground/50">
              Trusted by web3 brands &amp; exchanges
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start">
              {BRANDS.map((brand, i) => (
                <span
                  key={brand}
                  className={cn(
                    'font-display text-xl font-bold tracking-tight text-foreground/70 md:text-2xl',
                    i % 2 === 1 && 'text-foreground/55',
                  )}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
