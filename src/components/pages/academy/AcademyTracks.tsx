import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, LineChart } from 'lucide-react';
import Container from '@/components/ui/Container';

type Track = {
  icon: typeof Compass;
  kicker: string;
  title: string;
  blurb: string;
  steps: string[];
  lessons: number;
};

const TRACKS: Track[] = [
  {
    icon: Compass,
    kicker: 'Track 01',
    title: 'Discover & vet',
    blurb: 'Source the right voices and filter out inflated reach before a dollar moves.',
    steps: ['Search by chain & narrative', 'Read the Proof Score', 'Shortlist & compare'],
    lessons: 5,
  },
  {
    icon: ShieldCheck,
    kicker: 'Track 02',
    title: 'Book & escrow',
    blurb: 'Brief cleanly, fund USDC escrow, and release only on verified delivery.',
    steps: ['Write the brief', 'Fund escrow', 'Approve & release'],
    lessons: 4,
  },
  {
    icon: LineChart,
    kicker: 'Track 03',
    title: 'Attribute & prove',
    blurb: 'Connect posts to wallets and report return your team can actually defend.',
    steps: ['Tag referral links', 'Track on-chain activity', 'Report ROI'],
    lessons: 6,
  },
];

/** Three guided learning tracks on a deeper warm surface, each a card-kit panel
 *  with a numbered progression mini-UI. */
export default function AcademyTracks() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow text-brand">Guided tracks</span>
            <h2 className="display-light mt-3 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
              Follow the loop, end to end
            </h2>
          </div>
          <p className="max-w-sm text-body-md text-foreground/60">
            Three short tracks mirror the full Kolio campaign loop. Take them in order, or jump to the step you're stuck on.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {TRACKS.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`card-kit flex flex-col rounded-2xl p-7 shadow-float transition hover:-translate-y-1 ${
                  i === 1 ? 'lg:-translate-y-3' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-bg text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="eyebrow text-foreground/40">{t.kicker}</span>
                </div>
                <h3 className="display-light mt-5 text-[1.6rem] leading-tight text-foreground">{t.title}</h3>
                <p className="mt-2 text-body-sm text-foreground/55">{t.blurb}</p>

                <div className="mt-6 space-y-2.5">
                  {t.steps.map((s, si) => (
                    <div key={s} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/60 p-2.5">
                      <span className="num-display grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
                        {si + 1}
                      </span>
                      <span className="text-body-sm font-medium text-foreground">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                  <span className="text-eyebrow text-foreground/45">
                    <span className="font-mono-tnum font-semibold text-foreground/70">{t.lessons}</span> lessons
                  </span>
                  <Link to="/influencer-database" className="text-body-sm font-semibold text-brand hover:underline">
                    Start track →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
