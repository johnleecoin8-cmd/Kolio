import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Analyze profiles, and get contact details" — copy left, image right. */
export default function AnalyzeProfiles() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-1">
            <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
              Analyze profiles, and get contact details
            </h2>
            <p className="mt-6 max-w-[480px] text-body text-foreground/75">
              Once you've found creators that seem like the perfect fit, use
              Modash data to analyze their profiles. Check for fake followers,
              engagement rates, growth rates, audience details, and more. Add
              influencers to a list, and export contact details in bulk to begin
              outreach.
            </p>
            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
                className="!bg-blue !text-white hover:!opacity-90"
              >
                Try for free
              </ButtonA>
            </div>
          </div>
          <div className="md:order-2">
            <img
              src={`${CDN}/66b1fb3cf63509aae5751f6a_img_lookalikes_audience%20data.avif`}
              alt="Modash audience data analytics"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
