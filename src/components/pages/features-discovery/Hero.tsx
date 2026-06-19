const HERO_IMG =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6994332fe35c71b238696715_img_hero_discover.avif';
const SHOPIFY_IC =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/69b9399b19877eff4554ae00_ic_Shopify_gray.avif';

/** Full-pink hero with eyebrow, big display headline, CTAs and product screenshot. */
export default function Hero() {
  return (
    <section className="bg-pink">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 pt-24 pb-12 md:pt-28 md:pb-16 text-center">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-3 text-ink">
          <span className="text-eyebrow font-semibold uppercase tracking-wide">Discover</span>
          <span className="h-5 w-px bg-ink/30" />
          <span className="inline-flex items-center gap-1.5">
            <img src={SHOPIFY_IC} width={20} height={20} alt="" />
            <span className="text-eyebrow font-semibold uppercase tracking-wide">Shopify</span>
          </span>
        </div>

        <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] sm:text-[3.5rem] md:text-[4.5rem] uppercase text-ink max-w-[900px] mx-auto">
          380 million creators, searchable in one place
        </h1>

        <p className="mt-6 mx-auto max-w-[620px] text-body md:text-body-md text-ink/75">
          Build shortlists with ease across Instagram, TikTok, and YouTube. With AI Search,
          audience and performance data you vet creators before you send a single email. Rinse
          and repeat.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://marketer.modash.io/register/marketer"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-ink text-white text-body font-semibold transition hover:opacity-90"
            >
              Try for free
            </a>
            <a
              href="https://www.modash.io/book-demo"
              className="inline-flex items-center justify-center h-11 px-5 rounded-sm bg-white text-ink text-body font-semibold transition hover:opacity-90"
            >
              Request a demo
            </a>
          </div>
          <p className="text-body-sm text-ink/70">14-day free trial・No credit card required</p>
        </div>

        <div className="mt-10 md:mt-14">
          <img
            src={HERO_IMG}
            width={1182}
            alt="Modash Discover product"
            className="mx-auto w-full max-w-[1100px] rounded-xl shadow-nav"
          />
        </div>
      </div>
    </section>
  );
}
