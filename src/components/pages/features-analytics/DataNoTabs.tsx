import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

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

const CHECK = `${CDN}/682de021530893fd2b4bcae7_Check%20Circle.png`;

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 text-body text-foreground/85">
      <img src={CHECK} alt="" width={20} height={20} className="h-5 w-5 shrink-0" />
      {label}
    </li>
  );
}

/** First feature row: screenshot left, two-column metric checklist + copy right. */
export default function DataNoTabs() {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-1">
            <img
              src={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif`}
              alt="Influencer analytics overview"
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>

          <div className="md:order-2">
            <h2 className="max-w-[460px] font-sans text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground md:text-[2.5rem]">
              The data you need, without switching tabs
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="mb-4 text-body-sm font-semibold text-foreground">
                  Performance
                </p>
                <ul className="flex flex-col gap-3.5">
                  {PERFORMANCE.map((m) => (
                    <CheckItem key={m} label={m} />
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-body-sm font-semibold text-foreground">
                  Audience
                </p>
                <ul className="flex flex-col gap-3.5">
                  {AUDIENCE.map((m) => (
                    <CheckItem key={m} label={m} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
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
