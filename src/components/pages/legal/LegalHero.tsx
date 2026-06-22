import Container from '@/components/ui/Container';
import { EFFECTIVE_DATE, PAGE_TITLE, SECTIONS } from './data';

// Strip the {{…}} one-word-emphasis markers — Legal stays calm and minimal.
function plainTitle(title: string) {
  return title.replace(/\{\{([^}]+)\}\}/g, '$1');
}

// Build a contents jump-list from the numbered section titles.
function tocItems() {
  return SECTIONS.map((sec) => {
    const m = sec.title.match(/^(\d+)\.\s*(.*)$/);
    const num = m ? m[1] : '';
    const text = m ? m[2] : sec.title;
    return { num, text, id: `sec-${num}` };
  });
}

/**
 * Calm-premium legal hero — soft warm canvas, light-weight display title, an
 * effective-date chip, and a quiet table-of-contents rail. No gradients, no art.
 */
export default function LegalHero() {
  const items = tocItems();
  return (
    <section className="canvas-warm pt-24 pb-8 md:pt-28 md:pb-12">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <span className="chip chip-ink font-mono-tnum">{EFFECTIVE_DATE}</span>
          <h1 className="display-light mt-5 text-[2.5rem] leading-[1.04] text-foreground md:text-[3.75rem]">
            {plainTitle(PAGE_TITLE)}
          </h1>
          <p className="mt-5 max-w-[58ch] text-body-md text-foreground/60">
            How Kolio collects, uses and protects personal data across the
            proof-based crypto KOL marketing platform. Read in full, or jump to a
            section below.
          </p>

          {/* Quiet contents rail */}
          <nav
            aria-label="Contents"
            className="mt-8 flex flex-wrap gap-2 rounded-2xl border border-black/[0.06] bg-white/70 p-3 shadow-float-sm"
          >
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className="inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-body-sm text-foreground/65 transition hover:bg-black/[0.04] hover:text-foreground"
              >
                <span className="font-mono-tnum text-foreground/40">{it.num}</span>
                {it.text}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
