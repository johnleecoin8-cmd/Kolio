import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const PERFORMANCE = [
  'Average views',
  'Average comments',
  'Average shares',
  'Paid vs. organic',
  'Follower growth',
  'Fake followers',
];

const AUDIENCE = [
  'Countries',
  'Cities',
  'Gender',
  'Language',
  'Fake followers',
  'Interests',
];

/** "The data you need, without switching tabs" — product screenshot left, two checklist columns right. */
export default function DataYouNeed() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Product screenshot */}
          <div className="rounded-xl bg-background-soft p-6 md:p-10">
            <img
              src={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif`}
              srcSet={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01-p-500.avif 500w, ${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif 1120w`}
              sizes="(max-width: 767px) 100vw, 560px"
              alt="Influencer profile overview with audience and performance data"
              loading="lazy"
              className="w-full"
            />
          </div>

          {/* Copy + checklists */}
          <div>
            <h2 className="font-display text-h3 leading-tight text-foreground">
              The data you need, without switching tabs
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              <Column title="Performance" items={PERFORMANCE} />
              <Column title="Audience" items={AUDIENCE} />
            </div>

            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="border-b border-black/10 pb-3 text-body font-semibold text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-body text-foreground/80"
          >
            <CheckCircle
              className="h-[18px] w-[18px] shrink-0 text-foreground"
              strokeWidth={2.5}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
