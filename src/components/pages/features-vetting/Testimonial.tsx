import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Centered featured testimonial with quote mark, author and brand logo. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
          <img
            src={`${CDN}/682ded8928b2561009cb96af_%E2%80%9C.png`}
            alt=""
            width={45}
            className="w-[34px] md:w-[45px]"
            loading="lazy"
          />
          <p className="mt-6 text-[1.625rem] leading-[1.2] text-foreground md:text-[2rem]">
            With Kolio we vetted and onboarded 60+ crypto KOLs and 400+ nano voices
            for our token launch — across X, Telegram and YouTube. The proof-based
            profiles let us cut the bot-inflated accounts on day one, and on-chain
            attribution showed us exactly which KOLs actually drove wallets.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={`${CDN}/6846b82ce1c3620fe7a9efff_img_aliz_accent.avif`}
              alt="Alíz Sipkai"
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <div className="text-body font-semibold text-foreground">Alíz Sipkai</div>
              <div className="text-body-sm text-foreground/60">
                Head of Growth, Web3 Protocol
              </div>
            </div>
            <div className="mx-2 h-10 w-px bg-black/10" />
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Helix<span className="text-gradient-brand">Labs</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
