import { BadgeCheck, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

type Tile = {
  name: string;
  handle: string;
  platform: string;
  followers: string;
  eng: string;
  views: string;
  score: number;
  category: string;
  match: number;
  initials: string;
};

const SEED: Tile = {
  name: 'OnChain Alpha',
  handle: 'your_top_kol',
  platform: 'X (Twitter)',
  followers: '128K',
  eng: '5.4%',
  views: '94K',
  score: 91,
  category: 'DeFi',
  match: 100,
  initials: 'OA',
};

const LOOKALIKES: Tile[] = [
  { name: 'DeFi Degenz', handle: 'defi_degenz', platform: 'X (Twitter)', followers: '142K', eng: '4.9%', views: '88K', score: 89, category: 'DeFi', match: 98, initials: 'DD' },
  { name: 'Chainwatch', handle: 'chainwatch', platform: 'YouTube', followers: '88K', eng: '5.1%', views: '61K', score: 86, category: 'L1 / L2', match: 95, initials: 'CW' },
  { name: 'Perps Pilot', handle: 'perps_pilot', platform: 'X (Twitter)', followers: '118K', eng: '4.4%', views: '72K', score: 84, category: 'Perps', match: 92, initials: 'PP' },
];

/** Seed creator → lookalikes visual. A pinned seed tile feeds three ranked
 *  similar-creator tiles (CreatorCard-shaped), wired by a match edge. */
export default function SeedLookalikes() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-[760px]">
          <span className="eyebrow">Lookalike engine</span>
          <h2 className="mt-3 display-lg text-h2 text-foreground">
            One seed creator in. Ten proven matches out.
          </h2>
          <p className="mt-5 max-w-[620px] text-body-md text-foreground/70">
            Pin the KOL who already converted for you. Kolio scores every indexed
            creator on audience overlap, niche, and on-chain credibility — then
            ranks the closest matches, each carrying its own Proof Score.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[320px_1fr]">
          {/* Seed tile */}
          <div className="relative">
            <span className="eyebrow mb-3 block text-foreground/45">Seed creator</span>
            <SeedCard t={SEED} />
            {/* edge connector (desktop) */}
            <div className="pointer-events-none absolute right-[-2rem] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-brand/0 to-brand lg:block" />
          </div>

          {/* Lookalike rail */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" />
              <span className="eyebrow text-foreground/45">Ranked lookalikes</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {LOOKALIKES.map((t) => (
                <LookalikeCard key={t.handle} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Pinned seed — leans on the brand gradient to read as the source. */
function SeedCard({ t }: { t: Tile }) {
  return (
    <div className="card-kit overflow-hidden p-0 ring-1 ring-brand/15">
      <div className="bg-gradient-brand px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-pill bg-white/20 text-body-sm font-bold text-white backdrop-blur">
            {t.initials}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 text-body-sm font-semibold text-white">
              <span className="truncate">{t.name}</span>
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-white/90" />
            </div>
            <div className="truncate text-eyebrow text-white/70">
              @{t.handle} · {t.platform}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-2 text-center">
          <MiniStat label="Followers" value={t.followers} />
          <MiniStat label="Eng. rate" value={t.eng} />
          <MiniStat label="Avg views" value={t.views} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="chip chip-brand">{t.category}</span>
          <span className="font-mono-tnum text-body-sm font-semibold text-brand">
            Proof {t.score}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Ranked match — CreatorCard-shaped, with a match meter at the top. */
function LookalikeCard({ t }: { t: Tile }) {
  return (
    <div className="card-kit flex flex-col p-4">
      <div className="flex items-center justify-between">
        <span className="chip chip-onchain font-mono-tnum">{t.match}% match</span>
        <span className="font-mono-tnum text-body-sm font-semibold text-foreground">
          {t.score}
        </span>
      </div>
      {/* match meter */}
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-pill bg-gray-200">
        <div
          className="h-full rounded-pill bg-gradient-brand"
          style={{ width: `${t.match}%` }}
        />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-pill bg-gradient-brand text-body-sm font-bold text-white">
          {t.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
            <span className="truncate">{t.name}</span>
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-brand" />
          </div>
          <div className="truncate text-eyebrow text-foreground/50">
            @{t.handle} · {t.platform}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <MiniStat label="Followers" value={t.followers} />
        <MiniStat label="Eng. rate" value={t.eng} />
        <MiniStat label="Avg views" value={t.views} />
      </div>
      <span className="mt-3 self-start chip chip-brand">{t.category}</span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-gray-50 py-2">
      <div className="num-display text-body-sm font-extrabold text-foreground">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-foreground/45">{label}</div>
    </div>
  );
}
