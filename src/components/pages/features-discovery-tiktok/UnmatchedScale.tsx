import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import StatTrio from '@/components/kit/StatTrio';

/** Centered heading + copy + CTA, then a cited count-up stat trio (no gradient panel). */
export default function UnmatchedScale() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Built for crypto</span>
          <h2 className="mt-4 display-lg font-display text-[2rem] text-foreground md:text-[2.5rem]">
            Filter every TikTok KOL that matters
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-foreground/70">
            Kolio's index of crypto-native TikTok creators means you'll never
            run out of qualified partners as you scale your KOL program. Filter
            by audience interests, engagement, demographics, growth rate, and
            on-chain-savvy niches to find the right creators for your project —
            and verify them before you spend a dollar.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA href="/demo-confirmation" variant="primary">
              Explore the index
            </ButtonA>
          </div>
        </div>
      </Container>

      <StatTrio
        stats={[
          { value: 2_000_000, suffix: '+', label: 'crypto-native TikTok creators indexed' },
          { value: 40, suffix: '+', label: 'filters across reach, audience & niche' },
          { value: 100, suffix: '%', label: 'proof-based — real data, no vanity metrics' },
        ]}
        source="Source: Kolio discovery index, TikTok crypto segment (Q2 2026 snapshot)."
      />
    </section>
  );
}
