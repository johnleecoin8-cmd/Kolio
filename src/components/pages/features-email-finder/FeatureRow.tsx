import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  image: string;
  imageSrcSet?: string;
  alt?: string;
  heading: string;
  /** image on the right (text left) when true */
  reverse?: boolean;
  children: ReactNode;
};

/** Two-column feature row: screenshot beside text + "Try for Free" CTA. */
export default function FeatureRow({
  image,
  imageSrcSet,
  alt = '',
  heading,
  reverse = false,
  children,
}: Props) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reverse ? 'md:order-2' : ''}>
            <img
              src={image}
              srcSet={imageSrcSet}
              sizes="(max-width: 767px) 100vw, 560px"
              alt={alt}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className={reverse ? 'md:order-1' : ''}>
            <h2 className="font-display text-h4 leading-tight text-foreground">
              {heading}
            </h2>
            <div className="mt-5 text-body-md text-foreground/70">{children}</div>
            <ButtonA
              href="https://marketer.modash.io/register/marketer"
              variant="primary"
              className="mt-8"
            >
              Try for Free
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
