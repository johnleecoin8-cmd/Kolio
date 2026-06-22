import { Crosshair, Users, ShieldCheck, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Calm explainer on white: the four signals Kolio ranks on, each a floating
 *  card with a tiny product detail. Original crypto-KOL copy. */

const PILLARS = [
  {
    icon: Crosshair,
    chip: 'Topic match',
    title: 'Semantic, not keyword',
    body: 'We read what a KOL actually posts about — narratives, tickers, chains — and match the meaning of your brief, so adjacent topics surface too.',
    detail: ['DeFi · perps', 'restaking', 'L2 throughput'],
  },
  {
    icon: Users,
    chip: 'Real audience',
    title: 'Holders, not headcount',
    body: 'Reach is weighted by wallet-active, on-chain audiences. A 70K KOL with real holders outranks a 400K account full of dormant followers.',
    detail: ['real holders 64%', 'EN geo 81%', 'bots 3%'],
  },
  {
    icon: ShieldCheck,
    chip: 'Proof Score',
    title: 'Vetted before you see it',
    body: 'Every result carries a composite Proof Score — authenticity, engagement quality, and on-chain signal folded into one number you can trust.',
    detail: ['authenticity', 'engagement', 'on-chain'],
  },
  {
    icon: Sparkles,
    chip: 'Relevance rank',
    title: 'The right voice on top',
    body: 'Signals combine into a single relevance score, so the KOL most likely to move your audience sits first — no scrolling through vanity metrics.',
    detail: ['38 signals indexed', 'sorted by fit'],
  },
];

export default function RelevancePillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow">How ranking works</span>
          <h2 className="display-light mt-4 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Four signals decide who sits at the{' '}
            <span className="accent text-gradient-brand">top</span>
          </h2>
          <p className="mt-5 text-body-md text-foreground/60">
            Kolio doesn't rank by follower count. It ranks by how well a KOL's
            topic, audience, and proof actually fit your campaign.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.chip}
                className={`card-kit shadow-float-sm rounded-2xl p-6 transition hover:-translate-y-1 ${
                  i % 2 === 1 ? 'lg:translate-y-4' : ''
                }`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-coral-bg text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="chip chip-brand mt-5 inline-block">{p.chip}</span>
                <h3 className="mt-3 text-body-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-foreground/60">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-gray-100 pt-4">
                  {p.detail.map((d) => (
                    <span
                      key={d}
                      className="rounded-pill bg-gray-50 px-2.5 py-1 font-mono-tnum text-eyebrow text-foreground/55"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
