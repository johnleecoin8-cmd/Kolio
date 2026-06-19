import { useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/cn';

type Lesson = { n: number; video: string; title: string; body: React.ReactNode };

const TABS = [
  'KOL Marketing 101',
  'KOL Discovery & Vetting',
  'On-Chain Campaign Attribution',
] as const;

const DISCOVERY: Lesson[] = [
  {
    n: 1,
    video: 'l3VdOPkBipI',
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

function VideoEmbed({ id, eager = false }: { id: string; eager?: boolean }) {
  const [play, setPlay] = useState(eager);
  if (play) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded bg-[#e0e0e0]">
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
  // Unloaded YouTube lazy-embed look: flat gray box with the faint YouTube play glyph.
  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label="Play video"
      className="group relative block aspect-video w-full overflow-hidden rounded bg-[#e0e0e0]"
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 90 64"
          className="h-16 w-[5.5rem] text-[#c5c5c5] transition group-hover:text-[#ff0000]"
          aria-hidden="true"
        >
          <rect width="90" height="64" rx="14" fill="currentColor" />
          <path d="M36 20 L62 32 L36 44 Z" fill="#ffffff" />
        </svg>
      </span>
    </button>
  );
}

/** Tabbed list of academy lessons (video left, copy right). */
export default function AcademyLessons() {
  const [tab, setTab] = useState(1); // KOL Discovery & Vetting active by default

  return (
    <section className="bg-background pb-16 pt-10 md:pb-24">
      <Container>
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-8 border-b border-black/10 md:mb-14 md:gap-12">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                '-mb-px border-b-[3px] pb-3 text-body font-semibold transition-colors',
                tab === i
                  ? 'border-purple text-foreground'
                  : 'border-transparent text-foreground/55 hover:border-violet-light hover:text-foreground',
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Lessons */}
        <div className="flex flex-col gap-10 md:gap-14">
          {DISCOVERY.map((l) => (
            <div
              key={l.n}
              className="grid items-start gap-6 md:grid-cols-2 md:gap-12"
            >
              <VideoEmbed id={l.video} eager={l.n === 1} />
              <div className="md:pt-2">
                <p className="text-body-sm font-semibold uppercase tracking-wide text-purple">
                  Lesson {l.n}
                </p>
                <h2 className="mt-3 font-display text-[1.5rem] font-normal leading-snug text-violet-dark md:text-[1.75rem]">
                  {l.title}
                </h2>
                <p className="mt-4 text-body-sm text-foreground/70 md:text-body">
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
