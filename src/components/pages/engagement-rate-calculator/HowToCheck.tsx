import Container from '@/components/ui/Container';

const IMG =
  'https://www.modash.io/engagement-rate-calculator/assets/er_how_to_check_influencer_engagement_rate.png';

/** "How to check influencer engagement rate" — text left, image right. */
export default function HowToCheck() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-4 lg:flex-1">
            <h2 className="mb-4 w-full break-words font-display text-5xl font-normal leading-tight text-foreground lg:text-7xl">
              How to check influencer engagement rate
            </h2>
            <div className="w-full break-words text-lg font-normal leading-relaxed text-foreground">
              <p>
                To determine an influencer&rsquo;s engagement rate, take the
                median number of engagements (likes + comments etc.) across all
                the influencer&rsquo;s posts on a particular profile, divide by
                the total number of followers, then multiply by 100. Using this
                formula, you&rsquo;ll be able to view the total overall
                engagements for an influencer&rsquo;s profile.
              </p>
              <p className="mt-4">
                Modash uses the last two months of content to calculate
                engagement rate.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center lg:flex-1">
            <img
              src={IMG}
              alt="How to check influencer engagement rate"
              className="max-h-[350px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
