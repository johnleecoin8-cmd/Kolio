import { Platform } from './platforms';
import ModashBody from './ModashBody';

const GLANCE_ICON: Record<string, string> = {
  'Best for': '🥇',
  'Free trial': '🆓',
  Price: '💵',
  Platforms: '📱',
  'Influencer database size': '📇',
  'Used by': '🤝',
  'Review score': '✨',
};

/** One platform block: title, screenshot, "at a glance" facts, what-is, strengths/weaknesses. */
export default function PlatformSection({ platform }: { platform: Platform }) {
  const { num, name, short, glance, whatis, strengths, weaknesses, img, further } =
    platform;

  return (
    <section id={`platform-${num}`} className="scroll-mt-24 pt-12 first:pt-0">
      <h2 className="text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
        {num}. {name}
      </h2>

      {img && (
        <img
          src={img}
          alt={`${short} influencer marketing platform`}
          loading="lazy"
          className="mt-6 w-full rounded-lg border border-black/5"
        />
      )}

      {/* At a glance */}
      <h3 className="mt-8 text-[1.5rem] font-bold leading-tight text-foreground">
        {short} at a glance
      </h3>
      <ul className="mt-4 space-y-2.5 text-body text-foreground/80">
        {glance.map(([label, value]) => (
          <li key={label} className="leading-relaxed">
            <span className="mr-1">{GLANCE_ICON[label] ?? '•'}</span>
            <strong className="font-semibold text-foreground">{label}:</strong>{' '}
            {value}
          </li>
        ))}
      </ul>

      {/* What is X */}
      <h3 className="mt-8 text-[1.5rem] font-bold leading-tight text-foreground">
        What is {short}?
      </h3>
      <p className="mt-3 text-body leading-relaxed text-foreground/80">{whatis}</p>

      {/* Modash feature deep-dive (recruitment / relationships / payments / tracking) */}
      {num === 1 && <ModashBody />}

      {/* Strengths */}
      {strengths.length > 0 && (
        <>
          <h3 className="mt-8 text-[1.5rem] font-bold leading-tight text-foreground">
            {short} strengths 👍
          </h3>
          <ul className="mt-3 space-y-2.5 pl-5 text-body leading-relaxed text-foreground/80">
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
          <h3 className="mt-8 text-[1.5rem] font-bold leading-tight text-foreground">
            {short} weaknesses 👎
          </h3>
          <ul className="mt-3 space-y-2.5 pl-5 text-body leading-relaxed text-foreground/80">
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
          <a href="#" className="font-medium text-pink-dark underline">
            {further}
          </a>
        </p>
      )}
    </section>
  );
}
