import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const PERFORMANCE = [
  'Average views',
  'Average comments',
  'Average shares',
  'Paid vs. organic',
  'Follower growth',
  'Fake followers',
];

const AUDIENCE = ['Countries', 'Cities', 'Gender', 'Language', 'Interests'];

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-5 w-5 shrink-0 text-pink" strokeWidth={3} />
      <span className="text-body text-foreground/80">{label}</span>
    </div>
  );
}

/** First feature: emails + all the influencer data, with a two-column checklist. */
export default function DataFeature() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <img
              src={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif`}
              srcSet={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01-p-500.avif 500w, ${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif 1120w`}
              sizes="(max-width: 767px) 100vw, 560px"
              alt="Influencer profile analytics"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="font-display text-h4 leading-tight text-foreground">
              Find influencer emails, plus all the other data you need
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <div className="mb-3 text-body font-semibold text-foreground">
                  Performance
                </div>
                <div className="flex flex-col gap-3">
                  {PERFORMANCE.map((p) => (
                    <CheckItem key={p} label={p} />
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 text-body font-semibold text-foreground">
                  Audience
                </div>
                <div className="flex flex-col gap-3">
                  {AUDIENCE.map((p) => (
                    <CheckItem key={p} label={p} />
                  ))}
                </div>
              </div>
            </div>

            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
              className="mt-8"
            >
              Try for Free
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
