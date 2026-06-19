import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

const CARDS = [
  {
    title: 'White-label KOL marketing platform',
    body: 'Use the Kolio API as the engine behind your own web3 marketing product. Offer customers proof-based KOL search, audience-quality analytics, and campaign tooling.',
  },
  {
    title: 'AI agents for crypto growth',
    body: 'Wire the AI search endpoint and structured API into your apps and agents. Build automated KOL shortlists, outreach, and predictive reach modeling.',
  },
  {
    title: 'Internal growth tools & workflows',
    body: 'Connect Kolio to your internal systems to supercharge your BD team. Build automated KOL vetting, on-chain attribution reporting, or programmatic campaign tracking.',
  },
];

/** "One API. Unlimited opportunities." — 3 soft cards + centered CTA. */
export default function UseCases() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center text-[1.75rem] font-semibold leading-[1.15] text-foreground">
          One API. Unlimited opportunities.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl bg-background-soft p-8"
            >
              <h3 className="text-body-lg font-semibold leading-snug text-foreground">
                {c.title}
              </h3>
              <p className="mt-4 text-body text-foreground/75">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-body-md font-semibold text-foreground">
            Can't find your use-case? Let's discuss!
          </p>
          <ButtonLink to="/demo-confirmation" variant="primary">
            Request a demo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
