import { Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';

type Row = {
  name?: string;
  handle?: string;
  emails?: string[];
  locked?: boolean;
};

const ROWS: Row[] = [
  { name: 'Bessie Alexander', handle: '@bessiealexander', locked: true },
  { locked: true },
  { emails: ['curtis.weaver@gmail.com', 'debbie.baker@gmail.com'] },
  { emails: ['georgia.young@gmail.com'] },
  { emails: ['debra.holt@gmail.com'] },
];

/** "Find influencer contact emails in bulk" — copy left, emails table right. */
export default function EmailsFeature() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="font-display text-[2rem] leading-tight text-violet-dark md:text-[2.5rem]">
              Find influencer contact emails in bulk
            </h2>
            <p className="mt-6 text-body text-foreground/80">
              If there&apos;s an email address publicly available, Modash will
              find it (in 1 click).
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Whether it&apos;s one influencer or hundreds, you can find (and
              export) all available email addresses, ready for outreach.
            </p>
            <p className="mt-4 text-body text-foreground/80">
              Drastically cut down the time you spend on influencer recruitment.
            </p>
            <a
              href="https://marketer.modash.io/register/marketer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-violet-dark px-6 text-body font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Try for free
            </a>
          </div>

          <EmailsMockup />
        </div>
      </Container>
    </section>
  );
}

function EmailsMockup() {
  return (
    <div className="mx-auto w-full max-w-[520px] rounded-xl border border-black/5 bg-white p-6 shadow-nav">
      <p className="font-display text-[1.25rem] text-violet-dark">
        Partners for #yogawednesday campaign
      </p>
      <div className="mt-3 flex items-center gap-2 text-[12px] text-gray-600">
        Channel:
        <span className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
          <Instagram size={13} /> Instagram
        </span>
      </div>

      {/* header */}
      <div className="mt-5 grid grid-cols-[1.4fr_1.6fr_0.8fr_0.6fr] gap-3 text-[11px] text-gray-500">
        <span>Creator</span>
        <span>Emails</span>
        <span>Followers</span>
        <span>ER%</span>
      </div>

      <div className="mt-2 space-y-2">
        {ROWS.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.4fr_1.6fr_0.8fr_0.6fr] items-center gap-3 rounded-lg bg-violet/10 p-2"
          >
            {/* creator */}
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-violet to-coral" />
              {r.name ? (
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-violet-dark">
                    {r.name}
                  </div>
                  <div className="text-[9px] text-gray-500">{r.handle}</div>
                </div>
              ) : (
                <div className="h-2 w-16 rounded-pill bg-violet/30" />
              )}
            </div>

            {/* emails */}
            <div className="space-y-1">
              {r.locked && (
                <span className="inline-block rounded bg-violet px-2 py-1 text-[10px] font-semibold text-violet-dark">
                  Unlock email
                </span>
              )}
              {r.emails?.map((e) => (
                <span
                  key={e}
                  className="block rounded bg-violet/20 px-2 py-0.5 text-[10px] text-violet-dark"
                >
                  {e}
                </span>
              ))}
            </div>

            {/* followers */}
            <div className="h-2 w-12 rounded-pill bg-violet/30" />
            {/* er% */}
            <div className="h-2 w-8 rounded-pill bg-violet/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
