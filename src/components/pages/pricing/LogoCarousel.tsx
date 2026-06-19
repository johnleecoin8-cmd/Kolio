import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const LOGOS = [
  { src: `${CDN}/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif`, name: 'Mixtiles' },
  { src: `${CDN}/695e31383e7f179a9e1126a9_logo_square_birkenstock.avif`, name: 'Birkenstock' },
  { src: `${CDN}/695e3378f46f597d97c511fa_logo_square_joom.avif`, name: 'Joom' },
  { src: `${CDN}/695e36d82a8d1ed031b06397_logo_square_stanley.avif`, name: 'Stanley 1913' },
  { src: `${CDN}/695e37060aaf7e4f6196ad87_logo_square_montblanc.avif`, name: 'Montblanc' },
  { src: `${CDN}/695e37a1fa416941c83a472f_logo_square_nordvpn.avif`, name: 'NordVPN' },
  { src: `${CDN}/695e3bf72ab66825311a1a16_logo_square_bonprix.avif`, name: 'Bonprix' },
  { src: `${CDN}/695e3c004f1d55f72651370c_logo_square_sennheiser.avif`, name: 'Sennheiser' },
  { src: `${CDN}/695e3c86fa741abad6a4018f_logo_square_charles-keith.avif`, name: 'Charles & Keith' },
  { src: `${CDN}/695e3c90d80020731995ce9e_logo_square_dbrand.avif`, name: 'dbrand' },
  { src: `${CDN}/695e3cd668139657682e6d17_logo_square_victoria%20secret.avif`, name: "Victoria's Secret" },
  { src: `${CDN}/695e3d4e7a9ad79eedf4e999_logo_square_burga.avif`, name: 'BURGA' },
  { src: `${CDN}/695e3df7119d17bbc064df4b_logo_square_farfetch.avif`, name: 'Farfetch' },
  { src: `${CDN}/695e3e03a94c51fe33acbcc9_logo_square_9%20sleep.avif`, name: 'Eight Sleep' },
  { src: `${CDN}/695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif`, name: 'Adapt Naturals' },
  { src: `${CDN}/69bbf12ae95dbf93e94746f3_logo_square_natural%20shilajit.avif`, name: 'Natural Shilajit' },
];

/** Trusted-by brand logo strip. */
export default function LogoCarousel() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-10 text-center text-body-md font-semibold text-foreground/70">
          Modash is trusted by 2300+ in-house teams
        </h2>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex aspect-square items-center justify-center rounded-lg border border-black/5 bg-white p-2"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full rounded object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
