import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** API hero — full pink section, oversized display headline with floating role pills. */
export default function Hero() {
  return (
    <section className="bg-pink-light">
      <Container>
        <div className="relative flex flex-col items-center pt-24 pb-28 text-center md:pt-32 md:pb-40">
          {/* floating role pills */}
          <span className="absolute left-2 top-[68%] z-10 -rotate-6 rounded-pill bg-purple px-3 py-1 text-body-sm font-semibold text-purple-dark shadow-btn md:left-[24%] md:top-[40%]">
            Visionary
            <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 bg-purple" />
          </span>
          <span className="absolute right-2 top-[20%] z-10 rotate-3 rounded-pill bg-pink-dark px-3 py-1 text-body-sm font-semibold text-white shadow-btn md:left-1/2 md:right-auto md:top-[12%] md:-translate-x-1/2">
            Engineer
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-pink-dark" />
          </span>
          <span className="absolute right-2 top-[80%] z-10 rotate-6 rounded-pill bg-orange px-3 py-1 text-body-sm font-semibold text-orange-dark shadow-btn md:right-[22%] md:top-[36%]">
            Builder
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-orange" />
          </span>

          <h1 className="font-display text-[3rem] uppercase leading-[0.92] text-ink sm:text-[4.5rem] md:text-[6rem]">
            Build With The Richest
            <br />
            Creator Data API
          </h1>

          <p className="mx-auto mt-8 max-w-[620px] text-body-md text-ink/80">
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
