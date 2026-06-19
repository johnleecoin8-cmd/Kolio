import { Zap, DollarSign, Globe, FileText, LayoutDashboard, Headphones } from 'lucide-react';
import Container from '@/components/ui/Container';

const CARDS = [
  {
    icon: Zap,
    title: 'Fast payments',
    body: 'Creators sign up once. Payments land in their account in 1-3 days.',
  },
  {
    icon: DollarSign,
    title: 'Zero fees',
    body: "Creators get the full amount you approve. Modash doesn't take a cut.",
  },
  {
    icon: Globe,
    title: 'Paid in their local currency',
    body: 'We support 180+ countries and 36 currencies. Creators get paid in their currency.',
  },
  {
    icon: FileText,
    title: 'Automatic invoice generation',
    body: 'Creators can auto-generate invoices with one click or upload their own.',
  },
  {
    icon: LayoutDashboard,
    title: 'Transparent creator dashboard',
    body: 'Creators see payment history, upcoming payouts, and status—all in one place.',
  },
  {
    icon: Headphones,
    title: 'Dedicated support',
    body: "We handle creator questions about payments and onboarding, so you don't have to.",
  },
];

/** Benefits to creators — 6 icon cards on soft tiles. */
export default function CreatorBenefits() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-h4 text-ink md:text-h3">
            Modash payments is great for creators, and your brand
          </h2>
          <p className="mt-4 text-body-md text-foreground/70">
            Creators love working with brands that work with Modash because they
            know it means fast payouts, zero fees, and full transparency from
            start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, body }) => (
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
