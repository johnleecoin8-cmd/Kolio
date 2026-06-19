import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';

/** Large featured article: cover image left, category tag + title + excerpt + author right. */
export default function FeaturedArticle() {
  return (
    <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-20">
      <Container className="max-w-[896px]">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <a
            href="/blog/creator-gifting-survey"
            className="block overflow-hidden rounded-xl"
          >
            <img
              src={`${CDN}/6a10227c1ea94049e2b114eb_Gifting%20Survey%20Cover.png`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </a>

          <div className="flex flex-col items-start justify-center rounded-xl bg-background-soft p-8 md:p-10">
            <a
              href="/category/influencer-programs"
              className="rounded-pill px-3 py-1 text-eyebrow font-semibold"
              style={{ color: '#ffdbed', backgroundColor: '#ad1f66' }}
            >
              Programs
            </a>
            <a
              href="/blog/creator-gifting-survey"
              className="mt-4 text-[1.75rem] font-bold leading-[1.2] text-foreground md:text-[2rem]"
            >
              [Survey] Are Creators Really Over Gifting?
            </a>
            <p className="mt-4 text-body text-foreground/70">
              Marketers said creators aren’t open to gifting collabs. But is that
              true? We asked 25 creators to weigh in on gifting: the good, the bad,
              and the ugly.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={`${CDN}/66701c715f9e73506fd39c5f_1685806156378.avif`}
                alt=""
                loading="lazy"
                className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
              />
              <div className="flex items-center gap-2 text-body-sm text-foreground/50">
                <span>June 12, 2026</span>
                <span>•</span>
                <span>4 mins</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
