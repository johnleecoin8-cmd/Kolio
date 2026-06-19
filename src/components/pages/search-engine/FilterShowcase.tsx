import { CheckCircle2 } from 'lucide-react';
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

/** "Filter for crypto KOLs that actually convert" — two filter checklists + CTA. */
export default function FilterShowcase() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="text-center font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
            Filter for crypto KOLs that actually convert
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] text-center text-body text-foreground/80">
            Kolio indexes key opinion leaders across X, YouTube, TikTok, and
            Telegram &mdash; scored on real reach and audience quality, not
            follower counts. The right voice for your token{' '}
            <strong className="font-semibold">is</strong> out there; these are
            the filters that surface them.
          </p>

          <div className="mt-12 grid w-full gap-10 md:grid-cols-2 md:gap-16">
            <FilterCard title="KOL filters" items={KOL} />
            <FilterCard title="Audience filters" items={AUDIENCE} />
          </div>

          <a
            href="/demo-confirmation"
            className="mt-12 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Try For Free
          </a>
        </div>
      </Container>
    </section>
  );
}

function FilterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="font-display text-h4 text-violet-dark">{title}</h4>
      <ul className="mt-8 w-full max-w-[320px] space-y-4">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-center gap-3 text-body text-foreground"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brand" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
