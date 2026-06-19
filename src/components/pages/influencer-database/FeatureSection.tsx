import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  title: string;
  body: ReactNode;
  image: string;
  imageSrcSet?: string;
  /** true = image on the right (text on left) */
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

/** Alternating image / text feature row. */
export default function FeatureSection({
  title,
  body,
  image,
  imageSrcSet,
  reverse = false,
  ctaLabel = 'Try for free',
  ctaHref = 'https://marketer.modash.io/register/marketer',
}: Props) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reverse ? 'order-2' : 'order-2 md:order-1'}>
            <img
              src={image}
              srcSet={imageSrcSet}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 49vw, 560px"
              alt={title}
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>

          <div className={reverse ? 'order-1' : 'order-1 md:order-2'}>
            <h2 className="font-display text-h4 leading-tight text-foreground">
              {title}
            </h2>
            <div className="mt-6 text-body text-foreground/70">{body}</div>
            <div className="mt-8">
              <ButtonA href={ctaHref} variant="primary">
                {ctaLabel}
              </ButtonA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
