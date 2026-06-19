import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "See it in action" — interactive product tour embed area. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-display text-h4 leading-tight text-ink md:text-h3">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Browse this interactive tour to get a feel for how Modash Manage
            improves your workflow.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-xl border border-black/5 bg-background-soft shadow-nav">
          <img
            src={`${CDN}/699c169e4a6ffdde6e65c136_img_manage_01.avif`}
            alt="Modash Manage interactive tour"
            loading="lazy"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
