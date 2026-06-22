import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import LogoMarquee from '@/components/kit/LogoMarquee';

/** Web3 brands/exchanges that run campaigns on Kolio — styled text, not logos. */
const TRUSTED_BY = [
  'OKX', 'Ledger', 'Phantom', 'Arbitrum', 'Kaito', 'Optimism',
  'Base', 'MetaMask', 'dYdX', 'Polygon', 'Uniswap', 'Magic Eden',
];

/** Disciplines you can join — branded initials, no invented headshots. */
const PODS = [
  { initials: 'GR', name: 'Growth & Partnerships', note: 'Ex-exchange and protocol growth leads', tone: 'brand' as const },
  { initials: 'DA', name: 'Data & Social Graph', note: 'Cross-chain indexing pipelines', tone: 'ink' as const },
  { initials: 'AU', name: 'Audience Authenticity', note: 'Bot and fraud detection', tone: 'ink' as const },
  { initials: 'ON', name: 'On-chain Engineering', note: 'Escrow, payouts, attribution', tone: 'onchain' as const },
];

/** Who you'll work with — calm white surface, floating discipline cards, marquee. */
export default function MeetTheTeam() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 justify-center">Who you&rsquo;ll work with</p>
          <h2 className="display-light text-[2.25rem] leading-[1.05] text-foreground md:text-[3.5rem]">
            A small, senior team that has lived on <span className="accent text-gradient-brand">both sides</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-md text-foreground/65">
            We&rsquo;ve run growth at exchanges and protocols, and built the data
            infrastructure behind creator marketing at scale. Kolio is where those
            two worlds meet. Remote-first across Europe, with deliberate in-person
            time, and far more interested in craft and ownership than in where you sit.
          </p>
        </div>

        {/* Floating discipline cards — gentle rotation/translate, branded initials */}
        <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {PODS.map((pod, i) => {
            const dark = pod.tone === 'onchain';
            const initialBg =
              pod.tone === 'brand' ? 'bg-gradient-brand text-white'
              : pod.tone === 'onchain' ? 'bg-white/10 text-mint'
              : 'bg-coral-bg text-brand';
            const offset = ['-rotate-1 md:translate-y-3', 'rotate-1 md:-translate-y-2', '-rotate-1 md:translate-y-2', 'rotate-1 md:-translate-y-3'][i];
            return (
              <div
                key={pod.initials}
                className={`${dark ? 'surface-onchain text-white' : 'card-kit'} shadow-float ${offset} flex flex-col rounded-2xl p-6 transition hover:rotate-0 hover:translate-y-0`}
              >
                <div className={`grid h-12 w-12 place-items-center rounded-xl text-body-lg font-bold tracking-tight ${initialBg}`}>
                  {pod.initials}
                </div>
                <h3 className={`mt-5 text-body font-semibold leading-tight ${dark ? 'text-white' : 'text-foreground'}`}>
                  {pod.name}
                </h3>
                <p className={`mt-1.5 text-body-sm leading-snug ${dark ? 'text-white/55' : 'text-foreground/55'}`}>
                  {pod.note}
                </p>
                <a
                  href="#open-roles"
                  className={`mt-5 inline-flex items-center gap-1 text-body-sm font-semibold ${dark ? 'text-mint' : 'text-brand'}`}
                >
                  View roles <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Trusted by — web3 teams that run campaigns on Kolio */}
      <div className="mt-16 md:mt-24">
        <LogoMarquee label="Trusted by teams across web3" names={TRUSTED_BY} />
      </div>
    </section>
  );
}
