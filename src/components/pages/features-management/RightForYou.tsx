import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';

const ITEMS = [
  'Managing 50–300+ KOLs',
  'Multiple teammates doing outreach',
  'Running always-on campaigns',
  'Paying KOLs on-chain',
  'Done with spreadsheet chaos',
  'Tired of Telegram-thread limbo',
];

/** "Is Kolio Manage right for you?" — soft card with check chips. */
export default function RightForYou() {
  return (
    <section className="bg-background py-8 md:py-12">
      <Container>
        <div className="rounded-xl bg-background-soft px-6 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
              Is Kolio Manage right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
              Built for web3 teams running 30+ active KOL relationships, where
              deals, wallets, and payouts keep slipping between chats.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[940px] flex-wrap justify-center gap-3">
            {ITEMS.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-2.5 text-body-sm font-medium text-ink shadow-btn"
              >
                <Check className="h-4 w-4 text-brand" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
