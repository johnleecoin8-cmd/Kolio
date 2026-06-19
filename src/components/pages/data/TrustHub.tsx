import Container from '@/components/ui/Container';

const CDN = 'https://cdn.prod.website-files.com/5ef4691542433bca43839ceb';

function Divider() {
  return <div className="my-7 h-px w-full bg-black/10" />;
}

/** Trust hub — two columns: For creators (purple) & For brands (pink). */
export default function TrustHub() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          Trust hub
        </h2>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* For creators */}
          <div className="rounded-xl bg-purple-light p-8 md:p-10">
            <div className="font-display text-[1.375rem] uppercase leading-none text-foreground">
              For creators
            </div>
            <div className="mt-5 text-[1.625rem] font-bold leading-[1.2] text-foreground">
              Our mission is to help every creator on earth make a living doing
              what they love.
            </div>
            <p className="mt-4 text-body-sm text-foreground/75">
              We take steps to only allow companies to access &amp; process
              influencer data that could be highly beneficial to creators. If a
              company doesn’t make creators’ lives better, we don’t allow them to
              use Modash.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-foreground/75">
              <li>Block personal &amp; suspicious emails from creating accounts</li>
              <li>Restrict free access to our tools</li>
              <li>
                Block users who appear uninterested in employing or partnering
                with creators
              </li>
            </ul>

            <Divider />

            <div className="flex items-start gap-4">
              <img
                src={`${CDN}/688b59401d5ff7429c262816_ic_User.avif`}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <div>
                <div className="text-body font-bold text-foreground">
                  Your personal data
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Only publicly available personal data from influencers and
                  creators is collected. Specifically, names, emails, &amp;
                  images.
                </p>
              </div>
            </div>

            <Divider />

            <div className="flex items-start gap-4">
              <img
                src={`${CDN}/6842ca892b3e3ccc0cc164bc_User%20Group.avif`}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <div>
                <div className="text-body font-bold text-foreground">
                  Your audience data
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Your audience is your community. And we take that relationship
                  seriously. Rest assured, all audience data collected is
                  pseudonymized and anonymized.
                </p>
                <p className="mt-3 text-eyebrow text-foreground/55">
                  If your data is not publicly available, you won’t find it in
                  Modash. As a creator, email us by writing to privacy@modash.io
                  to check your data, or request to be given all data we have
                  stored about you.
                  <br />
                  <br />
                  You can opt out by writing to privacy@modash.io and we will
                  remove you from Modash.
                </p>
              </div>
            </div>
          </div>

          {/* For brands */}
          <div className="rounded-xl bg-pink-light p-8 md:p-10">
            <div className="font-display text-[1.375rem] uppercase leading-none text-foreground">
              For brands
            </div>
            <div className="mt-5 text-[1.625rem] font-bold leading-[1.2] text-foreground">
              Modash follows global security practices to keep our customers’
              data safe.
            </div>
            <p className="mt-4 text-body-sm text-foreground/75">
              Modash is funded by major European venture funds. That means we've
              been through due diligence by two independent European law firms in
              the last 3 years, with a legal obligation to fully audit the
              sustainability and compliance of Modash.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-foreground/75">
              <li>
                <strong>ISO27001 certified</strong> and{' '}
                <strong>GDPR-friendly</strong> tools.
              </li>
              <li>
                <a
                  href="https://www.icebreaker.vc/"
                  className="font-bold underline"
                >
                  Icebreaker.vc
                </a>{' '}
                who has also funded companies like Klaus, Workfellow &amp;
                Volument.
              </li>
              <li>
                <a
                  href="https://www.changeventures.com/"
                  className="font-bold underline"
                >
                  Change Ventures
                </a>{' '}
                who has funded companies like Veriff &amp; Printify.
              </li>
            </ul>

            <Divider />

            <div className="flex items-start gap-4">
              <img
                src={`${CDN}/688b5bf2bedd990f90cf03d0_ic_security.avif`}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <div>
                <div className="text-body font-bold text-foreground">
                  Privacy &amp; Compliance
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Headquartered in the European city of Tallinn, Estonia, Modash
                  is held to the highest standards of compliance with the General
                  Data Protection Regulation (GDPR). Modash customer data is
                  hosted in Frankfurt, Germany (AWS).
                </p>
                <a
                  href="/legal/privacy-policy"
                  className="mt-3 inline-flex text-body-sm font-semibold text-foreground underline"
                >
                  View our Privacy Policy
                </a>
              </div>
            </div>

            <Divider />

            <div className="flex items-start gap-4">
              <img
                src={`${CDN}/688b5bf2baa815bbe16b1a09_ic_privacy.avif`}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <div>
                <div className="text-body font-bold text-foreground">
                  Security
                </div>
                <p className="mt-1 text-eyebrow text-foreground/55">
                  We take all the necessary steps to protect our customer data
                  from villains, data breaches &amp; malicious hackers. Customer
                  data is safe, secure, and strictly confidential with Modash.
                  <br />
                  <br />
                  Data is encrypted at rest and in transit &amp; all transfers
                  conform to EU/US GDPR requirements under the Standard
                  Contractual Clauses (SCCs).
                </p>
                <a
                  href="/legal/terms-of-service"
                  className="mt-3 inline-flex text-body-sm font-semibold text-foreground underline"
                >
                  View our Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
