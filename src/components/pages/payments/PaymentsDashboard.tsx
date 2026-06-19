import { useState } from 'react';
import { cn } from '@/lib/cn';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

type Status = 'needs' | 'approved' | 'processing' | 'pending';

type Row = {
  name: string;
  avatar: string;
  price: string;
  status: Status;
  link: string;
};

const ROWS: Row[] = [
  {
    name: 'Maxim',
    avatar: `${CDN}/698c7769acfc5a4bf01b2fdf_img_andreea%20moise.avif`,
    price: '$1,000.00',
    status: 'needs',
    link: 'https://creator-…',
  },
  {
    name: 'Guri',
    avatar: `${CDN}/68c7ea4ddf9a2299a6b613a2_img_regina.avif`,
    price: '$64.90',
    status: 'approved',
    link: 'https://paypal-l…',
  },
  {
    name: 'Inna',
    avatar: `${CDN}/68c7eb35fc99ad999340fe91_img_tatiana.avif`,
    price: 'CA$1,547.00',
    status: 'processing',
    link: 'https://invoice-…',
  },
  {
    name: 'Heidi',
    avatar: `${CDN}/698c7769acfc5a4bf01b2fdf_img_andreea%20moise.avif`,
    price: '$121.46',
    status: 'approved',
    link: 'https://wiseapp…',
  },
  {
    name: 'Pavel',
    avatar: `${CDN}/68c7ea4ddf9a2299a6b613a2_img_regina.avif`,
    price: 'CA$1,135.00',
    status: 'pending',
    link: 'https://bankacc…',
  },
  {
    name: 'Himmy',
    avatar: `${CDN}/68c7eb35fc99ad999340fe91_img_tatiana.avif`,
    price: 'CA$100.00',
    status: 'approved',
    link: 'https://creator-…',
  },
];

const STATUS_META: Record<Status, { label: string; dot: string; text: string }> = {
  needs: { label: 'Needs confirmation', dot: 'bg-negative', text: 'text-negative' },
  approved: { label: 'Approved', dot: 'bg-positive', text: 'text-positive' },
  processing: { label: 'Processing', dot: 'bg-gray-400', text: 'text-gray-500' },
  pending: { label: 'Invoice pending', dot: 'bg-orange-dark', text: 'text-gray-700' },
};

function StatusPill({ status }: { status: Status }) {
  const m = STATUS_META[status];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('h-2 w-2 rounded-full', m.dot)} />
      <span className={cn('text-xs font-medium', m.text)}>{m.label}</span>
    </span>
  );
}

/** Faithful mockup of the Modash Payments product dashboard (the "See it in action" demo). */
export default function PaymentsDashboard() {
  const [selected, setSelected] = useState(5);

  return (
    <div className="flex h-full w-full overflow-hidden rounded-[20px] bg-background text-left ring-1 ring-gray-200">
      {/* LEFT: payments table */}
      <div className="flex min-w-0 flex-1 flex-col p-5 md:p-7">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-ink">Payments</h4>
          <button className="rounded-pill bg-ink px-4 py-2 text-xs font-semibold text-white">
            Create payment
          </button>
        </div>

        {/* search */}
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-background-soft px-3 py-2.5 text-sm text-gray-400">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="m14 14 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          Search creator
        </div>

        {/* stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { l: 'Remaining Balance', v: '$ 45,522.23' },
            { l: 'Open payments', v: '$ 1660.80' },
            { l: 'Upcoming payouts', v: '$ 3,464.64' },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-background-soft p-3.5">
              <p className="text-[11px] text-gray-500">{s.l}</p>
              <p className="mt-1 text-base font-semibold text-ink">{s.v}</p>
            </div>
          ))}
        </div>

        {/* table */}
        <div className="mt-5 min-w-0 overflow-hidden">
          <div className="grid grid-cols-[24px_1.3fr_1fr_1.3fr_1.2fr] items-center gap-2 border-b border-gray-200 pb-2 text-[11px] font-medium text-gray-500">
            <span />
            <span>Influencer</span>
            <span>Price</span>
            <span>Status</span>
            <span>Payment link</span>
          </div>
          {ROWS.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setSelected(i)}
              className={cn(
                'grid w-full grid-cols-[24px_1.3fr_1fr_1.3fr_1.2fr] items-center gap-2 border-b border-gray-100 py-2.5 text-left transition-colors hover:bg-background-soft',
                selected === i && 'bg-background-soft',
              )}
            >
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center rounded border',
                  selected === i ? 'border-ink bg-ink' : 'border-gray-300',
                )}
              >
                {selected === i && (
                  <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="m2.5 6 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="flex items-center gap-2 truncate">
                <img src={r.avatar} alt="" className="h-6 w-6 shrink-0 rounded-full object-cover" />
                <span className={cn('truncate text-[13px] text-ink', selected === i && 'font-semibold')}>
                  {r.name}
                </span>
              </span>
              <span className={cn('truncate text-[13px] text-ink', selected === i && 'font-semibold')}>
                {r.price}
              </span>
              <span className="truncate">
                <StatusPill status={r.status} />
              </span>
              <span className="truncate text-[13px] text-gray-500">{r.link}</span>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: payment overview */}
      <aside className="hidden w-[300px] shrink-0 flex-col border-l border-gray-200 p-5 md:flex md:p-6">
        <h4 className="text-base font-semibold text-ink">Payment overview</h4>
        <div className="mt-4 flex gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-ink">
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Duplicate
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-ink">
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M11 3 13 5 6 12 3.5 12.5 4 10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            Edit
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <img
            src={`${CDN}/68c7eb35fc99ad999340fe91_img_tatiana.avif`}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-20 rounded bg-gray-200" />
            <div className="h-2 w-12 rounded bg-gray-100" />
          </div>
        </div>

        <p className="mt-5 text-[13px] font-semibold text-ink">Payment timeline</p>
        <div className="mt-3 space-y-3">
          {[
            { l: 'Created', done: true },
            { l: 'Approved', done: true },
            { l: 'Invoice uploaded', done: true },
            { l: 'In processing', done: false },
            { l: 'Payment sent', done: false },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-2.5">
              <span className={cn('h-2.5 w-2.5 rounded-full', s.done ? 'bg-ink' : 'bg-gray-200')} />
              <span className={cn('text-[13px]', s.done ? 'text-ink' : 'text-gray-400')}>{s.l}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[13px] font-semibold text-ink">Payment details</p>
        <div className="mt-3 space-y-2.5">
          {['Price', 'Description', 'Recipient email', 'Payment ID'].map((l) => (
            <div key={l} className="flex items-center justify-between">
              <span className="text-[13px] text-gray-500">{l}</span>
              <span className="h-2 w-14 rounded bg-gray-100" />
            </div>
          ))}
        </div>

        <p className="mt-5 text-[13px] font-semibold text-ink">Contract</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-background-soft px-3 py-2">
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 16 16" fill="none">
            <path d="M4 2h5l3 3v9H4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          <span className="text-[13px] text-ink">AccountDetail.pdf</span>
        </div>
      </aside>
    </div>
  );
}
