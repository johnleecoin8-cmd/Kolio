import { ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CRUMBS = ['KOL library', 'All web3 brands', 'OKX'];

/** Brand badge: text-based web3 brand mark (no third-party logo imagery). */
function BrandBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-4 rounded-3xl bg-background-soft px-5 py-4 shadow-[inset_0_0_0_8px_white] transition-all">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-ink md:h-[60px] md:w-[60px]">
        <span className="font-display text-lg font-bold text-white md:text-2xl">
          OK
        </span>
      </span>
      <span className="font-semibold leading-none text-foreground text-2xl md:text-4xl font-display">
        OKX
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-background pt-12 pb-6 md:pt-20 md:pb-10">
      <Container>
        {/* breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center justify-center gap-1 text-base xl:gap-[10px]"
        >
          {CRUMBS.map((c) => (
            <span key={c} className="flex items-center gap-1 xl:gap-[10px]">
              <a
                href="#"
                className="font-normal text-blue-dark no-underline hover:underline"
              >
                {c}
              </a>
              <ChevronRight size={14} className="text-gray-400" />
            </span>
          ))}
          <span className="font-normal text-blue-dark">KOLs</span>
        </nav>

        <div className="mb-5 flex justify-center">
          <span className="eyebrow">KOL content library</span>
        </div>

        {/* headline — editorial display, one highlighted word */}
        <h1 className="mx-auto max-w-[1000px] text-center display-xl font-display text-[2.25rem] leading-[1.04] text-foreground sm:text-[3rem] md:text-[3.75rem]">
          Find the crypto{' '}
          <span className="text-gradient-brand">KOLs</span> who have run campaigns with
        </h1>

        {/* brand badge */}
        <div className="mt-8 flex justify-center">
          <BrandBadge />
        </div>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-body text-foreground/70">
          Proof-based vetting, on-chain payments and real campaign attribution —
          the rigor of web2 creator marketing, built for web3.
        </p>
      </Container>
    </section>
  );
}
