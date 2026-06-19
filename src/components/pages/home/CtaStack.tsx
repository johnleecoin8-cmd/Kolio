import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const PANELS = [
  { bg: 'bg-coral', heading: 'Find, vet, and connect with the right creators for your brand' },
  { bg: 'bg-purple', heading: 'Keep every collaboration organized from start to finish' },
  { bg: 'bg-sand-dark', heading: 'Auto-track influencer campaign metrics & content' },
  { bg: 'bg-orange', heading: 'Send fast, secure payments to creators worldwide' },
];

/** Final stacked colored CTA panels closing with the pink "upgrade to Modash" panel. */
export default function CtaStack() {
  return (
    <section>
      {PANELS.map((p) => (
        <div key={p.heading} className={`${p.bg} py-20 md:py-28`}>
          <Container>
            <h2 className="mx-auto max-w-[900px] text-center font-display text-[2rem] leading-[1.05] text-ink md:text-[3.25rem]">
              {p.heading}
            </h2>
          </Container>
        </div>
      ))}

      {/* final pink CTA */}
      <div className="bg-pink py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-[900px] font-display text-[2.25rem] leading-[1.05] text-ink md:text-[3.5rem]">
              it&apos;s time to upgrade to Modash
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for free
              </ButtonA>
              <ButtonA href="#" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="mt-4 text-body-sm text-ink/70">
              14-day free trial・No credit card required
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
