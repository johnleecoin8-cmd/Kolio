import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const CHECK = `${CDN}/682de021530893fd2b4bcae7_Check%20Circle.png`;
const DEMO = '/demo-confirmation';

type Props = {
  image: string;
  title: string;
  intro: string;
  bullets: string[];
  /** refined red section label above the heading */
  eyebrow?: string;
  /** when true, image sits on the right (text left) */
  reversed?: boolean;
};

/** Generic feature row: large product image + heading + check bullets + CTA. */
export default function FeatureRow({
  image,
  title,
  intro,
  bullets,
  eyebrow,
  reversed = false,
}: Props) {
  return (
    <section className="bg-background py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reversed ? 'md:order-2' : ''}>
            <div className="card-kit overflow-hidden p-2">
              <img
                src={image}
                width={560}
                alt=""
                loading="lazy"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className={reversed ? 'md:order-1' : ''}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="display-lg font-display text-[1.625rem] text-foreground md:text-[2rem]">
              {title}
            </h2>
            <p className="mt-4 text-body-md text-foreground/70">{intro}</p>
            <div className="mt-6 flex flex-col gap-4">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <img
                    src={CHECK}
                    width={20}
                    height={20}
                    alt=""
                    loading="lazy"
                    className="mt-0.5 shrink-0"
                  />
                  <p className="text-body text-foreground/70">{b}</p>
                </div>
              ))}
            </div>
            <a
              href={DEMO}
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Request a demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
