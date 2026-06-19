import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** API hero — full brand section, oversized display headline with floating role pills. */
export default function Hero() {
  return (
    <section className="bg-pink-light">
      <Container>
        <div className="relative flex flex-col items-center pt-24 pb-28 text-center md:pt-32 md:pb-40">
          {/* floating role pills */}
          <span className="absolute left-2 top-[68%] z-10 -rotate-6 rounded-pill bg-purple px-3 py-1 text-body-sm font-semibold text-purple-dark shadow-btn md:left-[24%] md:top-[40%]">
            DeFi
            <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 bg-purple" />
          </span>
          <span className="absolute right-2 top-[20%] z-10 rotate-3 rounded-pill bg-pink-dark px-3 py-1 text-body-sm font-semibold text-white shadow-btn md:left-1/2 md:right-auto md:top-[12%] md:-translate-x-1/2">
            On-chain
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-pink-dark" />
          </span>
          <span className="absolute right-2 top-[80%] z-10 rotate-6 rounded-pill bg-orange px-3 py-1 text-body-sm font-semibold text-orange-dark shadow-btn md:right-[22%] md:top-[36%]">
            Verified
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-orange" />
          </span>

          <h1 className="font-display text-[3rem] uppercase leading-[0.92] text-ink sm:text-[4.5rem] md:text-[6rem]">
            Build On <span className="text-gradient-brand">Verified</span>
            <br />
            Crypto KOL Data
          </h1>

          <p className="mx-auto mt-8 max-w-[620px] text-body-md text-ink/80">
            The web3 influencer marketing platform, exposed as an API. Query proof-based
            profiles and audience-quality data for crypto KOLs across X, YouTube, TikTok,
            and Telegram — with clean, developer-first endpoints.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink to="/demo-confirmation" variant="primary">
              Request a demo
            </ButtonLink>
            <ButtonLink to="/demo-confirmation" variant="secondary">
              See API docs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
