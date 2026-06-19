import { Fragment } from 'react';
import Container from '@/components/ui/Container';
import { EFFECTIVE_DATE, PAGE_TITLE } from './data';

// later.com-style display headline: one word wrapped in {{…}} gets the
// red→coral gradient highlight (text-gradient-brand), the rest stays foreground.
function renderTitle(title: string) {
  return title.split(/(\{\{[^}]+\}\})/g).map((chunk, i) => {
    const m = chunk.match(/^\{\{([^}]+)\}\}$/);
    return m ? (
      <span key={i} className="text-gradient-brand">
        {m[1]}
      </span>
    ) : (
      <Fragment key={i}>{chunk}</Fragment>
    );
  });
}

/** White centered hero: small effective-date kicker + large uppercase display title. */
export default function LegalHero() {
  return (
    <section className="bg-background pt-20 pb-10 md:pt-24 md:pb-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-body-sm font-bold text-foreground/50">{EFFECTIVE_DATE}</div>
          <h1 className="mt-5 font-display text-h2 md:text-display leading-none uppercase text-foreground">
            {renderTitle(PAGE_TITLE)}
          </h1>
        </div>
      </Container>
    </section>
  );
}
