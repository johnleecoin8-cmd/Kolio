import { ReactNode } from 'react';
import Container from '@/components/ui/Container';

type Props = {
  /** which side the image sits on (desktop) */
  imageSide: 'left' | 'right';
  /** wrap the image in a soft sand panel like the screenshots */
  panel?: boolean;
  image: ReactNode;
  children: ReactNode;
};

/** Alternating two-column feature row (image + copy). */
export default function FeatureRow({ imageSide, panel = true, image, children }: Props) {
  const imageFirst = imageSide === 'left';
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
            {panel ? (
              <div className="rounded-xl bg-background-soft p-6 md:p-10">{image}</div>
            ) : (
              image
            )}
          </div>
          <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
