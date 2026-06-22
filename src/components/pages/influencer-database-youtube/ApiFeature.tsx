import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** KOL data API — copy + docs link left, brand-neutral code/API-key mockup right. */
export default function ApiFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="eyebrow">Developers</span>
            <h2 className="mt-3 display-lg font-display text-[1.75rem] leading-[1.15] text-foreground md:text-[2.1875rem]">
              A reliable crypto KOL data API
            </h2>
            <div className="mt-6 space-y-4 text-body-md text-foreground/75">
              <p>
                Every Kolio metric — reach, audience quality, niche, on-chain
                attribution — is available programmatically.
              </p>
              <p>
                Pull verified KOL data straight into your own campaign tooling,
                dashboards, or growth stack.{' '}
                <a
                  href="/demo-confirmation"
                  className="text-foreground underline underline-offset-2 hover:opacity-70"
                >
                  Read the docs
                </a>
                .
              </p>
            </div>
            <div className="mt-8">
              <ButtonA href="/demo-confirmation" variant="primary">
                Learn more
              </ButtonA>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
            <div className="w-full max-w-[460px] overflow-hidden rounded-lg border border-black/10 bg-ink shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="ml-2 text-body-sm text-white/50">GET /v1/kols</span>
              </div>
              <pre className="overflow-x-auto px-4 py-4 text-left text-body-sm leading-relaxed text-white/85">
{`{
  "handle": "defi_daily",
  "platform": "youtube",
  "niche": ["defi", "l1l2"],
  "avg_views": 412000,
  "audience_quality": 0.94,
  "verified": true
}`}
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
