import Container from '@/components/ui/Container';

/** Single quote testimonial — brand-neutral avatar left, big quote right. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
          <div className="flex justify-center md:justify-end">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-brand">
              <span className="font-display text-[3.5rem] font-semibold text-white">
                LK
              </span>
            </div>
          </div>
          <div>
            <span
              aria-hidden
              className="block font-display text-[3rem] leading-none text-blue"
            >
              &ldquo;
            </span>
            <h3 className="mt-2 max-w-[640px] font-display text-[1.5rem] font-semibold leading-[1.35] text-foreground md:text-[1.75rem]">
              Before Kolio we were sourcing KOLs from Telegram group chats and
              hoping the reach was real. Now we vet every creator on proof and
              find five lookalikes in the time it used to take to qualify one.
            </h3>
            <div className="mt-8">
              <div className="text-body font-medium text-foreground">
                Lena Kim
              </div>
              <div className="text-body text-foreground/60">
                Head of Growth at a Tier-1 exchange
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
