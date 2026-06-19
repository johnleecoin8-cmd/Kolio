import Hero from '@/components/pages/features-email-finder/Hero';
import DataFeature from '@/components/pages/features-email-finder/DataFeature';
import FeatureRow from '@/components/pages/features-email-finder/FeatureRow';
import Faq from '@/components/pages/features-email-finder/Faq';
import CtaBanner from '@/components/pages/features-email-finder/CtaBanner';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

export default function FeaturesEmailFinder() {
  return (
    <main>
      <Hero />

      <DataFeature />

      <FeatureRow
        reverse
        heading="Send influencer emails in bulk"
        image={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif`}
        imageSrcSet={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email-p-500.avif 500w, ${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif 1120w`}
        alt="Send influencer emails in bulk"
      >
        <p>
          Cut the repetitive work and keep your emails feeling 1:1 at scale using
          variables.
        </p>
        <p className="mt-5">
          Use it for outreach, for onboarding creators, sending free products,
          tracking links, product updates, or any other influencer
          communications task.
        </p>
      </FeatureRow>

      <FeatureRow
        heading="Filter 350M+ Influencer profiles"
        image={`${CDN}/682dd6038189e57dfc1b6c4f_Figure.avif`}
        imageSrcSet={`${CDN}/682dd6038189e57dfc1b6c4f_Figure-p-500.avif 500w, ${CDN}/682dd6038189e57dfc1b6c4f_Figure.avif 1120w`}
        alt="Filter influencer profiles"
      >
        <p>
          Speed up your search by showing only influencers that have public
          emails available and/or recent activity.
        </p>
        <p className="mt-5">
          Plus, filter for your audience or performance criteria, e.g. audience
          in a certain country, or a range of average views.
        </p>
      </FeatureRow>

      <FeatureRow
        reverse
        heading="Organize your inbox"
        image={`${CDN}/6840875d726ee28e973d33c1_img_inbox_03.avif`}
        imageSrcSet={`${CDN}/6840875d726ee28e973d33c1_img_inbox_03-p-500.avif 500w, ${CDN}/6840875d726ee28e973d33c1_img_inbox_03.avif 1120w`}
        alt="Organize your inbox"
      >
        <p>
          Filter your inbox to see only your influencer emails. Or, go one step
          further — and sort your emails by pipeline stage to save on context
          switching.
        </p>
      </FeatureRow>

      <Faq />

      <CtaBanner />
    </main>
  );
}
