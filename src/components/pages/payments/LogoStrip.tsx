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
  { src: `${CDN}/695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif`, name: 'Adapt Naturals' },
  { src: `${CDN}/695e3c86fa741abad6a4018f_logo_square_charles-keith.avif`, name: 'Charles & Keith' },
  { src: `${CDN}/695e3c90d80020731995ce9e_logo_square_dbrand.avif`, name: 'dbrand' },
  { src: `${CDN}/695e3cd668139657682e6d17_logo_square_victoria%20secret.avif`, name: "Victoria's Secret" },
  { src: `${CDN}/695e3df7119d17bbc064df4b_logo_square_farfetch.avif`, name: 'Farfetch' },
  { src: `${CDN}/695e3e03a94c51fe33acbcc9_logo_square_9%20sleep.avif`, name: 'Eight Sleep' },
  { src: `${CDN}/695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif`, name: 'BURGA' },
];

/** Social proof — heading + grid of brand logos. */
export default function LogoStrip() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold text-ink">
          Modash is trusted by 2300+ in-house teams
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
          {LOGOS.map((l, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="whitespace-nowrap text-body font-medium text-foreground/70">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
