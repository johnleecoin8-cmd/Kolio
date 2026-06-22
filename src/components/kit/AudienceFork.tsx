import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

type Side = { title: string; points: string[]; cta: string; to: string };

/** Dual-audience fork: routes Brands vs KOLs to distinct value props in the
 *  first scroll. Essential for a two-sided marketplace. */
export default function AudienceFork({
  brand = { title: 'For brands & protocols', points: ['Find vetted crypto KOLs by audience and on-chain proof', 'Run the deal from brief to escrow payout in one place', 'Attribute results to sign-ups, swaps, and mints'], cta: 'Find KOLs', to: '/influencer-database' },
  kol = { title: 'For KOLs & creators', points: ['Get discovered by serious protocols, not spam', 'Carry a portable Proof Score that earns better deals', 'Get paid on delivery, on-chain, no chasing invoices'], cta: 'Join as a KOL', to: '/demo-confirmation' },
}: { brand?: Side; kol?: Side }) {
  const Card = ({ side, icon: Icon, dark }: { side: Side; icon: typeof Building2; dark?: boolean }) => (
    <Link to={side.to} className={`group flex flex-col rounded-xl p-8 transition ${dark ? 'surface-onchain glow-brand' : 'card-kit hover:border-brand/40'}`}>
      <span className={`grid h-11 w-11 place-items-center rounded-lg ${dark ? 'bg-white/10 text-white' : 'bg-coral-bg text-brand'}`}><Icon className="h-5 w-5" /></span>
      <h3 className={`mt-5 font-display text-h4 ${dark ? 'text-white' : 'text-foreground'}`}>{side.title}</h3>
      <ul className="mt-5 flex-1 space-y-3">
        {side.points.map((p) => (
          <li key={p} className={`flex items-start gap-2 text-body ${dark ? 'text-white/75' : 'text-foreground/70'}`}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-brand" />{p}
          </li>
        ))}
      </ul>
      <span className={`mt-7 inline-flex items-center gap-2 font-semibold ${dark ? 'text-white' : 'text-brand'}`}>
        {side.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <Card side={brand} icon={Building2} />
          <Card side={kol} icon={Sparkles} dark />
        </div>
      </Container>
    </section>
  );
}
