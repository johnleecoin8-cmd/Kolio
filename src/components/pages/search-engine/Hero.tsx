import Container from '@/components/ui/Container';

const HERO_ILLUSTRATION =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/5f4f61fc9a54e995dd3a8d90_Web_illustration_feature_01.svg';

/** Hero — periwinkle wash, big display headline, indigo CTA, illustration right. */
export default function Hero() {
  return (
    <section className="bg-violet/55">
      <Container>
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* copy */}
          <div className="max-w-xl">
            <h1 className="font-display text-[2.75rem] leading-[1.05] text-violet-dark md:text-[3.5rem]">
              Influencer Search Engine For Instagram, YouTube,&nbsp;&amp;&nbsp;TikTok
            </h1>
            <p className="mt-6 text-body-md leading-relaxed text-violet-dark/90">
              Search &amp; filter every creator on Earth for the big 3 platforms.
              Find the perfect influencers, analyze their profiles, get contact
              emails, &amp; more.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Search 200m+ Influencers - try For Free
            </a>
          </div>

          {/* hero illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src={HERO_ILLUSTRATION}
              alt="An illustrative image on Modash's influencer discovery"
              className="w-full max-w-[560px]"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
