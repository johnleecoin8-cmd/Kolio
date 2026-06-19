import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  /** Brand-neutral mockup rendered in the visual column (div/recharts based). */
  visual: ReactNode;
  heading: string;
  /** visual on the right (text left) when true */
  reverse?: boolean;
  children: ReactNode;
};

/** Two-column feature row: brand-neutral mockup beside text + "Request a demo" CTA. */
export default function FeatureRow({
  visual,
  heading,
  reverse = false,
  children,
}: Props) {
  return (
    <section className="py-16 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reverse ? 'md:order-2' : ''}>{visual}</div>
          <div className={reverse ? 'md:order-1' : ''}>
            <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-h3">
              {heading}
            </h2>
            <div className="mt-5 text-body-md text-foreground/70">{children}</div>
            <ButtonA href="/demo-confirmation" variant="primary" className="mt-8">
              Request a demo
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
