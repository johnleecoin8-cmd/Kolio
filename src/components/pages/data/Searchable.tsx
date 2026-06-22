import {
  Search,
  SlidersHorizontal,
  Wallet,
  ShieldCheck,
  GitCompare,
  Activity,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const ITEMS = [
  {
    Icon: SlidersHorizontal,
    title: '30+ web3 filters',
    text: 'Filter by chain focus, audience geography, language, minimum engagement rate, and dozens of other crypto-specific parameters.',
  },
  {
    Icon: Wallet,
    title: 'Verified wallets',
    text: 'Get verified contact handles and connected wallets so you can run on-chain payments and escrow with confidence.',
  },
  {
    Icon: ShieldCheck,
    title: 'Bot & fake-follower checks',
    text: 'Check real reach, bot & fake-follower rate, and audience quality to vet KOLs before budget moves.',
  },
  {
    Icon: GitCompare,
    title: 'Side-by-side compare',
    text: 'Compare shortlisted KOLs side by side so you only partner with accounts that move real volume for your project.',
  },
  {
    Icon: Activity,
    title: 'Auto attribution',
    text: 'Kolio auto-tracks every campaign post and attributes on-chain conversions back to each KOL.',
  },
];

/** 120M+ searchable — lead dark card + .card-kit feature grid + CTA. */
export default function Searchable() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <span className="eyebrow">The dataset</span>
          <h2 className="mt-3 display-lg font-display text-h3 text-foreground">
            120M+ crypto KOLs, all searchable
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Lead card — dark, spans full height on the left */}
          <div className="surface-onchain flex flex-col justify-between rounded-2xl p-8 lg:row-span-2">
            <div>
              <span className="chip chip-onchain">
                <Search className="h-3.5 w-3.5" aria-hidden /> Live index
              </span>
              <div className="mt-6 num-display font-mono-tnum text-[3rem] leading-none text-mint">
                120M+
              </div>
              <p className="mt-3 text-body-md text-white/65">
                crypto-native profiles indexed across X, YouTube, TikTok, and
                Telegram — searchable in any web3 niche, from DeFi and L1/L2 to
                trading and gaming.
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 font-mono-tnum text-eyebrow text-white/40">
              +180k profiles indexed this week
            </div>
          </div>

          {ITEMS.map(({ Icon, title, text }) => (
            <div key={title} className="card-kit flex flex-col p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral-bg">
                <Icon className="h-5 w-5 text-brand" aria-hidden />
              </span>
              <div className="mt-4 text-body-md font-bold text-foreground">
                {title}
              </div>
              <p className="mt-2 text-body-sm text-foreground/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <ButtonA
            href="/demo-confirmation"
            variant="primary"
            className="rounded-pill h-11 px-6"
          >
            Find KOLs for free
          </ButtonA>
          <p className="text-body-sm text-foreground/60">
            14-day free trial・No credit card required
          </p>
        </div>
      </Container>
    </section>
  );
}
