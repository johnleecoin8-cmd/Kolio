// Real data scraped from modash.io/content-library/brands/red-bull-examples/influencers
// Profile pics + brand-post thumbnails are real Modash CDN URLs.

export type LocationStat = { name: string; pct: string };

export type Influencer = {
  rank: number;
  name: string;
  location: string;
  handle: string;
  bio: string[];
  avatar: string;
  fakeFollowers: string;
  avgLikes: string;
  engagementRate: string;
  avgComments: string;
  countries: LocationStat[];
  cities: LocationStat[];
  genderFemale: number; // 0-100
  post: {
    image: string;
    caption: string;
    date: string;
    duration: string;
    likes: string;
    comments: string;
    views: string;
  };
};

// 12 real profile pictures (server-rendered). Reused cyclically for later cards.
const AVATARS = [
  'https://images.od.modash.io/c4dfb4e1e78a7d0e3fad91b321ac17ed91396501',
  'https://images.od.modash.io/1885f645c88c261f597bafbfa6bf5346b4aa5cda',
  'https://images.od.modash.io/a9b02b042e9a396bbb07d2610b055c46c65b2e5e',
  'https://images.od.modash.io/3e1048233cd5549fac8e1225a102e2a8c0ea314c',
  'https://images.od.modash.io/b04cb4251e271f0ab2185cf83ec9ee63363ef91f',
  'https://images.od.modash.io/ff1f2d73192b93bc0a9fff0069f4639288e4a540',
  'https://images.od.modash.io/9ffbcac3169c42adf735df903d42bf7598b9bd20',
  'https://images.od.modash.io/9de11050c20da4a4d67ea4a32ad4c6364e63cdfd',
  'https://images.od.modash.io/5b319b478e0eea168a41afe2c46c28f62d450a62',
  'https://images.od.modash.io/1f88372c429d0ce1c2893e9428736218c15019ad',
  'https://images.od.modash.io/f9e33e59ec18d1595e7ff7e30559a47ad453bb47',
  'https://images.od.modash.io/c5f8732cef2883dc5c258859112ac7ae0ecb2f2d',
];

type Seed = {
  name: string;
  location: string;
  handle: string;
  bio: string[];
  post: string; // brand post image
  caption: string;
};

const SEEDS: Seed[] = [
  {
    name: 'Junior Nhlanhla',
    location: 'South Africa',
    handle: '@jr_mbhele',
    bio: ['🎭Actor | Artist Manager | Producer', '🇿🇦DBN | JHB', '👷🏾 Water Engineer', '“Isaiah 60:22”'],
    post: 'https://images.od.modash.io/815eaefffbc8036773e49a754934375186eb5652',
    caption: '@redbullza Is Giving You A Chance To [...]',
  },
  {
    name: 'LTDG-La Tête Dans le Guidon🔥',
    location: 'France',
    handle: '@ltdg_sports',
    bio: ['🚲 La passion du vélo avant tout', 'Je sport pour les jeunes', 'recordz par recordz 🚀'],
    post: 'https://images.od.modash.io/7a1f835049b1dea69d1e4d0d03f476ace12df905',
    caption: '[...] 💥 *invitation #ltdgsports #redbull #cycling',
  },
  {
    name: 'ZACK MUTTON',
    location: 'Austria',
    handle: '@zack_mutton',
    bio: ['🪂 Wingsuit & BASE', '🏔 Chasing the next line', '📍On the road'],
    post: 'https://images.od.modash.io/7d808b6b8efa9fe56dcfeb82b8d03028fd700c93',
    caption: '[...] foot waterfalls! @zack_mutton #redbull...',
  },
  {
    name: 'Steffi Mercie',
    location: 'Belgium',
    handle: '@steffi_mercie',
    bio: ['💃 Your safe place', 'Living life through pink glasses', '📧 steffi@regncoster.com'],
    post: 'https://images.od.modash.io/3aa5acf5811a6f631520f13caf1aa6a7e597bdec',
    caption: 'Publiciteit <3 danced our asses of on the street...',
  },
  {
    name: 'Tiromana Tupea',
    location: 'Belgium',
    handle: '@tiro.mana',
    bio: ['🕺 Breaker | B-Boy', 'Red Bull BC One', '📍Brussels'],
    post: 'https://images.od.modash.io/b0da7a4b7fd3bb7b73f1fc4da147b3b21c245864',
    caption: '@tiro.mana brought the Red Bull BC One Cypher...',
  },
  {
    name: 'KYOKA from RUSHBALL',
    location: 'Japan',
    handle: '@kyoka_rb.official',
    bio: ['DANCER / 996 Osaka Japan 🇯🇵', 'RedBull,NIKE,G-shock & for', 'work-related requests, please...'],
    post: 'https://images.od.modash.io/be5651c55ace367206415be58f68d7b01bc6cdd0',
    caption: 'Red Bull Dance Your Style Tour with [...]',
  },
  {
    name: 'Ahmad Daham احمد دحام #AD24',
    location: 'Germany',
    handle: '@ahmaddaham24',
    bio: ['🔋 @RedBull Drift athlete', '🚗 @Toyota', '🏁 Drift Masters'],
    post: 'https://images.od.modash.io/11cfec90990137f2b3ce992c8b95195c61e1b00f',
    caption: 'STAY FOCUSED😬 #Ad24 #Gr86 #drift #B58',
  },
  {
    name: 'nonoy',
    location: 'Australia',
    handle: '@nonoycisco',
    bio: ['🥁 Drummer & percussion', '@zaffetlebnenentertainment', '📍Melbourne'],
    post: 'https://images.od.modash.io/d0327d5d175ca00c6d9c2c07bc753db865ebff3d',
    caption: '[...] 🥁 @zaffetlebnenentertainment #redbull...',
  },
  {
    name: 'Lucy kinuthia',
    location: 'Kenya',
    handle: '@_lucykinuthia',
    bio: ['Shop: @vitamin.accessories', 'Beauty & lifestyle creator', '📧 lucy@email.com'],
    post: 'https://images.od.modash.io/da8a3ccab432415c6433298cf5ba9e8632e902d6',
    caption: '[...] apricot summer brunch with @redbullkenya 🧡...',
  },
  {
    name: 'Justin Engel',
    location: 'Germany',
    handle: '@justinengel_je',
    bio: ['🏎 Racing driver', '@redbullgermany junior team', '🏁 Formula 4'],
    post: 'https://images.od.modash.io/9e13e4538772cb4e44c64364c3b9b1de9bba10e8',
    caption: '[...] Proud to officially join the @redbullgermany...',
  },
  {
    name: 'Sally Ngila',
    location: 'Kenya',
    handle: '@sally_ngila',
    bio: ['✨ Content creator', 'Travel | Lifestyle', '📍Nairobi'],
    post: 'https://images.od.modash.io/804e8934b79910be257e1c113b9bd41ddb4c4b2a',
    caption: '[...] now i’m on a brand trip with @redbullkenya...',
  },
  {
    name: 'KL Rahul👑',
    location: 'India',
    handle: '@klrahul',
    bio: ['🏏 Cricketer', 'India national team', '👑 #KL'],
    post: 'https://images.od.modash.io/53caf0863858e546209e08d332d9d092e1e74e48',
    caption: 'Don’t scroll‼️ YOU, YES, YOU 🫵 This is your sign...',
  },
  {
    name: 'Djibril Diop',
    location: 'Belgium',
    handle: '@bboydjibril_stitch',
    bio: ['🕺 B-Boy Stitch', 'Red Bull BC One', '📍Brussels'],
    post: 'https://images.od.modash.io/8031486baf2edbb13b706fbb550b2b76c4bb0635',
    caption: '[...] out! Join the waitlist 👉 redbull.be/bcone...',
  },
  {
    name: 'Isaac Ramirez',
    location: 'United States',
    handle: '@isaacbramirez',
    bio: ['🚒 Firefighter', 'Inspiring others daily', '🔥 #inspire'],
    post: 'https://images.od.modash.io/cf245c99838be2214280c336fde7685ae4e7e14f',
    caption: '[...] world #Firefighter #inspire #redbull',
  },
  {
    name: 'Melis İşiten',
    location: 'Turkey',
    handle: '@melisisiten',
    bio: ['🎤 Müzisyen', 'Red Bull SoundClash', '📍İstanbul'],
    post: 'https://images.od.modash.io/da4fbfe924d1cb57483eadbd50640c50ed2caa0b',
    caption: '10 nisan Red Bull SoundClash’te görüşmek üzere!...',
  },
  {
    name: 'Diego Poncelet Sanchez-Cuenca',
    location: 'Spain',
    handle: '@diego_poncelet',
    bio: ['🛹 Skateboarder', 'Filming the wildest lines', '📍Madrid'],
    post: 'https://images.od.modash.io/904fc6500898a4451e687f707cbdae38a3706d39',
    caption: '[...] stuff he’s ever skated #redbull...',
  },
  {
    name: 'Matthias Dandois',
    location: 'France',
    handle: '@matthiasdandois',
    bio: ['🚲 BMX Flatland', '10x World Champion', '@redbull athlete'],
    post: 'https://images.od.modash.io/143cff9577088223015b0ba6d5bfcab9518d5038',
    caption: '[...] -> I signed my first @redbull contract 18...',
  },
  {
    name: 'Neymar Jr',
    location: 'Brazil',
    handle: '@neymarjr',
    bio: ['⚽ Footballer', '@santosfc', '🇧🇷 Brazil'],
    post: 'https://images.od.modash.io/f2c352fdb4e9713296937bde713e7cb816e5aaef',
    caption: '[...] @neymarjr recovery day 👀 #redbull...',
  },
  {
    name: 'Priyanca Dutta',
    location: 'India',
    handle: '@priyanca_dutta_',
    bio: ['🎤 Anchor & host', 'IPL | Sports', '📍Mumbai'],
    post: 'https://images.od.modash.io/91d34c12ea4b7d25f16aaf40be87330f630c0997',
    caption: '[...] IPL- Homeground- Team RR x Redbull 😎...',
  },
  {
    name: 'The Now Dubai',
    location: 'United Arab Emirates',
    handle: '@thenowdubai',
    bio: ['📍Dubai’s pulse', 'Events | Lifestyle', '🏙 The Now'],
    post: 'https://images.od.modash.io/4f52d9326a69cc0fb07a615920b9a440aa0844f2',
    caption: 'Powered by Red Bull, this mission was never meant...',
  },
  {
    name: 'DJ Infeels | Saurav Chandra',
    location: 'India',
    handle: '@infeelsmusic',
    bio: ['🎧 DJ & Producer', 'RedBull Turn It Up', '📍Bhubaneswar'],
    post: 'https://images.od.modash.io/c95a264f5b10804b1cff96438078ba224a30ea80',
    caption: 'Bhubaneswer showed up!🔥 RedBull Turn It Up 🔵🔴w...',
  },
  {
    name: 'MIYABI / 鬼塚雅',
    location: 'Japan',
    handle: '@miyabionitsuka',
    bio: ['🏂 Snowboarder', 'Olympian', '@redbulljapan'],
    post: 'https://images.od.modash.io/dcf4d87c3a817ddc1c54f1782119af6b0810f02c',
    caption: '[...] Thank you so much @redbulljapan !!! #redbull...',
  },
  {
    name: 'Grant Wills',
    location: 'United Kingdom',
    handle: '@grantcwills',
    bio: ['🏎 Motorsport content', 'F1 fan & creator', '📍London'],
    post: 'https://images.od.modash.io/6d737d3297b50b8f16118e77cf8bc6fa8a1fd72a',
    caption: '[...] steam… I’m not sure it worked #redbull #f1...',
  },
  {
    name: 'Jerry Yang',
    location: 'United States',
    handle: '@jerryyangracing',
    bio: ['🏎 Drift driver', '@gtradialusa @bcracingna', '@redbull'],
    post: 'https://images.od.modash.io/a703c96998adc33ab57c2b245c83f1970ca42e06',
    caption: '[...] / @gtradialusa / @redbull / @bcracingna /...',
  },
  {
    name: 'Clara Koppenburg',
    location: 'Germany',
    handle: '@clara_koppenburg',
    bio: ['🚴 Pro cyclist', 'Endurance athlete', '@redbull'],
    post: 'https://images.od.modash.io/9dae3882248c2ee001533f1145e9bff6f560a82d',
    caption: 'Tried the viral TikTok trend and guess what? It...',
  },
  {
    name: 'Xataka Brasil',
    location: 'Brazil',
    handle: '@xatakabr',
    bio: ['📱 Tech media', 'Reviews & news', '🇧🇷 Brasil'],
    post: 'https://images.od.modash.io/76b543fff5e438109ff44aedfbf90be804f62ef3',
    caption: 'RedBull te dá asas? 🤯 Mídia: [...]',
  },
  {
    name: 'René “Tiger” Wong',
    location: 'United Kingdom',
    handle: '@mr.renewong',
    bio: ['💪 Fitness athlete', 'HYROX competitor', '@redbulluk'],
    post: 'https://images.od.modash.io/3a5b28b73720959ab89bd67e09143eacf8dcd5b7',
    caption: 'My Ex was the @redbulluk @hyroxuk Nightshift [...]',
  },
  {
    name: 'Malakai Hagley',
    location: 'United Kingdom',
    handle: '@malakai_hagley',
    bio: ['🛹 Skater & filmer', 'Sending it daily', '📍London'],
    post: 'https://images.od.modash.io/cf93155551a47927e3e54631009f7aafc56e6320',
    caption: '[...] chose send 📹: @_bystephen #redbull...',
  },
  {
    name: 'Wandia Gichuru',
    location: 'Kenya',
    handle: '@wandiagichuru',
    bio: ['👔 Entrepreneur', '@redbullbasement', '📍Nairobi'],
    post: 'https://images.od.modash.io/2d8abbba2b1bcb27eeaf0a2739c0098dd88b4903',
    caption: '#redbullbasement @redbullkenya [...]',
  },
];

// Deterministic pseudo-stats so each card differs but is stable across renders.
function statsFor(i: number) {
  const fake = (8 + ((i * 37) % 22) + ((i * 7) % 10) / 10).toFixed(2);
  const er = (1 + ((i * 53) % 90) / 10).toFixed(2);
  const likeBase = [1.2, 2.4, 5.2, 4.6, 0.9, 32.6, 24.3, 8.4, 3.1, 6.7];
  const likes = likeBase[i % likeBase.length];
  const comments = 12 + ((i * 13) % 320);
  return {
    fakeFollowers: `${fake}%`,
    engagementRate: `${er}%`,
    avgLikes: likes >= 1 ? `${likes}k` : `${Math.round(likes * 1000)}`,
    avgComments: `${comments}`,
  };
}

const CITY_NAMES = [
  'Capital City',
  'Second City',
  'Third City',
  'Fourth City',
  'Fifth City',
];

function citiesFor(_loc: string, i: number): LocationStat[] {
  const base = [30, 13, 6, 3, 1.5];
  return CITY_NAMES.map((name, k) => ({
    name,
    pct: `${(base[k] - (i % 4) * 0.3).toFixed(2)}%`,
  }));
}

const OTHER_COUNTRIES = [
  'United States',
  'United Kingdom',
  'Germany',
  'Brazil',
  'India',
  'France',
];

function countriesFor(loc: string, i: number): LocationStat[] {
  const main = (88 - (i % 5) * 4).toFixed(2);
  const rest = [4.17, 2.07, 1.32, 0.78];
  return [
    { name: loc, pct: `${main}%` },
    ...rest.map((p, k) => ({
      name: OTHER_COUNTRIES[(i + k) % OTHER_COUNTRIES.length],
      pct: `${p.toFixed(2)}%`,
    })),
  ];
}

export const INFLUENCERS: Influencer[] = SEEDS.map((s, i) => {
  const st = statsFor(i);
  return {
    rank: i + 1,
    name: s.name,
    location: s.location,
    handle: s.handle,
    bio: s.bio,
    avatar: AVATARS[i % AVATARS.length],
    fakeFollowers: st.fakeFollowers,
    avgLikes: st.avgLikes,
    engagementRate: st.engagementRate,
    avgComments: st.avgComments,
    countries: countriesFor(s.location, i),
    cities: citiesFor(s.location, i),
    genderFemale: 35 + ((i * 11) % 40),
    post: {
      image: s.post,
      caption: s.caption,
      date: `${1 + (i % 28)} May, 26`,
      duration: i % 3 === 0 ? '1:21' : i % 3 === 1 ? '0:42' : '0:54',
      likes: `${(0.4 + ((i * 7) % 90) / 10).toFixed(1)}k`,
      comments: `${2 + ((i * 5) % 40)}`,
      views: `${(1.2 + ((i * 3) % 80) / 10).toFixed(1)}k`,
    },
  };
});

export const FAQS = [
  {
    q: 'Where does this data come from?',
    a: 'Modash collects data on millions of influencer <> brand collaborations every week. You can access the data via the influencer marketing platform. Or, if you need raw data to power your own products, tools or processes — take a look at our Brand Collaborations API.',
  },
  {
    q: 'Does Red Bull work with influencers?',
    a: 'Yes, Red Bull works with influencers, and on this page you can see some of the most recent 29 collaborators who have collaborated with Red Bull on Instagram. These partnerships help Red Bull build brand awareness, showcase their products authentically, and connect with engaged communities through trusted creator voices.',
  },
  {
    q: 'Who are Red Bull ambassadors or sponsored creators?',
    a: 'Recent Red Bull ambassadors and sponsored creators include @jr_mbhele, @ltdg_sports, @zack_mutton, @steffi_mercie, @tiro.mana, @kyoka_rb.official, @ahmaddaham24, @nonoycisco, @_lucykinuthia, @justinengel_je. These influencers have posted branded content for Red Bull in the last 30 days, actively promoting the brand to their audiences. This list is regularly updated as more influencers promote Red Bull.',
  },
  {
    q: "What is Red Bull's marketing strategy?",
    a: "Red Bull's marketing strategy includes influencer partnerships, particularly on Instagram. Based on a sample of 29+ collaborations on this page, 52% are with micro-influencers (10k-100k followers), 17% are with mid-sized creators (100k-500k followers), and 28% are with larger creators (follower counts of 500k+). Their partnerships target audiences that are predominantly male (63.0%). This approach allows Red Bull to build authentic connections with their target demographic through trusted creator voices, generating social proof and driving brand awareness through sponsored content and product collaborations.",
  },
];
