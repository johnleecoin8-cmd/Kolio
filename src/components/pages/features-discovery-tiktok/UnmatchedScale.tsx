import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const STATS = [
  ['2M+', 'crypto-native TikTok creators indexed'],
  ['40+', 'filters across reach, audience & niche'],
  ['100%', 'proof-based — real data, no vanity metrics'],
];

/** Centered heading + copy + CTA, then a brand-neutral stat panel (later.com-style). */
export default function UnmatchedScale() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-violet-dark md:text-[2.5rem]">
            Built for crypto: filter every TikTok KOL that matters
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-body-md text-violet-dark/80">
            Kolio's index of crypto-native TikTok creators means you'll never
            run out of qualified partners as you scale your KOL program. Filter
            by audience interests, engagement, demographics, growth rate, and
            on-chain-savvy niches to find the right creators for your project —
            and verify them before you spend a dollar.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA href="/demo-confirmation" variant="accent">
              Explore the index
            </ButtonA>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="mx-auto grid w-full max-w-[1136px] grid-cols-1 gap-4 rounded-2xl bg-gradient-brand p-8 text-white sm:grid-cols-3 md:p-12">
            {STATS.map(([value, label]) => (
              <div key={label} className="text-center sm:text-left">
                <div className="font-display text-[2.5rem] leading-none md:text-[3.25rem]">
                  {value}
                </div>
                <p className="mt-3 text-body-sm text-white/85">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
