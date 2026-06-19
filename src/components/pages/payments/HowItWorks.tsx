import {
  Search,
  MousePointerClick,
  UserPlus,
  Megaphone,
  FileText,
  DollarSign,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const STEPS = [
  {
    icon: Search,
    title: '1. Fund your wallet',
    body: 'Transfer funds to your Modash payment wallet.',
  },
  {
    icon: MousePointerClick,
    title: '2. Set up payments',
    body: 'Select creators, amounts, deliverables, and currencies.',
  },
  {
    icon: UserPlus,
    title: '3. Creator onboarding',
    body: 'Creators add their personal and banking details for the first time.',
  },
  {
    icon: Megaphone,
    title: '4. Send payment link',
    body: 'Share a secure payment link with creators.',
  },
  {
    icon: FileText,
    title: '5. Invoice submission',
    body: 'Creators upload or auto-generate compliant invoices.',
  },
  {
    icon: DollarSign,
    title: '6. Payment processing',
    body: 'Modash validates, handles compliance, and processes payment.',
  },
];

/** How it works — 6 numbered steps. */
export default function HowItWorks() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">How it works</h2>
          <p className="mt-4 text-body-md text-foreground/70">
            From wallet funding to creator payment in six simple steps
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl bg-background-soft p-6 md:p-8">
              <Icon className="h-6 w-6 text-ink" strokeWidth={2} />
              <h3 className="mt-8 text-body font-bold text-ink">{title}</h3>
              <p className="mt-2 text-body-sm text-foreground/70">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
