import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

const NAV_LINKS = ['Discovery', 'API', 'Brands', 'Resources', 'Pricing'];

/**
 * Hero: page H1 with a single gradient-highlighted word (later.com pattern),
 * then the embedded Kolio engagement-rate tool rendered as a framed card
 * (mini app-nav + intro copy + handle search + result placeholder).
 */
export default function Hero() {
  const [handle, setHandle] = useState('@VitalikButerin');

  return (
    <section className="bg-background pt-6 md:pt-10">
      <Container>
        <div className="flex flex-col items-center px-4 pb-6 pt-4 text-center md:pb-8 md:pt-8">
          <h1 className="m-0 max-w-[60rem] text-center font-display text-4xl font-normal leading-tight text-foreground md:text-6xl xl:text-[5rem]">
            Free Crypto KOL{' '}
            <span className="text-gradient-brand">Engagement Rate</span>{' '}
            Calculator
          </h1>
        </div>

        {/* Embedded tool card */}
        <div className="mx-auto mb-20 w-full max-w-[71rem] overflow-hidden rounded-xl border border-black/10 bg-white shadow-nav">
          {/* mini app nav */}
          <div className="flex items-center justify-between gap-4 border-b border-black/5 px-5 py-3">
            <span className="text-gradient-brand font-display text-lg font-semibold leading-none">
              Kolio
            </span>
            <nav className="hidden items-center gap-6 lg:flex">
              {NAV_LINKS.map((l) => (
                <span
                  key={l}
                  className="text-sm font-medium text-foreground/70"
                >
                  {l}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground/70">
                Request a demo
              </span>
              <span className="hidden text-sm font-medium text-foreground/70 sm:inline">
                Login
              </span>
              <span className="rounded-md bg-background-soft px-3 py-1.5 text-sm font-semibold text-foreground">
                Try for Free
              </span>
            </div>
          </div>

          {/* tool body */}
          <div className="flex flex-col items-center gap-5 px-4 py-8 md:px-8 md:py-10">
            <p className="my-0 max-w-[38rem] text-center text-body leading-6 text-foreground">
              Check the real engagement rate of any crypto KOL on X (Twitter)
              before you spend a single token. Analyze likes, replies, reposts,
              and post-level engagement to separate genuine reach from inflated
              follower counts.
            </p>

            <div className="w-full max-w-[35rem]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inline-flex w-full items-center gap-2 overflow-hidden rounded-xl bg-background-soft p-3"
              >
                <Search size={16} className="ml-2 shrink-0 text-ink" />
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="@handle"
                  className="flex-1 border-none bg-transparent text-sm font-normal leading-5 text-foreground outline-none placeholder:text-foreground/40"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold leading-tight text-white transition-colors hover:bg-[#333333]"
                >
                  Check KOL
                </button>
              </form>
            </div>

            {/* result placeholder area */}
            <div className="mt-2 flex h-72 w-full max-w-[59rem] items-center justify-center rounded-lg border border-dashed border-violet bg-white shadow-[4px_4px_12px_rgba(214,218,255,0.4)]">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet border-t-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
