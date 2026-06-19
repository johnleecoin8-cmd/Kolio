import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "Find contacts, and send emails in bulk" — screenshot left, text right. */
export default function BulkEmail() {
  return (
    <FeatureRow
      imageSide="left"
      image={
        <img
          src={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif`}
          width={560}
          sizes="(max-width: 767px) 100vw, 560px"
          srcSet={`${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email-p-500.avif 500w, ${CDN}/6858fca4a4e9ca367500314f_img_bulk%20email.avif 1120w`}
          alt="Send bulk emails to creators"
          loading="lazy"
          className="mx-auto w-full max-w-[480px]"
        />
      }
    >
      <h2 className="font-display text-h3 leading-tight text-foreground">
        Find contacts, and send emails in bulk
      </h2>
      <div className="mt-6 max-w-[480px] space-y-4 text-body-md text-foreground/70">
        <p>
          If an influencer has an email address publicly available, Modash will
          find it.
        </p>
        <p>
          Then, cut the repetitive work by sending bulk emails. Keep them feeling
          1:1 at scale using variables.
        </p>
        <p>
          Email in bulk for outreach, for onboarding creators, sending free
          products, tracking links, product updates, or any other influencer
          communications task.
        </p>
      </div>
      <div className="mt-8">
        <ButtonA href="https://marketer.modash.io/register/marketer" variant="primary">
          Try for Free
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
