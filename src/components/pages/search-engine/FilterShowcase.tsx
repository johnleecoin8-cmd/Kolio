import { Search, Users } from 'lucide-react';
import Container from '@/components/ui/Container';

const KOL = [
  'Crypto niche (DeFi, NFTs, L1/L2, gaming)',
  'Platform (X, YouTube, TikTok, Telegram)',
  'Follower range & real reach',
  'Engagement rate',
  'Bio keywords & cashtags',
  'Posting cadence & growth rate',
];

const AUDIENCE = [
  'Holder & trader concentration',
  'Geography (region/country)',
  'Bot & fake-follower screening',
  'Wallet-active audience share',
  'Chain & ecosystem affinity',
  'Languages',
];

/** "Every filter feeds the ranking" — two filter cards rendered as chip clusters. */
export default function FilterShowcase() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Query inputs</span>
          <h2 className="mt-3 display-lg font-display text-[2rem] text-foreground md:text-[2.5rem]">
            Every filter feeds the relevance score
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-body text-foreground/70">
            Stack KOL signals and audience signals into one query. Kolio weights
            each one and re-sorts the results so the closest match &mdash; not the
            biggest follower count &mdash; lands at position one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FilterCard
            icon={<Search className="h-5 w-5" />}
            eyebrow="Filter the KOL"
            items={KOL}
            chip="chip-brand"
          />
          <FilterCard
            icon={<Users className="h-5 w-5" />}
            eyebrow="Filter the audience"
            items={AUDIENCE}
            chip="chip-onchain"
          />
        </div>
      </Container>
    </section>
  );
}

function FilterCard({
  icon,
  eyebrow,
  items,
  chip,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  items: string[];
  chip: string;
}) {
  return (
    <div className="card-kit p-7">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-coral-bg text-brand">
          {icon}
        </span>
        <h3 className="font-display text-h4 text-foreground">{eyebrow}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {items.map((it) => (
          <span key={it} className={`chip ${chip}`}>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
