import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const FORM =
  'https://form.jotform.com/modash/intro-modash-api?utm_source=api_raw&utm_campaign=web';

/** API Raw hero — pink accent block, centered headline, floating tooltip art. */
export default function Hero() {
  return (
    <section className="bg-background pt-4 md:pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-pink px-6 py-16 text-center md:px-12 md:py-24">
          {/* floating tooltip art */}
          <img
            src={`${CDN}/6842cc763304eaf0b2751726_Custom%20Tooltip_orange.avif`}
            width={107}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute left-4 top-10 hidden w-[80px] md:left-16 md:top-24 md:block md:w-[107px]"
          />
          <img
            src={`${CDN}/6842ccbd27778c535afe77a1_Custom%20Tooltip_purple.avif`}
            width={121}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute right-4 top-24 hidden w-[90px] md:right-20 md:top-32 md:block md:w-[121px]"
          />
          <img
            src={`${CDN}/6842ef6091e586f4c2807aac_Custom%20Tooltip_purple%20(1).avif`}
            width={116}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute bottom-10 right-10 hidden w-[100px] md:block md:w-[116px]"
          />

          <div className="relative mx-auto max-w-[820px]">
            <h1 className="font-display text-[2rem] leading-[1.08] text-ink sm:text-[3rem] md:text-[4rem]">
              The API Layer For
              <br className="hidden md:block" /> Real-Time Influencer Data
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-body-md text-ink/80">
              Our Raw API provides live data directly from any influencer
              profile across Instagram, TikTok, and YouTube. It&apos;s designed
              for applications that demand up-to-date accuracy, monitoring, and
              enrichment.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </div>
      </Container>
    </section>
  );
}
