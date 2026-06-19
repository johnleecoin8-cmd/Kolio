import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Reliable influencer marketing API" — text left, code screenshot right. */
export default function ApiSection() {
  return (
    <FeatureRow
      imageSide="right"
      panel={false}
      image={
        <img
          src={`${CDN}/688a3c79f09d8837a6722f2d_image%20(29).avif`}
          width={560}
          sizes="(max-width: 767px) 100vw, 560px"
          srcSet={`${CDN}/688a3c79f09d8837a6722f2d_image%20(29)-p-500.avif 500w, ${CDN}/688a3c79f09d8837a6722f2d_image%20(29).avif 1120w`}
          alt="Modash influencer marketing API"
          loading="lazy"
          className="mx-auto w-full max-w-[520px]"
        />
      }
    >
      <h2 className="text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
        Reliable influencer marketing API
      </h2>
      <div className="mt-6 max-w-[480px] space-y-2 text-body-md text-foreground/70">
        <p>Modash data is available via API.</p>
        <p>Trusted by brands like Clay, New York Times, and 70+ others.</p>
        <p>
          <a
            href="https://docs.modash.io/"
            className="font-semibold text-foreground underline underline-offset-2"
          >
            Read the docs here
          </a>
        </p>
      </div>
      <div className="mt-8">
        <ButtonA href="https://www.modash.io/influencer-marketing-api" variant="primary">
          Learn more
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
