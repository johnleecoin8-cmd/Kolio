import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CHECK = `${CDN}/682de021530893fd2b4bcae7_Check%20Circle.png`;

const PERFORMANCE = [
  'Average views & impressions',
  'Engagement rate',
  'Paid vs. organic reach',
  'Follower growth trend',
  'Bot & fake follower share',
  'Past campaign attribution',
];

const AUDIENCE = ['Countries', 'Languages', 'Crypto niche', 'Wallet-active share'];

/** "The data you need, without switching tabs" — product screenshot left, two checklist columns right. */
export default function DataYouNeed() {
  return (
    <section className="bg-background pt-20 pb-10 md:pt-40 md:pb-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Product screenshot */}
          <div className="rounded-xl bg-background-soft p-6 md:p-10">
            <img
              src={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif`}
              srcSet={`${CDN}/68407cdb23cf3d289f138917_img_analytics_01-p-500.avif 500w, ${CDN}/68407cdb23cf3d289f138917_img_analytics_01.avif 1120w`}
              sizes="(max-width: 767px) 100vw, 560px"
              alt="Kolio KOL profile with audience quality and campaign performance data"
              loading="lazy"
              className="w-full"
            />
          </div>

          {/* Copy + checklists */}
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
              Every signal that proves a KOL is real
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              <Column title="Performance" items={PERFORMANCE} />
              <Column title="Audience" items={AUDIENCE} />
            </div>

            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start vetting free
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
            <img
              src={CHECK}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
              loading="lazy"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
