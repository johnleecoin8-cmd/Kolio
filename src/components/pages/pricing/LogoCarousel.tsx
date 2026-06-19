import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Logo = { name: string; file: string };

const ROW_ONE: Logo[] = [
  { name: 'Mixtiles', file: '695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif' },
  { name: 'Birkenstock', file: '695e31383e7f179a9e1126a9_logo_square_birkenstock.avif' },
  { name: 'Joom', file: '695e3378f46f597d97c511fa_logo_square_joom.avif' },
  { name: 'Stanley 1913', file: '695e36d82a8d1ed031b06397_logo_square_stanley.avif' },
  { name: 'Montblanc', file: '695e37060aaf7e4f6196ad87_logo_square_montblanc.avif' },
  { name: 'NordVPN', file: '695e37a1fa416941c83a472f_logo_square_nordvpn.avif' },
  { name: 'Bonprix', file: '695e3bf72ab66825311a1a16_logo_square_bonprix.avif' },
  { name: 'Sennheiser', file: '695e3c004f1d55f72651370c_logo_square_sennheiser.avif' },
];

const ROW_TWO: Logo[] = [
  { name: 'Charles & Keith', file: '695e3c86fa741abad6a4018f_logo_square_charles-keith.avif' },
  { name: 'dbrand', file: '695e3c90d80020731995ce9e_logo_square_dbrand.avif' },
  { name: "Victoria's Secret", file: '695e3cd668139657682e6d17_logo_square_victoria%20secret.avif' },
  { name: 'BURGA', file: '695e3d4e7a9ad79eedf4e999_logo_square_burga.avif' },
  { name: 'Natural Shilajit', file: '69bbf12ae95dbf93e94746f3_logo_square_natural%20shilajit.avif' },
  { name: 'Eight Sleep', file: '695e3e03a94c51fe33acbcc9_logo_square_9%20sleep.avif' },
  { name: 'Adapt Naturals', file: '695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif' },
  { name: 'Farfetch', file: '695e3df7119d17bbc064df4b_logo_square_farfetch.avif' },
];

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {logos.map((l) => (
        <div key={l.name} className="flex shrink-0 items-center gap-3">
          <img
            src={`${CDN}/${l.file}`}
            alt={l.name}
            loading="lazy"
            width={48}
            className="h-12 w-12 rounded-lg object-contain"
          />
          <span className="whitespace-nowrap text-body-lg text-foreground/80">
            {l.name}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Trusted-by brand logo strip — two marquee rows scrolling opposite ways. */
export default function LogoCarousel() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center text-[1.5rem] font-bold leading-tight text-foreground md:text-[1.75rem]">
          Modash is trusted by 2300+ in-house teams
        </h2>

        <div className="relative space-y-8 overflow-hidden">
          {/* row 1: scrolls right → left */}
          <div className="flex w-max animate-[marqueePricing_45s_linear_infinite]">
            <LogoRow logos={ROW_ONE} />
            <LogoRow logos={ROW_ONE} />
          </div>
          {/* row 2: scrolls left → right */}
          <div className="flex w-max animate-[marqueePricingAlt_45s_linear_infinite]">
            <LogoRow logos={ROW_TWO} />
            <LogoRow logos={ROW_TWO} />
          </div>

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>

      <style>{`
        @keyframes marqueePricing {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueePricingAlt {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
