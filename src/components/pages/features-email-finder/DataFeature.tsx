import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { CircleCheck } from 'lucide-react';

const PERFORMANCE = [
  'Average views & impressions',
  'Engagement rate',
  'Paid vs. organic posts',
  'Follower growth',
  'Bot & fake-follower share',
  'On-chain campaign attribution',
];

const AUDIENCE = ['Countries', 'Languages', 'Crypto niche (DeFi, NFTs, L1/L2)', 'Wallet-active share', 'Sentiment'];

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <CircleCheck className="h-5 w-5 shrink-0 text-foreground/70" strokeWidth={2} />
      <span className="text-body text-foreground/80">{label}</span>
    </div>
  );
}

/** Brand-neutral KOL profile card built from divs. */
function ProfileCard() {
  return (
    <div className="rounded-xl border border-black/10 bg-background-soft p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-brand" />
        <div className="min-w-0">
          <div className="text-body-md font-semibold text-foreground">@defi_signal</div>
          <div className="text-body-sm text-foreground/60">DeFi & L2 research・X / YouTube</div>
        </div>
        <span className="ml-auto rounded-full bg-gradient-brand px-3 py-1 text-body-sm font-semibold text-white">
          Verified
        </span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { v: '184K', l: 'Followers' },
          { v: '6.2%', l: 'Engagement' },
          { v: '2.1%', l: 'Fake followers' },
        ].map((m) => (
          <div key={m.l} className="rounded-lg border border-black/10 bg-white p-3 text-center">
            <div className="font-display text-2xl text-foreground">{m.v}</div>
            <div className="mt-1 text-body-sm text-foreground/60">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {[
          { l: 'DeFi', w: 'w-[78%]' },
          { l: 'L1 / L2', w: 'w-[54%]' },
          { l: 'Trading', w: 'w-[38%]' },
        ].map((b) => (
          <div key={b.l}>
            <div className="mb-1 flex justify-between text-body-sm text-foreground/70">
              <span>{b.l}</span>
            </div>
            <div className="h-2 rounded-full bg-black/5">
              <div className={`h-2 rounded-full bg-gradient-brand ${b.w}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** First feature: contacts + all the KOL data, with a two-column checklist. */
export default function DataFeature() {
  return (
    <section className="py-16 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <ProfileCard />
          </div>
          <div>
            <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-h3">
              Get KOL contacts, plus the proof you need to vet them
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <div className="mb-3 border-b border-black/10 pb-3 text-body font-semibold text-foreground">
                  Performance
                </div>
                <div className="flex flex-col gap-3">
                  {PERFORMANCE.map((p) => (
                    <CheckItem key={p} label={p} />
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 border-b border-black/10 pb-3 text-body font-semibold text-foreground">
                  Audience
                </div>
                <div className="flex flex-col gap-3">
                  {AUDIENCE.map((p) => (
                    <CheckItem key={p} label={p} />
                  ))}
                </div>
              </div>
            </div>

            <ButtonA href="/demo-confirmation" variant="primary" className="mt-8">
              Request a demo
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
