import Container from '@/components/ui/Container';

/** Top of the blog post: breadcrumb, category chip, date/read-time, editorial title, author meta. */
export default function ArticleHeader() {
  return (
    <header className="bg-background pt-12 md:pt-20">
      <Container>
        <div className="mx-auto max-w-[760px]">
          {/* breadcrumb + category chip */}
          <div className="mb-6 flex items-center gap-2.5 text-body-sm">
            <a href="#" className="font-medium text-foreground/55 hover:text-foreground">
              Blog
            </a>
            <span className="text-foreground/30">&rsaquo;</span>
            <span className="chip chip-brand">Tools</span>
          </div>

          <h1 className="display-lg font-display text-[2.5rem] text-foreground sm:text-[3.25rem] md:text-[4rem]">
            19 Best Web3 KOL Marketing Platforms,{' '}
            <span className="text-gradient-brand">Compared</span>
          </h1>

          {/* author / meta row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-body font-bold text-white">
                K
              </div>
              <div className="leading-tight">
                <p className="text-body-sm font-semibold text-foreground">The Kolio Team</p>
                <p className="text-body-sm text-foreground/55">Web3 KOL Marketing @ Kolio</p>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-gray-200 sm:block" />
            <p className="text-body-sm text-foreground/55">
              February 19, 2026 <span className="mx-1.5 text-foreground/30">•</span> 40 min read
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
