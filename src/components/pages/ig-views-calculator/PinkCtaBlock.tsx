import WideContainer from './WideContainer';
import { cn } from '@/lib/cn';

type Props = {
  /** Heading text. If `lead` is provided it is prefixed in a muted gray tone. */
  title: string;
  /** Optional muted (gray) lead phrase rendered before `title`. */
  lead?: string;
  description: string;
  buttonText?: string;
  /** Use a pink-light → pink vertical gradient instead of a flat pink fill. */
  gradient?: boolean;
};

/**
 * Full-width pink "message card" CTA block — large centered display heading,
 * body, and a dark CTA button. Used twice on the page:
 *  - "Use Modash to analyze..." (gradient fill + gray lead phrase)
 *  - "Checking average views is just the beginning" (flat pink, all-black)
 */
export default function PinkCtaBlock({
  title,
  lead,
  description,
  buttonText = 'Get a 14-day free trial',
  gradient = false,
}: Props) {
  return (
    <section className="bg-background py-8 md:py-12">
      <WideContainer>
        <div
          className={cn(
            'rounded-2xl px-4 py-16 md:py-24',
            gradient ? 'bg-gradient-to-b from-pink-light to-pink' : 'bg-pink',
          )}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className="font-display text-4xl font-normal uppercase leading-[1.02] tracking-tight text-ink md:text-6xl">
              {lead ? <span className="text-gray-400">{lead} </span> : null}
              {title}
            </h2>
            <p className="max-w-xl text-body-md text-ink/80">{description}</p>
            <a
              href="https://www.modash.io/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </WideContainer>
    </section>
  );
}
