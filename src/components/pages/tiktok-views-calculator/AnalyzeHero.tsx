import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

/** Big pink feature block: "Use Modash to analyze TikTok creators & their audiences". */
export default function AnalyzeHero() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="rounded-xl bg-pink px-6 py-16 text-ink md:px-12 md:py-24">
          <p className="text-center text-eyebrow font-semibold uppercase tracking-wide text-ink/60">
            Use Modash to
          </p>
          <h2 className="mx-auto mt-3 max-w-[16ch] text-center font-display text-[2.5rem] uppercase leading-[1.02] text-ink md:text-[4.5rem]">
            Analyze TikTok creators &amp; their audiences
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-center text-body text-ink/80 md:text-body-md">
            Inside Modash, you get a complete analysis of any TikTok creator,
            including average views, engagement, audience quality, location, and
            more.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonA
              href="https://www.modash.io/"
              variant="primary"
              size="md"
            >
              Get a 14-day free trial
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  );
}
