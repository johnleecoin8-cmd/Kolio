import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

type Props = {
  title: string;
  intro: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  learnMore?: string;
  /** image on the left instead of right */
  reverse?: boolean;
};

/** Two-column product feature block (Discovery API / Raw API). */
export default function ProductFeature({
  title,
  intro,
  bullets,
  image,
  imageAlt,
  learnMore,
  reverse = false,
}: Props) {
  const text = (
    <div className="flex flex-col justify-center">
      <h2 className="font-display text-h3 leading-tight text-foreground">{title}</h2>
      <p className="mt-4 text-body-md text-foreground/75">{intro}</p>

      <ul className="mt-6 space-y-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" strokeWidth={2} />
            <span className="text-body text-foreground/85">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonA
          href="https://form.jotform.com/modash/intro-modash-api"
          variant="primary"
        >
          Request a demo
        </ButtonA>
        {learnMore && (
          <ButtonA href={learnMore} variant="secondary">
            Learn more
          </ButtonA>
        )}
      </div>
    </div>
  );

  const media = (
    <div className="flex items-center justify-center rounded-xl bg-background-soft p-8 md:p-10">
      <img src={image} alt={imageAlt} loading="lazy" className="w-full max-w-[520px]" />
    </div>
  );

  return (
    <section className="bg-background py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {reverse ? (
            <>
              <div className="order-2 md:order-1">{media}</div>
              <div className="order-1 md:order-2">{text}</div>
            </>
          ) : (
            <>
              {text}
              {media}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
