import FeatureRow from './FeatureRow';
import { ButtonA } from '@/components/ui/Button';

/** Brand-neutral outreach/contacts mockup built with divs (no branded screenshot). */
function OutreachMockup() {
  const contacts = [
    { handle: '@defi.daily', via: 'Telegram + email', status: 'Sent' },
    { handle: '@l2.alpha', via: 'Email', status: 'Replied' },
    { handle: '@chart.degen', via: 'Telegram', status: 'In deal' },
  ];
  return (
    <div className="card-kit mx-auto w-full max-w-[480px] p-5">
      <div className="flex items-center justify-between">
        <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/40">Outreach queue</p>
        <span className="chip chip-brand">24 KOLs</span>
      </div>
      <div className="mt-4 space-y-3">
        {contacts.map((c) => (
          <div
            key={c.handle}
            className="flex items-center justify-between rounded-sm border border-hairline px-4 py-3 text-body-sm"
          >
            <div>
              <p className="font-semibold text-foreground">{c.handle}</p>
              <p className="text-foreground/50">{c.via}</p>
            </div>
            <span className={c.status === 'In deal' ? 'chip chip-onchain' : 'chip chip-ink'}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** "Find contacts and reach out at scale" — mockup left, text right. */
export default function BulkEmail() {
  return (
    <FeatureRow imageSide="left" image={<OutreachMockup />}>
      <span className="eyebrow">Reach out</span>
      <h2 className="display-lg mt-3 font-display text-[2.1875rem] text-foreground">
        Find the contact, reach out at scale
      </h2>
      <div className="mt-6 max-w-[480px] space-y-4 text-body-md text-foreground/70">
        <p>
          If a KOL has a public email or Telegram, Kolio surfaces it — so you
          can reach the people who actually move crypto audiences.
        </p>
        <p>
          Cut the repetitive work by reaching out in bulk while keeping every
          message feeling 1:1 with variables.
        </p>
        <p>
          Use it for campaign outreach, onboarding KOLs, sending tracking
          links, sharing briefs, or any project communication — all in one
          place.
        </p>
      </div>
      <div className="mt-8">
        <ButtonA href="/demo-confirmation" variant="primary">
          Start free
        </ButtonA>
      </div>
    </FeatureRow>
  );
}
