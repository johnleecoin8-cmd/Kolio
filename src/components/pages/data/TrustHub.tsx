import { User, Users, ShieldCheck, Lock } from 'lucide-react';
import Container from '@/components/ui/Container';

function Divider() {
  return <div className="my-7 h-px w-full bg-black/10" />;
}

/** Trust hub — two columns: For KOLs (purple) & For brands (pink). */
export default function TrustHub() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-center font-sans text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.25rem]">
          Trust hub
        </h2>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* For KOLs */}
          <div className="rounded-xl bg-purple-light p-8 md:p-10">
            <div className="font-display text-[1.375rem] uppercase leading-none text-foreground">
              For KOLs
            </div>
            <div className="mt-5 text-[1.625rem] font-bold leading-[1.2] text-foreground">
              Our mission is to help credible crypto KOLs get discovered and
              paid fairly for the audiences they’ve built.
            </div>
            <p className="mt-4 text-body-sm text-foreground/75">
              We only let vetted web3 brands, exchanges, and protocols access
              KOL data — and only in ways that lead to real partnerships. If a
              company isn’t here to actually work with KOLs, we don’t let them
              use Kolio.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-foreground/75">
              <li>Block throwaway &amp; suspicious accounts from signing up</li>
              <li>Restrict free scraping of our data</li>
              <li>
                Block users who show no intent to actually book or pay KOLs
              </li>
            </ul>

            <Divider />

            <div className="flex items-start gap-4">
              <User className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden />
              <div>
                <div className="text-body font-bold text-foreground">
                  Your profile data
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Only publicly available profile data is collected — handles,
                  public posts, and the wallet activity you’ve chosen to make
                  public for campaign attribution.
                </p>
              </div>
            </div>

            <Divider />

            <div className="flex items-start gap-4">
              <Users className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden />
              <div>
                <div className="text-body font-bold text-foreground">
                  Your audience data
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Your audience is your community, and we treat that
                  relationship seriously. All audience-level data is
                  pseudonymized and anonymized.
                </p>
                <p className="mt-3 text-eyebrow text-foreground/55">
                  If your data isn’t publicly available, it won’t appear in
                  Kolio. As a KOL, email privacy@kolio.io to review the data we
                  hold about you, or request a full export.
                  <br />
                  <br />
                  You can opt out any time by writing to privacy@kolio.io and
                  we’ll remove you from Kolio.
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
              Kolio follows web2-grade security practices to keep your campaign
              and payment data safe.
            </div>
            <p className="mt-4 text-body-sm text-foreground/75">
              We bring the operational rigor of mature creator platforms to
              crypto. Campaign data, escrow records, and KOL agreements are
              handled with the same discipline web3 finance demands.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-foreground/75">
              <li>
                <strong>SOC 2-aligned</strong> controls and{' '}
                <strong>GDPR-friendly</strong> data handling.
              </li>
              <li>
                On-chain payments &amp; escrow so budget is only released when
                deliverables are met.
              </li>
              <li>
                Campaign attribution that ties on-chain conversions back to the
                KOL who drove them.
              </li>
            </ul>

            <Divider />

            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-0.5 h-6 w-6 shrink-0 text-brand"
                aria-hidden
              />
              <div>
                <div className="text-body font-bold text-foreground">
                  Privacy &amp; Compliance
                </div>
                <p className="mt-1 text-body-sm text-foreground/75">
                  Kolio is built to comply with the General Data Protection
                  Regulation (GDPR) and processes only publicly available KOL
                  data. Customer data is hosted on hardened, audited cloud
                  infrastructure.
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
              <Lock className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden />
              <div>
                <div className="text-body font-bold text-foreground">
                  Security
                </div>
                <p className="mt-1 text-eyebrow text-foreground/55">
                  We take every step to protect customer data and escrowed
                  funds from breaches and malicious actors. Your campaign data
                  is safe, secure, and strictly confidential with Kolio.
                  <br />
                  <br />
                  Data is encrypted at rest and in transit, and all transfers
                  conform to GDPR requirements under the Standard Contractual
                  Clauses (SCCs).
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
