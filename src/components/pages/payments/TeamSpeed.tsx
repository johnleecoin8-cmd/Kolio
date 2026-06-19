import Container from '@/components/ui/Container';

/** Big display heading with floating colored pill labels overlapping it. */
export default function TeamSpeed() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="relative mx-auto max-w-[1000px] py-8 text-center">
          {/* floating pills */}
          <span className="absolute left-[14%] top-0 z-10 inline-flex items-center gap-2 rounded-pill bg-pink-light px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Finance saves time
          </span>
          <span className="absolute right-[10%] top-3 z-10 inline-flex items-center gap-2 rounded-pill bg-sand px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Full compliance handled
          </span>
          <span className="absolute bottom-2 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-pill bg-purple px-4 py-2.5 text-body-sm font-medium text-ink shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Creators are paid quickly
          </span>

          <h2 className="font-display text-[2.5rem] uppercase leading-[0.95] text-ink sm:text-[3.5rem] md:text-[5rem]">
            When Modash handles payments, your whole team moves faster
          </h2>
        </div>
      </Container>
    </section>
  );
}
