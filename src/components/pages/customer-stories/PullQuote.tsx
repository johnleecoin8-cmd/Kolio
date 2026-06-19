import Container from '@/components/ui/Container';

const AUTHOR_IMG =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/643422210a905507265001ea_laura%20garsdal%20nordvpn.avif';
const QUOTE_MARK =
  'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/5f1e9d168dccd9d4351fe24f_quotationmark_dark.svg';

/** Big centered pull-quote with author photo on the left. */
export default function PullQuote() {
  return (
    <section className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="flex justify-center">
          <img src={QUOTE_MARK} alt="" className="h-10 w-10" aria-hidden />
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="flex justify-center">
            <img
              src={AUTHOR_IMG}
              alt="Laura Garsdal, Influencer Marketing Manager at NordVPN"
              className="h-56 w-56 rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-display text-h4 leading-snug text-foreground">
              Before Modash, I had to search for profiles manually. With Modash,
              I find creators that actually match our targets &amp; our needs and
              I do it faster!
            </p>
            <div className="mt-8 text-body text-foreground/75">
              <span className="font-semibold text-foreground">
                Laura Garsdal
              </span>
              <br />
              Influencer Marketing Manager, NordVPN
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
