import Container from '@/components/ui/Container';
import RichText from './RichText';
import UseTable from './UseTable';
import { LEAD, SECTIONS } from './data';

// Split a "3. How We Share…" title into its number marker and the heading text.
function splitTitle(title: string): { num: string | null; text: string } {
  const m = title.match(/^(\d+)\.\s*(.*)$/);
  return m ? { num: m[1], text: m[2] } : { num: null, text: title };
}

/**
 * Long-form policy article in the calm-premium language: white reading surface,
 * comfortable 68ch measure, chip section markers, light-weight display headings.
 * No gradients, no loud bands.
 */
export default function LegalBody() {
  return (
    <section className="bg-white pb-20 pt-6 md:pb-28 md:pt-8">
      <Container>
        <article className="mx-auto w-full max-w-[68ch]">
          {/* Lead intro — set off in a soft warm card for a gentle entry */}
          <div className="canvas-warm rounded-2xl p-6 md:p-8 shadow-float-sm">
            <div className="space-y-5 text-body text-foreground/75 leading-relaxed">
              <RichText text={LEAD} />
            </div>
          </div>

          {SECTIONS.map((sec) => {
            const { num, text } = splitTitle(sec.title);
            return (
              <section
                key={sec.title}
                id={num ? `sec-${num}` : undefined}
                className="mt-16 md:mt-20 scroll-mt-28"
              >
                <div className="flex items-center gap-3">
                  {num && (
                    <span className="chip chip-brand shrink-0 font-mono-tnum">{num}</span>
                  )}
                  <h2 className="display-light text-[1.6rem] leading-tight text-foreground md:text-[2rem]">
                    {text}
                  </h2>
                </div>
                <div className="mt-3 h-px w-full bg-black/[0.06]" />
                <div className="mt-5 space-y-5 text-body text-foreground/75 leading-relaxed">
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
