import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Workflow, Globe, ShieldCheck, Wallet, LineChart, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    Icon: Workflow,
    title: 'One connected workflow',
    body: 'Kolio brings discovery, vetting, attribution, and payments all in one place.',
  },
  {
    Icon: Globe,
    title: 'Every crypto KOL that matters',
    body: 'Find KOLs across X, YouTube, TikTok, and Telegram — backed by trusted data.',
  },
  {
    Icon: ShieldCheck,
    title: 'Proof, not vanity metrics',
    body: 'See real reach and audience quality. Spot bots and farmed engagement instantly.',
  },
  {
    Icon: Wallet,
    title: 'On-chain payments & escrow',
    body: 'Hold budget in escrow and release on delivery. Settle in stablecoins, worldwide.',
  },
  {
    Icon: LineChart,
    title: 'Web3 attribution built in',
    body: 'Tie KOL content to on-chain outcomes — sign-ups, swaps, and mints.',
  },
  {
    Icon: Sparkles,
    title: 'Clean and credible',
    body: 'Easy for both brands and KOLs. No degen chaos, no onboarding overhead.',
  },
];

/** "Why Kolio" — 3x2 icon feature grid + pricing CTA. */
export default function WhyModash() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <span className="eyebrow">Why Kolio</span>
          <h2 className="mt-3 display-lg font-display text-[2rem] leading-[1.05] text-foreground md:text-[2.5rem]">
            Web3 KOL marketing that just flows
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/75">
            Kolio brings the rigor of mature web2 creator platforms to crypto — so KOL
            marketing stops feeling like a gamble and starts being measurable, end to end.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card-kit flex flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-coral-bg text-brand">
                <f.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-body-md font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-body-sm text-foreground/60">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <ButtonA href="/demo-confirmation" variant="primary">
            Find your pricing
          </ButtonA>
          <p className="text-body-sm text-foreground/60">Plans scale with your campaigns</p>
        </div>
      </Container>
    </section>
  );
}
