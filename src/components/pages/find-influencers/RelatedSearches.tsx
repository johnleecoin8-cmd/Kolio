import { Search } from 'lucide-react';

const COLUMNS: { placeholder: string; links: string[] }[] = [
  {
    placeholder: 'Search KOLs by crypto niche',
    links: [
      'NFT KOLs on X',
      'L1 / L2 KOLs on X',
      'Trading KOLs on X',
      'GameFi KOLs on X',
      'DePIN KOLs on X',
      'Memecoin KOLs on X',
      'RWA KOLs on X',
      'Stablecoin KOLs on X',
    ],
  },
  {
    placeholder: 'Search KOLs by platform',
    links: [
      'Crypto KOLs on YouTube',
      'Crypto KOLs on Telegram',
      'Crypto KOLs on TikTok',
      'Crypto KOLs on Farcaster',
      'Crypto KOLs on Instagram',
      'Crypto KOLs on Twitch',
      'Crypto KOLs on Substack',
      'Crypto KOLs on Lens',
    ],
  },
  {
    placeholder: 'Search KOLs by region',
    links: [
      'Korean DeFi KOLs',
      'Turkish DeFi KOLs',
      'Vietnamese DeFi KOLs',
      'Brazilian DeFi KOLs',
      'Indian DeFi KOLs',
      'Chinese DeFi KOLs',
      'Nigerian DeFi KOLs',
      'Filipino DeFi KOLs',
    ],
  },
];

/** Three-column related-searches grid, each with a search input header. */
export default function RelatedSearches() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.placeholder}>
              <div className="mb-6 flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3">
                <Search size={16} className="text-foreground/40" />
                <span className="text-body-sm text-foreground/40">
                  {col.placeholder}
                </span>
              </div>
              <ul className="space-y-5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="/find-influencers"
                      className="text-body font-semibold text-foreground underline underline-offset-2 transition hover:text-foreground/70"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
