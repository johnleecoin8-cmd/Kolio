import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

type Role = { title: string; team: string; location: string };

const ROLES: Role[] = [
  { title: 'KOL Partnerships Lead, Crypto', team: 'Partnerships', location: 'Remote, Europe' },
  { title: 'KOL Onboarding Specialist (X / Telegram)', team: 'Partnerships', location: 'Tallinn, Estonia' },
  { title: 'Customer Success Manager, Exchanges & Protocols', team: 'Customer Success', location: 'Remote, Europe' },
  { title: 'Head of Growth', team: 'Operation', location: 'Tallinn, Estonia' },
  { title: 'Head of Product Engineering', team: 'Engineering', location: 'Tallinn, Estonia' },
  { title: 'Senior Data Engineer, Social Graph', team: 'Data', location: 'Remote, Europe' },
  { title: 'Audience Authenticity Engineer — bot & fraud', team: 'Data', location: 'Barcelona, Spain' },
  { title: 'On-chain Attribution Engineer', team: 'Data', location: 'Bucharest, Romania' },
  { title: 'Senior Product Engineer (EU)', team: 'Engineering', location: 'Remote, Europe' },
  { title: 'Smart Contract Engineer — escrow & payouts', team: 'Engineering', location: 'Remote, Europe' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Tallinn, Estonia' },
];

/** Teams get a calm brand-coded initial tile, no fake headshots. */
const TEAM_INITIALS: Record<string, string> = {
  Partnerships: 'GR',
  'Customer Success': 'CS',
  Operation: 'OP',
  Engineering: 'ON',
  Data: 'DA',
};

/** Open roles — calm white surface, rounded-2xl card rows with branded initials. */
export default function OpenRoles() {
  return (
    <section id="open-roles" className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">We&rsquo;re hiring</p>
            <h2 className="display-light text-[2.25rem] leading-[1.05] text-foreground md:text-[3.25rem]">
              Open <span className="accent text-gradient-brand">roles</span>
            </h2>
          </div>
          <p className="font-mono-tnum text-body-sm text-foreground/45">
            {ROLES.length} positions &middot; remote-first, Europe
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:gap-4">
          {ROLES.map((role, i) => (
            <a
              key={`${role.title}-${role.location}-${i}`}
              href="/demo-confirmation"
              className="card-kit shadow-float-sm group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow-float md:gap-5 md:p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral-bg text-eyebrow font-bold text-brand">
                {TEAM_INITIALS[role.team] ?? role.team.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-body font-semibold text-foreground transition group-hover:text-brand">
                  {role.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="chip chip-ink">{role.team}</span>
                  <span className="font-mono-tnum text-eyebrow text-foreground/50">{role.location}</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-foreground/25 transition group-hover:translate-x-1 group-hover:text-brand" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
