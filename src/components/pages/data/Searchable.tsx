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
    Icon: Search,
    text: 'Search 120M+ crypto-native profiles to find KOLs in any web3 niche — DeFi, NFTs, L1/L2, trading, or gaming.',
  },
  {
    Icon: SlidersHorizontal,
    text: 'Filter by chain focus, audience geography, language, minimum engagement rate, and 30+ other web3-specific parameters.',
  },
  {
    Icon: Wallet,
    text: 'Get verified contact handles and connected wallets so you can run on-chain payments and escrow with confidence.',
  },
  {
    Icon: ShieldCheck,
    text: 'Check real reach, bot & fake-follower rate, and audience quality to vet KOLs before budget moves.',
  },
  {
    Icon: GitCompare,
    text: 'Compare shortlisted KOLs side by side so you only partner with accounts that move real volume for your project.',
  },
  {
    Icon: Activity,
    text: 'Relax while Kolio auto-tracks every campaign post and attributes on-chain conversions back to each KOL.',
  },
];

/** 120M+ searchable — heading + 3x2 icon/text grid + CTA. */
export default function Searchable() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          120M+ crypto KOLs, all searchable
        </h2>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ Icon, text }) => (
            <div key={text} className="flex flex-col gap-4">
              <Icon className="h-6 w-6 shrink-0 text-brand" aria-hidden />
              <p className="text-body-sm text-foreground/75">{text}</p>
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
