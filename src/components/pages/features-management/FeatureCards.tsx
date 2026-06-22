import { ClipboardCheck, MessagesSquare, ShieldCheck, Repeat, FileSearch, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: 'Briefs that stay in sync',
    body: 'Send a structured brief, get a draft back, and approve revisions in one thread. No more lost DMs or stray Google Docs.',
  },
  {
    icon: MessagesSquare,
    title: 'One inbox per creator',
    body: 'Every message, asset and version with a KOL lives on their card. Pick up any relationship exactly where you left it.',
  },
  {
    icon: ShieldCheck,
    title: 'Proof attached to each deal',
    body: 'The Proof Score travels with the collaboration, so real followers and engaged holders are visible before you fund.',
  },
  {
    icon: Wallet,
    title: 'Escrow built into the flow',
    body: 'Fund USDC to escrow when terms are set. It releases on verified delivery, so neither side has to chase payment.',
  },
  {
    icon: FileSearch,
    title: 'Delivery you can verify',
    body: 'Posted content is logged with on-chain reach and engagement, giving you a settled record instead of a screenshot.',
  },
  {
    icon: Repeat,
    title: 'Rehire your best KOLs',
    body: 'Past performance is saved per creator, so renewing a strong partnership takes one click instead of a fresh negotiation.',
  },
];

/** Calm feature cards — rounded card-kit grid, restrained brand accents. */
export default function FeatureCards() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">What you manage</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Built for how crypto deals actually run
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            Each part of a KOL collaboration has a home, so nothing falls
            through the cracks between brief and payout.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-kit shadow-float-sm rounded-2xl p-7 transition hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-coral-bg text-brand">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-h5 font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2.5 text-body-sm leading-relaxed text-foreground/60">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
