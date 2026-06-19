import { FileSpreadsheet, Mail, SlidersHorizontal } from 'lucide-react';
import Container from '@/components/ui/Container';

const CARDS = [
  {
    Icon: FileSpreadsheet,
    title: 'CSV import / export',
    body: 'Move your KOL roster in and out of Kolio without losing context or rebuilding it from scratch.',
  },
  {
    Icon: Mail,
    title: 'Outreach at scale',
    body: 'Sync your inbox with Kolio to send and track personalized outreach to KOLs, one at a time or in bulk, with templates, variables, and sequences.',
  },
  {
    Icon: SlidersHorizontal,
    title: 'Your workflow, your way',
    body: 'Adjust statuses, columns, and fields to match how your web3 marketing team actually runs.',
  },
];

/** "Everything you need to grow your KOL program" — three feature cards. */
export default function EverythingGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center font-sans text-h4 font-bold leading-tight text-ink">
          Everything you need to grow your KOL program
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="overflow-hidden rounded-xl bg-background-soft"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-brand">
                <Icon className="h-14 w-14 text-white" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <h3 className="text-body-md font-bold text-ink">{title}</h3>
                <p className="mt-2 text-body text-foreground/70">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
