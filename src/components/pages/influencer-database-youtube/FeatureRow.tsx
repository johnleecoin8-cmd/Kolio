import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  title: string;
  body: ReactNode;
  /** brand-neutral mockup node (charts/cards/divs) */
  media: ReactNode;
  /** refined section label above the heading */
  eyebrow?: string;
  /** true = media on left, text on right */
  imageLeft?: boolean;
  cta?: string;
  ctaVariant?: 'primary' | 'secondary';
};

/** Alternating feature row: copy + brand-neutral product mockup in a soft card. */
export default function FeatureRow({
  title,
  body,
  media,
  eyebrow,
  imageLeft = false,
  cta = 'Get started free',
  ctaVariant = 'primary',
}: Props) {
  const imageBlock = (
    <div className="flex items-center justify-center rounded-xl bg-background-soft p-6 sm:p-10">
      <div className="w-full max-w-[460px]">{media}</div>
    </div>
  );

  const copyBlock = (
    <div>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 display-lg font-display text-[1.75rem] leading-[1.15] text-foreground md:text-[2.1875rem]">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-body-md text-foreground/75">{body}</div>
      <div className="mt-8">
        <ButtonA href="/demo-confirmation" variant={ctaVariant}>
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
