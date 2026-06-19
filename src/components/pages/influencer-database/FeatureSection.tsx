import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type Props = {
  title: string;
  body: ReactNode;
  /** Brand-neutral visual (div/chart mockup) rendered in the image slot. */
  visual: ReactNode;
  /** true = visual on the right (text on left) */
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

/** Alternating visual / text feature row. */
export default function FeatureSection({
  title,
  body,
  visual,
  reverse = false,
  ctaLabel = 'Start free',
  ctaHref = '/demo-confirmation',
}: Props) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reverse ? 'order-2' : 'order-2 md:order-1'}>{visual}</div>

          <div className={cn(reverse ? 'order-1' : 'order-1 md:order-2')}>
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] text-foreground md:text-[2.1875rem]">
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
