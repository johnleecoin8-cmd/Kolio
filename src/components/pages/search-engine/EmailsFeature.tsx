import Container from '@/components/ui/Container';

const EMAILS_ILLUSTRATION =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/634d22be0d83124a87926937_web_illustration_feature_33.svg';

/** "Find influencer contact emails in bulk" — copy left, illustration right. */
export default function EmailsFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Find influencer contact emails in bulk
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              If there&apos;s an email address publicly available, Modash will
              find it (in 1 click).
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Whether it&apos;s one influencer or hundreds, you can find (and
              export) all available email addresses, ready for outreach.
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Drastically cut down the time you spend on influencer recruitment.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={EMAILS_ILLUSTRATION}
              alt="Find influencer contact emails in bulk"
              className="w-full max-w-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
