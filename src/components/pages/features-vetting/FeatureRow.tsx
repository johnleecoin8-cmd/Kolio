import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

type Props = {
  title: string;
  body: React.ReactNode;
  img: string;
  imgAlt: string;
  /** image on the right (default) or left */
  reverse?: boolean;
};

/** Alternating text + product-screenshot feature row. */
export default function FeatureRow({ title, body, img, imgAlt, reverse }: Props) {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={reverse ? 'md:order-2' : ''}>
            <h2 className="font-display text-h3 leading-tight text-foreground">
              {title}
            </h2>
            <p className="mt-5 max-w-[480px] text-body-md text-foreground/70">{body}</p>
            <div className="mt-8">
              <ButtonA
                href="https://marketer.modash.io/register/marketer"
                variant="primary"
              >
                Try for Free
              </ButtonA>
            </div>
          </div>

          <div className={reverse ? 'md:order-1' : ''}>
            <div className="rounded-xl bg-background-soft p-4 md:p-6">
              <img
                src={img}
                alt={imgAlt}
                loading="lazy"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
