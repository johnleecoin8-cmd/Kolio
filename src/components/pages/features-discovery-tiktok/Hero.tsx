import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const LOGOS = [
  ['655cba96a64bdeec9ac00aac_logo_google.webp', 'Google'],
  ['655cba95058908fd54c80577_logo_mont%20blanc.webp', 'Mont Blanc'],
  ['655cba9516b5580a55667aec_logo_farfetch.webp', 'Farfetch'],
  ['655cba96f00f5d0c48acedde_logo_esn.webp', 'ESN'],
  ['655cba95bcc2263848e7349d_logo_bolt.webp', 'Bolt'],
  ['655cba96f00f5d0c48acedda_logo_bonprix.webp', 'Bonprix'],
  ['655cba95ccdff403a5b75bb6_logo_victorias%20secret.webp', "Victoria's Secret"],
  ['655cba96e09ed6de10ea7924_logo_sennheiser.webp', 'Sennheiser'],
  ['669908bf09dc8ec9ed95967c_logo_eight%20sleep.avif', 'Eight Sleep'],
  ['673c7beedb310838b2ec7346_logo_birkenstock.png', 'Birkenstock'],
  ['66990b802655ebac121ff2a8_logo_ao.avif', 'AO'],
  ['66990b36e743d2baefb04704_logo_hellobello.avif', 'Hello Bello'],
  ['65dde750dee63920305912f5_logo_mixtiles.avif', 'Mixtiles'],
  ['65dde218b37cc2c3e968b89a_logo_surfshark.avif', 'Surfshark'],
  ['65dde2018c5207736ed89902_logo_burga.avif', 'Burga'],
  ['655cc280c4406224f0aac7e2_logo_regal%20rose.avif', 'Regal Rose'],
];

/** Hero — text left, illustration right, brand logo bar below. */
export default function Hero() {
  return (
    <section className="bg-violet-light pt-12 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h1 className="font-display text-[2.5rem] leading-[1.05] text-violet-dark sm:text-[3rem] lg:text-[3.5rem]">
              TikTok Influencer Search Tool
            </h1>
            <p className="mt-6 max-w-[520px] text-body-md text-violet-dark/80">
              Modash lists every TikTok influencer on earth with 1k+ followers.
              Search &amp; filter based on audiences, engagement rates, followers
              &amp; more to find the perfect TikTok creators for your brand.
            </p>
            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="accent"
              >
                Try for free
              </ButtonA>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={`${CDN}/66a77347b5d9f0aac9e12d2b_img_hero_discover_tiktok.avif`}
              alt="An illustrative image on Modash's influencer discovery"
              loading="eager"
              className="w-full max-w-[560px]"
            />
          </div>
        </div>

        {/* logo bar */}
        <div className="mt-14 pb-4 md:mt-20">
          <p className="text-center text-body-sm text-violet-dark/70">
            Used by 1,500+ B2C brands like:
          </p>
          <div className="mt-8 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-8">
            {LOGOS.map(([file, name]) => (
              <div key={name} className="flex items-center justify-center">
                <img
                  src={`${CDN}/${file}`}
                  alt={name}
                  loading="lazy"
                  className="max-h-7 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
