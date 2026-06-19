import { ButtonA } from '@/components/ui/Button';

const PANELS = [
  { bg: 'bg-orange-vivid', heading: 'Find, vet, and connect with the right creators for your brand' },
  { bg: 'bg-[#c08cf2]', heading: 'Keep every collaboration organized from start to finish' },
  { bg: 'bg-sand-dark', heading: 'Auto-track influencer campaign metrics & content' },
  { bg: 'bg-orange', heading: 'Send fast, secure payments to creators worldwide' },
];

/** Final stacked colored CTA panels (rounded full-width blocks) closing with the pink "upgrade to Modash" panel. */
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
            It&apos;s time to upgrade to Modash
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
            >
              Try for free
            </ButtonA>
            <ButtonA href="https://www.modash.io/book-demo" variant="secondary">
              Book a call
            </ButtonA>
          </div>
          <p className="mt-4 text-body-sm text-ink/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
