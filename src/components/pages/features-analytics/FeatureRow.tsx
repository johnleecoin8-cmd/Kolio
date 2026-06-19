import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  heading: string;
  body?: ReactNode;
  image: string;
  imageAlt?: string;
  /** image on the left (true) or right (false) on desktop */
  reverse?: boolean;
  cta?: { label: string; href: string };
  children?: ReactNode;
};

/** Alternating two-column feature row: copy on one side, product screenshot on the other. */
export default function FeatureRow({
  heading,
  body,
  image,
  imageAlt = '',
  reverse = false,
  cta,
  children,
}: Props) {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* copy column */}
          <div className={reverse ? 'md:order-2' : 'md:order-1'}>
            <h2 className="max-w-[420px] font-sans text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground md:text-[2.5rem]">
              {heading}
            </h2>
            {body && (
              <p className="mt-5 max-w-[460px] text-body-md text-foreground/70">
                {body}
              </p>
            )}
            {children}
            {cta && (
              <div className="mt-8">
                <ButtonA href={cta.href} variant="primary">
                  {cta.label}
                </ButtonA>
              </div>
            )}
          </div>

          {/* image column */}
          <div className={reverse ? 'md:order-1' : 'md:order-2'}>
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
