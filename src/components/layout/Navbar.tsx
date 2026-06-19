// Kolio floating white pill nav (re-skinned from the modash structural clone).
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

/** Kolio wordmark — red→coral gradient text logo. */
function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`text-gradient-brand font-display text-2xl leading-none tracking-tight ${className}`}>
      Kolio
    </span>
  );
}

type Item = { label: string; to: string; desc?: string };
type Group = { heading?: string; items: Item[] };
type Menu = { label: string; groups: Group[] };

const MENUS: Menu[] = [
  {
    label: 'Platform',
    groups: [
      {
        items: [
          { label: 'Manage', to: '/features/influencer-management', desc: 'Keep every collaboration organized from start to finish.' },
          { label: 'Discover', to: '/features/influencer-discovery', desc: 'Find, vet, and connect with the right creators for your brand, at scale.' },
          { label: 'Track', to: '/features/influencer-tracking', desc: 'Auto-track influencer campaign metrics & content.' },
          { label: 'Pay', to: '/influencer-payments', desc: 'Send fast, secure payments to creators worldwide.' },
        ],
      },
      {
        heading: 'Integrations',
        items: [
          { label: 'Shopify', to: '/shopify', desc: 'Send promo codes, links, and free products in seconds.' },
          { label: 'Email', to: '/features/inbox', desc: 'Reach more creators and keep comms in one place.' },
        ],
      },
      {
        heading: 'More',
        items: [
          { label: 'Product tour', to: '/product-tour' },
          { label: 'Why web3 KOLs', to: '/features/influencer-vetting' },
          { label: 'Customers', to: '/customers' },
        ],
      },
    ],
  },
  {
    label: 'API',
    groups: [
      {
        heading: 'Product',
        items: [
          { label: 'API Overview', to: '/influencer-marketing-api' },
          { label: 'Discovery API', to: '/influencer-marketing-api/discovery' },
          { label: 'Raw API', to: '/influencer-marketing-api/raw' },
          { label: 'AI search', to: '/influencer-marketing-api/ai-search' },
          { label: 'Brand Collaborations', to: '/influencer-marketing-api/collaborations-api' },
          { label: 'Creator lookalikes', to: '/influencer-marketing-api/creator-lookalikes' },
          { label: 'API Pricing', to: '/influencer-marketing-api/pricing' },
        ],
      },
      {
        heading: 'Built for',
        items: [
          { label: 'For marketing agencies', to: '/influencer-marketing-api/agencies' },
          { label: 'For AI tools and agents', to: '/influencer-marketing-api/builders' },
          { label: 'For research and analysis', to: '/influencer-marketing-api/analysis-and-research' },
        ],
      },
    ],
  },
  {
    label: 'Use cases',
    groups: [
      {
        items: [
          { label: 'Gifting', to: '/use-cases/influencer-gifting-platform' },
          { label: 'Affiliates', to: '/use-cases/influencer-affiliates' },
          { label: 'Paid partnerships', to: '/use-cases/influencer-paid-partnerships' },
        ],
      },
      {
        heading: 'Learn',
        items: [
          { label: 'Customers', to: '/customers' },
          { label: 'Product tour', to: '/product-tour' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    groups: [
      {
        items: [
          { label: 'Blog', to: '/blog' },
          { label: 'Newsletter', to: '/newsletter' },
          { label: 'Our data', to: '/data' },
          { label: 'Content library', to: '/content-library' },
        ],
      },
    ],
  },
];

function DesktopDropdown({ menu }: { menu: Menu }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 px-3 py-2 text-body-sm font-medium text-foreground/80 hover:text-foreground">
        {menu.label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <div className="flex gap-8 rounded-lg border border-black/5 bg-white p-6 shadow-nav">
          {menu.groups.map((g, i) => (
            <div key={i} className="min-w-[200px]">
              {g.heading && (
                <div className="mb-2 text-eyebrow uppercase tracking-wide text-foreground/40">
                  {g.heading}
                </div>
              )}
              <ul className="space-y-1">
                {g.items.map((it) => (
                  <li key={it.to}>
                    <Link
                      to={it.to}
                      className="block rounded-sm px-2 py-1.5 hover:bg-gray-50"
                    >
                      <div className="text-body-sm font-semibold text-foreground">
                        {it.label}
                      </div>
                      {it.desc && (
                        <div className="mt-0.5 max-w-[220px] text-eyebrow font-normal text-foreground/60">
                          {it.desc}
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between rounded-lg border border-black/10 bg-white px-3 shadow-nav sm:px-4">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="Kolio home">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex">
          {MENUS.map((m) => (
            <DesktopDropdown key={m.label} menu={m} />
          ))}
          <Link
            to="/pricing"
            className="px-3 py-2 text-body-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="/demo-confirmation"
            className="h-9 rounded-sm border border-gray-300 bg-white px-4 text-body-sm font-semibold leading-[2.25rem] text-gray-700 shadow-btn transition hover:bg-gray-50"
          >
            Get a demo
          </a>
          <a
            href="/demo-confirmation"
            className="h-9 rounded-sm px-3 text-body-sm font-semibold leading-[2.25rem] text-gray-600 transition hover:bg-gray-50"
          >
            Log in
          </a>
          <a
            href="/demo-confirmation"
            className="h-9 rounded-sm bg-ink px-4 text-body-sm font-semibold leading-[2.25rem] text-white shadow-btn transition hover:opacity-90"
          >
            Try for free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-foreground lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-container overflow-hidden rounded-lg border border-black/10 bg-white shadow-nav lg:hidden">
          <nav className="max-h-[70vh] overflow-y-auto p-4">
            {MENUS.map((m) => (
              <div key={m.label} className="border-b border-gray-100 py-3 last:border-0">
                <div className="mb-1 text-eyebrow uppercase tracking-wide text-foreground/40">
                  {m.label}
                </div>
                <ul className="space-y-0.5">
                  {m.groups.flatMap((g) => g.items).map((it) => (
                    <li key={it.to}>
                      <Link
                        to={it.to}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-body font-medium text-foreground"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block py-3 text-body font-semibold text-foreground"
            >
              Pricing
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="/demo-confirmation"
                className="flex h-11 items-center justify-center rounded-sm bg-ink font-semibold text-white"
              >
                Try for free
              </a>
              <a
                href="/demo-confirmation"
                className="flex h-11 items-center justify-center rounded-sm border border-gray-300 bg-white font-semibold text-gray-700"
              >
                Get a demo
              </a>
              <a
                href="/demo-confirmation"
                className="flex h-11 items-center justify-center rounded-sm font-semibold text-gray-600"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
