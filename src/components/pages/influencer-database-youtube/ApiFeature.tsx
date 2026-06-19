import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Reliable API — copy + docs link left, code/API key screenshot right. */
export default function ApiFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-h4 leading-tight text-foreground md:text-[2.25rem]">
              Reliable influencer marketing API
            </h2>
            <div className="mt-6 space-y-4 text-body-md text-foreground/75">
              <p>Modash data is available via API.</p>
              <p>
                Trusted by brands like Clay, New York Times, and 70+ others.{' '}
                <a
                  href="https://docs.modash.io/"
                  className="text-foreground underline underline-offset-2 hover:opacity-70"
                >
                  Read the docs here
                </a>
                .
              </p>
            </div>
            <div className="mt-8">
              <ButtonA href="https://www.modash.io/api" variant="primary">
                Learn more
              </ButtonA>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
            <img
              src={`${CDN}/688a3c79f09d8837a6722f2d_image%20(29).avif`}
              alt="Modash API access key"
              loading="lazy"
              className="w-full max-w-[460px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
