// Kolio KOL library — crypto KOLs who have run sponsored campaigns with a web3 brand.
// Profiles, stats and posts are illustrative sample data for the demo platform.

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

// Neutral generated avatars (DiceBear) — no brand-owned imagery.
const AVATAR_SEEDS = [
  'aurora', 'satoshi', 'merkle', 'orbit', 'nova', 'cipher',
  'delta', 'vega', 'ledger', 'photon', 'quanta', 'zenith',
];
const AVATARS = AVATAR_SEEDS.map(
  (s) => `https://api.dicebear.com/7.x/shapes/svg?seed=${s}&backgroundType=gradientLinear`,
);

// Neutral generated post thumbnails — abstract, brand-free.
function postThumb(seed: string) {
  return `https://api.dicebear.com/7.x/glass/svg?seed=${seed}`;
}

type Seed = {
  name: string;
  location: string;
  handle: string;
  bio: string[];
  caption: string;
};

const SEEDS: Seed[] = [
  {
    name: 'Daniel Cheung',
    location: 'Singapore',
    handle: '@danielcheung_eth',
    bio: ['📈 DeFi & macro analyst', 'Yield strategies, on-chain data', 'Threads, not noise'],
    caption: 'Why @okx perps liquidity is quietly best-in-class — a thread 🧵',
  },
  {
    name: 'Layla Ait',
    location: 'United Arab Emirates',
    handle: '@layla_onchain',
    bio: ['🔗 L2 builder & educator', 'Rollups, ZK, account abstraction', '📍Dubai'],
    caption: 'Bridged to the new L2 in 8 seconds for $0.002. Sponsored deep-dive 👇',
  },
  {
    name: 'Marco Felder',
    location: 'Germany',
    handle: '@marco_defidegen',
    bio: ['⚡ Trading & risk', 'Funding rates > vibes', '@okx affiliate'],
    caption: 'Spot vs. perps fees compared across 5 venues — @okx came out cheapest.',
  },
  {
    name: 'Priya Nandan',
    location: 'India',
    handle: '@priya_web3',
    bio: ['🪙 Onboarding the next billion', 'Self-custody, simply explained', '📍Bengaluru'],
    caption: 'Set up a self-custody wallet with my mum in 4 minutes. Here is how.',
  },
  {
    name: 'Kojo Mensah',
    location: 'Ghana',
    handle: '@kojo_stables',
    bio: ['💵 Stablecoin payments', 'Cross-border remittance', 'Accra → Lagos → London'],
    caption: 'Stablecoins are eating remittance in West Africa. Real numbers inside.',
  },
  {
    name: 'Hana Sato',
    location: 'Japan',
    handle: '@hana_nftjp',
    bio: ['🎨 NFT & culture', 'Generative art collector', '📍Tokyo'],
    caption: 'Minting day. Walking through the mechanics live with @okx 🔵',
  },
  {
    name: 'Lucas Almeida',
    location: 'Brazil',
    handle: '@lucas_chain',
    bio: ['🛠 Smart-contract auditor', 'Solidity, fuzzing, MEV', '@okx campaign'],
    caption: 'Audited the contract before I shilled it. Here is what I found.',
  },
  {
    name: 'Sofia Rossi',
    location: 'Italy',
    handle: '@sofia_gamingfi',
    bio: ['🎮 GameFi & metaverse', 'On-chain games that are actually fun', '📍Milan'],
    caption: 'This on-chain game has 40k DAU and you have never heard of it.',
  },
  {
    name: 'Ahmed Saleh',
    location: 'Egypt',
    handle: '@ahmed_arabcrypto',
    bio: ['🗣 Arabic crypto education', 'No financial advice, just clarity', '📍Cairo'],
    caption: 'شرح كامل عن منصة @okx للمبتدئين — thread in Arabic 🧵',
  },
  {
    name: 'Emily Zhang',
    location: 'United States',
    handle: '@emily_defresearch',
    bio: ['🔬 Protocol research', 'Tokenomics teardowns', 'SF / NYC'],
    caption: 'Tokenomics teardown: emissions, sinks, and why this one survives.',
  },
  {
    name: 'Tomas Novak',
    location: 'Czechia',
    handle: '@tomas_l1',
    bio: ['🌐 L1 maximalist (multi-chain)', 'Consensus nerd', '📍Prague'],
    caption: 'Benchmarked finality across 6 L1s this week. Surprising winner.',
  },
  {
    name: 'Zara Okafor',
    location: 'Nigeria',
    handle: '@zara_onramp',
    bio: ['🚪 Fiat on-ramps', 'P2P & local rails', '📍Lagos'],
    caption: 'On-ramping in Naira without the spread — sponsored walkthrough.',
  },
  {
    name: 'Wei Chen',
    location: 'Taiwan',
    handle: '@wei_perps',
    bio: ['📊 Derivatives trader', 'Funding, basis, vol', '@okx affiliate'],
    caption: 'Basis trade setup I ran live on @okx — full breakdown.',
  },
  {
    name: 'Olivia Brooks',
    location: 'United Kingdom',
    handle: '@olivia_regulation',
    bio: ['⚖️ Crypto policy', 'MiCA, custody, compliance', '📍London'],
    caption: 'What MiCA actually means for your exchange. Plain English thread.',
  },
  {
    name: 'Diego Herrera',
    location: 'Spain',
    handle: '@diego_zk',
    bio: ['🔐 ZK & privacy', 'Proofs, circuits, rollups', '📍Madrid'],
    caption: 'ZK proofs explained without the math (mostly). 🧵',
  },
  {
    name: 'Maya Cohen',
    location: 'Israel',
    handle: '@maya_security',
    bio: ['🛡 Wallet security', 'Phishing & drainers', 'Stay safe out there'],
    caption: 'The 3 approvals you should revoke right now. Sponsored safety thread.',
  },
  {
    name: 'Nikolai Petrov',
    location: 'Kazakhstan',
    handle: '@nik_mining',
    bio: ['⛏ Mining & infra', 'Hashrate, energy, nodes', '📍Almaty'],
    caption: 'Toured a mining farm running on stranded gas. Wild numbers.',
  },
  {
    name: 'Grace Lim',
    location: 'Malaysia',
    handle: '@grace_yieldfarm',
    bio: ['🌾 Yield strategist', 'Real yield > ponzinomics', '📍Kuala Lumpur'],
    caption: 'Real yield, not emissions — where it actually comes from. 🧵',
  },
  {
    name: 'Felix Brandt',
    location: 'Switzerland',
    handle: '@felix_rwa',
    bio: ['🏦 RWA & tokenization', 'T-bills on-chain', '📍Zug'],
    caption: 'Tokenized treasuries hit $2B. Here is who is actually using them.',
  },
  {
    name: 'Amara Diallo',
    location: 'Senegal',
    handle: '@amara_francophone',
    bio: ['🗼 Francophone crypto', 'Éducation web3 en français', '📍Dakar'],
    caption: 'Guide complet pour débuter sur @okx — thread en français 🧵',
  },
  {
    name: 'Ryan Mitchell',
    location: 'Canada',
    handle: '@ryan_charts',
    bio: ['📉 TA & market structure', 'Liquidity > indicators', '📍Toronto'],
    caption: 'Liquidity map for this cycle. Where the bids actually are.',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Japan',
    handle: '@yuki_daoops',
    bio: ['🏛 DAO operations', 'Governance, treasuries, votes', '📍Osaka'],
    caption: 'How a $40M DAO treasury actually gets managed. Transparency thread.',
  },
  {
    name: 'Sara Lindqvist',
    location: 'Sweden',
    handle: '@sara_buidl',
    bio: ['👩‍💻 Dev relations', 'Hackathons & SDKs', '📍Stockholm'],
    caption: 'Shipped a dApp on the testnet in one sitting. Dev experience review.',
  },
  {
    name: 'Carlos Vega',
    location: 'Mexico',
    handle: '@carlos_latam',
    bio: ['🌎 LATAM markets', 'Adoption on the ground', '📍CDMX'],
    caption: 'Crypto adoption in LATAM is a payments story, not a trading one.',
  },
  {
    name: 'Aisha Rahman',
    location: 'Pakistan',
    handle: '@aisha_onchainfx',
    bio: ['💱 Cross-border FX', 'Stablecoin corridors', '📍Karachi'],
    caption: 'Moved value across 3 countries in minutes. Sponsored corridor demo.',
  },
  {
    name: 'Tech Onchain BR',
    location: 'Brazil',
    handle: '@techonchainbr',
    bio: ['📱 Crypto media', 'Reviews & breaking news', '🇧🇷 Brasil'],
    caption: 'Review completo da @okx em 2026 — taxas, segurança, UX. 🧵',
  },
  {
    name: 'Noah Williams',
    location: 'Australia',
    handle: '@noah_apac',
    bio: ['🌏 APAC trading', 'Sessions, flows, basis', '@okx affiliate'],
    caption: 'How APAC session flow front-runs the US open. Data thread.',
  },
  {
    name: 'Lena Hofmann',
    location: 'Austria',
    handle: '@lena_stables',
    bio: ['💶 Euro stablecoins', 'On/off ramps in EU', '📍Vienna'],
    caption: 'Euro stablecoins compared: yield, backing, redemption. 🧵',
  },
  {
    name: 'Kwame Boateng',
    location: 'Ghana',
    handle: '@kwame_web3edu',
    bio: ['🎓 Web3 educator', 'Cohorts & workshops', '📍Kumasi'],
    caption: 'Ran a 200-person onboarding workshop with @okx. The recap 👇',
  },
];

// Deterministic pseudo-stats so each card differs but is stable across renders.
function statsFor(i: number) {
  const fake = (1 + ((i * 17) % 9) + ((i * 7) % 10) / 10).toFixed(2);
  const er = (2 + ((i * 53) % 70) / 10).toFixed(2);
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
  'Singapore',
];

function countriesFor(loc: string, i: number): LocationStat[] {
  const main = (62 - (i % 5) * 4).toFixed(2);
  const rest = [9.17, 6.07, 4.32, 2.78];
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
    genderFemale: 18 + ((i * 11) % 30),
    post: {
      image: postThumb(s.handle),
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
    q: 'Where does this KOL data come from?',
    a: 'Kolio continuously indexes sponsored crypto content across X, YouTube, TikTok and Telegram, then matches it to the brands and protocols behind each campaign. Every KOL is vetted on proof-based signals — real reach, audience quality and on-chain campaign history — not vanity metrics. Access the full dataset inside the Kolio platform, or pull it programmatically via the Kolio Campaigns API.',
  },
  {
    q: 'Does OKX work with crypto KOLs?',
    a: 'Yes. On this page you can see recent crypto KOLs who have published sponsored content for OKX across X and other channels. These partnerships help exchanges and protocols reach engaged, on-chain audiences through trusted, vetted voices — with attribution that ties posts back to real sign-ups, deposits and trading activity rather than guesswork.',
  },
  {
    q: 'Who are recent OKX KOL partners or affiliates?',
    a: 'Recent OKX KOL partners and affiliates include @danielcheung_eth, @layla_onchain, @marco_defidegen, @priya_web3, @hana_nftjp, @lucas_chain, @ahmed_arabcrypto, @wei_perps, @noah_apac and @kwame_web3edu. Each has published vetted, attributable campaign content in the last 30 days, spanning DeFi, derivatives, on-ramps, L2s and regional education. The list updates as new campaigns go live on Kolio.',
  },
  {
    q: 'What does a strong web3 KOL marketing strategy look like?',
    a: 'Across the campaigns indexed on this page, the strongest exchange and protocol programs lean on vetted micro and mid-tier KOLs over a single mega-account: roughly 48% of collaborations are with niche micro-KOLs (10k–100k followers), 24% with mid-tier creators (100k–500k), and 28% with larger accounts (500k+). The pattern that wins is proof-based selection, on-chain payments and escrow, and attribution that connects each post to real deposits and trades — exactly the rigor Kolio brings from mature web2 creator marketing into crypto.',
  },
];
