import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

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
        <h2 className="mb-8 text-center text-[1.75rem] font-bold leading-tight text-foreground md:text-[2rem]">
          Wondering which plan is best for you?
        </h2>

        <div className="rounded-2xl bg-pink-light p-7 md:p-12">
          <p className="max-w-[900px] text-[1.5rem] font-medium leading-[1.25] text-foreground md:text-[2rem]">
            Tell us about your token, your campaign goals, and your team setup,
            and we’ll think through what fits. No pitch decks, no boring demos,
            just honest advice on running web3 KOL campaigns — even if that
            means not working with us at all.
          </p>

          <div className="my-7 border-t border-ink/10" />

          <div className="flex items-center justify-between">
            <div className="flex">
              {AVATARS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  width={56}
                  height={56}
                  className={`h-14 w-14 rounded-full border-2 border-pink-light object-cover ${
                    i > 0 ? '-ml-4' : ''
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
            <ButtonLink to="/demo-confirmation" variant="primary">
              Book a call
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
