import { BadgeCheck, Heart, MessageCircle, Repeat2, Eye, PlayCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Floating content-grid: original Kolio mini product UI showing real campaign
 *  posts as proof cards with engagement chips. Calm-premium floating-card look. */

type Post = {
  handle: string;
  niche: string;
  score: number;
  format: string;
  blurb: string;
  views: string;
  likes: string;
  replies: string;
  reposts: string;
  surface?: 'card' | 'dark';
  tilt: string;
};

const POSTS: Post[] = [
  {
    handle: 'CryptoWhale', niche: 'DeFi thread', score: 92, format: 'X thread',
    blurb: 'Walked 40k holders through the bridge flow. Verified click-through to a live testnet.',
    views: '128K', likes: '4.2K', replies: '610', reposts: '1.1K',
    tilt: '-rotate-1 md:translate-y-2',
  },
  {
    handle: 'L2Maxi', niche: 'Layer2 explainer', score: 88, format: 'YouTube',
    blurb: 'Twelve-minute teardown of gas savings. On-chain wallets attributed back to the campaign.',
    views: '54K', likes: '3.0K', replies: '420', reposts: '780',
    surface: 'dark', tilt: 'rotate-1 md:-translate-y-2',
  },
  {
    handle: 'OnchainAna', niche: 'Trading recap', score: 85, format: 'X post',
    blurb: 'Quote-tested the protocol fee model. Drove 2,300 verified profile visits in 24h.',
    views: '71K', likes: '2.6K', replies: '340', reposts: '560',
    tilt: 'rotate-1 md:translate-y-3',
  },
  {
    handle: 'StableSage', niche: 'Stablecoin deep-dive', score: 90, format: 'Newsletter',
    blurb: 'Long-form on yield mechanics to a holder list. 38% open, every click on-chain matched.',
    views: '22K', likes: '1.4K', replies: '210', reposts: '300',
    tilt: '-rotate-1 md:-translate-y-1',
  },
  {
    handle: 'ZkPilgrim', niche: 'ZK rollup demo', score: 87, format: 'Live stream',
    blurb: 'Streamed a mainnet mint to 9k concurrent. Wallet connects tagged to the brief.',
    views: '96K', likes: '3.8K', replies: '720', reposts: '940',
    surface: 'dark', tilt: 'rotate-1 md:translate-y-2',
  },
  {
    handle: 'DegenQuant', niche: 'Quant breakdown', score: 83, format: 'X thread',
    blurb: 'Modeled the token sink with charts. Holders engaged, bot share measured under 5%.',
    views: '44K', likes: '1.9K', replies: '280', reposts: '410',
    tilt: '-rotate-1 md:translate-y-1',
  },
];

function Engagement({ p }: { p: Post; }) {
  const dark = p.surface === 'dark';
  const muted = dark ? 'text-white/60' : 'text-foreground/55';
  const chips: [typeof Heart, string][] = [
    [Heart, p.likes], [MessageCircle, p.replies], [Repeat2, p.reposts],
  ];
  return (
    <div className={`mt-5 flex flex-wrap items-center gap-2 font-mono-tnum text-eyebrow ${muted}`}>
      <span className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
        <Eye className="h-3.5 w-3.5" /> {p.views}
      </span>
      {chips.map(([Icon, v], i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" /> {v}
        </span>
      ))}
    </div>
  );
}

export default function ContentGrid() {
  return (
    <section className="canvas-warm pb-20 pt-4 md:pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow text-brand">Proof library</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Real posts, scored on the <span className="text-gradient-brand">numbers</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-md text-foreground/60">
            Every card is a shipped piece from a live Kolio brief. Engagement is pulled as measured, never as claimed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => {
            const dark = p.surface === 'dark';
            return (
              <article
                key={p.handle}
                className={`${dark ? 'surface-onchain text-white' : 'card-kit'} shadow-float ${p.tilt} rounded-2xl p-6 transition hover:rotate-0 hover:translate-y-0`}
              >
                <div className="flex items-center justify-between">
                  <span className={`chip ${dark ? 'chip-onchain' : 'chip-brand'}`}>{p.format}</span>
                  <span className={`num-display rounded-pill px-2.5 py-1 text-eyebrow font-bold ${dark ? 'bg-white/10 text-mint' : 'bg-coral-bg text-brand'}`}>
                    {p.score}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                    {p.handle.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <div className={`flex items-center gap-1 text-body-sm font-semibold ${dark ? 'text-white' : 'text-foreground'}`}>
                      @{p.handle}
                      <BadgeCheck className={`h-3.5 w-3.5 ${dark ? 'text-mint' : 'text-brand'}`} />
                    </div>
                    <div className={`text-eyebrow ${dark ? 'text-white/55' : 'text-foreground/50'}`}>{p.niche}</div>
                  </div>
                </div>

                <p className={`mt-4 flex items-start gap-2 text-body-sm leading-relaxed ${dark ? 'text-white/75' : 'text-foreground/70'}`}>
                  <PlayCircle className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-white/40' : 'text-foreground/30'}`} />
                  {p.blurb}
                </p>

                <Engagement p={p} />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
