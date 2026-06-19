import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';
const AVATARS = [
  `${CDN}/6979f5b82ae8af856ab77771_img1.avif`,
  `${CDN}/6979f5c9de2ef0532cade4bb_img2.avif`,
  `${CDN}/6979f80f2cbf241d537ef446_img3.avif`,
];

/** "Wondering which plan is best for you?" — pink advice CTA. */
export default function PlanHelpCta() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <h2 className="mb-8 text-center font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
          Wondering which plan is best for you?
        </h2>

        <div className="mx-auto flex max-w-[920px] flex-col items-center gap-8 rounded-xl bg-pink-bg p-8 md:flex-row md:justify-between md:p-12">
          <p className="max-w-[560px] text-center text-body-md text-foreground/80 md:text-left">
            Let’s go over your goals and team setup, and think together about
            what fits you best. No pitch decks, no boring demos, just honest
            advice, even if that means not working with us at all.
          </p>

          <div className="flex shrink-0 flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  width={56}
                  height={56}
                  className={`h-14 w-14 rounded-full border-2 border-white object-cover ${
                    i > 0 ? '-ml-3' : ''
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
            <ButtonA
              href="https://www.modash.io/book-demo"
              variant="accent"
            >
              Book a call
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
