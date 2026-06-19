import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Hero — bold display headline with one gradient word, dual CTA, dashboard mockup on a coral band. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-body font-semibold text-foreground">
            <img
              src={`${CDN}/68407b94c15a91bab0f48942_icon_analytics.png`}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
            KOL Analytics
          </div>

          <h1 className="max-w-[16ch] font-display text-[2.75rem] uppercase leading-[0.98] text-foreground sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
            <span className="text-gradient-brand">Vet</span> crypto KOLs before
            you send a dollar
          </h1>

          <p className="mx-auto mt-6 max-w-[560px] text-body-md text-foreground/70">
            Stop trusting screenshots and follower counts. See real reach,
            audience quality, and past campaign performance for any crypto KOL
            on X, YouTube, TikTok, and Telegram — in just a few clicks.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Start vetting KOLs
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              Built for web3 brands・No setup fees
            </p>
          </div>

          {/* later.com-style stat callouts */}
          <div className="mt-12 grid w-full max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { stat: 'Real reach', label: 'audience quality scored, not vanity counts' },
              { stat: 'On-chain', label: 'payments & escrow released on delivery' },
              { stat: 'Full funnel', label: 'attribution from post to wallet' },
            ].map((s) => (
              <div key={s.stat} className="flex flex-col items-center text-center">
                <span className="font-display text-[1.75rem] uppercase leading-none text-gradient-brand">
                  {s.stat}
                </span>
                <span className="mt-2 text-body-sm text-foreground/60">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* coral band behind the screenshot */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute inset-x-0 top-[18%] bottom-0 bg-purple-light" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1216px] px-4 sm:px-6">
          <img
            src={`${CDN}/68407c1b4d1d1717b4acf4ba_hero_image_analytics.avif`}
            alt="Kolio KOL analytics profile"
            loading="eager"
            width={1186}
            className="mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
