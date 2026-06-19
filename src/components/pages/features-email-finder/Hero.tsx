import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { Mail } from 'lucide-react';

const STATS = [
  { value: '12M+', label: 'Crypto KOL profiles' },
  { value: '4', label: 'Channels: X, YouTube, TikTok, Telegram' },
  { value: '100%', label: 'Proof-based reach & audience vetting' },
];

const BRANDS = ['Ledger', 'Phantom', 'Arbitrum', 'OKX', 'Polygon', 'Aptos'];

/** Hero — icon pill tag, dark headline with gradient highlight, dual CTA, gradient stat band. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* icon + tag */}
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white">
              <Mail className="h-6 w-6" strokeWidth={2} />
            </span>
            <span className="text-body font-semibold text-foreground">
              Find and reach crypto KOLs
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] leading-[1.0] text-foreground sm:text-[4rem] md:text-[5rem] lg:text-h1">
            Find the right
            <br />
            crypto <span className="text-gradient-brand">KOL</span> contacts
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-body-md text-foreground/70">
            Search a verified database of crypto key opinion leaders across X,
            YouTube, TikTok, and Telegram. Pull their contacts, vet their real
            reach, and open campaigns — all in one place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonA href="/demo-confirmation" variant="primary">
                Request a demo
              </ButtonA>
              <ButtonA href="/demo-confirmation" variant="secondary">
                Book a call
              </ButtonA>
            </div>
            <p className="text-body-sm text-foreground/60">
              Proof-based vetting・On-chain payments & escrow
            </p>
          </div>
        </div>
      </Container>

      {/* gradient band with brand-neutral metric callouts (later.com-style stat panel) */}
      <div className="mt-12 bg-gradient-brand py-12 md:mt-16 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 text-center text-white sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl leading-none md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-body text-white/85">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[1000px]">
            <p className="text-center text-body-sm font-semibold uppercase tracking-wide text-white/70">
              Powering campaigns for web3 teams like
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {BRANDS.map((b) => (
                <span
                  key={b}
                  className="font-display text-2xl font-semibold text-white/90"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
