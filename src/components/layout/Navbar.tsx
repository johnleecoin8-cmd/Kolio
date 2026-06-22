import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const LINKS = [
  { label: 'Discover', to: '/influencer-database' },
  { label: 'Vet', to: '/features/influencer-vetting' },
  { label: 'Pay', to: '/influencer-payments' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Learn', to: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <nav className="flex h-14 items-center justify-between rounded-pill border border-ink/10 bg-paper/80 px-3 pl-5 shadow-float-sm backdrop-blur-md">
          <Link to="/" className="text-grad font-display text-2xl font-medium tracking-tight">Kolio</Link>
          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <Link key={l.label} to={l.to} className="text-body-sm font-medium text-ink/70 transition hover:text-ink">{l.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link to="/influencer-database" className="hidden text-body-sm font-medium text-ink/70 transition hover:text-ink sm:block">Log in</Link>
            <Button to="/demo-confirmation" variant="brand" className="px-5 py-2.5 text-body-sm">Start free</Button>
            <button onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-pill text-ink md:hidden" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 rounded-2xl border border-ink/10 bg-paper p-4 shadow-float md:hidden">
            {LINKS.map((l) => (
              <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-body font-medium text-ink/80 hover:bg-canvas-2">{l.label}</Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
