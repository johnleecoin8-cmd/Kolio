import Container from '@/components/ui/Container';
import SectionHeader from './SectionHeader';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

const VIDEOS = [
  {
    href: 'https://www.youtube.com/watch?v=NTP5OA44998',
    img: `${CDN}/68d5293e6466c2b4111f3956_black_friday_thumbnail.avif`,
    title: 'How To Plan Your Influencer Black Friday Campaigns (Month By Month Plan)',
  },
  {
    href: 'https://www.youtube.com/watch?v=yL09upiGz1w',
    img: `${CDN}/68d52983f9266dfacc877507_relationships_thumbnail.avif`,
    title: '5 Ways Brands Kill Influencer Relationships (And How to Fix Them)',
  },
  {
    href: 'https://www.youtube.com/watch?v=bEmJYSY6AqM',
    img: `${CDN}/68d529ae6e01a5eba619168c_ai_thumbnail.avif`,
    title: 'How To Find Influencers Using AI',
  },
];

/** "Scale your influencer program" — 3 YouTube video cards. */
export default function ScaleProgram() {
  return (
    <section className="bg-background py-12 md:py-16">
      <Container className="max-w-[896px]">
        <SectionHeader
          title="Scale your influencer program"
          href="https://www.youtube.com/@Modash.official"
        />

        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <div key={v.href} className="flex flex-col">
              <a href={v.href} className="block overflow-hidden rounded-xl">
                <img
                  src={v.img}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              </a>
              <a
                href={v.href}
                className="mt-4 text-body font-bold leading-snug text-foreground"
              >
                {v.title}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
