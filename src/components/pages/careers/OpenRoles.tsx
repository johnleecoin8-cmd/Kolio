import Container from '@/components/ui/Container';

type Role = { title: string; team: string; location: string };

const ROLES: Role[] = [
  { title: 'Customer Success Manager, Europe', team: 'Customer Success', location: 'Tallinn, Estonia' },
  { title: 'Customer Support Specialist, Europe (based in Tallinn, Estonia)', team: 'Customer Success', location: 'Tallinn, Estonia' },
  { title: 'Head of Growth, Data Products', team: 'Operation', location: 'Tallinn, Estonia' },
  { title: 'Head of Growth, Data Products', team: 'Operation', location: 'London, United Kingdom' },
  { title: 'Head of Product Engineering', team: 'Engineering', location: 'Tallinn, Estonia' },
  { title: 'Senior Engineer (remote, Europe)', team: 'Data', location: 'Tallinn, Estonia' },
  { title: 'Senior Engineer (remote, Europe)', team: 'Data', location: 'Vilnius, Lithuania' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Tallinn, Estonia' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Barcelona, Spain' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Lisbon, Portugal' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Bucharest, Romania' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Cluj-Napoca, Romania' },
  { title: 'Senior Product Data Engineer (remote, Europe)', team: 'Data', location: 'Vilnius, Lithuania' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Tallinn, Estonia' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Vilnius, Lithuania' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Lisbon, Portugal' },
  { title: 'Senior Product Engineer (remote position in the EU)', team: 'Engineering', location: 'Madrid, Spain' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Tallinn, Estonia' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Vilnius, Lithuania' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Riga, Latvia' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Warsaw, Poland' },
  { title: 'Technical Customer Success Manager', team: 'Customer Success', location: 'Lisbon, Portugal' },
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
              href="https://modash.recruitee.com/"
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
