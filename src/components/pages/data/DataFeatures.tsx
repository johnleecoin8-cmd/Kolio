import { Radar, ShieldCheck, Wallet, Layers } from 'lucide-react';
import Container from '@/components/ui/Container';

const FEATURES: { icon: typeof Radar; title: string; body: string; stat: string; statLabel: string }[] = [
  {
    icon: Radar,
    title: 'Cross-channel reach',
    body: 'X, YouTube, TikTok and Telegram unified into one profile, deduped by the same person — so reach is real audience, not a sum of overlapping followers.',
    stat: '4',
    statLabel: 'channels merged per KOL',
  },
  {
    icon: ShieldCheck,
    title: 'Fake-follower vetting',
    body: 'Every account is graded for bot share, sudden spikes and engagement authenticity. The fakes are flagged before a brand ever spends a dollar.',
    stat: '< 5%',
    statLabel: 'bot share on vetted KOLs',
  },
  {
    icon: Wallet,
    title: 'Holder overlap',
    body: 'We match an audience to the wallets they actually hold, so you see whether a KOL reaches your token holders — or someone else’s entirely.',
    stat: '6.9k',
    statLabel: 'median verified holders',
  },
  {
    icon: Layers,
    title: 'Outcome attribution',
    body: 'Referral links resolve to on-chain swaps and deposits. Reports tie spend to wallets driven, not impressions you have to take on trust.',
    stat: '71%',
    statLabel: 'of driven wallets tagged',
  },
];

/** card-kit feature grid: what the Kolio data actually measures. */
export default function DataFeatures() {
  return (
    <section className="canvas-warm2 py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow text-brand">What the data measures</span>
          <h2 className="display-light mt-4 text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
            Four signals that separate proof from pitch
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, body, stat, statLabel }) => (
            <div key={title} className="card-kit shadow-float-sm rounded-2xl p-7 transition hover:shadow-float md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-coral-bg text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <div className="num-display text-h3 leading-none text-foreground">{stat}</div>
                  <div className="mt-1 text-eyebrow text-foreground/45">{statLabel}</div>
                </div>
              </div>
              <h3 className="mt-6 text-h4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2.5 text-body-md text-foreground/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
