import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Search, Workflow, Wallet } from 'lucide-react';

const STEPS = [
  {
    Icon: Search,
    chip: 'chip chip-brand',
    chipText: 'Discover',
    heading: 'Find and vet the right crypto KOLs for your project',
    copy: 'Search the Kolio index by audience, niche, and on-chain proof — never vanity follower counts.',
    surface: 'card-kit',
  },
  {
    Icon: Workflow,
    chip: 'chip chip-ink',
    chipText: 'Manage',
    heading: 'Keep every KOL deal organized from brief to delivery',
    copy: 'Briefs, approvals, deliverables, and timelines live in one shared, auditable workflow.',
    surface: 'card-kit',
  },
];

/** Closing CTA: two neutral steps, one dark on-chain punctuation panel, then a
 *  single red-gradient finale. Surfaces vary so the page doesn't bookend on red. */
export default function CtaStack() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">From brief to payout</span>
          <h2 className="mt-3 display-lg text-h3 text-foreground">The whole crypto KOL loop, on one rail</h2>
        </div>

        {/* two neutral steps + one dark on-chain punctuation */}
        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.heading} className={`${s.surface} flex flex-col p-7`}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-coral-bg text-brand">
                <s.Icon className="h-5 w-5" />
              </span>
              <span className={`${s.chip} mt-5 self-start`}>{s.chipText}</span>
              <h3 className="mt-4 font-display text-h4 leading-tight text-foreground">{s.heading}</h3>
              <p className="mt-3 text-body text-foreground/65">{s.copy}</p>
            </div>
          ))}

          {/* dark on-chain punctuation panel */}
          <div className="surface-onchain glow-brand flex flex-col rounded-xl p-7 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white">
              <Wallet className="h-5 w-5" />
            </span>
            <span className="chip chip-onchain mt-5 self-start">Pay · on-chain</span>
            <h3 className="mt-4 font-display text-h4 leading-tight text-white">
              Pay KOLs in escrow, settle in stablecoins, anywhere
            </h3>
            <p className="mt-3 text-body text-white/65">Hold budget in escrow, release on delivery, attribute every payout to real on-chain outcomes.</p>
            <div className="mt-6 border-t border-white/10 pt-4 font-mono-tnum text-eyebrow text-white/55">
              <div className="flex justify-between"><span>escrow released</span><span className="text-mint">8,500.00 USDC</span></div>
            </div>
          </div>
        </div>
      </Container>

      {/* single red-gradient finale */}
      <Container>
        <div className="bg-gradient-brand glow-brand mt-12 flex flex-col items-center rounded-2xl px-6 py-16 text-center md:mt-16 md:py-24">
          <h2 className="display-xl mx-auto max-w-3xl font-display text-[2.5rem] leading-[0.98] text-white md:text-[4rem]">
            It&apos;s time to run KOL marketing you can prove
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="secondary">
              Get started free
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-white/70">Free to explore・No wallet connect required</p>
        </div>
      </Container>
    </section>
  );
}
