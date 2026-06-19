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
    <section className="bg-background pt-16 md:pt-24">
      <Container className="max-w-[896px]">
        <h1 className="text-center font-display text-[3rem] leading-[1.05] text-foreground md:text-[4rem]">
          Blog
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
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
            className="relative w-full shrink-0 md:w-[200px]"
          >
            <input
              name="query"
              type="search"
              placeholder="Search"
              className="h-10 w-full rounded-sm border border-gray-300 bg-white pl-4 pr-10 text-body-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/30 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
