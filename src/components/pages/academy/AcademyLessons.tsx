import { useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

type Lesson = {
  n: number;
  video: string;
  title: string;
  body: React.ReactNode;
  thumb: string; // tailwind gradient stops for the branded poster
  kicker: string; // short label rendered on the thumb
  len: string; // runtime, e.g. "6:24"
};

const TABS = [
  'KOL Marketing 101',
  'KOL Discovery & Vetting',
  'On-Chain Campaign Attribution',
] as const;

const DISCOVERY: Lesson[] = [
  {
    n: 1,
    video: 'l3VdOPkBipI',
    thumb: 'from-brand to-brand-coral',
    kicker: 'Your First Search',
    len: '6:24',
    title: 'Your First KOL Search: Setting Up For Success With Kolio',
    body: (
      <>
        New to using Kolio to find crypto KOLs?&nbsp;Start here. Learn the two
        filters that matter most, niche and proof-based reach, and how to apply
        them so your search isn&rsquo;t flooded with bots or too narrow to fill a
        campaign.
      </>
    ),
  },
  {
    n: 2,
    video: 'dh9EmN9jLJo',
    thumb: 'from-purple to-brand',
    kicker: 'Beyond Vanity Metrics',
    len: '5:11',
    title: 'Using Kolio Filters: Cutting Through Vanity Metrics',
    body: (
      <>
        Follower counts lie, especially in crypto. Kolio indexes KOLs across X,
        YouTube, TikTok, and Telegram with proof-based reach and audience-quality
        signals. Learn how to filter for real influence instead of inflated numbers.
      </>
    ),
  },
  {
    n: 3,
    video: 'AKee3_ydUPA',
    thumb: 'from-brand-coral to-pink',
    kicker: '6 Vetting Tips',
    len: '8:02',
    title: 'Advanced Filters: 6 Expert Tips For Vetting Crypto KOLs',
    body: (
      <>
        Ready to go beyond the basics?&nbsp;Here are 6 quick tips to step up your
        vetting. Learn how to layer audience-overlap, niche, and engagement-quality
        filters to surface KOLs who actually convert holders, not just impressions.
      </>
    ),
  },
  {
    n: 4,
    video: 'Nd3jvoANHB8',
    thumb: 'from-purple to-pink-dark',
    kicker: 'Lookalike KOLs',
    len: '4:48',
    title: 'Scale What Works: Finding Lookalike KOLs In Kolio',
    body: (
      <>
        Found a KOL who drove real on-chain activity for your token?&nbsp;Clone
        the result. This quick video shows how to use Kolio lookalikes to find
        creators with similar audiences and niches, so you can scale a winning
        campaign across DeFi, NFTs, L1/L2, trading, and gaming.
      </>
    ),
  },
  {
    n: 5,
    video: 'G81jF1lPtKM',
    thumb: 'from-brand to-purple',
    kicker: 'Niche Protocols',
    len: '7:33',
    title: 'Finding Niche KOLs For Your Protocol With Kolio',
    body: (
      <>
        The more specific your protocol, an L2, a perps DEX, a gaming chain, the
        harder it seems to find the right voices. If that sounds familiar, this
        video will change how you think about sourcing crypto KOLs for narrow niches.
      </>
    ),
  },
];

function VideoEmbed({
  id,
  thumb,
  kicker,
  len,
  n,
  eager = false,
}: {
  id: string;
  thumb: string;
  kicker: string;
  len: string;
  n: number;
  eager?: boolean;
}) {
  const [play, setPlay] = useState(eager);
  if (play) {
    return (
      <div className="card-kit aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?rel=0&controls=1&autoplay=0&mute=0&start=0`}
          title="Kolio Academy lesson"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  // Branded gradient poster with a real play affordance (replaces flat grey box).
  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label={`Play lesson ${n}`}
      className={`card-kit group relative block aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br ${thumb}`}
    >
      {/* subtle chain grid overlay for crypto texture */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <span className="absolute left-4 top-4 flex items-center gap-2">
        <span className="font-mono-tnum rounded-full bg-black/25 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur">
          LESSON {String(n).padStart(2, '0')}
        </span>
      </span>
      <span className="font-mono-tnum absolute bottom-4 right-4 rounded-full bg-black/30 px-2.5 py-1 text-[0.72rem] font-semibold text-white backdrop-blur">
        {len}
      </span>
      <span className="absolute bottom-4 left-4 max-w-[60%] text-left font-display text-[1.05rem] font-bold leading-tight text-white drop-shadow-sm">
        {kicker}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-brand" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}

/** Tabbed list of academy lessons (video left, copy right). */
export default function AcademyLessons() {
  const [tab, setTab] = useState(1); // KOL Discovery & Vetting active by default

  const [lead, ...rest] = DISCOVERY;

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mb-8 md:mb-12">
          <span className="eyebrow">Watch &amp; learn</span>
          <h2 className="display-lg mt-3 font-display text-[2rem] text-foreground md:text-[2.5rem]">
            Lesson library
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap gap-8 border-b border-hairline md:mb-16 md:gap-12">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                '-mb-px border-b-[3px] pb-3 text-body font-semibold transition-colors',
                tab === i
                  ? 'border-brand text-foreground'
                  : 'border-transparent text-foreground/50 hover:border-coral-bg hover:text-foreground',
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Lead lesson — larger, stacked, card-kit framed */}
        <div className="card-kit mb-12 overflow-hidden p-5 md:mb-16 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1.25fr_1fr] md:gap-10">
            <VideoEmbed
              id={lead.video}
              thumb={lead.thumb}
              kicker={lead.kicker}
              len={lead.len}
              n={lead.n}
              eager
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="chip chip-brand">Start here</span>
                <span className="font-mono-tnum text-eyebrow text-foreground/45">
                  Lesson {String(lead.n).padStart(2, '0')}
                </span>
              </div>
              <h3 className="display-lg mt-3 font-display text-[1.65rem] text-foreground md:text-[2rem]">
                {lead.title}
              </h3>
              <p className="mt-4 text-body-sm text-foreground/65 md:text-body">
                {lead.body}
              </p>
            </div>
          </div>
        </div>

        {/* Remaining lessons — alternating two-up rows */}
        <div className="flex flex-col gap-10 md:gap-14">
          {rest.map((l) => (
            <div
              key={l.n}
              className="grid items-start gap-6 md:grid-cols-2 md:gap-12"
            >
              <VideoEmbed
                id={l.video}
                thumb={l.thumb}
                kicker={l.kicker}
                len={l.len}
                n={l.n}
              />
              <div className="md:pt-2">
                <div className="flex items-center gap-2">
                  <span className="chip chip-ink">{l.kicker}</span>
                  <span className="font-mono-tnum text-eyebrow text-foreground/45">
                    Lesson {String(l.n).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.4rem] font-semibold leading-snug text-foreground md:text-[1.65rem]">
                  {l.title}
                </h3>
                <p className="mt-4 text-body-sm text-foreground/65 md:text-body">
                  {l.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
