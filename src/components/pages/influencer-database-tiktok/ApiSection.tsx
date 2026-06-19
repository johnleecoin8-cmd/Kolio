import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

/** Brand-neutral API response code mockup built with divs. */
function ApiMockup() {
  return (
    <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-lg bg-ink shadow-nav">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="ml-2 text-body-sm text-white/40">GET /v1/kol/profile</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 text-body-sm leading-relaxed text-white/80">
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

/** "Reliable web3 KOL data API" — text left, code mockup right. */
export default function ApiSection() {
  return (
    <FeatureRow imageSide="right" panel={false} image={<ApiMockup />}>
      <h2 className="text-[2.1875rem] font-semibold leading-[1.15] text-foreground">
        Reliable web3 KOL data, by API
      </h2>
      <div className="mt-6 max-w-[480px] space-y-2 text-body-md text-foreground/70">
        <p>
          Every Kolio metric — real reach, audience quality, wallet, and
          campaign history — is available programmatically.
        </p>
        <p>
          Built for exchanges, protocols, and agencies running KOL programs at
          scale.
        </p>
      </div>
      <div className="mt-8">
        <ButtonA href="/demo-confirmation" variant="primary">
          Learn more
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
