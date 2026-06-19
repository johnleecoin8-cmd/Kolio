import Container from '@/components/ui/Container';

const IMG =
  'https://www.modash.io/engagement-rate-calculator/assets/er_check_engagement_rates_by_content_format.png';

/** "Check engagement rates by content format" — image left, text right. */
export default function ContentFormat() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-4 lg:order-2 lg:flex-1">
            <h2 className="mb-4 w-full break-words font-display text-5xl font-bold leading-tight text-foreground lg:text-7xl">
              Check engagement rates by content format
            </h2>
            <div className="w-full break-words text-lg font-normal leading-relaxed text-foreground">
              <p>
                When reviewing an influencer&rsquo;s profile, it&rsquo;s helpful
                to know what kind of content is driving the engagement rate. On
                YouTube, is it Shorts or long-form videos? On Instagram, is it
                Posts or Reels? Start a free trial of Modash to unlock advanced
                engagement data like this.
              </p>
            </div>
            <a
              href="https://app.modash.io/signup"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#333333]"
            >
              Try for free
            </a>
          </div>

          <div className="flex w-full justify-center lg:order-1 lg:flex-1">
            <img
              src={IMG}
              alt="Check engagement rates by content format"
              className="max-h-[350px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
