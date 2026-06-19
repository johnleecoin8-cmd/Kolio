import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type Props = {
  heading: ReactNode;
  body: ReactNode;
  img?: string;
  imgAlt?: string;
  /** Custom visual (React mockup) — overrides the `img` illustration. */
  visual?: ReactNode;
  ctaLabel: string;
  ctaHref?: string;
  imageOn?: 'left' | 'right';
  /** Section background variant. */
  bg?: 'white' | 'violet';
};

/** Two-column feature row: heading + copy + CTA on one side, illustration on the other. */
export default function FeatureRow({
  heading,
  body,
  img,
  imgAlt,
  visual,
  ctaLabel,
  ctaHref = '/demo-confirmation',
  imageOn = 'right',
  bg = 'white',
}: Props) {
  const text = (
    <div className="flex flex-col justify-center">
      <h2 className="font-display text-[2rem] leading-[1.1] text-violet-dark md:text-[2.5rem]">
        {heading}
      </h2>
      <div className="mt-6 max-w-[480px] text-body-md text-violet-dark/80">
        {body}
      </div>
      <div className="mt-8">
        <ButtonA href={ctaHref} variant="accent">
          {ctaLabel}
        </ButtonA>
      </div>
    </div>
  );

  const image = (
    <div className="flex items-center justify-center">
      {visual ?? (
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="w-full max-w-[520px]"
        />
      )}
    </div>
  );

  return (
    <section
      className={cn(
        'py-16 md:py-24',
        bg === 'violet' ? 'bg-violet-light' : 'bg-background',
      )}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {imageOn === 'left' ? (
            <>
              <div className="order-2 md:order-1">{image}</div>
              <div className="order-1 md:order-2">{text}</div>
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
