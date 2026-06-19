import { useState } from 'react';
import { Search, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Hero of the IG Average Views Calculator.
 * Eyebrow title + calculator search input on the left, mock Instagram Reel
 * preview card on the right. Pink-tinted block, white page above.
 */
export default function Hero() {
  const [handle, setHandle] = useState('');

  return (
    <section className="bg-background pt-8 md:pt-12">
      <Container>
        {/* eyebrow / page title */}
        <h1 className="font-display text-3xl md:text-5xl xl:text-7xl font-normal uppercase tracking-tight leading-[1.05] text-foreground">
          Instagram Average Views Calculator
        </h1>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* calculator card */}
          <div className="rounded-xl bg-pink p-6 md:p-10 flex flex-col justify-center">
            <p className="text-body-md font-semibold text-ink">
              Check the average Reel plays for any Instagram influencer.
            </p>
            <p className="mt-2 text-body-sm text-ink/70">
              Free, no sign-up needed.
            </p>

            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Search className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="Enter a profile handle or direct profile URL"
                  className="h-12 w-full rounded-sm border border-black/10 bg-white pl-10 pr-3 text-body-sm text-foreground placeholder:text-gray-400 outline-none focus:border-ink"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-body font-semibold text-white shadow-btn transition hover:opacity-90"
              >
                Check average views
              </button>
            </form>

            <p className="mt-3 text-eyebrow text-ink/60">
              14-day free trial • No credit card required
            </p>
          </div>

          {/* mock Instagram reel preview */}
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-nav">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-hot to-purple" />
              <div className="flex-1">
                <div className="text-body-sm font-semibold text-foreground">
                  @creator
                </div>
                <div className="text-eyebrow text-foreground/50">Original audio</div>
              </div>
              <MoreHorizontal className="h-5 w-5 text-foreground/50" />
            </div>

            <div className="mt-4 aspect-[4/5] w-full overflow-hidden rounded bg-gradient-to-br from-sand to-gray-200" />

            <div className="mt-3 flex items-center gap-4 text-foreground">
              <Heart className="h-6 w-6" />
              <MessageCircle className="h-6 w-6" />
              <Send className="h-6 w-6" />
              <Bookmark className="ml-auto h-6 w-6" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                { k: 'Views', v: '128.4K' },
                { k: 'Likes', v: '9.2K' },
                { k: 'Comments', v: '312' },
              ].map((s) => (
                <div key={s.k} className="rounded bg-background-soft py-2">
                  <div className="text-body font-semibold text-foreground">
                    {s.v}
                  </div>
                  <div className="text-eyebrow text-foreground/50">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
