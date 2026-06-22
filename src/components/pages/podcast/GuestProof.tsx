import { Link } from 'react-router-dom';
import { ArrowRight, Radio, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';

const REACH = [
  ['Spotify & Apple', '11,400', 'bg-brand'],
  ['X / Twitter clips', '9,800', 'bg-brand-coral'],
  ['Newsletter replay', '6,300', 'bg-gray-300'],
  ['On-chain referral', '3,500', 'bg-mint'],
];

/** White-surface section: the case for coming on the show, with a floating
 *  distribution mini-UI so the pitch is shown, not just told. */
export default function GuestProof() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: the pitch */}
          <div>
            <span className="eyebrow text-brand">Be a guest</span>
            <h2 className="display-light mt-3 text-[2rem] leading-[1.05] text-foreground md:text-[3rem]">
              One conversation. Reach that follows you home.
            </h2>
            <p className="mt-5 max-w-lg text-body-md text-foreground/60">
              We do not chase clout. We invite founders and KOLs who ran a campaign worth
              dissecting, then distribute the episode across every channel and tie each
              listen back to a wallet. You leave with a proof clip you can pin.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                ['Editor-cut in 7 days', 'Tight 15–25 min cuts. We respect the listener and your calendar.'],
                ['Attributed distribution', 'Every replay carries a referral tag so reach is measured, not guessed.'],
                ['Your Proof Score, on air', 'We pull your live Kolio score into the show notes — earned, not claimed.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-coral-bg text-brand">
                    <Radio className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-body-sm font-semibold text-foreground">{t}</span>
                    <span className="block text-body-sm text-foreground/55">{d}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/demo-confirmation"
              className="mt-9 inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 font-semibold text-white shadow-float-sm transition hover:opacity-90"
            >
              Pitch your campaign <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* right: floating proof mini-UIs */}
          <div className="relative">
            {/* distribution card */}
            <div className="card-kit shadow-float -rotate-1 rounded-2xl p-6 md:translate-x-2">
              <div className="flex items-center justify-between">
                <span className="chip chip-onchain">Per-episode reach</span>
                <span className="font-mono-tnum text-eyebrow text-foreground/45">last drop</span>
              </div>
              <div className="mt-6 flex items-end gap-3">
                <span className="num-display text-[3.25rem] leading-none text-foreground">31,000</span>
                <span className="mb-2 text-body-sm text-foreground/50">verified plays</span>
              </div>
              <div className="mt-5 space-y-3">
                {REACH.map(([label, val, color]) => {
                  const pct = (parseInt((val as string).replace(/,/g, ''), 10) / 11400) * 100;
                  return (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-eyebrow text-foreground/55">
                        <span>{label}</span>
                        <span className="font-mono-tnum">{val}</span>
                      </div>
                      <div className="h-1.5 rounded-pill bg-gray-100">
                        <div className={`h-full rounded-pill ${color}`} style={{ width: `${Math.min(pct, 100)}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* floating quote chip */}
            <div className="card-kit shadow-float-sm absolute -bottom-8 -left-2 hidden max-w-[16rem] rotate-2 rounded-2xl p-5 md:block">
              <Quote className="h-5 w-5 text-brand-coral" />
              <p className="mt-2 text-body-sm leading-snug text-foreground/80">
                “The clip outperformed the campaign it was about.”
              </p>
              <p className="mt-3 text-eyebrow text-foreground/50">— Mara V., L2 growth lead</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
