import { ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const CRUMBS = ['Content library', 'All brands', 'Red Bull'];

/** Simplified Red Bull wordmark badge used in the hero. */
function RedBullMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-white">
      <span className="leading-[0.85] text-center">
        <span className="block text-[8px] font-extrabold uppercase tracking-tight text-[#e3001b]">
          Red
        </span>
        <span className="block text-[8px] font-extrabold uppercase tracking-tight text-[#e3001b]">
          Bull
        </span>
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-background pt-12 pb-6 md:pt-20 md:pb-10">
      <Container>
        {/* breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center justify-center gap-2 text-body-sm font-medium text-[#3a4bd6]">
          {CRUMBS.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <a href="#" className="hover:underline">
                {c}
              </a>
              <ChevronRight size={14} className="text-gray-400" />
            </span>
          ))}
          <span className="font-semibold text-[#1f2bb5]">Influencers</span>
        </nav>

        {/* headline */}
        <h1 className="mx-auto max-w-[1000px] text-center font-display text-[2.25rem] uppercase leading-[1.02] text-foreground sm:text-[3rem] md:text-[3.75rem]">
          Find influencers who have collaborated with
        </h1>

        {/* brand badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 rounded-xl bg-background-soft px-6 py-4 shadow-sm">
            <RedBullMark />
            <span className="font-display text-[1.75rem] leading-none text-foreground md:text-[2.25rem]">
              Red Bull
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
