import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

const CATEGORIES = [
  { label: 'All', href: '/category/all' },
  { label: 'Strategy', href: '/category/kol-strategy' },
  { label: 'Channels', href: '/category/kol-channels' },
  { label: 'Vetting', href: '/category/kol-vetting' },
  { label: 'Payments', href: '/category/onchain-payments' },
  { label: 'Attribution', href: '/category/campaign-attribution' },
  { label: 'DeFi', href: '/category/defi' },
  { label: 'Exchanges', href: '/category/exchanges' },
  { label: 'Discovery', href: '/category/kol-discovery' },
];

/** Blog page hero: big highlighted title + category bar + search field. */
export default function BlogHero() {
  const [active, setActive] = useState('All');

  return (
    <section className="bg-background pt-24 md:pt-40">
      <Container className="max-w-[896px]">
        <p className="eyebrow flex justify-center">The Kolio Journal</p>
        <h1 className="mt-4 text-center font-display display-xl text-[3.25rem] uppercase text-foreground md:text-[5.5rem]">
          The <span className="text-gradient-brand">web3</span> KOL playbook
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-body-md text-foreground/60">
          Field notes on finding, vetting, and running campaigns with crypto KOLs
          — backed by real reach, on-chain payments, and attribution that holds up.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 md:mt-16 md:flex-row md:justify-between">
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
