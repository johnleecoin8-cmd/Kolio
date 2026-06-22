import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, PlayCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

type Lesson = {
  tag: string;
  title: string;
  blurb: string;
  minutes: number;
  level: string;
  /** branded thumbnail renderer — gradient/dark mini-UI, never a blank box */
  thumb: 'score' | 'discover' | 'escrow' | 'reach' | 'brief' | 'return';
};

const LESSONS: Lesson[] = [
  {
    tag: 'Vetting',
    title: 'Reading a Proof Score before you book',
    blurb: 'What real-follower, engaged-holder and bot ratios actually tell you about a KOL.',
    minutes: 7,
    level: 'Beginner',
    thumb: 'score',
  },
  {
    tag: 'Discovery',
    title: 'Building a shortlist that fits your token',
    blurb: 'Filter by chain, narrative and audience overlap to find KOLs who move your holders.',
    minutes: 9,
    level: 'Beginner',
    thumb: 'discover',
  },
  {
    tag: 'On-chain',
    title: 'How USDC escrow protects both sides',
    blurb: 'Fund, deliver, release. Walk the milestone flow that removes pay-first risk.',
    minutes: 6,
    level: 'Core',
    thumb: 'escrow',
  },
  {
    tag: 'Measurement',
    title: 'Real reach vs. vanity impressions',
    blurb: 'Separate wallet-verified reach from inflated view counts using on-chain signals.',
    minutes: 11,
    level: 'Intermediate',
    thumb: 'reach',
  },
  {
    tag: 'Briefing',
    title: 'Writing a brief KOLs actually deliver on',
    blurb: 'Scope, talking points and disclosure that keep content compliant and on-message.',
    minutes: 8,
    level: 'Core',
    thumb: 'brief',
  },
  {
    tag: 'Attribution',
    title: 'Proving return with referral attribution',
    blurb: 'Tie holders, volume and conversions back to the exact KOL who drove them.',
    minutes: 12,
    level: 'Advanced',
    thumb: 'return',
  },
];

/** Branded mini-UI thumbnails — gradient or dark surfaces, never empty placeholders. */
function Thumb({ kind }: { kind: Lesson['thumb'] }) {
  if (kind === 'score') {
    return (
      <div className="surface-onchain relative flex h-full flex-col justify-between overflow-hidden p-5 text-white">
        <span className="chip chip-onchain w-fit">Proof Score</span>
        <div className="flex items-end gap-2">
          <span className="num-display text-[3rem] leading-none">92</span>
          <span className="mb-2 text-body-sm text-white/50">/ 100</span>
        </div>
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-pill bg-brand-coral/30 blur-2xl" />
      </div>
    );
  }
  if (kind === 'discover') {
    return (
      <div className="bg-gradient-brand relative flex h-full flex-col justify-center gap-2 overflow-hidden p-5">
        {[['CW', 92], ['L2', 88], ['OA', 85]].map(([h, s]) => (
          <div key={h as string} className="flex items-center gap-2 rounded-lg bg-white/15 px-2.5 py-1.5 backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-pill bg-white text-eyebrow font-bold text-brand">{h}</span>
            <span className="text-body-sm font-semibold text-white">@kol</span>
            <span className="num-display ml-auto text-eyebrow font-bold text-white">{s as number}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'escrow') {
    return (
      <div className="surface-onchain relative flex h-full flex-col justify-between overflow-hidden p-5 text-white">
        <span className="chip chip-onchain w-fit">Escrow</span>
        <div>
          <div className="text-eyebrow text-white/50">Released on delivery</div>
          <div className="num-display mt-1 text-[1.9rem] leading-none">8,500<span className="text-body-sm text-white/50"> USDC</span></div>
        </div>
        <div className="flex gap-2 font-mono-tnum text-eyebrow text-mint">
          <span>● fund</span><span>● deliver</span><span>● release</span>
        </div>
      </div>
    );
  }
  if (kind === 'reach') {
    return (
      <div className="relative flex h-full items-end gap-1.5 overflow-hidden bg-coral-bg p-5">
        {[34, 52, 41, 68, 49, 80, 61].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md bg-brand/80" style={{ height: `${h}%` }} />
        ))}
        <div className="absolute left-5 top-5">
          <span className="chip chip-brand">Verified reach</span>
        </div>
      </div>
    );
  }
  if (kind === 'brief') {
    return (
      <div className="bg-gradient-brand relative flex h-full flex-col justify-center gap-2 overflow-hidden p-5">
        <span className="chip chip-onchain w-fit bg-white/20 text-white">Campaign brief</span>
        {['Scope & deliverables', 'Talking points', 'Disclosure rules'].map((l) => (
          <div key={l} className="flex items-center gap-2 text-body-sm text-white">
            <span className="grid h-4 w-4 place-items-center rounded-pill bg-white text-[10px] font-bold text-brand">✓</span>
            {l}
          </div>
        ))}
      </div>
    );
  }
  // return / attribution
  return (
    <div className="surface-onchain relative flex h-full flex-col justify-between overflow-hidden p-5 text-white">
      <span className="chip chip-onchain w-fit">Attribution</span>
      <div className="space-y-1.5 font-mono-tnum text-eyebrow">
        <div className="flex justify-between text-white/70"><span>new holders</span><span className="text-mint">+1,284</span></div>
        <div className="flex justify-between text-white/70"><span>volume driven</span><span className="text-mint">$412K</span></div>
        <div className="flex justify-between text-white"><span>ROI</span><span className="text-mint">3.8×</span></div>
      </div>
    </div>
  );
}

/** Floating lesson cards with branded thumbnails (calm-premium signature pattern). */
export default function AcademyLessons() {
  return (
    <section className="canvas-warm py-20 md:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow text-brand">The curriculum</span>
          <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Lessons drawn from{' '}
            <span className="accent text-gradient-brand">real campaigns</span>
          </h2>
          <p className="mt-4 text-body-md text-foreground/60">
            Every lesson maps to a step you'll take inside Kolio — from first shortlist to settled payout.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LESSONS.map((l, i) => (
            <Link
              key={l.title}
              to="/influencer-database"
              className={`card-kit group block overflow-hidden rounded-2xl p-0 shadow-float transition hover:-translate-y-1 ${
                i % 3 === 0 ? 'md:translate-y-3' : i % 3 === 2 ? 'md:-translate-y-2' : ''
              }`}
            >
              <div className="relative h-40 overflow-hidden rounded-2xl rounded-b-none">
                <Thumb kind={l.thumb} />
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-pill bg-white/90 text-foreground opacity-0 shadow-float-sm transition group-hover:opacity-100">
                  <PlayCircle className="h-5 w-5 text-brand" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="chip chip-brand">{l.tag}</span>
                  <span className="text-eyebrow text-foreground/45">{l.level}</span>
                </div>
                <h3 className="mt-4 flex items-start gap-1 text-body-md font-semibold leading-snug text-foreground">
                  {l.title}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30 transition group-hover:text-brand" />
                </h3>
                <p className="mt-2 text-body-sm text-foreground/55">{l.blurb}</p>
                <div className="mt-5 flex items-center gap-1.5 text-eyebrow text-foreground/45">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-mono-tnum">{l.minutes} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
