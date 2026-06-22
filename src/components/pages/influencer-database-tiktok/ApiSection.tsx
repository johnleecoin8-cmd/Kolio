import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** On-chain terminal: API response code rendered on a dark chain-grid surface. */
function ApiMockup() {
  return (
    <div className="surface-onchain glow-brand mx-auto w-full max-w-[520px] overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="ml-2 font-mono-tnum text-body-sm text-white/45">GET /v1/kol/profile</span>
        <span className="chip chip-onchain ml-auto">200 OK</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono-tnum text-body-sm leading-relaxed text-white/85">
        <code>{`{
  "handle": "@defi.daily",
  "niche": "DeFi",
  "real_reach": 412000,
  "audience_quality": "A",
  "bot_followers": 0.03,
  "engagement_rate": 0.072,
  "wallet": "0x9f…3aB1",
  "past_campaigns": 18
}`}</code>
      </pre>
    </div>
  );
}

/** "Reliable web3 KOL data API" — text left, on-chain terminal right (dark punctuation). */
export default function ApiSection() {
  return (
    <section className="bg-surface-ink py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <ApiMockup />
          </div>
          <div className="md:order-1">
            <span className="eyebrow">API</span>
            <h2 className="display-lg mt-3 font-display text-[2.1875rem] text-white">
              Reliable web3 KOL data, by API
            </h2>
            <div className="mt-6 max-w-[480px] space-y-2 text-body-md text-white/65">
              <p>
                Every Kolio metric — real reach, audience quality, wallet, and
                campaign history — is available programmatically.
              </p>
              <p>
                Built for exchanges, protocols, and agencies running KOL programs
                at scale.
              </p>
            </div>
            <div className="mt-8">
              <ButtonA
                href="/demo-confirmation"
                variant="primary"
                className="bg-white text-ink hover:opacity-90"
              >
                Learn more
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
