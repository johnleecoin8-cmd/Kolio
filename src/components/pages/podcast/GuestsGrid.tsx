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
        <h2 className="mx-auto max-w-[760px] text-center font-sans font-bold text-h4 md:text-h3 leading-tight tracking-tight text-navy">
          Hear how leading exchanges &amp; protocols run crypto KOL
          campaigns that actually convert
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
          {GUESTS.map((g) => (
            <div key={g.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-blue bg-gradient-brand text-white font-bold text-body">
                {initials(g.name)}
              </div>
              <p className="mt-3 text-body-sm font-bold text-foreground">
                {g.name}
              </p>
              <p className="mt-1 text-eyebrow text-foreground/50 max-w-[220px]">
                {g.role} @ {g.brand}
              </p>
              <p className="mt-3 text-body-sm font-bold tracking-wide text-foreground/70 uppercase">
                {g.brand}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
