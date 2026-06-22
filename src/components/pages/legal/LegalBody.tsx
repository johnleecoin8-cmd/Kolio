import Container from '@/components/ui/Container';
import RichText from './RichText';
import UseTable from './UseTable';
import { LEAD, SECTIONS } from './data';

// Split a "3. How We Share…" title into its number marker and the heading text.
function splitTitle(title: string): { num: string | null; text: string } {
  const m = title.match(/^(\d+)\.\s*(.*)$/);
  return m ? { num: m[1], text: m[2] } : { num: null, text: title };
}

/** The long-form policy article: lead paragraph + numbered sections (+ table in §2). */
export default function LegalBody() {
  return (
    <section className="bg-background pb-16 pt-2 md:pb-24 md:pt-4">
      <Container>
        <article className="mx-auto w-full max-w-[68ch]">
          {/* Lead intro */}
          <div className="space-y-5 text-body text-foreground/75 leading-relaxed">
            <RichText text={LEAD} />
          </div>

          {SECTIONS.map((sec) => {
            const { num, text } = splitTitle(sec.title);
            return (
              <section key={sec.title} className="mt-14 md:mt-16 scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  {num && (
                    <span className="chip chip-ink shrink-0 font-mono-tnum">{num}</span>
                  )}
                  <h2 className="font-display text-h4 md:text-h3 leading-tight text-foreground">
                    {text}
                  </h2>
                </div>
                <div className="mt-4 space-y-5 text-body text-foreground/75 leading-relaxed">
                  <RichText text={sec.body} />
                </div>
                {/* Legal-ground table belongs to section 2 */}
                {sec.title.startsWith('2.') && <UseTable />}
              </section>
            );
          })}
        </article>
      </Container>
    </section>
  );
}
