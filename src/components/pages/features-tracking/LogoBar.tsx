import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const LOGOS = [
  { src: `${CDN}/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif`, alt: 'Mixtiles' },
  { src: `${CDN}/695e31383e7f179a9e1126a9_logo_square_birkenstock.avif`, alt: 'Birkenstock' },
  { src: `${CDN}/695e3378f46f597d97c511fa_logo_square_joom.avif`, alt: 'Joom' },
  { src: `${CDN}/695e36d82a8d1ed031b06397_logo_square_stanley.avif`, alt: 'Stanley 1913' },
  { src: `${CDN}/695e37060aaf7e4f6196ad87_logo_square_montblanc.avif`, alt: 'Montblanc' },
  { src: `${CDN}/695e37a1fa416941c83a472f_logo_square_nordvpn.avif`, alt: 'NordVPN' },
  { src: `${CDN}/695e3bf72ab66825311a1a16_logo_square_bonprix.avif`, alt: 'Bonprix' },
  { src: `${CDN}/695e3c004f1d55f72651370c_logo_square_sennheiser.avif`, alt: 'Sennheiser' },
  { src: `${CDN}/695e3c86fa741abad6a4018f_logo_square_charles-keith.avif`, alt: 'Charles & Keith' },
  { src: `${CDN}/695e3c90d80020731995ce9e_logo_square_dbrand.avif`, alt: 'dbrand' },
  { src: `${CDN}/695e3cd668139657682e6d17_logo_square_victoria%20secret.avif`, alt: 'Victoria’s Secret' },
  { src: `${CDN}/695e3d4e7a9ad79eedf4e999_logo_square_burga.avif`, alt: 'BURGA' },
  { src: `${CDN}/695e3df7119d17bbc064df4b_logo_square_farfetch.avif`, alt: 'Farfetch' },
  { src: `${CDN}/695e3e03a94c51fe33acbcc9_logo_square_9%20sleep.avif`, alt: 'Eight Sleep' },
  { src: `${CDN}/695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif`, alt: 'Adapt Naturals' },
];

/** Trusted-by logo wall. */
export default function LogoBar() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="text-center text-[1.5rem] font-bold leading-tight text-foreground md:text-[1.875rem]">
          Modash is trusted by 2300+ in-house teams
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-12">
          {LOGOS.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="h-9 w-auto object-contain md:h-10"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
