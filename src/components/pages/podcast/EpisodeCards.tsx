import { Play, Pause, BadgeCheck, Wallet } from 'lucide-react';
import Container from '@/components/ui/Container';

type Episode = {
  no: string;
  title: string;
  guest: string;
  handle: string;
  cat: string;
  duration: string;
  proof: number;
  /** waveform bar heights, 0–1, drives the mini player visualization */
  wave: number[];
  /** the on-chain receipt headline for the campaign discussed */
  receipt: { usdc: string; lift: string };
};

const EPISODES: Episode[] = [
  {
    no: '042',
    title: 'How a Layer-2 turned 9 KOLs into 14k verified holders',
    guest: 'Mara Vance',
    handle: 'L2Maxi',
    cat: 'Layer2',
    duration: '21 min',
    proof: 94,
    wave: [0.3, 0.6, 0.4, 0.9, 0.5, 0.7, 0.35, 0.8, 0.55, 0.4, 0.65, 0.3, 0.7, 0.45],
    receipt: { usdc: '46,000', lift: '+14,210 holders' },
  },
  {
    no: '041',
    title: 'The escrow playbook: paying creators only when delivery clears',
    guest: 'Deniz Okur',
    handle: 'OnchainAna',
    cat: 'Trading',
    duration: '17 min',
    proof: 89,
    wave: [0.4, 0.7, 0.5, 0.35, 0.8, 0.45, 0.6, 0.3, 0.75, 0.5, 0.4, 0.7, 0.55, 0.35],
    receipt: { usdc: '12,500', lift: '0 disputes' },
  },
  {
    no: '040',
    title: 'Reading a Proof Score: what 92 actually buys a DeFi launch',
    guest: 'Priya Nair',
    handle: 'CryptoWhale',
    cat: 'DeFi',
    duration: '24 min',
    proof: 92,
    wave: [0.5, 0.3, 0.7, 0.55, 0.4, 0.85, 0.45, 0.6, 0.35, 0.75, 0.5, 0.4, 0.65, 0.3],
    receipt: { usdc: '33,200', lift: '4.1x ROAS' },
  },
];

/** Signature floating cards: each episode is a mini player UI with a verified
 *  guest row, waveform, and the on-chain campaign receipt it discusses. */
export default function EpisodeCards() {
  return (
    <section className="canvas-warm pb-20 pt-2 md:pb-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow text-brand">Latest episodes</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Pull up a chair. Every story ships with its receipts.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {EPISODES.map((ep, i) => (
            <EpisodeCard key={ep.no} ep={ep} idx={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

const ROTATIONS = ['-rotate-1 md:translate-y-3', 'md:-translate-y-2', 'rotate-1 md:translate-y-3'];

function EpisodeCard({ ep, idx }: { ep: Episode; idx: number }) {
  const playing = idx === 0; // first card shows the "now playing" state for life
  return (
    <article
      className={`card-kit shadow-float flex flex-col rounded-2xl p-6 transition hover:rotate-0 hover:-translate-y-0.5 ${ROTATIONS[idx]}`}
    >
      <div className="flex items-center justify-between">
        <span className="chip chip-brand">EP {ep.no}</span>
        <span className="font-mono-tnum text-eyebrow text-foreground/45">{ep.duration}</span>
      </div>

      <h3 className="mt-5 text-body-lg font-semibold leading-snug text-foreground">{ep.title}</h3>

      {/* mini player: play control + waveform */}
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3">
        <button
          type="button"
          aria-label={playing ? 'Pause episode' : 'Play episode'}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-gradient-brand text-white shadow-float-sm"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>
        <div className="flex h-9 flex-1 items-center gap-[3px]">
          {ep.wave.map((h, w) => (
            <span
              key={w}
              className={`flex-1 rounded-pill ${
                playing && w < 6 ? 'bg-brand' : 'bg-gray-200'
              }`}
              style={{ height: `${Math.round(h * 100)}%` }}
            />
          ))}
        </div>
      </div>

      {/* verified guest row */}
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-gray-100 p-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
          {ep.handle.slice(0, 2).toUpperCase()}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-body-sm font-semibold text-foreground">
            {ep.guest}
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
          </div>
          <div className="text-eyebrow text-foreground/50">
            @{ep.handle} · {ep.cat}
          </div>
        </div>
        <span className="num-display rounded-pill bg-coral-bg px-2 py-1 text-eyebrow font-bold text-brand">
          {ep.proof}
        </span>
      </div>

      {/* on-chain receipt for the campaign discussed */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-dashed border-gray-200 px-3 py-2.5">
        <span className="inline-flex items-center gap-1.5 text-eyebrow text-foreground/50">
          <Wallet className="h-3.5 w-3.5 text-brand" /> Campaign settled
        </span>
        <span className="font-mono-tnum text-body-sm font-semibold text-foreground">
          {ep.receipt.usdc} <span className="text-foreground/45">USDC</span>
          <span className="ml-2 text-brand">{ep.receipt.lift}</span>
        </span>
      </div>
    </article>
  );
}
