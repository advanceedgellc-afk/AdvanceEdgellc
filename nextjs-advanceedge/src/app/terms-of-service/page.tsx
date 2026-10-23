
// app/terms-of-service/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Website, SMS & Booking Terms | AdvanceEdge",
  description:
    "Read the terms for using AdvanceEdge's website, forms, chat and booking tools, including SMS consent, disclaimers and how to contact us.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
   title: "Terms of Service | Website, SMS & Booking Terms | AdvanceEdge",
    description:
      "The terms that govern use of the AdvanceEdge website, forms, chat and booking tools.",
    url: "/terms-of-service",
    type: "website",
  },
  robots: { index: true, follow: true },
};
const siteUrl = "https://advanceedgellc.com/";

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-marcellus">{title}</h3>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function TermsLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[#FF7A1A] hover:underline break-all"
    >
      {children}
    </Link>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0d1e] text-white">
      {/* Hero section */}
      <section className="relative flex h-[400px] items-center justify-center border-b border-white/10 px-4 pt-24 pb-2">
        <div className="container mx-auto">
          <h1 className="text-center font-marcellus text-3xl sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Terms content */}
      <section className="bg-white py-10 text-[#111827] sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 font-dm text-sm leading-relaxed sm:text-base">
            {/* Introduction */}
            <header className="space-y-3">
              <h2 className="font-marcellus text-2xl">
                Terms of Service for AdvanceEdge LLC
              </h2>

              <p className="text-gray-700">
                <span className="font-semibold">Effective date:</span>{" "}
                October 12, 2026
              </p>

              <p className="text-gray-700">
                These Terms of Service (&quot;Terms&quot;) govern your use
                of{" "}
                <TermsLink href={siteUrl}>
                  https://advanceedgellc.com
                </TermsLink>{" "}
                and any related pages, forms, chat tools, booking pages,
                newsletters, and communications (together, the
                &quot;Site&quot;) operated by AdvanceEdge LLC
                (&quot;AdvanceEdge,&quot; &quot;we,&quot; &quot;us,&quot;
                or &quot;our&quot;), a Florida limited liability company
                located at 1008 Hamilton St, Immokalee, FL 34142, United
                States. By using the Site, you agree to these Terms. If you
                do not agree, please do not use the Site.
              </p>
            </header>

            {/* 1. Who we are */}
            <TermsSection title="1. Who We Are">
              <p className="text-gray-700">
                AdvanceEdge is a legal intake and operations partner for law
                firms and legal marketing agencies. Our services include
                legal intake and contact center support, case qualification,
                medical record retrieval and review, litigation and
                settlement support, virtual legal agents, accounting and
                trust bookkeeping support, and related digital and
                marketing support.
              </p>
            </TermsSection>

            {/* 2. Legal and medical disclaimers */}
            <TermsSection title="2. Not a Law Firm; No Legal or Medical Advice">
              <p className="text-gray-700">
                AdvanceEdge is not a law firm and does not provide legal
                services or legal advice. Using the Site, submitting a form,
                or contacting us does not create an attorney-client
                relationship. AdvanceEdge is not a healthcare provider, and
                nothing on the Site is medical advice.
              </p>

              <p className="text-gray-700">
                Articles, blog posts, FAQs, and other content on the Site
                are for general information only. They may not reflect
                current law in your jurisdiction. If you believe you have
                a legal claim, consult a licensed attorney in your state.
                Legal deadlines (statutes of limitation) may apply to your
                claim.
              </p>
            </TermsSection>

            {/* 3. Services and agreements */}
            <TermsSection title="3. Our Services and Client Agreements">
              <p className="text-gray-700">
                The Site describes our services for informational purposes
                only. Services for law firms, agencies, and other business
                clients are provided only under a separate written
                agreement, such as a master services agreement, statement
                of work, or business associate agreement (&quot;Client
                Agreement&quot;). If these Terms conflict with a Client
                Agreement, the Client Agreement controls for those services.
              </p>

              <p className="text-gray-700">
                Pricing, staffing levels, coverage hours, turnaround times,
                and service scope are set in each Client Agreement. Figures
                and statistics on the Site (such as records reviewed or
                calls placed) reflect our historical experience and are
                not a promise of future results. We do not guarantee any
                number of leads, signed cases, retainers, settlements, or
                case outcomes.
              </p>
            </TermsSection>

            {/* 4. Eligibility */}
            <TermsSection title="4. Eligibility">
              <p className="text-gray-700">
                You must be at least 18 years old to use the Site or submit
                information through it. The Site is intended for use in
                the United States.
              </p>
            </TermsSection>

            {/* 5. Communications */}
            <TermsSection title="5. Calls, Text Messages, and Email">
              <p className="text-gray-700">
                If you provide your phone number through the Site, you
                agree that AdvanceEdge may contact you at that number by
                phone call or text message about your inquiry, your booked
                call, and our services. These calls and messages may be
                sent using automated technology. Consent to receive
                marketing messages is not a condition of any purchase or
                service.
              </p>

              <BulletList
                items={[
                  <>
                    <span className="font-semibold">
                      Message frequency:
                    </span>{" "}
                    Varies based on your inquiry and interactions.
                  </>,
                  <>
                    <span className="font-semibold">
                      Message and data rates may apply:
                    </span>{" "}
                    According to your mobile plan.
                  </>,
                  <>
                    <span className="font-semibold">Opt out:</span>{" "}
                    Reply STOP to any text message to stop receiving texts.
                    You may receive one final message confirming your opt-out.
                  </>,
                  <>
                    <span className="font-semibold">Help:</span>{" "}
                    Reply HELP or contact{" "}
                    <TermsLink href="mailto:info@advanceedgellc.com">
                      info@advanceedgellc.com
                    </TermsLink>{" "}
                    or{" "}
                    <TermsLink href="tel:+18329377738">
                      832-937-7738
                    </TermsLink>
                    .
                  </>,
                  <>
                    Mobile carriers are not liable for delayed or
                    undelivered messages.
                  </>,
                  <>
                    We do not sell or share your mobile number or text
                    messaging consent with third parties or affiliates for
                    their marketing purposes.
                  </>,
                ]}
              />

              <p className="text-gray-700">
                You can unsubscribe from marketing emails at any time using
                the link in the email.
              </p>

              <p className="text-gray-700">
                Calls with AdvanceEdge may be monitored or recorded for
                quality, training, and compliance purposes, where permitted
                by law and with any notice the law requires.
              </p>
            </TermsSection>

            {/* 6. Submitted information */}
            <TermsSection title="6. Information You Submit">
              <p className="text-gray-700">
                Please do not submit protected health information, medical
                records, Social Security numbers, financial account numbers,
                or confidential case details through the Site&apos;s public
                forms, chat, or newsletter sign-up. Sensitive client and
                claimant data should be exchanged only through the secure
                channels set out in a Client Agreement.
              </p>

              <p className="text-gray-700">
                You agree that the information you submit is accurate and
                that you have the right to share it. Our use of personal
                information is described in our{" "}
                <TermsLink href="/privacy-policy">
                  Privacy Policy
                </TermsLink>
                , which is part of these Terms.
              </p>
            </TermsSection>

            {/* 7. Acceptable use */}
            <TermsSection title="7. Acceptable Use">
              <p className="text-gray-700">
                You agree not to:
              </p>

              <BulletList
                items={[
                  "Use the Site for any unlawful, fraudulent, or misleading purpose.",
                  "Submit false information or impersonate any person or business.",
                  "Interfere with the Site's operation, security, or servers, or attempt unauthorized access.",
                  "Introduce viruses, malware, or other harmful code.",
                  "Scrape, copy, or harvest Site content or data by automated means without our written permission.",
                  "Use the Site to send spam or unsolicited messages.",
                ]}
              />
            </TermsSection>

            {/* 8. Intellectual property */}
            <TermsSection title="8. Intellectual Property">
              <p className="text-gray-700">
                The Site and its content, including text, graphics, logos,
                the AdvanceEdge name, images, videos, and software, are
                owned by or licensed to AdvanceEdge and are protected by
                intellectual property laws. You may view and print Site
                pages for your personal or internal business use. You may
                not copy, modify, distribute, or create derivative works
                from Site content without our prior written consent.
              </p>

              <p className="text-gray-700">
                If you send us feedback or suggestions, we may use them
                without any obligation to you.
              </p>
            </TermsSection>

            {/* 9. Third-party tools */}
            <TermsSection title="9. Third-Party Links and Tools">
              <p className="text-gray-700">
                The Site may link to or use third-party websites and tools,
                such as social media pages, scheduling tools, video players,
                maps, and form providers. We do not control and are not
                responsible for third-party content, products, or privacy
                practices. Your use of them is subject to their own terms.
              </p>
            </TermsSection>

            {/* 10. Warranty disclaimer */}
            <TermsSection title="10. Disclaimer of Warranties">
              <p className="text-gray-700">
                The Site and its content are provided &quot;as is&quot; and
                &quot;as available.&quot; To the fullest extent permitted
                by law, AdvanceEdge disclaims all warranties, express or
                implied, including warranties of merchantability, fitness
                for a particular purpose, accuracy, and non-infringement.
                We do not warrant that the Site will be uninterrupted,
                error-free, or free of harmful components.
              </p>
            </TermsSection>

            {/* 11. Limitation of liability */}
            <TermsSection title="11. Limitation of Liability">
              <p className="text-gray-700">
                To the fullest extent permitted by law, AdvanceEdge and its
                members, officers, employees, and contractors will not be
                liable for any indirect, incidental, special, consequential,
                or punitive damages, or for any loss of profits, data, or
                business, arising from your use of or inability to use the
                Site. Our total liability for any claim relating to the
                Site will not exceed one hundred U.S. dollars (USD 100).
                This section does not limit liability under a Client
                Agreement, which is governed by that agreement.
              </p>
            </TermsSection>

            {/* 12. Indemnification */}
            <TermsSection title="12. Indemnification">
              <p className="text-gray-700">
                You agree to indemnify and hold harmless AdvanceEdge and
                its members, officers, employees, and contractors from any
                claims, losses, and expenses, including reasonable
                attorneys&apos; fees, arising from your misuse of the Site
                or your violation of these Terms.
              </p>
            </TermsSection>

            {/* 13. Governing law */}
            <TermsSection title="13. Governing Law and Venue">
              <p className="text-gray-700">
                These Terms are governed by the laws of the State of
                Florida, without regard to its conflict of law rules. Any
                dispute relating to these Terms or the Site will be brought
                exclusively in the state or federal courts located in
                Collier County, Florida, and you consent to their
                jurisdiction.
              </p>
            </TermsSection>

            {/* 14. Changes */}
            <TermsSection title="14. Changes to These Terms">
              <p className="text-gray-700">
                We may update these Terms from time to time. Changes take
                effect when posted on this page with a new effective date.
                Your continued use of the Site after changes are posted
                means you accept the updated Terms.
              </p>
            </TermsSection>

            {/* 15. General */}
            <TermsSection title="15. General">
              <p className="text-gray-700">
                If any part of these Terms is found unenforceable, the
                rest remains in effect. Our failure to enforce any right
                is not a waiver of that right. These Terms and our Privacy
                Policy are the entire agreement between you and AdvanceEdge
                regarding the Site.
              </p>
            </TermsSection>

            {/* 16. Contact */}
            <TermsSection title="16. Contact Us">
              <p className="text-gray-700">
                If you have questions about these Terms of Service, you
                can contact us at:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Company:</span>{" "}
                  AdvanceEdge LLC
                </li>

                <li>
                  <span className="font-semibold">Address:</span>{" "}
                  1008 Hamilton St, Immokalee, FL 34142, United States
                </li>

                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <TermsLink href="mailto:info@advanceedgellc.com">
                    info@advanceedgellc.com
                  </TermsLink>
                </li>

                <li>
                  <span className="font-semibold">Phone:</span>{" "}
                  <TermsLink href="tel:+18329377738">
                    832-937-7738
                  </TermsLink>
                </li>
              </ul>
            </TermsSection>
          </div>
        </div>
      </section>
    </main>
  );
}
