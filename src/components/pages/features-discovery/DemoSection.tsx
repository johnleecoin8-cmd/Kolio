import Container from '@/components/ui/Container';
import SectionHeading from './SectionHeading';

/** "See it in action" — centered heading + interactive demo embed. */
export default function DemoSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-[750px] text-center">
          <SectionHeading>See it in action</SectionHeading>
          <p className="mt-4 text-body md:text-body-md text-foreground/75">
            Walk through this interactive demo to see how Modash Discover helps you create a vetted
            shortlist quickly, so you can start outreach the same day.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl bg-background-soft shadow-nav">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://capture.navattic.com/cmetoyexu000004jl6g0aeift"
              title="Modash Discover interactive demo"
              className="h-full w-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
