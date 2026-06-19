import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const BRANDS: { name: string; logo: string }[] = [
  { name: 'Mixtiles', logo: `${CDN}/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif` },
  { name: 'Birkenstock', logo: `${CDN}/695e31383e7f179a9e1126a9_logo_square_birkenstock.avif` },
  { name: 'Joom', logo: `${CDN}/695e3378f46f597d97c511fa_logo_square_joom.avif` },
  { name: 'Stanley 1913', logo: `${CDN}/695e36d82a8d1ed031b06397_logo_square_stanley.avif` },
  { name: 'Montblanc', logo: `${CDN}/695e37060aaf7e4f6196ad87_logo_square_montblanc.avif` },
  { name: 'NordVPN', logo: `${CDN}/695e37a1fa416941c83a472f_logo_square_nordvpn.avif` },
  { name: 'Bonprix', logo: `${CDN}/695e3bf72ab66825311a1a16_logo_square_bonprix.avif` },
  { name: 'Sennheiser', logo: `${CDN}/695e3c004f1d55f72651370c_logo_square_sennheiser.avif` },
  { name: 'Eight Sleep', logo: `${CDN}/695e3e03a94c51fe33acbcc9_logo_square_9%20sleep.avif` },
  { name: 'Adapt Naturals', logo: `${CDN}/695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif` },
  { name: 'Charles & Keith', logo: `${CDN}/695e3c86fa741abad6a4018f_logo_square_charles-keith.avif` },
  { name: 'dbrand', logo: `${CDN}/695e3c90d80020731995ce9e_logo_square_dbrand.avif` },
  { name: "Victoria's Secret", logo: `${CDN}/695e3cd668139657682e6d17_logo_square_victoria%20secret.avif` },
  { name: 'BURGA', logo: `${CDN}/695e3d4e7a9ad79eedf4e999_logo_square_burga.avif` },
  { name: 'Farfetch', logo: `${CDN}/695e3df7119d17bbc064df4b_logo_square_farfetch.avif` },
  { name: 'Natural Shilajit', logo: `${CDN}/69bbf12ae95dbf93e94746f3_logo_square_natural%20shilajit.avif` },
];

function Item({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-6">
      <img src={logo} alt={name} className="h-9 w-9 rounded-lg object-contain" />
      <span className="whitespace-nowrap text-body-md font-medium text-ink">
        {name}
      </span>
    </div>
  );
}

/** Trusted-by marquee with two looping rows. */
export default function LogoBar() {
  const rowA = BRANDS.slice(0, 8);
  const rowB = BRANDS.slice(8);
  return (
    <section className="overflow-hidden bg-background py-16 md:py-20">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold text-ink">
          Modash is trusted by 2300+ in-house teams
        </h2>
      </Container>

      <div className="mt-10 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {rowA.map((b) => (
            <Item key={b.name} {...b} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {rowB.map((b) => (
            <Item key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
