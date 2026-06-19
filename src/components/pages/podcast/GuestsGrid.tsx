import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Guest = {
  name: string;
  role: string;
  avatar: string;
  logo: string;
};

const GUESTS: Guest[] = [
  {
    name: 'Anna-Maria Klappenbach',
    role: 'Community & Brand Marketing Lead @ Aumio',
    avatar: `${CDN}/6509b4a695ed8eab313915b7_img_anna-maria%20klappenbach.avif`,
    logo: `${CDN}/6509b896d061ee7be8ec801e_img_aumio_showcase.avif`,
  },
  {
    name: 'Aleksander Kopyt',
    role: 'Head of Affiliate Marketing @ Health Labs Care',
    avatar: `${CDN}/6509b4c4fd7bed2165dfdcf1_img_aleksander%20kopyt.avif`,
    logo: `${CDN}/6509b8a72ead013f476f2579_img_HLC_showcase.avif`,
  },
  {
    name: 'Gabriele Palepšaitė',
    role: 'Regional Influencer Marketing Lead @ Surfshark',
    avatar: `${CDN}/6509b4ce57e6e798e2132fa3_img_gabriele%20palapsaite.avif`,
    logo: `${CDN}/6509b8be984e12474cdd13ed_img_surfshark_showcase.avif`,
  },
  {
    name: 'Georgia Humphries',
    role: 'Senior Partnerships & Influencer Manager @ Tourlane',
    avatar: `${CDN}/6509b4b2bd662b78911e33ec_img_georgia%20humphries.avif`,
    logo: `${CDN}/6509b8c98f3eb2e226bf689a_img_tourlane_showcase.avif`,
  },
  {
    name: 'Rugile Paleviciute',
    role: 'Head of Partnerships @ Kilo Health',
    avatar: `${CDN}/6509b4da268b5de52767e58a_img_rugile%20paleviciute.avif`,
    logo: `${CDN}/6509b8d4a7888aa5450819fc_img_kilo%20health_showcase.avif`,
  },
  {
    name: 'Valeriia Chemerys',
    role: 'Head of Media Partnerships @ Deeper',
    avatar: `${CDN}/6509b4e8e6f232fd9946b812_img_valeriia%20chemerys.avif`,
    logo: `${CDN}/6509b8dbed87f8b67e9cd9f1_img_deeper_showcase.avif`,
  },
];

export default function GuestsGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-display text-h4 md:text-h3 leading-tight text-[#1b1b4d]">
          Hear how top brands &amp; marketers run profitable influencer
          marketing programs
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
          {GUESTS.map((g) => (
            <div key={g.name} className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full ring-2 ring-[#4f56ff] overflow-hidden bg-[#e9e3ff]">
                <img
                  src={g.avatar}
                  alt={g.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-body-sm font-bold text-foreground">
                {g.name}
              </p>
              <p className="mt-1 text-eyebrow text-foreground/50 max-w-[220px]">
                {g.role}
              </p>
              <img
                src={g.logo}
                alt=""
                className="mt-3 h-5 w-auto object-contain opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
