import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

/** Single quote testimonial — round photo left, big quote right. */
export default function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
          <div className="flex justify-center md:justify-end">
            <img
              src={`${CDN}/643422210a905507265001ea_laura%20garsdal%20nordvpn.avif`}
              alt="Laura Garsdal"
              className="h-56 w-56 rounded-full object-cover"
            />
          </div>
          <div>
            <img
              src={`${CDN}/5f1e9d168dccd9d4351fe24f_quotationmark_dark.svg`}
              alt=""
              className="h-9 w-auto"
            />
            <h3 className="mt-6 max-w-[640px] font-display text-[1.5rem] font-semibold leading-[1.35] text-foreground md:text-[1.75rem]">
              I've been working with Modash for over 3 years. Previously, I was at
              a beauty brand and when I started at NordVPN I told my team lead,
              "I'm going to need Modash."
            </h3>
            <div className="mt-8">
              <div className="text-body font-medium text-foreground">
                Laura Garsdal
              </div>
              <div className="text-body text-foreground/60">
                Influencer Marketing Manager at NordVPN
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
