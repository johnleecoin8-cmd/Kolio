import Container from '@/components/ui/Container';
import RichText from './RichText';
import UseTable from './UseTable';
import { LEAD, SECTIONS } from './data';

/** The long-form policy article: lead paragraph + numbered sections (+ table in §2). */
export default function LegalBody() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          {/* Lead intro */}
          <div className="space-y-5 text-body text-foreground/75 leading-relaxed">
            <RichText text={LEAD} />
          </div>

          {SECTIONS.map((sec) => (
            <section key={sec.title} className="mt-12">
              <h2 className="font-display text-h4 leading-tight text-foreground">
                {sec.title}
              </h2>
              <div className="mt-4 space-y-5 text-body text-foreground/75 leading-relaxed">
                <RichText text={sec.body} />
              </div>
              {/* Legal-ground table belongs to section 2 */}
              {sec.title.startsWith('2.') && <UseTable />}
            </section>
          ))}
        </article>
      </Container>
    </section>
  );
}
