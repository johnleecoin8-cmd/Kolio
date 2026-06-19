import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CARDS = [
  {
    title: 'Custom influencer marketing platform',
    body: 'Use Modash API as the engine for your influencer platform. Offer your customers powerful influencer search with AI, analytics, and campaign management tools.',
  },
  {
    title: 'AI applications and agents',
    body: 'Integrate AI search endpoint and structured API to power your apps and agents. Build predictive analysis, automated negotiations, and more.',
  },
  {
    title: 'Internal tools and workflows',
    body: 'Connect your internal systems and workflows to supercharge your efficiency. Build automated vetting, reporting, or programmatic campaign tracking.',
  },
];

/** "One API. Unlimited opportunities." — 3 soft cards + centered CTA. */
export default function UseCases() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-display text-h3 leading-tight text-foreground md:text-h2">
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
          <ButtonA
            href="https://form.jotform.com/modash/intro-modash-api"
            variant="primary"
          >
            Request a demo
          </ButtonA>
        </div>
      </Container>
    </section>
  );
}
