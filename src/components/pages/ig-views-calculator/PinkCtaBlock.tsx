import Container from '@/components/ui/Container';

type Props = {
  title: string;
  description: string;
  buttonText?: string;
};

/**
 * Full-width pink "message card" CTA block — centered heading, body, button.
 * Used twice on the page (analyze creators / checking is just the beginning).
 */
export default function PinkCtaBlock({
  title,
  description,
  buttonText = 'Get a 14-day free trial',
}: Props) {
  return (
    <section className="bg-background py-8 md:py-12">
      <Container>
        <div className="rounded-xl bg-pink px-4 py-16 md:py-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="font-display text-h3 md:text-h2 font-normal leading-tight text-ink">
              {title}
            </h2>
            <p className="max-w-xl text-body-md text-ink/80">{description}</p>
            <a
              href="https://www.modash.io/signup"
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body-md font-semibold text-white shadow-btn transition hover:opacity-90"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
