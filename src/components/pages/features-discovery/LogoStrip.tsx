import Container from '@/components/ui/Container';

const LOGOS = [
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif', 'Mixtiles'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e31383e7f179a9e1126a9_logo_square_birkenstock.avif', 'Birkenstock'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e3378f46f597d97c511fa_logo_square_joom.avif', 'Joom'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e36d82a8d1ed031b06397_logo_square_stanley.avif', 'Stanley 1913'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e37060aaf7e4f6196ad87_logo_square_montblanc.avif', 'Montblanc'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e37a1fa416941c83a472f_logo_square_nordvpn.avif', 'NordVPN'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e3bf72ab66825311a1a16_logo_square_bonprix.avif', 'Bonprix'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e3c004f1d55f72651370c_logo_square_sennheiser.avif', 'Sennheiser'],
] as const;

/** "Trusted by 2300+ teams" heading + horizontal logo row. */
export default function LogoStrip() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-center font-display text-h4 md:text-[2.5rem] leading-tight text-foreground">
          Modash is trusted by 2300+ in-house teams
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGOS.map(([src, name], i) => (
            <div key={i} className="flex items-center gap-2 opacity-80">
              <img src={src} width={40} height={40} alt="" className="h-9 w-9 rounded object-contain" loading="lazy" />
              <span className="text-body-md font-medium text-foreground/80">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
