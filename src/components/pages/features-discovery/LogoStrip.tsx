import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const BASE = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/';

const ROW_1 = [
  ['695e2f2297f8dfc363874dd0_logo_square_mixtiles.avif', 'Mixtiles'],
  ['695e31383e7f179a9e1126a9_logo_square_birkenstock.avif', 'Birkenstock'],
  ['695e3378f46f597d97c511fa_logo_square_joom.avif', 'Joom'],
  ['695e36d82a8d1ed031b06397_logo_square_stanley.avif', 'Stanley 1913'],
  ['695e37060aaf7e4f6196ad87_logo_square_montblanc.avif', 'Montblanc'],
  ['695e37a1fa416941c83a472f_logo_square_nordvpn.avif', 'NordVPN'],
  ['695e3bf72ab66825311a1a16_logo_square_bonprix.avif', 'Bonprix'],
] as const;

const ROW_2 = [
  ['695e3c004f1d55f72651370c_logo_square_sennheiser.avif', 'Sennheiser'],
  ['695e3e11264ab4e00b78a64f_logo_square_adapt%20naturals.avif', 'Adapt Naturals'],
  ['695e3c86fa741abad6a4018f_logo_square_charles-keith.avif', 'Charles & Keith'],
  ['695e3c90d80020731995ce9e_logo_square_dbrand.avif', 'dbrand'],
  ['695e3cd668139657682e6d17_logo_square_victoria%20secret.avif', "Victoria's Secret"],
  ['695e3d4e7a9ad79eedf4e999_logo_square_burga.avif', 'BURGA'],
  ['695e3df7119d17bbc064df4b_logo_square_farfetch.avif', 'FARFETCH'],
] as const;

function Row({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
      {items.map(([file, name]) => (
        <div key={name} className="flex items-center gap-2 opacity-80">
          <img
            src={BASE + file}
            width={40}
            height={40}
            alt=""
            className="h-9 w-9 rounded object-contain"
            loading="lazy"
          />
          <span className="text-body-md font-medium text-foreground/80">{name}</span>
        </div>
      ))}
    </div>
  );
}

/** "Trusted by 2300+ teams" heading + two scrolling-style logo rows. */
export default function LogoStrip() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading className="text-center">
          Modash is trusted by 2300+ in-house teams
        </SectionHeading>
        <div className="mt-8 flex flex-col gap-5 md:gap-6">
          <Row items={ROW_1} />
          <Row items={ROW_2} />
        </div>
      </Container>
    </section>
  );
}
