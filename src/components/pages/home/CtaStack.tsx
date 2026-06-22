import { ButtonA } from '@/components/ui/Button';

const PANELS = [
  { bg: 'bg-brand', text: 'text-white', sub: 'text-white/80', heading: 'Find and vet the right crypto KOLs for your project', copy: 'Search the Kolio index by audience, niche, and on-chain proof — not vanity follower counts.' },
  { bg: 'bg-brand-coral', text: 'text-white', sub: 'text-white/85', heading: 'Keep every KOL deal organized from brief to delivery', copy: 'Briefs, approvals, deliverables, and timelines live in one shared workflow.' },
  { bg: 'bg-coral-bg', text: 'text-ink', sub: 'text-ink/65', heading: 'Attribute campaign results from post to on-chain', copy: 'Tie every KOL post to real outcomes — sign-ups, swaps, and mints.' },
  { bg: 'bg-coral', text: 'text-white', sub: 'text-white/85', heading: 'Pay KOLs on-chain, with escrow, anywhere', copy: 'Hold budget in escrow, release on delivery, settle in stablecoins worldwide.' },
];

/** Final stacked brand CTA panels (rounded full-width blocks) closing with the "run KOL marketing on Kolio" panel. */
export default function CtaStack() {
  return (
    <section className="flex flex-col gap-4 px-3 pb-4 md:gap-8">
      {PANELS.map((p) => (
        <div
          key={p.heading}
          className={`${p.bg} flex min-h-[300px] flex-col items-center justify-center rounded-xl px-6 py-16 text-center md:min-h-[440px] md:py-24`}
        >
          <h2 className={`mx-auto max-w-[1000px] font-display text-[2.25rem] uppercase leading-[0.95] ${p.text} md:text-[4rem]`}>
            {p.heading}
          </h2>
          <p className={`mt-5 max-w-[42rem] text-body md:text-body-md ${p.sub}`}>{p.copy}</p>
        </div>
      ))}

      {/* final pink CTA */}
      <div className="flex min-h-[400px] items-center justify-center rounded-xl bg-pink px-6 py-20 md:min-h-[640px] md:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-[1000px] font-display text-[2.5rem] uppercase leading-[0.95] text-ink md:text-[4.5rem]">
            It&apos;s time to run KOL marketing on Kolio
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonA href="/demo-confirmation" variant="primary">
              Get started free
            </ButtonA>
            <ButtonA href="/demo-confirmation" variant="secondary">
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/60">
            Free to explore・No wallet connect required
          </p>
        </div>
      </div>
    </section>
  );
}
