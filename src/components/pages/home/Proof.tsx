import { ShieldCheck, LineChart, Wallet, Workflow } from 'lucide-react';
import Container from '@/components/ui/Container';
import MotionReveal from '@/components/ui/MotionReveal';

const FEATURES = [
  { Icon: ShieldCheck, title: 'Proof, not vanity', body: 'Real reach, audience authenticity, and bot detection on every creator. See past the follower count.' },
  { Icon: LineChart, title: 'On-chain attribution', body: 'Tie KOL content to real outcomes: wallet connects, swaps, and mints, not guesses.' },
  { Icon: Wallet, title: 'Escrow payouts', body: 'Hold budget in escrow, release on delivery, settle in stablecoins anywhere.' },
  { Icon: Workflow, title: 'One connected rail', body: 'Discover, vet, manage, and pay in one place, from first contact to settled payout.' },
];

export default function Proof() {
  return (
    <section className="canvas-2 py-20 md:py-28">
      <Container>
        <MotionReveal className="max-w-2xl">
          <span className="eyebrow">Why Kolio</span>
          <h2 className="display-2 mt-3 text-h2 text-ink">The proof layer crypto marketing was missing</h2>
        </MotionReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <MotionReveal key={f.title} delay={i * 0.06}>
              <div className="card float-sm h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand"><f.Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-h5 font-medium text-ink">{f.title}</h3>
                <p className="mt-2 text-body text-ink/60">{f.body}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
