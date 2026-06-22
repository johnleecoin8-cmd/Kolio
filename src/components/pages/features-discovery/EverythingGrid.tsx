import Container from '@/components/ui/Container';
import StatTrio from '@/components/kit/StatTrio';

const CARDS = [
  {
    title: 'No KOL opt-in needed',
    body: 'Find lookalikes, surface KOLs already in your community, or explore past campaign history — instantly, with no waiting on creators to join.',
  },
  {
    title: 'Real choice across every niche',
    body: 'When DeFi, NFT, trading, gaming, and L1/L2 voices are all searchable, you get genuine fit instead of whoever replied first.',
  },
  {
    title: 'Straight to the conversation',
    body: 'No screenshot requests, no back-and-forth on media kits. Vet, shortlist, and reach out the same day.',
  },
];

/** Count-up stat trio (cited) + three card-kit narrative tiles. */
export default function EverythingGrid() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow">The index</span>
          <h2 className="mt-4 display-lg font-display text-[2rem] leading-[1.1] md:text-[2.75rem] text-foreground">
            Everything you need to build a KOL shortlist with confidence
          </h2>
        </div>
      </Container>

      <StatTrio
        stats={[
          { value: 12400, suffix: '+', label: 'Crypto KOLs indexed across 4 platforms' },
          { value: 100, suffix: '%', label: 'Public crypto KOLs searchable, no opt-in' },
          { value: 1, label: 'Click from vetted shortlist to outreach' },
        ]}
        source="Source: Kolio discovery index, Q2 2026 (internal coverage report)"
      />

      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="card-kit p-6">
              <h3 className="text-body-md font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-body-sm text-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
