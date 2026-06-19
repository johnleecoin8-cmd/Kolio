import { useState } from 'react';
import Container from '@/components/ui/Container';

type Lesson = { n: number; video: string; title: string; body: React.ReactNode };

const TABS = [
  'Influencer Marketing 101',
  'Influencer Discovery',
  'Influencer Campaign Monitoring',
] as const;

const DISCOVERY: Lesson[] = [
  {
    n: 1,
    video: 'l3VdOPkBipI',
    title: 'Running Your First Search: Setting Up For Success With Modash',
    body: (
      <>
        New to using Modash to search for influencers?&nbsp;Start here. Learn about
        the two most important filters, and how to apply them effectively so that
        your search isn&rsquo;t too broad, or too narrow.
      </>
    ),
  },
  {
    n: 2,
    video: 'dh9EmN9jLJo',
    title: 'Introduction To Using Modash Search Filters Effectively',
    body: (
      <>
        Modash lists 200M+ creators, which means the perfect partner for your brand
        is&nbsp;in our database. You just need to know how to find them. Learn about
        all of the most common filtering options, and how to apply them.
      </>
    ),
  },
  {
    n: 3,
    video: 'AKee3_ydUPA',
    title: 'Modash Search Filters Continued: 6 Expert Tips For Finding Influencers',
    body: (
      <>
        Ready to go beyond the basics?&nbsp;Here&rsquo;s 6 super quick tips to step
        up your game. Learn about how exactly the search filters work, and how you can
        layer &amp;&nbsp;combine them to get the best possible results.
      </>
    ),
  },
  {
    n: 4,
    video: 'Nd3jvoANHB8',
    title: 'Replicate Your Success By Finding Lookalikes In Modash',
    body: (
      <>
        Ever wished you could clone one of your brand ambassadors to scale your
        program?&nbsp;Well, you can. Kind of. This quick video explains how you can
        use Modash to find creators that are similar to those who you&rsquo;re already
        having success with.
      </>
    ),
  },
  {
    n: 5,
    video: 'G81jF1lPtKM',
    title: 'Tips On Finding Niche-Specific Influencers With Modash',
    body: (
      <>
        The more specific your audience is, the harder it might seem to find creators
        who are a good fit. If that sounds relatable, then this video might help you
        change the way you think about potential brand partners.
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
          title="Modash Academy lesson"
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
  const [tab, setTab] = useState(1); // Influencer Discovery active by default

  return (
    <section className="bg-background pb-16 pt-10 md:pb-24">
      <Container>
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-6 border-b border-black/10 md:gap-10">
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(i)}
              className={`-mb-px border-b-2 pb-3 text-body-sm font-semibold transition-colors ${
                tab === i
                  ? 'border-ink text-foreground'
                  : 'border-transparent text-foreground/55 hover:text-foreground'
              }`}
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
                <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
                  Lesson {l.n}
                </p>
                <h2 className="mt-3 font-display text-[1.5rem] leading-snug text-foreground md:text-h4">
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
