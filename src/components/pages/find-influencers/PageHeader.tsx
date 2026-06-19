import { ChevronRight } from 'lucide-react';

/** Centered breadcrumb + big display H1, on white background. */
export default function PageHeader() {
  return (
    <header className="bg-background pt-10 pb-8 md:pt-14">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 text-center">
        <nav className="mb-4 flex items-center justify-center gap-2 text-body-sm font-medium text-foreground/60">
          <a
            href="https://www.modash.io/find-influencers"
            className="no-underline transition hover:text-foreground"
          >
            Find Influencers
          </a>
          <ChevronRight size={16} className="text-foreground/40" />
          <span className="text-foreground">American Fitness Influencers</span>
        </nav>

        <h1 className="mx-auto max-w-[920px] font-display text-[2.5rem] uppercase leading-[1.05] text-foreground md:text-[3.5rem]">
          Top 20 American Fitness Influencers on Instagram (Jun 2026)
        </h1>
      </div>
    </header>
  );
}
