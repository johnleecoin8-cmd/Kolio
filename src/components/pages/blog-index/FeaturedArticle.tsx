import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';

/** Large featured article: cover image left, category tag + title + excerpt + author right. */
export default function FeaturedArticle() {
  return (
    <section className="bg-background pb-12 pt-16 md:pb-16 md:pt-20">
      <Container className="max-w-[896px]">
        <p className="eyebrow mb-5">Featured</p>
        <div className="card-kit grid items-stretch gap-0 overflow-hidden p-0 md:grid-cols-2">
          <a
            href="/blog/web2-rigor-web3-kols"
            className="block overflow-hidden"
          >
            <img
              src={`${CDN}/6a10227c1ea94049e2b114eb_Gifting%20Survey%20Cover.png`}
              alt="Web3 KOL vetting report cover"
              loading="lazy"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </a>

          <div className="flex flex-col items-start justify-center p-8 md:p-10">
            <a href="/category/kol-vetting" className="chip chip-brand">
              Vetting
            </a>
            <a
              href="/blog/web2-rigor-web3-kols"
              className="mt-5 font-display display-lg text-[1.75rem] text-foreground md:text-[2.25rem]"
            >
              [Report] How Much of a Crypto KOL's Reach Is Actually Real?
            </a>
            <p className="mt-4 text-body text-foreground/70">
              Follower counts lie. We ran proof-based audience checks across 200
              crypto KOLs on X and Telegram — the share of authentic reach, where
              the bots hide, and what brands should pay for instead of vanity.
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
