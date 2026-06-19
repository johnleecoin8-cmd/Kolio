import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const BENEFITS = [
  {
    icon: `${CDN}/6837096d4faddb80cd0aec3f_ic_find%20influencers.avif`,
    text: 'Creators get discovered without signing up or doing anything.',
  },
  {
    icon: `${CDN}/6979f75c8f82dc047c9ed943_ic_click.avif`,
    text: 'No re-authentication or recurring access requests, zero maintenance for creators.',
  },
  {
    icon: `${CDN}/68e50d0a217090115d90f41c_ic_mail_black.png`,
    text: 'Outreach comes from real brand emails, not generic platform inboxes.',
  },
  {
    icon: `${CDN}/6842ca952d91864160ff1a1c_Fistbump.avif`,
    text: 'Creators work directly with humans, enabling real long-term relationships.',
  },
  {
    icon: `${CDN}/686bb56918868e7c9f8bc4de_Image.avif`,
    text: 'Creators don’t upload screenshots, links, or performance reports.',
  },
  {
    icon: `${CDN}/6979f7c89fe585403a604e99_ic-tracking.avif`,
    text: 'All tracking happens automatically in the background.',
  },
  {
    icon: `${CDN}/6839880de4b9dfb7a7cb6c5e_ic_pay.avif`,
    text: 'Creators have full transparency into their affiliate earnings.',
  },
  {
    icon: `${CDN}/6979f7e9aa0667e17faa96e2_ic_Unique%20Click.avif`,
    text: 'Fast, automated payments with dedicated human support when needed.',
  },
];

/** "Built for brands. Better for creators." — 4x2 benefit grid. */
export default function CreatorBenefits() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <h2 className="text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
            Built for brands. Better for creators.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-body-md text-foreground/70">
            Creators shouldn't have to work for your software. Modash helps
            brands work with creators without making creators manage another
            tool.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.text}
              className="flex flex-col gap-4 rounded-lg bg-background-soft p-6"
            >
              <img
                src={b.icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                loading="lazy"
              />
              <p className="text-body-sm text-foreground/70">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
