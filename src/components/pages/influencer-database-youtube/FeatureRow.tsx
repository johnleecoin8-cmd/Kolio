import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  title: string;
  body: ReactNode;
  image: string;
  alt: string;
  /** true = image on left, text on right */
  imageLeft?: boolean;
  cta?: string;
  ctaVariant?: 'primary' | 'secondary';
};

/** Alternating feature row: copy + product screenshot in a soft card. */
export default function FeatureRow({
  title,
  body,
  image,
  alt,
  imageLeft = false,
  cta = 'Try for Free',
  ctaVariant = 'primary',
}: Props) {
  const imageBlock = (
    <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
      <img src={image} alt={alt} loading="lazy" className="w-full max-w-[460px]" />
    </div>
  );

  const copyBlock = (
    <div>
      <h2 className="font-display text-h4 leading-tight text-foreground md:text-[2.25rem]">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-body-md text-foreground/75">{body}</div>
      <div className="mt-8">
        <ButtonA
          href="https://marketer.modash.io/register/marketer"
          variant={ctaVariant}
        >
          {cta}
        </ButtonA>
      </div>
    </div>
  );

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {imageLeft ? (
            <>
              {imageBlock}
              {copyBlock}
            </>
          ) : (
            <>
              {copyBlock}
              {imageBlock}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
