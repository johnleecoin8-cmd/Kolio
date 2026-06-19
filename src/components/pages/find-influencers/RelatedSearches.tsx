import { Search } from 'lucide-react';

const COLUMNS: { placeholder: string; links: string[] }[] = [
  {
    placeholder: 'Search influencers in United States',
    links: [
      'American Beauty Influencers',
      'American Fashion Influencers',
      'American Food Influencers',
      'American Family Influencers',
      'American Running Influencers',
      'American Skincare Influencers',
      'American Golf Influencers',
      'American Health Influencers',
    ],
  },
  {
    placeholder: 'Search a city in United States',
    links: [
      'Atlanta Beauty Influencers',
      'Austin Beauty Influencers',
      'Baltimore Beauty Influencers',
      'Birmingham Beauty Influencers',
      'Boston Beauty Influencers',
      'Chicago Beauty Influencers',
      'Denver Beauty Influencers',
      'Detroit Beauty Influencers',
    ],
  },
  {
    placeholder: 'Search influencers in this niche',
    links: [
      'British Fitness Influencers',
      'Australian Fitness Influencers',
      'Spanish Fitness Influencers',
      'German Fitness Influencers',
      'Italian Fitness Influencers',
      'Greek Fitness Influencers',
      'Austrian Fitness Influencers',
      'Japanese Fitness Influencers',
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
              <div className="mb-6 flex items-center gap-2 rounded border border-gray-200 px-4 py-3">
                <Search size={16} className="text-foreground/40" />
                <span className="text-body-sm text-foreground/40">
                  {col.placeholder}
                </span>
              </div>
              <ul className="space-y-5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="https://www.modash.io/find-influencers"
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
