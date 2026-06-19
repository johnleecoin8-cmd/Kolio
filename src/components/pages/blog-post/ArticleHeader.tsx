import Container from '@/components/ui/Container';

/** Top of the blog post: breadcrumb chips, date/read-time, big title, author meta, intro. */
export default function ArticleHeader() {
  return (
    <header className="bg-background pt-10 md:pt-14">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          {/* breadcrumb / category chips */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="rounded-pill bg-gray-100 px-3 py-1 text-eyebrow font-semibold text-foreground/70">
              Blog
            </span>
            <span className="rounded-pill bg-pink-light px-3 py-1 text-eyebrow font-semibold text-pink-dark">
              Tools
            </span>
          </div>

          <p className="mb-4 text-body-sm text-foreground/55">
            February 19, 2026 <span className="mx-1">•</span> 40 min read
          </p>

          <h1 className="font-display text-[2rem] uppercase leading-[1.08] text-foreground sm:text-[2.75rem] md:text-[3.25rem]">
            19 Best Influencer Marketing Platforms: Compare Pros, Cons &amp; Prices
          </h1>

          {/* author */}
          <p className="mt-8 text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
            Post author &amp; contributor
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
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
