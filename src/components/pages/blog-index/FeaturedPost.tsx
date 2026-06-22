import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { featured } from './posts';

/** Larger floating feature card — the hero article, with a Proof-Score mini-UI
 *  on the on-chain side panel to echo the product surface. */
export default function FeaturedPost() {
  return (
    <Link
      to="/blog"
      className="card-kit group grid items-stretch gap-0 overflow-hidden rounded-2xl shadow-float transition hover:-translate-y-1 md:grid-cols-[1.15fr_1fr]"
    >
      {/* editorial side */}
      <div className="flex flex-col justify-center p-8 md:p-10">
        <div className="flex items-center gap-2">
          <span className="chip chip-brand">Featured</span>
          <span className="chip chip-ink">{featured.topic}</span>
        </div>
        <h2 className="display-light mt-5 text-[1.9rem] leading-[1.08] text-foreground md:text-[2.5rem]">
          {featured.title}
        </h2>
        <p className="mt-4 max-w-xl text-body-md text-foreground/60">{featured.dek}</p>
        <div className="mt-7 flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-pill bg-gradient-brand text-eyebrow font-bold text-white">
            {featured.initials}
          </span>
          <div className="text-body-sm text-foreground/55">
            {featured.author} ·{' '}
            <span className="font-mono-tnum">{featured.readMin}</span> min read · {featured.date}
          </div>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 self-start text-body-sm font-semibold text-brand">
          Read the breakdown <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* on-chain proof side panel */}
      <div className="surface-onchain relative flex flex-col justify-center gap-5 overflow-hidden p-8 text-white md:p-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-pill bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-pill bg-brand-coral/25 blur-3xl" />
        <div className="relative flex items-center justify-between">
          <span className="chip chip-onchain">Proof Score</span>
          <ShieldCheck className="h-5 w-5 text-mint" />
        </div>
        <div className="relative flex items-end gap-3">
          <span className="num-display text-[3.75rem] leading-none">92</span>
          <span className="mb-2 text-body-sm text-white/50">/ 100</span>
        </div>
        <div className="relative space-y-2.5">
          {[
            ['Real holders', '94%', 'bg-mint'],
            ['Engaged wallets', '61%', 'bg-brand-coral'],
            ['Bot share', '4%', 'bg-white/30'],
          ].map(([label, val, bar]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-eyebrow text-white/55">
                <span>{label}</span>
                <span className="font-mono-tnum">{val}</span>
              </div>
              <div className="h-1.5 rounded-pill bg-white/10">
                <div className={`h-full rounded-pill ${bar}`} style={{ width: val as string }} />
              </div>
            </div>
          ))}
        </div>
        <p className="relative text-eyebrow text-white/45">
          The number this article shows you how to build.
        </p>
      </div>
    </Link>
  );
}
