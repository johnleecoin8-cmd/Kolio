import Container from '@/components/ui/Container';

/** "See it in action" — interactive Navattic product tour embed. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-sans text-h4 font-bold leading-tight text-ink">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Browse this interactive tour to get a feel for how Modash Manage
            improves your workflow.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-xl">
          <iframe
            src="https://capture.navattic.com/cmetr6op5000004johshvfjrd"
            title="Modash Manage interactive tour"
            loading="lazy"
            allow="fullscreen"
            className="aspect-[6/5] w-full border-0"
          />
        </div>
      </Container>
    </section>
  );
}
