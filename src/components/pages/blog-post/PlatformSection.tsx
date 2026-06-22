import { Platform } from './platforms';
import KolioFeatures from './KolioFeatures';

const GLANCE_ICON: Record<string, string> = {
  'Best for': '🥇',
  'Free trial': '🆓',
  Price: '💵',
  Platforms: '📱',
  'KOL coverage': '📇',
  'Used by': '🤝',
  'Review score': '✨',
};

/** One platform block: title, screenshot, "at a glance" facts, what-is, strengths/weaknesses. */
export default function PlatformSection({ platform }: { platform: Platform }) {
  const { num, name, short, glance, whatis, strengths, weaknesses, img, further } =
    platform;

  return (
    <section id={`platform-${num}`} className="scroll-mt-24 pt-14 first:pt-0">
      <div className="mb-1 text-eyebrow font-semibold tracking-wide text-foreground/35">
        {String(num).padStart(2, '0')} / 19
      </div>
      <h2 className="display-lg font-display text-[1.875rem] leading-tight text-foreground md:text-[2.375rem]">
        {name}
      </h2>

      {img && (
        <img
          src={img}
          alt={`${short} web3 KOL marketing platform`}
          loading="lazy"
          className="mt-6 w-full rounded-lg border border-black/5"
        />
      )}

      {/* At a glance */}
      <div className="card-kit mt-7 p-5 md:p-6">
        <p className="eyebrow mb-3">{short} at a glance</p>
        <dl className="divide-y divide-gray-100">
          {glance.map(([label, value]) => (
            <div key={label} className="flex gap-4 py-2.5 text-body">
              <dt className="flex w-36 shrink-0 items-center gap-1.5 font-semibold text-foreground">
                <span aria-hidden>{GLANCE_ICON[label] ?? '•'}</span>
                {label}
              </dt>
              <dd className="leading-relaxed text-foreground/75">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* What is X */}
      <h3 className="mt-8 text-[1.5rem] font-bold leading-snug text-foreground">
        What is {short}?
      </h3>
      <p className="mt-3 text-body leading-[1.75] text-foreground/80">{whatis}</p>

      {/* Kolio feature deep-dive (discovery / relationships / payments / attribution) */}
      {num === 1 && <KolioFeatures />}

      {/* Strengths */}
      {strengths.length > 0 && (
        <>
          <h3 className="mt-8 text-[1.5rem] font-bold leading-snug text-foreground">
            {short} strengths 👍
          </h3>
          <ul className="mt-3 space-y-2.5 pl-5 text-body leading-[1.75] text-foreground/80 marker:text-mint">
            {strengths.map((s, i) => (
              <li key={i} className="list-disc">
                {s}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Weaknesses */}
      {weaknesses.length > 0 && (
        <>
          <h3 className="mt-8 text-[1.5rem] font-bold leading-snug text-foreground">
            {short} weaknesses 👎
          </h3>
          <ul className="mt-3 space-y-2.5 pl-5 text-body leading-[1.75] text-foreground/80 marker:text-brand">
            {weaknesses.map((w, i) => (
              <li key={i} className="list-disc">
                {w}
              </li>
            ))}
          </ul>
        </>
      )}

      {further && (
        <p className="mt-6 text-body text-foreground/80">
          🤓 <strong className="font-semibold">Further reading:</strong>{' '}
          <a href="#" className="font-medium text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand">
            {further}
          </a>
        </p>
      )}
    </section>
  );
}
