import { ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CRUMBS = ['Content library', 'All brands', 'Red Bull'];

const RED_BULL_LOGO =
  'https://images.od.modash.io/45f251779536348633e211c81b4f03ddfc55dc50';

/** Brand badge: real Red Bull logo + Inter wordmark, with white inset ring. */
function BrandBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-4 rounded-3xl bg-background-soft px-5 py-4 shadow-[inset_0_0_0_8px_white] transition-all">
      <span className="flex h-10 w-10 flex-shrink-0 md:h-[60px] md:w-[60px]">
        <img
          src={RED_BULL_LOGO}
          alt="Red Bull"
          className="h-full w-full rounded-sm object-contain"
        />
      </span>
      <span className="font-semibold leading-none text-foreground text-2xl md:text-4xl [font-family:Inter,system-ui,sans-serif]">
        Red Bull
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
          <span className="font-normal text-blue-dark">Influencers</span>
        </nav>

        {/* headline */}
        <h1 className="mx-auto max-w-[1000px] text-center font-display text-[2.25rem] uppercase leading-[1.02] text-foreground sm:text-[3rem] md:text-[3.75rem]">
          Find influencers who have collaborated with
        </h1>

        {/* brand badge */}
        <div className="mt-8 flex justify-center">
          <BrandBadge />
        </div>
      </Container>
    </section>
  );
}
