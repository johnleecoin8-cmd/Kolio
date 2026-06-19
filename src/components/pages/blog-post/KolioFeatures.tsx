/**
 * Kolio (#1) deep-dive body — the long feature walkthrough that sits between
 * "What is Kolio?" and "Kolio strengths". Covers the four pillars of running a
 * web3 KOL campaign: discovery & proof-based vetting, relationship management,
 * on-chain payments & escrow, and on-chain attribution.
 *
 * Brand-neutral, div-built "figure" callouts (no external imagery) keep the page
 * clean and on-brand.
 */

const P = 'mt-4 text-body leading-relaxed text-foreground/80';
const H = 'mt-10 text-[1.5rem] font-bold leading-tight text-foreground';
const UL = 'mt-4 space-y-2.5 pl-5 text-body leading-relaxed text-foreground/80';

/** Brand-neutral figure callout — a labeled product-mockup stand-in, built with divs. */
function Figure({ label, caption }: { label: string; caption: string }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-lg border border-black/5 bg-background-soft">
      <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 text-eyebrow font-semibold uppercase tracking-wide text-foreground/45">
          {label}
        </span>
      </div>
      <figcaption className="px-4 py-6 text-body-sm leading-relaxed text-foreground/65">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Underlined inline link. */
function L({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2"
    >
      {children}
    </a>
  );
}

const FILTERS: [string, string][] = [
  ['Crypto niche (DeFi, L1/L2, NFTs, trading, gaming)', 'Holder & wallet overlap'],
  ['Real reach & engagement rate', 'Audience geography & language'],
  ['Bio keywords & cashtags', 'Bot / bought-follower share'],
  ['Channels (X, YouTube, TikTok, Telegram)', 'Audience interests'],
  ['Growth rate', 'Prior brand & token collabs'],
];

export default function KolioFeatures() {
  return (
    <div>
      {/* Discovery & proof-based vetting */}
      <h3 className={H}>KOL discovery &amp; proof-based vetting</h3>
      <p className={P}>
        Kolio indexes crypto KOLs across the four channels that move web3 audiences — X,
        YouTube, TikTok, and Telegram — and organizes them by the niches you actually buy
        against: DeFi, L1/L2, NFTs, trading, and gaming. Instead of chasing the loudest
        accounts, you can surface the right voices for your launch in minutes.
      </p>
      <p className={P}>
        The hard part in crypto has never been finding accounts with big numbers — it's
        knowing which numbers are real. That's why every Kolio profile is{' '}
        <L>proof-based</L>: real reach, audience quality, bot share, and on-chain audience
        signals, not vanity follower counts or staged engagement. You stop paying for
        engagement pods and start paying for genuine attention.
      </p>
      <Figure
        label="KOL discovery"
        caption="Filter the crypto KOL universe by niche, channel, and real reach — then sort by audience quality, not follower count."
      />

      <p className={P}>
        A large index is useless without precise filtering. Kolio lets you narrow by both
        KOL-side and audience-side signals, including:
      </p>

      {/* KOL / Audience filters table */}
      <div className="mt-5 overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="w-1/2 border-b border-r border-gray-200 px-4 py-3 font-semibold text-foreground">
                KOL filters
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
        Use audience signals to confirm a KOL actually talks to the people you want. If
        you're a DeFi protocol, you'll never waste a budget on a{' '}
        <L>large X account</L> whose audience is bots, airdrop hunters, and a different
        chain's community.
      </p>
      <p className={P}>
        Prefer to describe what you want in plain language? Kolio's{' '}
        <L>natural-language KOL search</L> turns a query like "L2 thread writers with a
        real DeFi-native audience" into a ranked shortlist.
      </p>
      <Figure
        label="Proof-based vetting"
        caption="Inspect real reach, engagement, bot share, and prior token collabs before you ever reach out — no need to ask the KOL for a screenshot."
      />

      <p className={P}>
        Once you've found a KOL with the right audience, how do you know they actually pull
        the views and engagement they claim?
      </p>
      <p className={P}>
        Kolio gives you that confidence by surfacing{' '}
        <L>verified KOL analytics</L> — engagement rate, average views, audience quality,
        bot share, and previous token collaborations — all before you send a single DM. And
        you see it without having to ask the KOL to share anything.
      </p>

      {/* Outreach & relationship management */}
      <h3 className={H}>Outreach &amp; relationship management</h3>
      <p className={P}>
        Wave goodbye to <L>managing KOL relationships</L> through a tangle of Telegram DMs,
        Notion docs, and group chats 👋
      </p>
      <p className={P}>
        Kolio lets you build unlimited lists to organize the KOLs you're tracking, with
        every conversation and document in one place.
      </p>
      <Figure
        label="Lists & outreach"
        caption="Save shortlisted KOLs to lists, reach out, attach briefs, and assign a status to each one — all from a single workspace."
      />
      <p className={P}>You can:</p>
      <ul className={UL}>
        <li className="list-disc">Save KOLs who match your search criteria to lists.</li>
        <li className="list-disc">
          See which X, YouTube, TikTok, and Telegram channels belong to the same KOL.
        </li>
        <li className="list-disc">
          Add notes to share context and history with your team.
        </li>
        <li className="list-disc">
          Tag KOLs by niche, chain, or audience so you can find the right voices fast.
        </li>
        <li className="list-disc">
          Assign a status to every KOL on your lists (like Outreached, Booked, or Passed).
        </li>
      </ul>
      <p className={P}>
        You can even <L>set up automated follow-up sequences</L>, so a promising KOL never
        slips through the cracks while you're heads-down on a launch.
      </p>

      {/* On-chain payments & escrow */}
      <h3 className={H}>On-chain payments &amp; escrow</h3>
      <p className={P}>
        Paying KOLs is where most web3 campaigns get awkward. Pay up front and you're
        trusting a stranger to deliver. Pay on delivery and they're trusting you to pay.
        Either way, someone's exposed.
      </p>
      <p className={P}>
        <L>Kolio Escrow</L> removes the guesswork. You fund a deal on-chain; the KOL agrees
        to deliverables; and funds release automatically when delivery is verified. No
        invoices, no chasing, no "gm, any update on payment?" — just a clean settlement both
        sides can trust.
      </p>
      <Figure
        label="On-chain escrow"
        caption="Fund a deal, lock it in escrow, and release on verified delivery. Disputes have a clear, on-chain paper trail."
      />
      <p className={P}>
        Create a deal — who you're paying, how much, and for which deliverables — share the
        link, and Kolio handles the rest, including:
      </p>
      <ul className={UL}>
        <li className="list-disc">KOL onboarding and wallet setup</li>
        <li className="list-disc">Escrow funding and release on verified delivery</li>
        <li className="list-disc">Milestone and deliverable approval</li>
        <li className="list-disc">Stablecoin and token payouts</li>
        <li className="list-disc">A clear, on-chain record for every transaction</li>
        <li className="list-disc">Built-in dispute resolution</li>
      </ul>
      <p className={P}>Suddenly, paying your KOLs is the easy part 🥳</p>

      {/* On-chain attribution */}
      <h3 className={H}>On-chain attribution</h3>
      <p className={P}>
        Manually <L>tracking live KOL content</L> across X and Telegram is unscalable — and
        engagement alone never told you whether a campaign actually drove wallets, deposits,
        or mints. Kolio closes that loop.
      </p>
      <Figure
        label="Attribution dashboard"
        caption="An auto-updating dashboard ties KOL content to on-chain outcomes — new wallets, deposits, swaps, mints — so you can see what each KOL actually delivered."
      />
      <p className={P}>With Kolio, you…</p>
      <ul className={UL}>
        <li className="list-disc">
          Get an auto-updating dashboard for reach, engagement, and on-chain conversions —
          no spreadsheets to maintain.
        </li>
        <li className="list-disc">
          Auto-collect the actual KOL content, so disappearing posts and deleted threads
          can't quietly under-report a campaign.
        </li>
        <li className="list-disc">
          Attribute on-chain outcomes back to the KOL who drove them, so you can double down
          on what works and cut what doesn't.
        </li>
      </ul>
      <p className={P}>
        Which means no more guessing whether a campaign worked — you'll see it, wallet by
        wallet.
      </p>
    </div>
  );
}
