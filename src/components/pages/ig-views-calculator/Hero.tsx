import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BadgeCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import HeroPanel from '@/components/kit/HeroPanel';

/**
 * Calm-premium hero for the Crypto KOL Reach Checker.
 * Big rounded dark HeroPanel with flowing art + light display headline, then a
 * floating reach-result card (handle search + intentional views chart) that
 * overlaps onto the warm canvas as the signature floating treatment.
 */
export default function Hero() {
  const [handle, setHandle] = useState('');

  return (
    <section className="canvas-warm">
      <HeroPanel
        eyebrow="Free crypto KOL vetting tool"
        title={
          <>
            Check any crypto KOL&apos;s{' '}
            <span className="text-gradient-brand">real reach</span>
          </>
        }
        subtitle="See past the vanity numbers — real views, engagement, audience quality, and recent posts on X. No sign-up, no wallet connect."
      >
        <Link
          to="/influencer-database"
          className="pill-light inline-flex items-center gap-2 rounded-pill px-6 py-3.5 font-semibold shadow-float-sm transition hover:opacity-90"
        >
          Explore the KOL index <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/demo-confirmation"
          className="rounded-pill border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Book a demo
        </Link>
      </HeroPanel>

      {/* Floating reach-result card — pulled up over the warm canvas */}
      <Container className="-mt-16 pb-20 md:-mt-24 md:pb-28">
        <div className="card-kit shadow-float mx-auto w-full max-w-5xl rounded-2xl p-6 md:p-9">
          {/* search row */}
          <form
            className="flex w-full items-center gap-2 rounded-pill border border-black/10 bg-white p-1.5 pl-5 shadow-float-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search className="h-4 w-4 shrink-0 text-foreground/60" />
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              name="kol-handle"
              autoComplete="off"
              placeholder="@VitalikButerin"
              className="flex-1 border-none bg-transparent text-body text-foreground outline-none placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-brand px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Check <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* result header */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-pill bg-gradient-brand text-body font-bold text-white">
                VB
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-body font-semibold text-foreground">Vitalik Buterin</span>
                  <BadgeCheck className="h-4 w-4 text-brand" />
                  <span className="chip chip-onchain">Real reach</span>
                </div>
                <div className="font-mono-tnum text-body-sm text-foreground/50">@VitalikButerin · crypto</div>
              </div>
            </div>
            <div className="text-right">
              <div className="num-display text-h3 leading-none text-brand">540.6K</div>
              <div className="eyebrow mt-1 !text-foreground/50">Avg views / post</div>
            </div>
          </div>

          {/* chart + stats */}
          <div className="mt-7 grid gap-7 md:grid-cols-[1.6fr_1fr]">
            <div>
              <div className="mb-3 flex items-center justify-between text-eyebrow text-foreground/50">
                <span>Views by post · last 12</span>
                <span className="num-display text-foreground/60">peak 1.4M</span>
              </div>
              <div className="relative h-32">
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
              {[['Min', '120K'], ['Median', '498K'], ['Max', '1.4M'], ['Real reach', '94%']].map(([l, v]) => (
                <div key={l} className="rounded-xl bg-gray-50 px-3 py-4">
                  <div className="num-display text-h5 leading-none text-foreground">{v}</div>
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
