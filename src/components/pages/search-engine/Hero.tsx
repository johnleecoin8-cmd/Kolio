import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProofScore from '@/components/kit/ProofScore';

const RESULTS = [
  { handle: '@defi_degen', niche: 'DeFi · L2', reach: '142K', score: 91, match: 98 },
  { handle: '@l2_research', niche: 'Research · Infra', reach: '88K', score: 86, match: 94 },
  { handle: '@nft_curator', niche: 'NFTs · Culture', reach: '61K', score: 79, match: 89 },
];

/** Hero — search-engine framing: relevance-sorted query + focal results card-kit mock. */
export default function Hero() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid items-center gap-12 py-16 md:grid-cols-[1fr_1.05fr] md:py-24">
          {/* copy */}
          <div className="max-w-xl">
            <span className="eyebrow">The KOL search engine for web3</span>
            <h1 className="mt-4 display-xl font-display text-[2.75rem] text-foreground md:text-[3.5rem]">
              Search 120K crypto KOLs. Ranked by relevance, not reach.
            </h1>
            <p className="mt-6 text-body-md leading-relaxed text-foreground/75">
              Type a token, niche, or chain. Kolio ranks every key opinion leader
              across X, YouTube, TikTok, and Telegram by how well their audience
              actually matches yours &mdash; proof-scored, bot-screened, and sorted
              so the right voice sits at the top.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/demo-confirmation"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-brand px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                Run your first search &mdash; free
              </a>
              <span className="chip chip-onchain font-mono-tnum">Relevance-ranked</span>
            </div>
          </div>

          {/* focal search + results mock */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-brand opacity-10 blur-2xl" aria-hidden />
            <div className="card-kit relative overflow-hidden p-5 md:p-6">
              {/* search bar */}
              <div className="flex items-center gap-3 rounded-lg border border-hairline bg-gray-50 px-4 py-3">
                <Search className="h-5 w-5 shrink-0 text-brand" />
                <span className="flex-1 truncate font-mono-tnum text-body text-foreground">
                  defi l2 · audience: wallet-active · region: NA/EU
                </span>
                <SlidersHorizontal className="h-5 w-5 shrink-0 text-foreground/40" />
              </div>

              {/* sort row */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-body text-foreground/55">
                  3,184 matches
                </span>
                <span className="inline-flex items-center gap-1.5 chip chip-ink font-mono-tnum">
                  <ArrowUpDown className="h-3.5 w-3.5" /> Sort: Relevance
                </span>
              </div>

              {/* results */}
              <ul className="mt-3 space-y-2.5">
                {RESULTS.map((r) => (
                  <li
                    key={r.handle}
                    className="flex items-center gap-4 rounded-lg border border-hairline bg-background px-4 py-3 transition hover:border-brand/30"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-coral-bg font-display text-body-sm font-bold text-brand">
                      {r.handle.charAt(1).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-body font-semibold text-foreground">
                        {r.handle}
                      </div>
                      <div className="text-body text-foreground/55">
                        {r.niche} · <span className="font-mono-tnum">{r.reach}</span> real reach
                      </div>
                    </div>
                    <div className="hidden shrink-0 text-right sm:block">
                      <div className="num-display text-body-lg text-mint">{r.match}%</div>
                      <div className="text-eyebrow text-foreground/45">match</div>
                    </div>
                    <ProofScore score={r.score} size="sm" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
