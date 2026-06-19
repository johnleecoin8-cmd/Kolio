import Container from '@/components/ui/Container';

/** Top of the blog post: breadcrumb chips, date/read-time, big title, author meta, intro. */
export default function ArticleHeader() {
  return (
    <header className="bg-background pt-10 md:pt-14">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          {/* breadcrumb */}
          <div className="mb-5 flex items-center justify-center gap-2 text-body-sm">
            <a href="#" className="font-medium text-foreground/70 hover:text-foreground">
              Blog
            </a>
            <span className="text-foreground/40">&rsaquo;</span>
            <span className="rounded-pill bg-orange-light px-3 py-1 text-eyebrow font-semibold text-orange-dark">
              Tools
            </span>
          </div>

          <p className="mb-4 text-body-sm text-foreground/55">
            February 19, 2026 <span className="mx-1">•</span> 40 min
          </p>

          <h1 className="font-display text-[2.25rem] uppercase leading-[1.06] text-foreground sm:text-[3rem] md:text-[3.75rem]">
            19 Best Influencer Marketing Platforms: Compare Pros, Cons &amp; Prices
          </h1>

          {/* author */}
          <p className="mt-10 text-body-sm text-foreground/55">
            Post author &amp; contributors
          </p>
          <div className="mx-auto mt-3 flex w-fit items-center gap-3 rounded-lg bg-background-soft px-5 py-3">
            <img
              src="https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/66dad82f68010bced8ff8a36_1517376322625.avif"
              alt="Phil Norris"
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-body-sm font-semibold text-foreground">Phil Norris</p>
              <p className="text-body-sm text-foreground/55">Writer @ Modash</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
