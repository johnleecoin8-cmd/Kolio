import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const METRICS = [
  'Performance',
  'Audience',
  'Average views',
  'Countries',
  'Average comments',
  'Cities',
  'Average shares',
  'Gender',
  'Paid vs. organic',
  'Language',
  'Follower growth',
  'Fake followers',
  'Interests',
];

/** First feature row: screenshot left, metric checklist + copy right. */
export default function DataNoTabs() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="md:order-1">
            <img
              src={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif`}
              alt="Influencer analytics overview"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>

          <div className="md:order-2">
            <h2 className="font-display text-h4 leading-tight text-foreground md:text-h3">
              The data you need, without switching tabs
            </h2>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {METRICS.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-2 text-body text-foreground/80"
                >
                  <img
                    src={`${CDN}/682de021530893fd2b4bcae7_Check%20Circle.png`}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="accent"
              >
                Try for free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
