import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Make sure creators are a good fit" — text left, screenshot right. */
export default function GoodFit() {
  return (
    <FeatureRow
      imageSide="right"
      image={
        <img
          src={`${CDN}/691b039be6a1253a39761d20_img_tiktok_database_02.avif`}
          width={560}
          alt="Creator audience and performance data"
          loading="lazy"
          className="mx-auto w-full max-w-[480px]"
        />
      }
    >
      <h2 className="font-display text-h3 leading-tight text-foreground">
        Make sure creators are a good fit BEFORE you reach out
      </h2>
      <p className="mt-6 max-w-[480px] text-body-md text-foreground/70">
        Outreach is one of the most time-consuming parts of influencer marketing.
        Modash saves you time by giving you all the data you need upfront: average
        views, shares &amp; saves, engagement rates, audience demographics, and
        more.
      </p>
      <div className="mt-8">
        <ButtonA href="https://marketer.modash.io/register/marketer" variant="primary">
          Try for Free
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
