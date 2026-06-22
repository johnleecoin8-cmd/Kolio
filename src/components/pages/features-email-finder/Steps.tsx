import { Search, Mail, ShieldCheck, BarChart3 } from 'lucide-react';
import Container from '@/components/ui/Container';

const STEPS = [
  {
    icon: Search,
    chip: 'Find',
    title: 'Surface reachable KOLs',
    body: 'Filter 12M+ crypto creators down to the ones with public contacts and recent on-chain activity, across DeFi, L1/L2, NFTs, trading, and gaming.',
  },
  {
    icon: Mail,
    chip: 'Reach',
    title: 'Send 1:1 outreach at scale',
    body: 'Personalize by handle, project, and chain. Every message reads hand-written while you cover a whole shortlist in one pass.',
  },
  {
    icon: ShieldCheck,
    chip: 'Agree',
    title: 'Move to escrow in-thread',
    body: 'When a KOL replies, agree terms and fund USDC escrow without leaving the conversation. No off-platform wires, no trust gap.',
  },
  {
    icon: BarChart3,
    chip: 'Prove',
    title: 'Release on proof',
    body: 'Track delivery and real reach, then release payout against verified results — so every dollar maps to something you can show.',
  },
];

/** Calm four-step outreach workflow as card-kit tiles. */
export default function Steps() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">From contact to payout</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            One rail for the whole outreach loop
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body-md text-foreground/60">
            Find, reach, and settle with crypto KOLs without bouncing between a
            spreadsheet, a DM, and a wallet.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.chip} className="card-kit shadow-float-sm rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-bg text-brand">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="num-display text-body-sm text-foreground/30">0{i + 1}</span>
              </div>
              <span className="mt-5 inline-block chip chip-ink">{s.chip}</span>
              <h3 className="mt-3 text-body-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-body-sm leading-relaxed text-foreground/60">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
