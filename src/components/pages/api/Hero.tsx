import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** API hero — full pink section, oversized display headline with floating role pills. */
export default function Hero() {
  return (
    <section className="bg-pink">
      <Container>
        <div className="relative flex flex-col items-center pt-20 pb-28 text-center md:pt-28 md:pb-36">
          {/* floating role pills */}
          <span className="absolute left-[16%] top-[34%] hidden -rotate-6 rounded-pill bg-purple px-3 py-1 text-body-sm font-semibold text-purple-dark md:inline-block">
            Visionary
          </span>
          <span className="absolute left-1/2 top-[8%] hidden -translate-x-1/2 rotate-3 rounded-pill bg-pink-dark px-3 py-1 text-body-sm font-semibold text-white md:inline-block">
            Engineer
          </span>
          <span className="absolute right-[14%] top-[40%] hidden rotate-6 rounded-pill bg-orange px-3 py-1 text-body-sm font-semibold text-orange-dark md:inline-block">
            Builder
          </span>

          <h1 className="font-display text-[2.75rem] uppercase leading-[0.95] text-ink sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem]">
            Build With The Richest
            <br />
            Creator Data API
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-body-md text-ink/80">
            From concept to launch, faster than ever before. Query profiles and data
            of 380M+ influencers across Instagram, TikTok, and YouTube, all with
            simple APIs made for developers.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://form.jotform.com/modash/intro-modash-api"
              variant="primary"
            >
              Request a demo
            </ButtonA>
            <ButtonA href="https://docs.modash.io/" variant="secondary">
              See API docs
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
