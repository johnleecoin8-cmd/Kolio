import Hero from '@/components/pages/influencer-database-youtube/Hero';
import SearchFilter from '@/components/pages/influencer-database-youtube/SearchFilter';
import FeatureRow from '@/components/pages/influencer-database-youtube/FeatureRow';
import ApiFeature from '@/components/pages/influencer-database-youtube/ApiFeature';
import PlusGrid from '@/components/pages/influencer-database-youtube/PlusGrid';
import Testimonials from '@/components/pages/influencer-database-youtube/Testimonials';
import CtaBlock from '@/components/pages/influencer-database-youtube/CtaBlock';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** modash.io /influencer-database/youtube — 1:1 clone. Sections top-to-bottom. */
export default function InfluencerDatabaseYoutube() {
  return (
    <main>
      <Hero />
      <SearchFilter />

      <FeatureRow
        title="Make sure creators are a good fit BEFORE you reach out"
        body={
          <p>
            Outreach is one of the most time-consuming parts of influencer
            marketing. Modash saves you time by giving you all the data you need
            upfront: average views, engagement rates, audience demographics, and
            more.
          </p>
        }
        image={`${CDN}/691b039be6a1253a39761d20_img_tiktok_database_02.avif`}
        alt="Creator audience and performance data"
      />

      <FeatureRow
        imageLeft
        title="Find contacts, and send emails in bulk"
        body={
          <>
            <p>
              If an influencer has an email address publicly available, Modash will
              find it.
            </p>
            <p>
              Then, cut the repetitive work by sending bulk emails. Keep them
              feeling 1:1 at scale using variables.
            </p>
            <p>
              Email in bulk for outreach, for onboarding creators, sending free
              products, tracking links, product updates, or any other influencer
              communications task.
            </p>
          </>
        }
        image={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif`}
        alt="Send bulk emails to creators"
      />

      <ApiFeature />
      <PlusGrid />
      <Testimonials />
      <CtaBlock />
    </main>
  );
}
