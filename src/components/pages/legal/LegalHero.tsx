import Container from '@/components/ui/Container';
import { EFFECTIVE_DATE, PAGE_TITLE } from './data';

/** Dark centered hero band: small effective-date kicker + large uppercase title. */
export default function LegalHero() {
  return (
    <section className="bg-ink text-white pt-28 pb-16 md:pt-36 md:pb-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-body-sm font-bold text-white/60">{EFFECTIVE_DATE}</div>
          <h1 className="mt-4 font-display text-h3 md:text-h2 leading-tight uppercase">
            {PAGE_TITLE}
          </h1>
        </div>
      </Container>
    </section>
  );
}
