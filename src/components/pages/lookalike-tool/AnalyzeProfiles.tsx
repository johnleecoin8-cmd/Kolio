import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

const STATS = [
  { label: 'Authentic audience', value: '92%' },
  { label: 'Engagement rate', value: '4.8%' },
  { label: '90-day growth', value: '+18%' },
  { label: 'Crypto-native reach', value: '71%' },
];

/** "Vet every KOL with proof" — copy left, brand-neutral analytics mockup right. */
export default function AnalyzeProfiles() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-1">
            <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.75rem]">
              Vet every KOL with proof, not vibes
            </h2>
            <p className="mt-6 max-w-[480px] text-body text-foreground/75">
              Once you've shortlisted KOLs who look like the perfect fit, open
              their Kolio profile to see what's real. Check for fake followers
              and bot engagement, audience authenticity, growth trends, and
              wallet-level audience overlap. Add KOLs to a list and move straight
              into a campaign with on-chain payments and escrow built in.
            </p>
            <div className="mt-8">
              <ButtonLink
                to="/demo-confirmation"
                variant="primary"
                className="!bg-blue !text-white hover:!opacity-90"
              >
                Try for free
              </ButtonLink>
            </div>
          </div>
          <div className="md:order-2">
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-nav">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-brand" />
                <div>
                  <div className="text-body font-semibold text-foreground">
                    @onchain_alpha
                  </div>
                  <div className="text-body-sm text-foreground/55">
                    DeFi · Trading · 47K verified reach
                  </div>
                </div>
                <span className="ml-auto rounded-sm bg-gradient-brand px-2.5 py-1 text-body-sm font-semibold text-white">
                  Verified
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-black/5 bg-black/[0.02] p-4"
                  >
                    <div className="font-display text-[1.75rem] leading-none text-foreground">
                      {s.value}
                    </div>
                    <div className="mt-2 text-body-sm text-foreground/55">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
