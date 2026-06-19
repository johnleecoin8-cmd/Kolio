import Container from '@/components/ui/Container';
import { EFFECTIVE_DATE, PAGE_TITLE } from './data';

/** White centered hero: small effective-date kicker + large uppercase display title. */
export default function LegalHero() {
  return (
    <section className="bg-background pt-20 pb-10 md:pt-24 md:pb-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-body-sm font-bold text-foreground/50">{EFFECTIVE_DATE}</div>
          <h1 className="mt-5 font-display text-h2 md:text-display leading-none uppercase text-foreground">
            {PAGE_TITLE}
          </h1>
        </div>
      </Container>
    </section>
  );
}
