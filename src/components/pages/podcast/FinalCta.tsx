import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const LOGOS = [
  `${CDN}/65dde750dee63920305912f5_logo_mixtiles.avif`,
  `${CDN}/655cba95058908fd54c80577_logo_mont%20blanc.webp`,
  `${CDN}/655cba9516b5580a55667aec_logo_farfetch.webp`,
  `${CDN}/655cc164c307c8bb7e2e9000_logo_dbrand.webp`,
  `${CDN}/673c7beedb310838b2ec7346_logo_birkenstock.png`,
  `${CDN}/655cba96f00f5d0c48acedda_logo_bonprix.webp`,
  `${CDN}/655cba95ccdff403a5b75bb6_logo_victorias%20secret.webp`,
  `${CDN}/655cba96e09ed6de10ea7924_logo_sennheiser.webp`,
];

export default function FinalCta() {
  return (
    <section className="bg-[#d6daff] py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGOS.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-5 md:h-6 w-auto object-contain opacity-90"
              loading="lazy"
            />
          ))}
        </div>
        <h2 className="mx-auto mt-12 max-w-[860px] text-center font-display text-h4 md:text-h2 leading-tight text-[#1b1b4d]">
          Join 1200+ B2C brands that use Modash to scale profitable influencer
          marketing programs
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="https://app.modash.io/register"
            className="inline-flex items-center justify-center h-12 px-7 rounded-sm bg-[#4f56ff] text-white text-body font-semibold uppercase tracking-wide transition hover:opacity-90"
          >
            Try for free
          </a>
        </div>
        <p className="mt-4 text-center text-body-sm text-foreground/60">
          Try for free. No credit card required.
        </p>
      </Container>
    </section>
  );
}
