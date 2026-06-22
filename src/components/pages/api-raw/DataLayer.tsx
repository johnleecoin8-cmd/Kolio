import { BadgeCheck, Radar, Layers, GitMerge } from 'lucide-react';
import Container from '@/components/ui/Container';

type Field = { name: string; type: string };
type Group = {
  icon: typeof Radar;
  chip: string;
  title: string;
  blurb: string;
  fields: Field[];
};

const GROUPS: Group[] = [
  {
    icon: BadgeCheck,
    chip: 'Identity',
    title: 'Verified KOL identity',
    blurb: 'Resolve a handle to a real person across channels, with the proof score baked in.',
    fields: [
      { name: 'proof_score', type: 'int' },
      { name: 'channels', type: 'string[]' },
      { name: 'verified_at', type: 'datetime' },
    ],
  },
  {
    icon: Radar,
    chip: 'Audience',
    title: 'Audience you can defend',
    blurb: 'Separate real reach from bought followers before a dollar leaves escrow.',
    fields: [
      { name: 'real_follower_count', type: 'int' },
      { name: 'bot_ratio', type: 'float' },
      { name: 'engaged_holders', type: 'float' },
    ],
  },
  {
    icon: Layers,
    chip: 'Content',
    title: 'Per-post crypto signal',
    blurb: 'Every post enriched with the fields that matter for vetting a paid deal.',
    fields: [
      { name: 'is_paid_partnership', type: 'bool' },
      { name: 'cashtags', type: 'string[]' },
      { name: 'reach_per_post', type: 'int' },
    ],
  },
  {
    icon: GitMerge,
    chip: 'Attribution',
    title: 'On-chain attribution',
    blurb: 'Tie reach back to wallets that actually showed up, via the Kolio pixel.',
    fields: [
      { name: 'wallets_reached', type: 'int' },
      { name: 'audience_overlap', type: 'map' },
      { name: 'verified_via', type: 'string' },
    ],
  },
];

/** Calm white section: the four data groups the API returns, as card-kit
 *  surfaces with field/type chips. Restrained — no loud bands. */
export default function DataLayer() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand">What you can read</span>
          <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
            Four layers of crypto KOL truth
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-foreground/60">
            Pull exactly the fields you need. Each is documented, typed, and fetched live — no proprietary score you can’t inspect.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.chip}
                className={`card-kit shadow-float-sm rounded-2xl p-7 transition hover:-translate-y-1 ${
                  i % 2 === 0 ? 'md:translate-y-2' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="chip chip-brand">{g.chip}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral-bg">
                    <Icon className="h-5 w-5 text-brand" />
                  </span>
                </div>
                <h3 className="mt-5 text-h4 font-semibold text-foreground">{g.title}</h3>
                <p className="mt-2 text-body-sm text-foreground/60">{g.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.fields.map((f) => (
                    <span
                      key={f.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 font-mono-tnum text-eyebrow"
                    >
                      <span className="text-foreground">{f.name}</span>
                      <span className="text-foreground/40">{f.type}</span>
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
