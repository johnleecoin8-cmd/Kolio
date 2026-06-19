import Container from '@/components/ui/Container';
import { PlayCircle } from 'lucide-react';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** "See it in action" — interactive demo embed area. */
export default function SeeItInAction() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-[2rem] leading-[1.1] text-foreground md:text-[2.5rem]">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-body-md text-foreground/70">
            Explore this interactive demo to see how Modash Track automatically
            collects content and consolidates your Shopify data, so everything lives
            in one place.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-xl border border-black/5 bg-background-soft shadow-nav">
          <img
            src={`${CDN}/699d54887fa7999c802e5350_img_hero_manage.avif`}
            alt="Modash Track interactive demo"
            loading="lazy"
            className="w-full opacity-95"
          />
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-ink/10 transition hover:bg-ink/20"
            aria-label="Play interactive demo"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink shadow-nav">
              <PlayCircle size={32} />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
