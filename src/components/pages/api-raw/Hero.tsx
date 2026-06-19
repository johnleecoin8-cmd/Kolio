import Container from '@/components/ui/Container';

const DEMO = '/demo-confirmation';
const DOCS = '/demo-confirmation';

/** Kolio Raw API hero — pale section, oversized display headline with one gradient word, floating role pills. */
export default function Hero() {
  return (
    <section className="bg-pink-light">
      <Container>
        <div className="relative mx-auto flex max-w-[1040px] flex-col items-center pt-24 pb-24 text-center md:pt-32 md:pb-28">
          {/* floating role pills */}
          <span className="absolute left-1/2 top-[10%] z-10 hidden -translate-x-1/2 rotate-3 rounded-pill bg-pink-dark px-3 py-1 text-body-sm font-semibold text-white shadow-btn md:inline-block">
            Protocols
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-pink-dark" />
          </span>
          <span className="absolute left-[22%] top-[64%] z-10 hidden -rotate-6 rounded-pill bg-purple px-3 py-1 text-body-sm font-semibold text-purple-dark shadow-btn md:inline-block">
            Exchanges
            <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 bg-purple" />
          </span>
          <span className="absolute right-[20%] top-[64%] z-10 hidden rotate-6 rounded-pill bg-orange px-3 py-1 text-body-sm font-semibold text-orange-dark shadow-btn md:inline-block">
            Builders
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-orange" />
          </span>

          <h1 className="font-display text-[2.75rem] uppercase leading-[0.92] text-ink sm:text-[4.5rem] md:text-[6rem]">
            The API Layer For
            <br />
            <span className="text-gradient-brand">Verified</span> Crypto KOLs
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

          {/* later.com-inspired stat callouts */}
          <div className="mt-14 grid w-full max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { stat: '4', label: 'channels: X, YouTube, TikTok & Telegram' },
              { stat: 'Live', label: 'on-demand reach & audience data' },
              { stat: '30+', label: 'datapoints per KOL profile' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-[2.5rem] leading-none text-ink md:text-[3rem]">
                  {s.stat}
                </div>
                <p className="mt-2 text-body-sm text-ink/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
