import Container from '@/components/ui/Container';

const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

/** API Raw hero — full pale-pink section, oversized display headline, floating role pills. */
export default function Hero() {
  return (
    <section className="bg-pink-light">
      <Container>
        <div className="relative mx-auto flex max-w-[1040px] flex-col items-center pt-24 pb-24 text-center md:pt-32 md:pb-28">
          {/* floating role pills */}
          <span className="absolute left-1/2 top-[10%] z-10 hidden -translate-x-1/2 rotate-3 rounded-pill bg-pink-dark px-3 py-1 text-body-sm font-semibold text-white shadow-btn md:inline-block">
            Engineer
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-pink-dark" />
          </span>
          <span className="absolute left-[22%] top-[64%] z-10 hidden -rotate-6 rounded-pill bg-purple px-3 py-1 text-body-sm font-semibold text-purple-dark shadow-btn md:inline-block">
            Visionary
            <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 bg-purple" />
          </span>
          <span className="absolute right-[20%] top-[64%] z-10 hidden rotate-6 rounded-pill bg-orange px-3 py-1 text-body-sm font-semibold text-orange-dark shadow-btn md:inline-block">
            Builder
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-orange" />
          </span>

          <h1 className="font-display text-[2.75rem] uppercase leading-[0.92] text-ink sm:text-[4.5rem] md:text-[6rem]">
            The API Layer For
            <br />
            Real-Time Influencer Data
          </h1>

          <p className="mx-auto mt-8 max-w-[640px] text-body-md text-ink/80">
            Our Raw API provides live data directly from any influencer profile
            across Instagram, TikTok, and YouTube. It&apos;s designed for
            applications that demand up-to-date accuracy, monitoring, and
            enrichment.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={FORM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              Request a demo
            </a>
            <a
              href="https://docs.modash.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ink/20 bg-white px-6 text-body font-semibold text-ink shadow-btn transition hover:bg-gray-50"
            >
              See API docs
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
