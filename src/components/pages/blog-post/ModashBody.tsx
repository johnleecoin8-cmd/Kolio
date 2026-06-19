/**
 * Modash (#1) deep-dive body — the long feature walkthrough that sits between
 * "What is Modash?" and "Modash strengths". Mirrors the ground-truth rich-text:
 * sub-sections (recruitment / relationships / payments / tracking), the
 * influencer-vs-audience filters table, bullet lists, and the 7 product-UI
 * screenshots Modash embeds inline.
 */

const P = 'mt-4 text-body leading-relaxed text-foreground/80';
const H = 'mt-10 text-[1.5rem] font-bold leading-tight text-foreground';
const UL = 'mt-4 space-y-2.5 pl-5 text-body leading-relaxed text-foreground/80';

/** Inline product-UI screenshot, framed like the rendered figures. */
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mt-6 w-full rounded-lg border border-black/5"
    />
  );
}

/** Underlined inline link, matching modash blog body links. */
function L({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2">
      {children}
    </a>
  );
}

const IMG = {
  recruitment:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9fd32808f7cbfdd413_691d0d46c07c4a57715e39e4_68c290459d62d8d83a8a3bf3_8e5dbc9d.png',
  aiSearch:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9fd32808f7cbfdd401_691d0d48c07c4a57715e3a01_68c2913e515c112ce7fb762b_a3f48572.png',
  analytics:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9dd32808f7cbfdd3c8_691d0d48c07c4a57715e39fe_68c2915403d4d6a1c3439acb_95e58db2.png',
  inbox:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9dd32808f7cbfdd3d1_691d0d48c07c4a57715e39f8_68c29176c2bf97e4e34f6353_447f5c5f.png',
  relationships:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9fd32808f7cbfdd3f5_691d0d48c07c4a57715e3a16_68c291b56de9bb023a7e8e6c_177e2225.png',
  payments:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9fd32808f7cbfdd3e6_691d0d46c07c4a57715e39db_68c291d937cb19e3822de5ec_91eb38a4.png',
  tracking:
    'https://cdn.prod.website-files.com/5f59e07fe9136eb4299c5719/69b41b9fd32808f7cbfdd417_691d0d48c07c4a57715e3a19_68c295105a509200aca15a42_1a482d39.png',
};

const FILTERS: [string, string][] = [
  ['Locations & languages', 'Locations (city/country)'],
  ['Engagement rate', 'Demographics (age/gender)'],
  ['Bio keywords & hashtags', 'Fake followers'],
  ['Hashtags used', 'Languages'],
  ['Growth rate', 'Interests'],
];

export default function ModashBody() {
  return (
    <div>
      {/* Influencer recruitment */}
      <h3 className={H}>Influencer recruitment</h3>
      <p className={P}>
        With over 350 million creator profiles, the Modash database is comfortably the
        largest of any platform on this list. We do this by cataloging every influencer on
        Earth with 1,000+ followers on one (or more) of the three most important influencer
        marketing networks – Instagram, TikTok, and YouTube.
      </p>
      <p className={P}>
        Modash’s large database also helps brands find small, untapped influencers. In the
        age of “de-influencing,” reaching niche audiences is more important than ever.
        That’s why we list people who don’t even identify as influencers, and who you’d
        never be able to find manually.
      </p>
      <Shot src={IMG.recruitment} alt="Modash influencer discovery filters and results" />

      <p className={P}>
        Of course, a huge database is useless without effective filtering tools to help you
        identify exactly the right influencer(s) for your next campaign. That’s why we offer
        targeted influencer and audience filters, including:
      </p>

      {/* Influencer / Audience filters table */}
      <div className="mt-5 overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="w-1/2 border-b border-r border-gray-200 px-4 py-3 font-semibold text-foreground">
                Influencer filters
              </th>
              <th className="w-1/2 border-b border-gray-200 px-4 py-3 font-semibold text-foreground">
                Audience filters
              </th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            {FILTERS.map(([a, b], i) => (
              <tr key={a}>
                <td
                  className={`border-r border-gray-200 px-4 py-3 ${
                    i < FILTERS.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {a}
                </td>
                <td
                  className={`px-4 py-3 ${i < FILTERS.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  {b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={P}>
        Use our audience demographics to track down influencers who are talking to the
        people you want to reach. So if you’re a women’s fashion brand, you’ll never waste
        time courting an <L>Instagram fitness influencer</L> who ends up having an 80% male
        audience.
      </p>
      <p className={P}>
        Alternatively – or as well as – narrowing your influencer search with filters, you
        can use our <L>AI influencer search tool</L> to track down brand-fit influencers
        based on natural language queries (like “woman applying lipstick”).
      </p>
      <Shot src={IMG.aiSearch} alt="Modash AI influencer search results" />

      <p className={P}>
        Once you’ve found an influencer with the right audience for your brand, how do you
        know they also have high engagement and views?
      </p>
      <p className={P}>
        Modash gives you that peace of mind by letting you dig into a wealth of{' '}
        <L>influencer analytics</L> – like engagement rate, average views, fake followers,
        and previous brand collabs – before reaching out.
      </p>
      <Shot src={IMG.analytics} alt="Modash influencer engagement analytics" />

      <p className={P}>
        And the best thing is, you can access it all without having to ask influencers to
        share it with you.
      </p>
      <p className={P}>
        Modash also handles all the heavy lifting of influencer outreach. We built a{' '}
        <L>better inbox for influencer marketing</L> that integrates with your existing
        Gmail or Outlook inbox, giving you instant access to key information about each
        influencer – like related profiles, shared documents, and previous campaigns –
        while you write your outreach emails.
      </p>
      <Shot src={IMG.inbox} alt="Modash influencer outreach inbox" />

      <p className={P}>With Modash, you can:</p>
      <ul className={UL}>
        <li className="list-disc">Email influencers directly from your Lists.</li>
        <li className="list-disc">
          See which Instagram, TikTok, and YouTube channels are associated with an
          influencer’s email address.
        </li>
        <li className="list-disc">
          Find personalized information about each influencer (like their birthday, star
          sign, or anything else you care to note) to help you craft specific hooks for
          outreach messages.
        </li>
        <li className="list-disc">
          Streamline your inbox by hiding threads not associated with an influencer.
        </li>
        <li className="list-disc">
          Remind your influencer partners to disclose their posts, share performance
          updates during campaigns, and react to live content.
        </li>
      </ul>
      <p className={P}>
        That means you get to write more engaging emails while spending less time in your
        inbox.
      </p>
      <p className={P}>
        You can even <L>set up automated email sequences in Modash</L>, ensuring you never
        miss a follow-up and freeing you from the drudgery of constant, manual emailing.
      </p>

      {/* Relationship management */}
      <h3 className={H}>Relationship management</h3>
      <p className={P}>
        Wave goodbye to <L>managing influencer relationships</L> through an endless tangle
        of spreadsheets and email threads 👋
      </p>
      <p className={P}>
        Modash lets you create unlimited lists to efficiently organize your influencer
        relationships.
      </p>
      <Shot src={IMG.relationships} alt="Modash influencer relationship management lists" />
      <p className={P}>You can:</p>
      <ul className={UL}>
        <li className="list-disc">Save influencers who match your search criteria to lists.</li>
        <li className="list-disc">
          Unlock contact details, send emails, and attach relevant documents.
        </li>
        <li className="list-disc">Add notes to share comments and details with your team.</li>
        <li className="list-disc">
          Create custom tags to track down influencers on your lists with specific
          metrics/audiences.
        </li>
        <li className="list-disc">
          Assign a status to every influencer on your lists (like Outreached, Hired, or
          Rejected).
        </li>
      </ul>

      {/* Influencer payments */}
      <h3 className={H}>Influencer payments</h3>
      <p className={P}>
        If you’re working with more than a handful of influencers, managing payments can
        quickly spiral out of control.
      </p>
      <p className={P}>
        POV: Your finance team is drowning under a pile of outstanding invoices; you’re
        wasting valuable time chasing up late payments and asking for corrections; and your
        influencer partners are growing increasingly annoyed. Basically, everyone’s unhappy.
      </p>
      <p className={P}>
        Until <L>Modash Payments</L> makes the whole process a lot less painful.
      </p>
      <Shot src={IMG.payments} alt="Modash influencer payments dashboard" />
      <p className={P}>
        Just create a transaction telling us who you want to pay, how much you want to pay
        them, and what deliverables you’re paying for. Then share a personalized link with
        your influencer partner and leave us to handle everything else, including:
      </p>
      <ul className={UL}>
        <li className="list-disc">Influencer onboarding</li>
        <li className="list-disc">Invoice management</li>
        <li className="list-disc">Invoice approval</li>
        <li className="list-disc">Influencer support</li>
        <li className="list-disc">Individual payouts</li>
        <li className="list-disc">Tax compliance</li>
      </ul>
      <p className={P}>Suddenly, your influencer payments are a whole lot simpler 🥳</p>

      {/* Campaign tracking */}
      <h3 className={H}>Campaign tracking</h3>
      <p className={P}>
        Manually <L>tracking live influencer content</L> is totally unscalable. Whereas with
        Modash, it’s effortless.
      </p>
      <Shot src={IMG.tracking} alt="Modash influencer campaign content tracking grid" />
      <p className={P}>With Modash, you…</p>
      <ul className={UL}>
        <li className="list-disc">
          Get an auto-updating dashboard for your metrics – so there’s no need to update
          metrics like views and clicks in a spreadsheet
        </li>
        <li className="list-disc">
          Can auto-collect the actual influencer content, saving you from having to note the
          live link URL in a spreadsheet and solving the problem of Stories disappearing
          before you capture them
        </li>
      </ul>
      <p className={P}>
        Which means no more worrying about under-reporting a campaign’s reach or
        performance.
      </p>
    </div>
  );
}
