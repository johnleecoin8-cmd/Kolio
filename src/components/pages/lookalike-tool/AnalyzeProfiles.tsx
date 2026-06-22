import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { BadgeCheck } from 'lucide-react';
import ProofScore from '@/components/kit/ProofScore';

const STATS = [
  { label: 'Authentic audience', value: '92%' },
  { label: 'Engagement rate', value: '4.8%' },
  { label: '90-day growth', value: '+18%' },
  { label: 'Crypto-native reach', value: '71%' },
];

/** "Vet every KOL with proof" — copy left, dark on-chain terminal panel right.
 *  This is the page's single dark punctuation section. */
export default function AnalyzeProfiles() {
  return (
    <section className="surface-onchain py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-1">
            <span className="eyebrow">On-chain vetting</span>
            <h2 className="mt-3 display-lg font-display text-[2rem] leading-[1.1] text-white md:text-[2.75rem]">
              Vet every KOL with proof, not vibes
            </h2>
            <p className="mt-6 max-w-[480px] text-body text-white/65">
              Once you've shortlisted KOLs who look like the perfect fit, open
              their Kolio profile to see what's real. Check for fake followers
              and bot engagement, audience authenticity, growth trends, and
              wallet-level audience overlap. Add KOLs to a list and move straight
              into a campaign with on-chain payments and escrow built in.
            </p>
            <div className="mt-8">
              <ButtonLink to="/demo-confirmation" variant="primary">
                Try for free
              </ButtonLink>
            </div>
          </div>
          <div className="md:order-2">
            <div className="glow-brand rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-12 w-12 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
                  OA
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-body font-semibold text-white">
                    @onchain_alpha
                    <BadgeCheck className="h-4 w-4 text-brand" />
                  </div>
                  <div className="font-mono-tnum text-body-sm text-white/55">
                    DeFi · Trading · 47K verified reach
                  </div>
                </div>
                <span className="ml-auto">
                  <ProofScore score={91} />
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="num-display font-mono-tnum text-[1.75rem] leading-none text-white">
                      {s.value}
                    </div>
                    <div className="mt-2 text-body-sm text-white/55">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-body-sm text-white/55">Last payout</span>
                <span className="font-mono-tnum text-body-sm font-semibold text-mint">
                  4,200.00 USDC
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
