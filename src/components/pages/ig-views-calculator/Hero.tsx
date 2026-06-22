import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Hero of the Crypto KOL Reach Checker.
 * Centered big heading (one word in the brand gradient) + centered description,
 * a single centered search bar (magnifier icon + handle input + check button),
 * a hairline divider, and a large bordered result/example card below.
 */
export default function Hero() {
  const [handle, setHandle] = useState('');

  return (
    <section className="bg-background pt-10 md:pt-16">
      <Container>
        {/* eyebrow */}
        <p className="eyebrow text-center">Free crypto KOL vetting tool</p>

        {/* page title — editorial display, one word in brand gradient */}
        <h1 className="display-xl mx-auto mt-4 max-w-4xl text-center font-display text-4xl uppercase text-foreground md:text-6xl xl:text-[5rem]">
          Crypto KOL <span className="text-gradient-brand">Reach</span> Checker
        </h1>

        {/* description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-body-md text-foreground/80">
          Check any crypto KOL&apos;s real reach, engagement rate, audience
          quality, and recent posts on X. Free, with no sign-up needed — see
          past the vanity numbers before you book.
        </p>

        {/* centered search bar */}
        <form
          className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-lg border border-black/10 bg-white p-1.5 pl-4 shadow-nav"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="h-4 w-4 shrink-0 text-foreground" />
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            name="kol-handle"
            autoComplete="off"
            placeholder="@VitalikButerin"
            className="flex-1 border-none bg-transparent text-body-sm leading-5 text-foreground placeholder:text-foreground/40 outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-ink px-5 text-body-sm font-semibold text-white shadow-btn transition hover:opacity-90"
          >
            Check Profile
          </button>
        </form>

        {/* hairline divider */}
        <div className="mx-auto mt-10 h-px w-full max-w-6xl bg-violet/20" />

        {/* example reach result card */}
        <div className="card-kit mx-auto mt-10 w-full max-w-6xl rounded-2xl p-6 text-left md:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-gradient-brand text-body font-bold text-white">VB</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-body font-semibold text-foreground">Vitalik Buterin</span>
                  <span className="chip chip-onchain">Real reach</span>
                </div>
                <div className="font-mono-tnum text-body-sm text-foreground/50">@VitalikButerin · crypto</div>
              </div>
            </div>
            <div className="text-right">
              <div className="num-display font-display text-h3 leading-none text-brand">540.6K</div>
              <div className="eyebrow mt-1 !text-foreground/50">Avg views / post</div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.6fr_1fr]">
            {/* intentional bar chart: shared baseline, consistent brand fill, tabular axis */}
            <div>
              <div className="mb-3 flex items-center justify-between text-eyebrow text-foreground/50">
                <span>Views by post · last 12</span>
                <span className="num-display text-foreground/60">peak 1.4M</span>
              </div>
              <div className="relative h-32">
                {/* gridline + baseline */}
                <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-hairline" />
                <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-2 border-b border-foreground/15">
                  {[48, 63, 41, 72, 90, 58, 81, 67, 96, 74, 60, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-brand/85 transition-colors hover:bg-brand"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-2 flex justify-between font-mono-tnum text-[11px] tabular-nums text-foreground/40">
                <span>P1</span>
                <span>P6</span>
                <span>P12</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[['Min', '120K'], ['Median', '498K'], ['Max', '1.4M'], ['Reels share', '62%']].map(([l, v]) => (
                <div key={l} className="rounded-md bg-gray-50 px-3 py-4">
                  <div className="num-display font-display text-h5 leading-none text-foreground">{v}</div>
                  <div className="mt-1 text-eyebrow text-foreground/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
