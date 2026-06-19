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
    <section id="open-roles" className="bg-background pb-16 md:pb-24">
      <Container>
        <h2 className="font-display text-h3 uppercase leading-tight text-foreground md:text-h2">
          Open Roles
        </h2>

        <div className="mt-8 border-t border-gray-200 md:mt-10">
          {ROLES.map((role, i) => (
            <a
              key={`${role.title}-${role.location}-${i}`}
              href="/demo-confirmation"
              className="flex items-center justify-between gap-6 border-b border-gray-200 py-5 transition hover:bg-gray-50/60"
            >
              <div>
                <h3 className="text-body font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 text-body-sm text-foreground/50">
                  Team: {role.team}
                </p>
              </div>
              <span className="shrink-0 text-right text-body-sm text-foreground/50">
                {role.location}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
