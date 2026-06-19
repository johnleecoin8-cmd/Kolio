import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Web3 brands & exchanges that vet KOLs on Kolio — text wordmarks, not logos. */
const BRANDS = [
  'OKX',
  'Ledger',
  'Phantom',
  'Arbitrum',
  'Polygon',
  'Kaito',
  'Lido',
  'Optimism',
  'dYdX',
  'Aave',
  'Pendle',
  'Jupiter',
];

/** Hero — text left, illustration right, web3 brand wordmark bar below. */
export default function Hero() {
  return (
    <section className="bg-violet-light pt-12 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h1 className="font-display text-[2.5rem] leading-[1.05] text-violet-dark sm:text-[3rem] lg:text-[3.5rem]">
              Find <span className="text-gradient-brand">verified</span> TikTok
              KOLs for crypto
            </h1>
            <p className="mt-6 max-w-[520px] text-body-md text-violet-dark/80">
              Kolio indexes the crypto creators who actually move markets on
              TikTok. Search and filter by real reach, audience quality, and
              niche — DeFi, L1/L2, trading, NFTs, gaming — to find KOLs your
              project can trust, not just follower counts.
            </p>
            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="accent">
                Start vetting KOLs
              </ButtonA>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={`${CDN}/66a77347b5d9f0aac9e12d2b_img_hero_discover_tiktok.avif`}
              alt="Kolio's crypto KOL discovery on TikTok"
              loading="eager"
              className="w-full max-w-[560px]"
            />
          </div>
        </div>

        {/* web3 brand wordmark bar */}
        <div className="mt-14 pb-4 md:mt-20">
          <p className="text-center text-body-sm text-violet-dark/70">
            Trusted by web3 brands, exchanges &amp; protocols like:
          </p>
          <div className="mt-8 grid grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
            {BRANDS.map((name) => (
              <div key={name} className="flex items-center justify-center">
                <span className="font-display text-lg font-semibold tracking-tight text-violet-dark/45">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
