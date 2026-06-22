import Container from '@/components/ui/Container';

const DEMO = '/demo-confirmation';
const DOCS = '/demo-confirmation';

/** Kolio Raw API hero — soft neutral section, editorial display headline, on-chain chips, endpoint preview. */
export default function Hero() {
  return (
    <section className="bg-gray-50">
      <Container>
        <div className="relative mx-auto flex max-w-[1040px] flex-col items-center pt-24 pb-20 text-center md:pt-32 md:pb-24">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="chip chip-onchain font-mono-tnum">GET /v1/raw</span>
            <span className="chip chip-ink">Protocols</span>
            <span className="chip chip-ink">Exchanges</span>
            <span className="chip chip-ink">Builders</span>
          </div>

          <h1 className="display-xl font-display text-[2.75rem] text-ink sm:text-[4.25rem] md:text-[5.5rem]">
            The data layer for{' '}
            <span className="text-gradient-brand">verified</span> crypto KOLs
          </h1>

          <p className="mx-auto mt-8 max-w-[640px] text-body-md text-ink/80">
            The Kolio Raw API delivers live, proof-based data straight from any
            crypto KOL profile across X, YouTube, TikTok, and Telegram. Built for
            web3 teams that need real reach, audience quality, and on-chain
            campaign signals &mdash; not vanity metrics.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={DEMO}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Request a demo
            </a>
            <a
              href={DOCS}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ink/20 bg-white px-6 text-body font-semibold text-ink shadow-btn transition hover:bg-gray-50"
            >
              See API docs
            </a>
          </div>

          {/* endpoint preview — terminal punctuation under the fold */}
          <div className="surface-onchain mt-14 w-full max-w-[760px] overflow-hidden rounded-xl p-5 text-left md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-pill bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-pill bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-pill bg-white/20" />
              <span className="ml-2 font-mono-tnum text-[11px] uppercase tracking-wide text-white/40">
                api.kolio.io
              </span>
            </div>
            <pre className="font-mono-tnum overflow-x-auto text-[12px] leading-[1.7] text-white/80 md:text-[13px]">
{`$ curl https://api.kolio.io/v1/raw/x/kol-info?handle=cryptodefiana
{ "is_verified": true, "real_follower_count": 318000, "niche": "DeFi" }`}
            </pre>
            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
              {[
                { stat: '4', label: 'channels' },
                { stat: 'Live', label: 'on-demand data' },
                { stat: '30+', label: 'datapoints / KOL' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="num-display text-[1.75rem] leading-none text-white md:text-[2rem]">
                    {s.stat}
                  </div>
                  <p className="mt-2 text-body-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
