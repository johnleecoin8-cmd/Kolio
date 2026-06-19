import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

/** Hero — full coral section, breadcrumb pills, display headline, dual CTA, product mockup. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-coral pt-10 md:pt-14">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* breadcrumb pills */}
          <div className="mb-6 flex items-center gap-2 text-eyebrow font-semibold text-ink/60">
            <span className="rounded-pill bg-ink/5 px-3 py-1.5">Manage</span>
            <span className="rounded-pill bg-ink/5 px-3 py-1.5">KOL CRM</span>
          </div>

          <h1 className="mx-auto max-w-[1100px] font-display uppercase text-[2.75rem] leading-[0.92] text-ink sm:text-[4rem] md:text-[5.25rem] lg:text-[6rem]">
            One <span className="text-gradient-brand">command center</span> for
            every KOL relationship
          </h1>

          <p className="mx-auto mt-6 max-w-[580px] text-body-md text-ink/70">
            Every crypto KOL, every deal term, on-chain payouts, and live
            campaign attribution, all in one place, across X, YouTube, TikTok,
            and Telegram.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to="/demo-confirmation" variant="primary">
                Start free
              </ButtonLink>
              <ButtonLink to="/demo-confirmation" variant="secondary">
                Book a demo
              </ButtonLink>
            </div>
            <p className="text-body-sm text-ink/60">
              Free to explore・No wallet connection required
            </p>
          </div>
        </div>
      </Container>

      {/* product mockup */}
      <div className="mx-auto mt-12 w-full max-w-[1100px] px-4 sm:px-6 md:mt-14">
        <DashboardMock />
      </div>
    </section>
  );
}

/** Brand-neutral KOL CRM dashboard mock (div/SVG based, no external imagery). */
function DashboardMock() {
  const rows = [
    { handle: '@defi_degen', niche: 'DeFi', reach: '412K', status: 'Live', pay: 'Escrowed' },
    { handle: '@nftcurator', niche: 'NFTs', reach: '188K', status: 'Drafting', pay: 'Pending' },
    { handle: '@l2maxi', niche: 'L1 / L2', reach: '326K', status: 'Live', pay: 'Paid' },
    { handle: '@chartwizard', niche: 'Trading', reach: '521K', status: 'Review', pay: 'Escrowed' },
    { handle: '@gamefi_guild', niche: 'Gaming', reach: '97K', status: 'Live', pay: 'Paid' },
  ];
  const statusColor: Record<string, string> = {
    Live: 'bg-brand/10 text-brand',
    Paid: 'bg-brand/10 text-brand',
    Escrowed: 'bg-coral/40 text-ink',
    Drafting: 'bg-ink/5 text-ink/70',
    Review: 'bg-ink/5 text-ink/70',
    Pending: 'bg-ink/5 text-ink/70',
  };
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-btn">
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
        <div>
          <p className="text-body font-bold text-ink">KOL Roster</p>
          <p className="text-body-sm text-foreground/60">128 active relationships</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="rounded-pill bg-background-soft px-3 py-1.5 text-body-sm font-medium text-ink/70">
            All niches
          </span>
          <span className="rounded-pill bg-ink px-3 py-1.5 text-body-sm font-semibold text-white">
            + Add KOL
          </span>
        </div>
      </div>
      <div className="hidden grid-cols-[1.4fr_1fr_0.8fr_1fr_1fr] gap-4 px-6 py-3 text-body-sm font-semibold text-foreground/50 sm:grid">
        <span>KOL</span>
        <span>Niche</span>
        <span>Reach</span>
        <span>Status</span>
        <span>Payment</span>
      </div>
      <div className="divide-y divide-black/5">
        {rows.map((r) => (
          <div
            key={r.handle}
            className="grid grid-cols-2 gap-4 px-6 py-3.5 text-body-sm sm:grid-cols-[1.4fr_1fr_0.8fr_1fr_1fr]"
          >
            <span className="font-semibold text-ink">{r.handle}</span>
            <span className="text-foreground/70">{r.niche}</span>
            <span className="text-foreground/70">{r.reach}</span>
            <span>
              <span className={`rounded-pill px-2.5 py-1 text-[0.7rem] font-semibold ${statusColor[r.status]}`}>
                {r.status}
              </span>
            </span>
            <span>
              <span className={`rounded-pill px-2.5 py-1 text-[0.7rem] font-semibold ${statusColor[r.pay]}`}>
                {r.pay}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
