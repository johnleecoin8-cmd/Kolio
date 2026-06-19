import { useState } from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Hero: big display headline, subtext, and the Instagram handle search bar. */
export default function Hero() {
  const [handle, setHandle] = useState('@therock');

  return (
    <section className="bg-background pt-6 md:pt-10">
      <Container>
        <div className="flex flex-col items-center gap-6 px-4 py-6 text-center md:px-4 md:pb-4 md:pt-10">
          <h1 className="m-0 text-center font-display text-4xl font-normal leading-tight text-foreground xl:text-[6.5rem]">
            FREE Instagram Engagement Rate Calculator
          </h1>

          <div className="flex flex-col items-center gap-4 px-6 xl:px-24">
            <p className="my-0 max-w-[38rem] text-center text-body leading-6 text-foreground">
              Use our free Instagram engagement rate calculator to check the
              engagement rate of any public account. Analyze likes, comments,
              post-level engagement, and more.
            </p>

            <div className="w-full max-w-[35rem]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="inline-flex w-full items-center gap-2 overflow-hidden rounded-xl bg-background-soft p-4"
              >
                <Search size={16} className="shrink-0 text-ink" />
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="Username"
                  className="flex-1 border-none bg-transparent text-sm font-normal leading-5 text-foreground outline-none placeholder:text-foreground/40"
                />
                <button
                  type="submit"
                  className="inline-flex w-32 shrink-0 items-center justify-center gap-2 rounded-sm bg-ink px-3 py-1.5 text-sm font-semibold leading-tight text-white transition-colors hover:bg-[#333333]"
                >
                  Check Profile
                </button>
              </form>
            </div>
          </div>

          <div className="mx-auto h-px w-full max-w-[59rem] bg-black/10" />
        </div>

        {/* Result placeholder card (purple-bordered, like the live tool) */}
        <div className="mx-auto mb-20 flex w-full max-w-[71rem] flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-10 rounded-xl bg-background-soft p-4 xl:gap-10 xl:p-12">
            <div className="flex h-72 min-h-48 min-w-52 items-center justify-center rounded-lg border border-violet bg-white shadow-[4px_4px_12px_rgba(214,218,255,0.6)]">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet border-t-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
