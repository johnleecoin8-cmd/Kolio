import Container from '@/components/ui/Container';
import ProofScore from '@/components/kit/ProofScore';
import { ShieldCheck, AlertTriangle, Bot } from 'lucide-react';

/** Anti-fraud focal section. A dark on-chain terminal panel (page punctuation)
 *  exposing True Reach vs raw follower count, bot/fake-follower share, and a
 *  worked ProofScore example. Mint chips = verified, red chips = flagged. */
export default function FraudProof() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Anti-fraud engine</span>
          <h2 className="mt-3 display-lg text-h3 text-foreground">
            Followers lie. We measure the audience that actually exists.
          </h2>
          <p className="mt-4 text-body-md text-foreground/60">
            Every profile is scored against bot networks, recycled engagement and
            inflated reach — before a single dollar of budget moves.
          </p>
        </div>

        {/* Focal dark terminal card */}
        <div className="surface-onchain mx-auto mt-12 max-w-4xl rounded-2xl p-7 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Left: handle + verdict + proof score */}
            <div>
              <div className="flex items-center gap-3">
                <div className="font-mono-tnum text-body-sm text-white/50">@degen.alpha</div>
                <span className="chip chip-onchain">
                  <ShieldCheck className="h-3 w-3" /> Verified
                </span>
              </div>
              <div className="mt-6">
                <ProofScore score={86} size="lg" />
              </div>
              <p className="mt-4 max-w-xs text-body-sm text-white/55">
                Composite of audience authenticity, on-chain attribution and
                engagement quality — weighted for crypto.
              </p>
            </div>

            {/* Right: True Reach vs follower count + bot share */}
            <div className="grid w-full max-w-sm grid-cols-2 gap-4">
              <Metric
                label="Stated followers"
                value="412,000"
                tone="muted"
              />
              <Metric
                label="True Reach"
                value="271,920"
                tone="good"
                chip={<span className="chip chip-onchain"><ShieldCheck className="h-3 w-3" /> Real</span>}
              />
              <Metric
                label="Bot / fake followers"
                value="18.4%"
                tone="bad"
                icon={<Bot className="h-4 w-4" />}
                chip={<span className="chip chip-ink !bg-brand/15 !text-brand"><AlertTriangle className="h-3 w-3" /> Flagged</span>}
              />
              <Metric
                label="Engagement authenticity"
                value="93.1%"
                tone="good"
              />
            </div>
          </div>

          {/* True Reach proportion bar */}
          <div className="mt-9 border-t border-white/10 pt-7">
            <div className="flex items-end justify-between">
              <span className="text-body-sm font-medium text-white/70">
                Of 412,000 stated followers, what is real?
              </span>
              <span className="font-mono-tnum text-body-sm text-mint">66% real reach</span>
            </div>
            <div className="mt-3 flex h-3 w-full overflow-hidden rounded-pill bg-white/10">
              <div className="h-full bg-mint" style={{ width: '66%' }} title="True reach" />
              <div className="h-full bg-white/25" style={{ width: '15.6%' }} title="Inactive / low-quality" />
              <div className="h-full bg-brand" style={{ width: '18.4%' }} title="Bot / fake followers" />
            </div>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono-tnum text-eyebrow text-white/55">
              <Legend color="bg-mint" label="True reach 66.0%" />
              <Legend color="bg-white/25" label="Inactive 15.6%" />
              <Legend color="bg-brand" label="Bot / fake 18.4%" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({
  label,
  value,
  tone,
  icon,
  chip,
}: {
  label: string;
  value: string;
  tone: 'good' | 'bad' | 'muted';
  icon?: React.ReactNode;
  chip?: React.ReactNode;
}) {
  const valueColor =
    tone === 'good' ? 'text-mint' : tone === 'bad' ? 'text-brand' : 'text-white/45';
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-1.5 text-eyebrow uppercase tracking-wide text-white/45">
        {icon}
        {label}
      </div>
      <div className={`num-display mt-2 font-mono-tnum text-h4 leading-none ${valueColor}`}>
        {value}
      </div>
      {chip && <div className="mt-3">{chip}</div>}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-pill ${color}`} />
      {label}
    </span>
  );
}
