import { Heart, MessageCircle, Repeat2, Play, BadgeCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

/** A single indexed piece of sponsored content. Brand-neutral, div-rendered
 *  thumbnails (no third-party imagery) with real engagement chips + attribution. */
type ContentItem = {
  handle: string;
  channel: 'X' | 'YouTube' | 'TikTok' | 'Telegram';
  format: string;
  caption: string;
  thumb: string; // tailwind gradient classes
  likes: string;
  comments: string;
  shares: string;
  reach: string;
  attribution: string;
  verified: boolean;
};

const ITEMS: ContentItem[] = [
  {
    handle: '@danielcheung_eth',
    channel: 'X',
    format: 'Thread · 11 posts',
    caption: 'Why @okx perps liquidity is quietly best-in-class — a breakdown 🧵',
    thumb: 'from-[#1d1d2b] via-[#2a2438] to-[#3a2030]',
    likes: '32.6k',
    comments: '1,284',
    shares: '4.1k',
    reach: '2.4M',
    attribution: '1,284 sign-ups',
    verified: true,
  },
  {
    handle: '@layla_onchain',
    channel: 'YouTube',
    format: 'Video · 8:42',
    caption: 'Bridged to the new L2 in 8 seconds for $0.002 — sponsored deep-dive.',
    thumb: 'from-[#102a3c] via-[#16384f] to-[#1f2f4a]',
    likes: '18.9k',
    comments: '946',
    shares: '2.7k',
    reach: '1.1M',
    attribution: '612 first deposits',
    verified: true,
  },
  {
    handle: '@wei_perps',
    channel: 'X',
    format: 'Thread · 6 posts',
    caption: 'Basis trade setup I ran live on @okx — full breakdown with entries.',
    thumb: 'from-[#2b1f12] via-[#3a2a14] to-[#42201a]',
    likes: '24.3k',
    comments: '703',
    shares: '3.4k',
    reach: '1.8M',
    attribution: '892 trades opened',
    verified: true,
  },
  {
    handle: '@hana_nftjp',
    channel: 'TikTok',
    format: 'Short · 0:54',
    caption: 'Minting day — walking through the mechanics live with @okx 🔵',
    thumb: 'from-[#241433] via-[#341b46] to-[#2a1740]',
    likes: '8.4k',
    comments: '321',
    shares: '1.2k',
    reach: '640k',
    attribution: '417 wallet opens',
    verified: false,
  },
  {
    handle: '@ahmed_arabcrypto',
    channel: 'Telegram',
    format: 'Broadcast · pinned',
    caption: 'شرح كامل عن منصة @okx للمبتدئين — a full Arabic walkthrough.',
    thumb: 'from-[#0f2a26] via-[#143a32] to-[#1a3340]',
    likes: '6.7k',
    comments: '512',
    shares: '980',
    reach: '430k',
    attribution: '356 sign-ups',
    verified: false,
  },
];

const CHANNEL_TONE: Record<ContentItem['channel'], string> = {
  X: 'chip-ink',
  YouTube: 'chip-brand',
  TikTok: 'chip-ink',
  Telegram: 'chip-onchain',
};

/** Initials mark for the brand-neutral thumbnail avatar. */
function initials(handle: string) {
  const core = handle.replace(/^@/, '');
  return core.slice(0, 2).toUpperCase();
}

function EngagementRow({ item, dark = false }: { item: ContentItem; dark?: boolean }) {
  const muted = dark ? 'text-white/55' : 'text-foreground/55';
  const val = dark ? 'text-white' : 'text-foreground';
  const cells: { icon: JSX.Element; v: string }[] = [
    { icon: <Heart size={13} />, v: item.likes },
    { icon: <MessageCircle size={13} />, v: item.comments },
    { icon: <Repeat2 size={13} />, v: item.shares },
  ];
  return (
    <div className="flex items-center gap-4">
      {cells.map((c, i) => (
        <span key={i} className={`flex items-center gap-1.5 ${muted}`}>
          <span className={dark ? 'text-brand' : 'text-foreground/40'}>{c.icon}</span>
          <span className={`font-mono-tnum text-body-sm ${val}`}>{c.v}</span>
        </span>
      ))}
    </div>
  );
}

/** Lead card rendered as the dark on-chain punctuation panel. */
function LeadCard({ item }: { item: ContentItem }) {
  return (
    <article className="surface-onchain glow-brand flex flex-col overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
      {/* thumbnail */}
      <div className={`relative aspect-[16/10] w-full bg-gradient-to-br ${item.thumb}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className={`chip ${CHANNEL_TONE[item.channel]}`}>{item.channel}</span>
          <span className="chip chip-ink bg-white/10 text-white/80">{item.format}</span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="display-lg text-balance text-2xl text-white md:text-3xl">
            {item.caption}
          </p>
        </div>
      </div>
      {/* meta */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 font-display text-body-sm font-bold text-white">
            {initials(item.handle)}
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-white">
            {item.handle}
            {item.verified && <BadgeCheck size={16} className="text-brand" />}
          </span>
        </div>
        <EngagementRow item={item} dark />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div>
            <div className="font-mono-tnum num-display text-h3 leading-none text-white">{item.reach}</div>
            <div className="mt-1 text-eyebrow text-white/45">verified reach</div>
          </div>
          <span className="chip chip-onchain font-mono-tnum">→ {item.attribution}</span>
        </div>
      </div>
    </article>
  );
}

/** Standard light card for the grid (.card-kit). */
function ContentCard({ item }: { item: ContentItem }) {
  const isVideo = item.channel === 'YouTube' || item.channel === 'TikTok';
  return (
    <article className="card-kit flex flex-col overflow-hidden">
      <div className={`relative aspect-[16/9] w-full bg-gradient-to-br ${item.thumb}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <span className={`chip ${CHANNEL_TONE[item.channel]}`}>{item.channel}</span>
        </div>
        {isVideo && (
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/85 shadow-lg backdrop-blur">
              <Play size={18} className="ml-0.5 fill-ink text-ink" />
            </span>
          </span>
        )}
        <span className="absolute bottom-3 right-3 font-mono-tnum text-[11px] font-medium text-white/85">
          {item.format}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-1.5 text-body-sm font-semibold text-foreground">
          {item.handle}
          {item.verified && <BadgeCheck size={14} className="text-brand" />}
        </div>
        <p className="line-clamp-2 text-body-sm text-foreground/70">{item.caption}</p>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-hairline pt-4">
          <EngagementRow item={item} />
          <span className="font-mono-tnum text-[11px] text-foreground/45">{item.reach}</span>
        </div>
      </div>
    </article>
  );
}

/** Content examples gallery: intentional thumbnails, engagement chips, on-chain
 *  attribution, with one dark lead card as the focal punctuation. */
export default function ContentExamples() {
  const [lead, ...rest] = ITEMS;
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mb-10 max-w-2xl md:mb-12">
          <span className="eyebrow">Content examples</span>
          <h2 className="mt-3 display-xl text-h2 text-foreground">
            Real sponsored posts, indexed and proven
          </h2>
          <p className="mt-4 text-body text-foreground/65">
            Every piece is matched to its campaign, scored on real reach, and tied
            back to on-chain outcomes — not screenshots and vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-fr">
          <LeadCard item={lead} />
          {rest.map((item) => (
            <ContentCard key={item.handle} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
