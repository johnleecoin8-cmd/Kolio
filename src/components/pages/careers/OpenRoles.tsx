import Container from '@/components/ui/Container';

type Role = { title: string; team: string; location: string };

const ROLES: Role[] = [
  { title: 'KOL Partnerships Lead, Crypto', team: 'Partnerships', location: 'Remote, Europe' },
  { title: 'KOL Onboarding Specialist (X / Twitter, Telegram)', team: 'Partnerships', location: 'Tallinn, Estonia' },
  { title: 'Customer Success Manager, Exchanges & Protocols', team: 'Customer Success', location: 'Remote, Europe' },
  { title: 'Customer Success Manager, Exchanges & Protocols', team: 'Customer Success', location: 'London, United Kingdom' },
  { title: 'Head of Growth', team: 'Operation', location: 'Tallinn, Estonia' },
  { title: 'Head of Product Engineering', team: 'Engineering', location: 'Tallinn, Estonia' },
  { title: 'Senior Data Engineer, Social Graph (remote, Europe)', team: 'Data', location: 'Tallinn, Estonia' },
  { title: 'Senior Data Engineer, Social Graph (remote, Europe)', team: 'Data', location: 'Vilnius, Lithuania' },
  { title: 'Audience Authenticity Engineer — bot & fraud detection', team: 'Data', location: 'Barcelona, Spain' },
  { title: 'Audience Authenticity Engineer — bot & fraud detection', team: 'Data', location: 'Lisbon, Portugal' },
  { title: 'On-chain Attribution Engineer', team: 'Data', location: 'Bucharest, Romania' },
  { title: 'On-chain Attribution Engineer', team: 'Data', location: 'Cluj-Napoca, Romania' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Tallinn, Estonia' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Vilnius, Lithuania' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Lisbon, Portugal' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Madrid, Spain' },
  { title: 'Smart Contract Engineer — escrow & payouts', team: 'Engineering', location: 'Remote, Europe' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Tallinn, Estonia' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Riga, Latvia' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Warsaw, Poland' },
];

/** Open Roles — heading + list of job rows (title + team / location), divided rows. */
export default function OpenRoles() {
  return (
    <section id="open-roles" className="bg-background py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">We&rsquo;re hiring</p>
            <h2 className="display-lg font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
              Open Roles
            </h2>
          </div>
          <p className="font-mono-tnum text-body-sm text-foreground/45">
            {ROLES.length} positions · remote-first, Europe
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 md:mt-10">
          {ROLES.map((role, i) => (
            <a
              key={`${role.title}-${role.location}-${i}`}
              href="/demo-confirmation"
              className="group flex items-center justify-between gap-6 border-b border-gray-200 bg-white px-5 py-5 transition last:border-b-0 hover:bg-gray-50"
            >
              <div className="min-w-0">
                <h3 className="truncate text-body font-semibold text-foreground transition group-hover:text-brand">
                  {role.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="chip chip-ink">{role.team}</span>
                  <span className="chip chip-brand">{role.location}</span>
                </div>
              </div>
              <span
                aria-hidden
                className="shrink-0 text-h4 text-foreground/30 transition group-hover:translate-x-1 group-hover:text-brand"
              >
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
