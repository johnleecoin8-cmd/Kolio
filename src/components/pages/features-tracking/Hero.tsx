import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Hero — bold display headline with one gradient-highlighted word, dual CTA. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-violet-light pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-eyebrow font-semibold text-foreground/50">
            <a href="/features" className="transition hover:text-foreground/70">
              Track
            </a>
            <span>›</span>
            <span className="text-foreground/70">Measure</span>
          </div>

          <h1 className="font-display text-[2.5rem] uppercase leading-[1.02] text-foreground sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
            Every KOL post and on-chain result,
            <br />
            <span className="text-gradient-brand">tracked automatically</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-body-md text-foreground/70">
            See every crypto KOL post and the on-chain results it drives in one
            dashboard. No chasing screenshots in Telegram, no spreadsheet math, no
            wasted reporting hours.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start free
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Request a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              Free to start・No card required
            </p>
          </div>
        </div>
      </Container>

      {/* product mockup — campaign tracking dashboard, brand-neutral */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-background" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <div className="rounded-xl border border-black/10 bg-white p-5 shadow-nav md:p-7">
            {/* dashboard header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5">
              <div>
                <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
                  Campaign · L2 Mainnet Launch
                </p>
                <p className="mt-1 text-body-md font-bold text-foreground">
                  Live KOL tracking
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-background-soft px-3 py-1.5 text-body-sm font-medium text-foreground/70">
                <span className="h-2 w-2 rounded-full bg-positive" />
                Synced on-chain
              </span>
            </div>

            {/* stat row */}
            <div className="grid grid-cols-2 gap-4 pt-5 md:grid-cols-4">
              {[
                { label: 'KOLs live', value: '64' },
                { label: 'Posts tracked', value: '512' },
                { label: 'Impressions', value: '8.4M' },
                { label: 'On-chain conversions', value: '3,910' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg bg-background-soft p-4 text-left"
                >
                  <p className="text-[1.5rem] font-bold leading-none text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-body-sm text-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>

            {/* mini bar chart */}
            <div className="mt-5 flex items-end gap-2 rounded-lg bg-background-soft p-4">
              {[40, 62, 51, 78, 66, 90, 72, 84, 58, 96].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t bg-gradient-brand"
                  style={{ height: `${h}px` }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
