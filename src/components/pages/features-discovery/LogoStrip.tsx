import Container from '@/components/ui/Container';

const LOGOS = [
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif', 'Mixtiles'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6835b37a2bcf770c96efc606_logo_burga.avif', 'Joom'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6994372c86903c2d65de0af0_logo_biotech_testimonial.avif', 'Stanley 1913'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699438738d459b765567601e_logo_blast_testimonial.avif', 'Montblanc'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif', 'NordVPN'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6835b37a2bcf770c96efc606_logo_burga.avif', 'Bonprix'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/6994372c86903c2d65de0af0_logo_biotech_testimonial.avif', 'Sennheiser'],
  ['https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/699438738d459b765567601e_logo_blast_testimonial.avif', 'Birkenstock'],
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
