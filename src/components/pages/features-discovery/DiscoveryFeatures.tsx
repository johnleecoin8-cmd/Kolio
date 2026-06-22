import { Layers, ShieldCheck, Radar, ListChecks } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '@/components/ui/Container';

type Feature = { icon: LucideIcon; chip: string; title: string; body: string };

const FEATURES: Feature[] = [
  {
    icon: Radar,
    chip: 'Narrative search',
    title: 'Search by what they actually cover',
    body: 'Query by chain, narrative, and audience size in one line. No spreadsheets, no cold scraping — just the creators who already move your category.',
  },
  {
    icon: ShieldCheck,
    chip: 'Proof Score',
    title: 'Audience quality before outreach',
    body: 'A single 0–100 score blends real-follower share, holder engagement, and on-chain signal. See it on every handle, so paid-bot accounts surface themselves.',
  },
  {
    icon: Layers,
    chip: 'Side-by-side',
    title: 'Compare a shortlist that holds up',
    body: 'Line up candidates on reach, fake-follower rate, and prior campaign delivery. Pick on evidence instead of a screenshot of a follower count.',
  },
  {
    icon: ListChecks,
    chip: 'Straight to a deal',
    title: 'From shortlist to escrow in one rail',
    body: 'Send an offer, fund USDC escrow, and track delivery without leaving Kolio. Discovery is the front door to the whole proof-based loop.',
  },
];

/** Calm feature cards — generous whitespace, rounded surfaces, restrained red. */
export default function DiscoveryFeatures() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-brand">Built for crypto outreach</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Everything you need to pick the right KOL
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-md text-foreground/60">
            Discovery on Kolio is opinionated about one thing: proof. Each tool exists to replace a guess with a number.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FEATURES.map(({ icon: Icon, chip, title, body }) => (
            <div key={title} className="card-kit shadow-float-sm rounded-2xl p-7 transition hover:shadow-float">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-bg text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="chip chip-brand">{chip}</span>
              </div>
              <h3 className="mt-5 text-h4 font-semibold leading-snug text-foreground">{title}</h3>
              <p className="mt-3 text-body-md text-foreground/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
