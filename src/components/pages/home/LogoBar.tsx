import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const LOGOS: { name: string; file: string }[] = [
  { name: 'Mixtiles', file: '695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif' },
  { name: 'Birkenstock', file: '695e31383e7f179a9e1126a9_logo_square_birkenstock.avif' },
  { name: 'Joom', file: '695e3378f46f597d97c511fa_logo_square_joom.avif' },
  { name: 'Stanley 1913', file: '695e36d82a8d1ed031b06397_logo_square_stanley.avif' },
  { name: 'Montblanc', file: '695e37060aaf7e4f6196ad87_logo_square_montblanc.avif' },
  { name: 'NordVPN', file: '695e37a1fa416941c83a472f_logo_square_nordvpn.avif' },
  { name: 'Bonprix', file: '695e3bf72ab66825311a1a16_logo_square_bonprix.avif' },
  { name: 'Sennheiser', file: '695e3c004f1d55f72651370c_logo_square_sennheiser.avif' },
  { name: 'Charles & Keith', file: '695e3c86fa741abad6a4018f_logo_square_charles-keith.avif' },
  { name: 'dbrand', file: '695e3c90d80020731995ce9e_logo_square_dbrand.avif' },
  { name: 'Farfetch', file: '695e3df7119d17bbc064df4b_logo_square_farfetch.avif' },
  { name: 'BURGA', file: '695e3d4e7a9ad79eedf4e999_logo_square_burga.avif' },
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {LOGOS.map((l) => (
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

/** Trusted-by logo marquee — two duplicated rows scrolling right→left. */
export default function LogoBar() {
  return (
    <section className="bg-background-warm pb-16 pt-20 md:pb-24 md:pt-28">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Customers
          </p>
          <h2 className="mt-3 font-display text-h4 text-foreground md:text-[2.5rem]">
            Trusted by 2300+ in-house teams
          </h2>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow />
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-warm to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-warm to-transparent" />
        </div>
      </Container>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
