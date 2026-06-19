import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

const CATEGORIES = [
  { label: 'All', href: '/category/all' },
  { label: 'Strategy', href: '/category/influencer-strategy' },
  { label: 'Channels', href: '/category/influencer-channels' },
  { label: 'Relationships', href: '/category/building-relationships' },
  { label: 'Tools', href: '/category/tools-software' },
  { label: 'Insights', href: '/category/data-stories' },
  { label: 'Programs', href: '/category/influencer-programs' },
  { label: 'Tracking', href: '/category/tracking-monitoring' },
  { label: 'Recruitment', href: '/category/influencer-recruitment' },
];

/** Blog page hero: big "Blog" title + sticky category bar + search field. */
export default function BlogHero() {
  const [active, setActive] = useState('All');

  return (
    <section className="bg-background pt-24 md:pt-40">
      <Container className="max-w-[896px]">
        <h1 className="text-center font-display text-[5rem] uppercase leading-[0.95] text-foreground md:text-[8rem]">
          Blog
        </h1>

        <div className="mt-16 flex flex-col items-center gap-4 md:mt-24 md:flex-row md:justify-between">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.label}
                href={c.href}
                onClick={() => setActive(c.label)}
                className={`text-body-sm font-medium transition-colors hover:text-foreground ${
                  active === c.label ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {c.label}
              </a>
            ))}
          </nav>

          <form
            action="/search"
            className="relative w-full shrink-0 md:w-[230px]"
          >
            <input
              name="query"
              type="search"
              placeholder="Search"
              className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-4 pr-12 text-body-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/30 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-ink text-white"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
