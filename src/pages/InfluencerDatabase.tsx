import Hero from '@/components/pages/influencer-database/Hero';
import LiveDiscovery from '@/components/pages/influencer-database/LiveDiscovery';
import SearchFilterFeature from '@/components/pages/influencer-database/SearchFilterFeature';
import FeatureSection from '@/components/pages/influencer-database/FeatureSection';
import EverythingElse from '@/components/pages/influencer-database/EverythingElse';
import Testimonials from '@/components/pages/influencer-database/Testimonials';
import BottomCta from '@/components/pages/influencer-database/BottomCta';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** modash.io /influencer-database — searchable creator database product page. */
export default function InfluencerDatabase() {
  return (
    <main>
      <Hero />

      <LiveDiscovery />

      <SearchFilterFeature />

      <FeatureSection
        reverse
        title="Make sure creators are a good fit BEFORE you reach out"
        image={`${CDN}/68407b2f47631e9fdc04adca_img_discover_03.avif`}
        imageSrcSet={`${CDN}/68407b2f47631e9fdc04adca_img_discover_03-p-500.avif 500w, ${CDN}/68407b2f47631e9fdc04adca_img_discover_03.avif 1120w`}
        body={
          <>
            Outreach is one of the most time-consuming parts of influencer
            marketing. Modash saves you time by giving you all the data you need
            upfront: fake follower checks, engagement rates, growth rates, audience
            demographics, and more.
          </>
        }
      />

      <FeatureSection
        title="Find contacts, and send emails in bulk"
        image={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif`}
        imageSrcSet={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email-p-500.avif 500w, ${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif 1120w`}
        body={
          <>
            If an influencer has an email address publicly available, Modash will
            find it.
            <br />
            <br />
            Then, cut the repetitive work by sending bulk emails. Keep them feeling
            1:1 at scale using variables.
            <br />
            <br />
            Email in bulk for outreach, for onboarding creators, sending free
            products, tracking links, product updates, or any other influencer
            communications task.
          </>
        }
      />

      <FeatureSection
        reverse
        title="Reliable influencer marketing API"
        image={`${CDN}/688a3c79f09d8837a6722f2d_image%20(29).avif`}
        imageSrcSet={`${CDN}/688a3c79f09d8837a6722f2d_image%20(29)-p-500.avif 500w, ${CDN}/688a3c79f09d8837a6722f2d_image%20(29).avif 1120w`}
        ctaLabel="Learn more"
        ctaHref="https://www.modash.io/influencer-marketing-api"
        body={
          <>
            Modash data is available via API.
            <br />
            <br />
            Trusted by brands like Clay, New York Times, and 70+ others.{' '}
            <a
              href="https://docs.modash.io/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground underline"
            >
              Read the docs here
            </a>
            .
          </>
        }
      />

      <EverythingElse />

      <Testimonials />

      <BottomCta />
    </main>
  );
}
