import Container from '@/components/ui/Container';

const CDN2 = 'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719';

type Episode = {
  title: string;
  blurb: string;
  guest: string;
  guestRole: string;
  thumb: string;
  bio: string;
  href: string;
};

const FEATURED: Episode = {
  title:
    'The Personal Touch In Managing Influencer Relationships With Georgia Humphries (Tourlane)',
  blurb:
    "Tourlane drive up to €700k/month in revenue from influencer collabs. Hear from Georgia about their strategy, why they don't automate, how they select influencers for $10k+ collabs, and more!",
  guest: 'Georgia Humphries',
  guestRole: 'Senior Partnerships & Influencer Manager @ Tourlane',
  thumb: `${CDN2}/645e09f4085e10b2bbcf9711_Tourlane%20YouTube.avif`,
  bio: `${CDN2}/6454b931bcd4f2f55188469a_georgia.jpg`,
  href: 'https://www.youtube.com/@Modash.official/videos',
};

const EPISODES: Episode[] = [
  {
    title:
      "Scaling Europe's Fastest Growing Company With Influencers With Rugile Paleviciute (Kilo Health)",
    blurb:
      'As Head of Partnerships at Kilo Health, Rugile Paleviciute is the perfect person to talk to us about creator partnerships in the consumer mobile app space. In this conversation with Avery Schrader, Rugile shares the unvarnished truth about what it takes to find success with influencer marketing.',
    guest: 'Rugile Paleviciute',
    guestRole: 'Head of Partnerships @ Kilo Health',
    thumb: `${CDN2}/64647158ee6aa9f237f5051c_thumbnail%20new%20%20(2).avif`,
    bio: `${CDN2}/646471957e297c99f71c2ce5_rugile%20bio%20pic.avif`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
  {
    title:
      'The Surprising Mindset Shift You Need For Successful Creator Partnerships With Siim Säinas (Google)',
    blurb:
      'Google’s Siim Säinas comes on the pod to discuss influencer marketing measurement. In a surprising twist, he shares that creative excellence is the thing that’ll move the needle most substantially.',
    guest: 'Siim Säinas',
    guestRole: 'Social Measurement & Insights Manager @ Google',
    thumb: `${CDN2}/651be8c9347ad738119e7861_thumbnail%20new%20(3).avif`,
    bio: `${CDN2}/6461d70fb6d634ff3897ed98_siim%20bio%20pic.jpg`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
  {
    title:
      'Scaling Influencer Marketing by Building Internal Software with Andrei Gigîrtu (AdoreMe)',
    blurb:
      'AdoreMe’s VP of Software Incubation Andrei Gigîrtu comes on the pod to share his experiences on building tech for influencer marketing. From 0 to a thriving community of 6000 creators, hear how AdoreMe leveraged software to reach their goals.',
    guest: 'Andrei Gigîrtu',
    guestRole: 'VP of Software Incubation @ AdoreMe',
    thumb: `${CDN2}/645e07a3c046ab4b58173058_thumbnail%20new%20.avif`,
    bio: `${CDN2}/645e07be55e2226e325fe5e4_1611133995240.avif`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
  {
    title:
      'Intro To Influencer-Led Live Shopping With Fabian Ouwehand (HSE Hello)',
    blurb:
      'As the undisputed European Champion of Live Shopping, Fabian Ouwehand is the best person to chat with about social commerce & live shopping. Fabian shares his experiences with Live Shopping in China. (Spoiler: Creators are doing 100 different streams simultaneously!)',
    guest: 'Fabian Ouwehand',
    guestRole: 'Senior Director Social Commerce @ HSE',
    thumb: `${CDN2}/645e09a7416957303d5c3e52_thumbnail%20new%20%20(1).avif`,
    bio: `${CDN2}/63ff5980dfc21a6ff17f6bee_1672183022588.avif`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
  {
    title:
      'Influencer Marketing In A Highly Regulated Industry With Maia Pedro (Bitpanda)',
    blurb:
      'Maia Pedro is building the influencer marketing global team at BitPanda from scratch. Avery talks to Maia about how to approach influencer marketing in a highly regulated industry, the importance of creator briefing, and everything in between.',
    guest: 'Maia Pedro',
    guestRole: 'Influencer Marketing Team Lead @ Bitpanda',
    thumb: `${CDN2}/651be8db366dfe6f5e592bf7_thumbnail%20%20(1).avif`,
    bio: `${CDN2}/63ff57ddb9853c33c140b3a1_maia.avif`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
  {
    title:
      'Influencer Outreach With Email: Learnings From Sending 1M Emails With Nikola Sokolov',
    blurb:
      "Nikola Sokolov shares what he's learned from his team sending 1 million emails per MONTH to creators.",
    guest: 'Nikola Sokolov',
    guestRole: 'CEO @ influencers.club',
    thumb: `${CDN2}/651be8e7347ad738119e947b_thumbnail%20new%20(2).avif`,
    bio: `${CDN2}/63b5784bec83a324cd250dec_1540730588754.avif`,
    href: 'https://www.youtube.com/@Modash.official/videos',
  },
];

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

function GuestByline({ ep }: { ep: Episode }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={ep.bio}
        alt={ep.guest}
        className="h-8 w-8 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <p className="text-body-sm font-bold text-foreground leading-tight">
          {ep.guest}
        </p>
        <p className="text-eyebrow text-foreground/50 leading-tight">
          {ep.guestRole}
        </p>
      </div>
    </div>
  );
}

export default function Episodes() {
  return (
    <section id="episodes" className="bg-background pb-16 md:pb-24">
      <Container>
        {/* Featured */}
        <a
          href={FEATURED.href}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start no-underline group"
        >
          <img
            src={FEATURED.thumb}
            alt={FEATURED.title}
            className="w-full rounded-lg object-cover aspect-video"
            loading="lazy"
          />
          <div>
            <h3 className="font-sans font-bold text-h4 leading-tight tracking-tight text-foreground group-hover:text-blue transition">
              {FEATURED.title}
            </h3>
            <p className="mt-4 text-body-sm text-foreground/70">
              {FEATURED.blurb}
            </p>
            <div className="mt-5">
              <GuestByline ep={FEATURED} />
            </div>
          </div>
        </a>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {EPISODES.map((ep) => (
            <a
              key={ep.title}
              href={ep.href}
              className="flex flex-col no-underline group"
            >
              <img
                src={ep.thumb}
                alt={ep.title}
                className="w-full rounded-lg object-cover aspect-video"
                loading="lazy"
              />
              <h3 className="mt-4 font-sans font-bold text-body-md leading-snug text-foreground group-hover:text-blue transition">
                {ep.title}
              </h3>
              <p className="mt-3 text-body-sm text-foreground/70 flex-1">
                {ep.blurb}
              </p>
              <div className="mt-4">
                <GuestByline ep={ep} />
              </div>
            </a>
          ))}
        </div>

        {/* Platform buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://www.youtube.com/@Modash.official/videos"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-sm bg-[#ff0000] text-white text-body-sm font-semibold transition hover:opacity-90"
          >
            <img
              src={`${CDN}/6509bbafd4868a5d411f4244_ic_youtube.webp`}
              alt=""
              className="h-4 w-auto"
            />
            Watch on Youtube
          </a>
          <a
            href="https://open.spotify.com/show/1ICgjwArQY4rzrmqHiZoDA"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-sm bg-[#1db954] text-white text-body-sm font-semibold transition hover:opacity-90"
          >
            <img
              src={`${CDN}/6509bbafd4868a5d411f424d_ic_spotify.webp`}
              alt=""
              className="h-4 w-auto"
            />
            Listen on Spotify
          </a>
        </div>
      </Container>
    </section>
  );
}
