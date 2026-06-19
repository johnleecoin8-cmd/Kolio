import Container from '@/components/ui/Container';
import { ButtonA } from '@/components/ui/Button';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const FEATURES = [
  {
    icon: `${CDN}/6842ca952d91864160ff1a1c_Fistbump.avif`,
    title: 'One connected workflow',
    body: 'Modash brings paid partnerships, affiliates, and gifting all in one place.',
  },
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    title: 'Every creator on earth',
    body: 'Find any creator on Instagram, YouTube and TikTok, with trusted data.',
  },
  {
    icon: `${CDN}/6842caa03aef8b676a0fbbf3_AI.avif`,
    title: 'Automations handle the busywork',
    body: 'Modash automatically captures every post so you never miss a thing.',
  },
  {
    icon: `${CDN}/693fe9551206f9cd7db985ad_ic_Creator%20Cost.avif`,
    title: 'Enterprise power, clear pricing',
    body: 'Modash delivers enterprise-grade capabilities without the hidden costs.',
  },
  {
    icon: `${CDN}/693fe955e15f63b343173cc4_ic_QR%20Code.avif`,
    title: 'Essential integrations',
    body: 'Modash syncs with Shopify, Gmail or Outlook to run things smoothly.',
  },
  {
    icon: `${CDN}/690b29f0b3d9a5f7e68184d3_ic_modash.avif`,
    title: 'Beautifully designed',
    body: 'Easy to use for both creators and brands. Zero onboarding needed.',
  },
];

/** "Why Modash" — 3x2 icon feature grid + pricing CTA. */
export default function WhyModash() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-wide text-foreground/50">
            Why Modash
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-[1.1] text-foreground md:text-[3rem]">
            Influencer marketing that just flows
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-md text-foreground/75">
            Modash is where influencer marketing stops feeling messy and starts making
            sense – across your whole workflow, end to end.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <img src={f.icon} alt="" loading="lazy" width={24} className="h-6 w-6" />
              <h3 className="mt-4 text-body-md font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 max-w-[300px] text-body-sm text-foreground/60">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <ButtonA href="/pricing" variant="primary">
            Find your pricing
          </ButtonA>
          <p className="text-body-sm text-foreground/60">Starts at $199/ mo</p>
        </div>
      </Container>
    </section>
  );
}
