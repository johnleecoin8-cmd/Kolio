import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import StatTrio from '@/components/kit/StatTrio';
import { Mail } from 'lucide-react';

/** Hero — refined eyebrow, editorial display heading, dual CTA, then a clean
 *  white cited stat trio (red kept as an accent, not the opening wallpaper). */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-14 md:pt-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* eyebrow */}
          <span className="eyebrow mb-5">
            <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
            Find and reach crypto KOLs
          </span>

          <h1 className="display-xl font-display text-[2.75rem] text-foreground sm:text-[4rem] md:text-[5rem] lg:text-h1">
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
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="chip chip-brand">Proof-based vetting</span>
              <span className="chip chip-onchain">On-chain payments & escrow</span>
            </div>
          </div>
        </div>
      </Container>

      {/* clean cited stat trio — white surface, red reserved as accent */}
      <StatTrio
        stats={[
          { value: 12, suffix: 'M+', label: 'Crypto KOL profiles' },
          { value: 4, label: 'Channels: X, YouTube, TikTok, Telegram' },
          { value: 100, suffix: '%', label: 'Proof-based reach & vetting' },
        ]}
        source="Source: Kolio verified KOL database, refreshed several times monthly"
      />
    </section>
  );
}
