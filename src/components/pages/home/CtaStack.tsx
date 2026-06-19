import { ButtonA } from '@/components/ui/Button';

const PANELS = [
  { bg: 'bg-orange-vivid', heading: 'Find and vet the right crypto KOLs for your project' },
  { bg: 'bg-[#c08cf2]', heading: 'Keep every KOL deal organized from brief to delivery' },
  { bg: 'bg-sand-dark', heading: 'Attribute campaign results from post to on-chain' },
  { bg: 'bg-orange', heading: 'Pay KOLs on-chain, with escrow, anywhere' },
];

/** Final stacked colored CTA panels (rounded full-width blocks) closing with the pink "upgrade to Kolio" panel. */
export default function CtaStack() {
  return (
    <section className="flex flex-col gap-4 px-3 pb-4 md:gap-16">
      {PANELS.map((p) => (
        <div
          key={p.heading}
          className={`${p.bg} flex min-h-[400px] items-center justify-center rounded-xl px-6 py-20 md:min-h-[640px] md:py-32`}
        >
          <h2 className="mx-auto max-w-[1000px] text-center font-display text-[2.5rem] uppercase leading-[0.95] text-ink md:text-[4.5rem]">
            {p.heading}
          </h2>
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
