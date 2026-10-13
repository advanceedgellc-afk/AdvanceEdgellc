// app/privacy-policy/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AdvanceEdge",
  description:
    "How AdvanceEdge collects, uses and protects information submitted through this website.",
  alternates: {
    canonical: "https://www.advanceedgellc.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AdvanceEdge",
    description:
      "How AdvanceEdge collects, uses and protects information submitted through this website.",
    url: "https://www.advanceedgellc.com/privacy-policy",
    type: "website",
  },
};


const siteUrl = "https://advanceedgellc.com/";

function PolicySection({
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

function ContactLink({
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1e] text-white">
      {/* Hero section */}
      <section className="relative flex h-[400px] items-center justify-center border-b border-white/10 px-4 pt-24 pb-2">
        <div className="container mx-auto">
          <h1 className="text-center font-marcellus text-3xl sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Privacy policy content */}
      <section className="bg-white py-10 text-[#111827] sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 font-dm text-sm leading-relaxed sm:text-base">
            {/* Introduction */}
            <header className="space-y-3">
              <h2 className="font-marcellus text-2xl">
                Privacy Policy for AdvanceEdge LLC
              </h2>

              <p className="text-gray-700">
                <span className="font-semibold">Last updated:</span>{" "}
                October 12, 2026
              </p>

              <p className="text-gray-700">
                AdvanceEdge LLC (&quot;AdvanceEdge,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) respects your privacy.
                This Privacy Policy explains how we collect, use, share, and
                protect personal information when you visit{" "}
                <ContactLink href={siteUrl}>
                  https://advanceedgellc.com
                </ContactLink>
                , submit a form, book a call, subscribe to our newsletter,
                call us, or receive texts or emails from us (together, the
                &quot;Site&quot;).
              </p>
            </header>

            {/* 1. Scope */}
            <PolicySection title="1. Scope of This Policy">
              <p className="text-gray-700">
                This policy covers information we collect through the Site
                and our own sales and marketing communications.
              </p>

              <p className="text-gray-700">
                It does not cover information we process on behalf of our law
                firm and agency clients when delivering services, such as
                claimant intake data, case files, and medical records. We
                handle that information as a service provider under our
                Client Agreements, including business associate agreements
                where HIPAA applies, and only as our clients instruct. If you
                are a claimant or client of a law firm we support, please
                contact that law firm about your information.
              </p>
            </PolicySection>

            {/* 2. Information collected */}
            <PolicySection title="2. Information We Collect">
              <p className="font-semibold text-gray-800">
                Information you give us:
              </p>

              <BulletList
                items={[
                  <>
                    <span className="font-semibold">
                      Contact details:
                    </span>{" "}
                    Name, email address, phone number, law firm or company
                    name, and job title.
                  </>,
                  <>
                    <span className="font-semibold">
                      Inquiry details:
                    </span>{" "}
                    The message you send and the services you are interested
                    in.
                  </>,
                  <>
                    <span className="font-semibold">
                      Booking details:
                    </span>{" "}
                    The date, time, and notes you provide when booking a call.
                  </>,
                  <>
                    <span className="font-semibold">
                      Newsletter sign-up:
                    </span>{" "}
                    Your email address.
                  </>,
                  <>
                    <span className="font-semibold">
                      Communications:
                    </span>{" "}
                    Records of emails, calls, and text messages with us.
                    Calls may be recorded where permitted by law.
                  </>,
                ]}
              />

              <p className="pt-2 font-semibold text-gray-800">
                Information collected automatically:
              </p>

              <BulletList
                items={[
                  <>
                    <span className="font-semibold">
                      Device and browser data:
                    </span>{" "}
                    IP address, browser type, operating system, and device
                    identifiers.
                  </>,
                  <>
                    <span className="font-semibold">Usage data:</span>{" "}
                    Pages viewed, time on page, referring website, and clicks.
                  </>,
                  <>
                    <span className="font-semibold">
                      Cookies and similar technologies:
                    </span>{" "}
                    Technologies including those set through Google Tag
                    Manager and analytics or advertising tools (see Section
                    5).
                  </>,
                ]}
              />

              <p className="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-800">
                <span className="font-semibold">Important:</span> Please do
                not submit protected health information, medical records,
                Social Security numbers, or confidential case details through
                our public forms or chat.
              </p>
            </PolicySection>

            {/* 3. How we use information */}
            <PolicySection title="3. How We Use Information">
              <BulletList
                items={[
                  "To respond to inquiries, schedule calls, and provide information about our services.",
                  "To send updates, newsletters, and marketing messages where you have agreed or where permitted by law.",
                  "To operate, secure, analyze, and improve the Site.",
                  "To measure the performance of our marketing and advertising.",
                  "To comply with legal obligations, enforce our Terms of Service, and prevent fraud or misuse.",
                ]}
              />
            </PolicySection>

            {/* 4. SMS */}
            <PolicySection title="4. Text Messaging (SMS)">
              <p className="text-gray-700">
                If you provide your mobile number and agree to receive texts,
                we may send messages about your inquiry, scheduled calls, and
                our services. Message frequency varies. Message and data rates
                may apply. Reply STOP to opt out or HELP for help.
              </p>

              <p className="text-gray-700">
                We do not sell, rent, or share mobile phone numbers or text
                messaging opt-in data and consent with third parties or
                affiliates for their marketing or promotional purposes. Text
                messaging originator opt-in data and consent will not be
                shared with any third parties, except with service providers
                that help us deliver messages.
              </p>
            </PolicySection>

            {/* 5. Cookies */}
            <PolicySection title="5. Cookies and Tracking Technologies">
              <p className="text-gray-700">
                We use cookies, pixels, and similar technologies to remember
                your preferences, understand how the Site is used, and measure
                our marketing. These may include Google Tag Manager, Google
                Analytics, and advertising or social media pixels.
              </p>

              <p className="text-gray-700">
                You can block or delete cookies in your browser settings. You
                can opt out of Google Analytics at{" "}
                <ContactLink href="https://tools.google.com/dlpage/gaoptout">
                  https://tools.google.com/dlpage/gaoptout
                </ContactLink>{" "}
                and manage ad personalization at{" "}
                <ContactLink href="https://adssettings.google.com">
                  https://adssettings.google.com
                </ContactLink>
                . Blocking cookies may affect some Site features.
              </p>
            </PolicySection>

            {/* 6. Information sharing */}
            <PolicySection title="6. How We Share Information">
              <p className="text-gray-700">
                We do not sell your personal information. We share it only as
                follows:
              </p>

              <BulletList
                items={[
                  <>
                    <span className="font-semibold">
                      Service providers:
                    </span>{" "}
                    Providers that help us run our business, such as website
                    hosting, CRM and marketing automation, form, chat, and
                    scheduling tools, email and SMS delivery, analytics, and
                    AI-assisted productivity tools. They may use the
                    information only to provide services to us.
                  </>,
                  <>
                    <span className="font-semibold">
                      Our personnel and contractors:
                    </span>{" "}
                    Including team members who may be located outside the
                    United States, under confidentiality obligations.
                  </>,
                  <>
                    <span className="font-semibold">
                      Legal and safety reasons:
                    </span>{" "}
                    When required by law, subpoena, or court order, or to
                    protect our rights, users, or others.
                  </>,
                  <>
                    <span className="font-semibold">Business transfers:</span>{" "}
                    Such as a merger, acquisition, or sale of assets, subject
                    to this policy.
                  </>,
                  <>
                    <span className="font-semibold">With your consent:</span>{" "}
                    Or at your direction.
                  </>,
                ]}
              />
            </PolicySection>

            {/* 7. Retention */}
            <PolicySection title="7. Data Retention">
              <p className="text-gray-700">
                We keep personal information only as long as needed for the
                purposes in this policy, including to maintain business
                records, resolve disputes, and meet legal requirements. When
                it is no longer needed, we delete or de-identify it.
              </p>
            </PolicySection>

            {/* 8. Security */}
            <PolicySection title="8. Data Security">
              <p className="text-gray-700">
                We use reasonable administrative, technical, and physical
                safeguards, including access controls and encryption in
                transit, to protect personal information. No method of
                transmission or storage is completely secure, so we cannot
                guarantee absolute security.
              </p>
            </PolicySection>

            {/* 9. Choices and rights */}
            <PolicySection title="9. Your Choices and Rights">
              <BulletList
                items={[
                  <>
                    <span className="font-semibold">Marketing emails:</span>{" "}
                    Use the unsubscribe link in any email.
                  </>,
                  <>
                    <span className="font-semibold">Text messages:</span>{" "}
                    Reply STOP.
                  </>,
                  <>
                    <span className="font-semibold">
                      Access, correction, and deletion:
                    </span>{" "}
                    You may ask to access, correct, or delete the personal
                    information we hold about you.
                  </>,
                ]}
              />

              <p className="text-gray-700">
                Depending on your state of residence, you may have additional
                rights under state privacy laws, such as the right to know
                what we collect, to opt out of targeted advertising, and not
                to be discriminated against for exercising your rights. To
                make a request, contact us using the details below. We may
                need to verify your identity before acting on a request, and
                we will respond within the time required by law.
              </p>
            </PolicySection>

            {/* 10. International visitors */}
            <PolicySection title="10. International Visitors">
              <p className="text-gray-700">
                The Site is intended for users in the United States. If you
                visit from another country, your information will be
                processed in the United States and in other countries where
                our service providers and team members operate. Data
                protection laws there may differ from those in your country.
              </p>
            </PolicySection>

            {/* 11. Children's privacy */}
            <PolicySection title="11. Children's Privacy">
              <p className="text-gray-700">
                The Site is not directed to anyone under 18. We do not
                knowingly collect personal information from children under
                13. If we learn that we have, we will delete it promptly.
              </p>
            </PolicySection>

            {/* 12. Third-party websites */}
            <PolicySection title="12. Third-Party Websites">
              <p className="text-gray-700">
                The Site may link to third-party websites and social media
                pages. We are not responsible for their privacy practices.
                Please review their privacy policies.
              </p>
            </PolicySection>

            {/* 13. Policy updates */}
            <PolicySection title="13. Changes to This Policy">
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                post the updated policy on this page and change the
                &quot;Last updated&quot; date above.
              </p>
            </PolicySection>

            {/* 14. Contact */}
            <PolicySection title="14. Contact Us">
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, contact us:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Company:</span> AdvanceEdge
                  LLC
                </li>
                <li>
                  <span className="font-semibold">Address:</span> 1008
                  Hamilton St, Immokalee, FL 34142, United States
                </li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <ContactLink href="mailto:info@advanceedgellc.com">
                    info@advanceedgellc.com
                  </ContactLink>
                </li>
                <li>
                  <span className="font-semibold">Phone:</span>{" "}
                  <ContactLink href="tel:+18329377738">
                    832-937-7738
                  </ContactLink>
                </li>
              </ul>
            </PolicySection>
          </div>
        </div>
      </section>
    </main>
  );
}