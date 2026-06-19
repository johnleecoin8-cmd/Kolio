import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

const CARDS = [
  {
    stat: '0',
    statLabel: 'onboarding required',
    title: 'No KOL opt-in needed',
    body: 'Find lookalikes, surface KOLs already in your community, or explore past campaign history — instantly, with no waiting on creators to join.',
  },
  {
    stat: '100%',
    statLabel: 'of public crypto KOLs',
    title: 'Real choice across every niche',
    body: 'When DeFi, NFT, trading, gaming, and L1/L2 voices are all searchable, you get genuine fit instead of whoever replied first.',
  },
  {
    stat: '1',
    statLabel: 'click to outreach',
    title: 'Straight to the conversation',
    body: 'No screenshot requests, no back-and-forth on media kits. Vet, shortlist, and reach out the same day.',
  },
];

/** "Everything you need" — centered heading + 3 stat cards (brand-neutral). */
export default function EverythingGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading className="mx-auto max-w-[680px] text-center">
          Everything you need to build a KOL shortlist with confidence
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-xl bg-background-soft p-6">
              <p className="font-display text-[3rem] leading-none text-gradient-brand">{c.stat}</p>
              <p className="mt-1 text-body-sm uppercase tracking-wide text-foreground/55">
                {c.statLabel}
              </p>
              <h3 className="mt-5 text-body-md font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-body-sm text-foreground/75">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
