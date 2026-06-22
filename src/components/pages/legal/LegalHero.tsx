import Container from '@/components/ui/Container';
import { EFFECTIVE_DATE, PAGE_TITLE } from './data';

// Hero title with the {{…}} markers stripped — Legal keeps a single, calm
// display heading instead of the one-word gradient gimmick used elsewhere.
function plainTitle(title: string) {
  return title.replace(/\{\{([^}]+)\}\}/g, '$1');
}

/** White left-aligned hero: eyebrow effective-date kicker + editorial display title. */
export default function LegalHero() {
  return (
    <section className="bg-background pt-20 pb-8 md:pt-24 md:pb-10">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <span className="eyebrow">{EFFECTIVE_DATE}</span>
          <h1 className="mt-4 display-lg font-display text-h2 md:text-h1 text-foreground">
            {plainTitle(PAGE_TITLE)}
          </h1>
        </div>
      </Container>
    </section>
  );
}
