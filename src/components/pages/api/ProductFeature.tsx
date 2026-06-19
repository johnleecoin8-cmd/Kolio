import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { CheckCircle2, BadgeCheck, Activity } from 'lucide-react';

type Props = {
  title: string;
  intro: string;
  bullets: string[];
  /** which brand-neutral mockup to render: 'chart' (discovery) or 'stream' (raw) */
  image: 'chart' | 'stream';
  imageAlt: string;
  learnMore?: string;
  /** mockup on the left instead of right */
  reverse?: boolean;
};

/** Brand-neutral discovery mockup: a vetted-KOL list with audience-quality bars. */
function DiscoveryMock() {
  const rows = [
    { tag: 'DeFi', q: 92 },
    { tag: 'L2 / Rollups', q: 87 },
    { tag: 'Trading', q: 78 },
    { tag: 'NFTs', q: 84 },
  ];
  return (
    <div className="w-full max-w-[520px] space-y-3">
      {rows.map((r) => (
        <div
          key={r.tag}
          className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-4"
        >
          <BadgeCheck className="h-9 w-9 shrink-0 text-ink" strokeWidth={1.75} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-semibold text-foreground">
                {r.tag} KOL
              </span>
              <span className="text-body-sm font-semibold text-ink">
                {r.q}% real audience
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-pill bg-gray-200">
              <div
                className="h-1.5 rounded-pill bg-gradient-brand"
                style={{ width: `${r.q}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Brand-neutral raw/stream mockup: a live campaign event feed. */
function StreamMock() {
  const events = [
    { t: '00:02', txt: '@defi_anon posted — 41.2K views' },
    { t: '00:14', txt: '1,204 referral clicks tracked' },
    { t: '00:31', txt: '88 wallet connects attributed' },
    { t: '01:07', txt: 'Token mention sentiment: +0.71' },
  ];
  return (
    <div className="w-full max-w-[520px] rounded-lg border border-black/10 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <Activity className="h-5 w-5 text-ink" strokeWidth={2} />
        <span className="text-body-sm font-semibold text-foreground">
          Live campaign stream
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-body-sm text-foreground/60">
          <span className="h-2 w-2 rounded-pill bg-gradient-brand" /> live
        </span>
      </div>
      <ul className="space-y-3 font-mono text-[0.8125rem]">
        {events.map((e) => (
          <li key={e.t} className="flex gap-4">
            <span className="shrink-0 text-foreground/50">{e.t}</span>
            <span className="text-foreground/85">{e.txt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two-column product feature block (Discovery API / Raw API). */
export default function ProductFeature({
  title,
  intro,
  bullets,
  image,
  imageAlt,
  learnMore,
  reverse = false,
}: Props) {
  const text = (
    <div className="flex flex-col justify-center">
      <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground">{title}</h2>
      <p className="mt-4 text-body-md text-foreground/75">{intro}</p>

      <ul className="mt-6 space-y-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" strokeWidth={2} />
            <span className="text-body text-foreground/85">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink to="/demo-confirmation" variant="primary">
          Request a demo
        </ButtonLink>
        {learnMore && (
          <ButtonLink to={learnMore} variant="secondary">
            Learn more
          </ButtonLink>
        )}
      </div>
    </div>
  );

  const media = (
    <div
      aria-label={imageAlt}
      className="flex items-center justify-center rounded-xl bg-background-soft p-8 md:p-10"
    >
      {image === 'chart' ? <DiscoveryMock /> : <StreamMock />}
    </div>
  );

  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {reverse ? (
            <>
              <div className="order-2 md:order-1">{media}</div>
              <div className="order-1 md:order-2">{text}</div>
            </>
          ) : (
            <>
              {text}
              {media}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
