import Container from '@/components/ui/Container';

type Guest = {
  name: string;
  role: string;
  brand: string;
};

const GUESTS: Guest[] = [
  {
    name: 'Ana-Maria Klein',
    role: 'Head of Growth',
    brand: 'Ledger',
  },
  {
    name: 'Aleks Kopyt',
    role: 'KOL Partnerships Lead',
    brand: 'Phantom',
  },
  {
    name: 'Gabriele Petrauskaitė',
    role: 'Regional Marketing Lead',
    brand: 'OKX',
  },
  {
    name: 'George Hu',
    role: 'Head of Community',
    brand: 'Arbitrum',
  },
  {
    name: 'Rugile Petraitis',
    role: 'Director of Marketing',
    brand: 'Polygon',
  },
  {
    name: 'Valeria Chemerys',
    role: 'Head of Ecosystem Growth',
    brand: 'Sui',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');
}

export default function GuestsGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">The operators</span>
          <h2 className="mt-3 display-lg font-display text-h4 md:text-h3 text-foreground">
            Hear how leading exchanges &amp; protocols run crypto KOL campaigns
            that actually convert
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GUESTS.map((g) => (
            <div
              key={g.name}
              className="card-kit flex items-center gap-4 p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                {initials(g.name)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-body-sm font-bold text-foreground">
                  {g.name}
                </p>
                <p className="truncate text-eyebrow text-foreground/50">
                  {g.role}
                </p>
                <span className="chip chip-brand mt-2">{g.brand}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
