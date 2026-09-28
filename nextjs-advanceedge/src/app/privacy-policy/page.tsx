// app/privacy-policy/page.tsx

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0d1e] text-white">
      {/* Hero section */}
      <section className="relative  h-[400px]  border-b border-white/10 flex items-center content-center pt-24 pb-2">
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-marcellus text-center">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16 bg-white text-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto font-dm text-sm sm:text-base leading-relaxed space-y-8">
            {/* Heading + intro */}
            <header className="space-y-2">
              <h2 className="text-2xl font-marcellus">
                Privacy Policy for AdvanceEdge LLC
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Last updated:</span> [Insert Date]
              </p>
              <p className="text-gray-700">
                Welcome to AdvanceEdge LLC (“we”, “us”, “our”). Your privacy is
                important to us. This Privacy Policy explains how we collect,
                use, disclose, and protect your personal information when you
                visit and interact with our website{" "}
                <Link
                  href="https://advanceedgellc.com/"
                  className="text-[#FF7A1A] hover:underline break-all"
                >
                  https://advanceedgellc.com/
                </Link>{" "}
                (the “Site”).
              </p>
            </header>

            {/* 1. Information we collect */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                1. Information We Collect
              </h3>
              <p className="text-gray-700">
                We may collect personal information that you voluntarily provide
                to us when you use our Site, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <span className="font-semibold">Contact information:</span>{" "}
                  Name, email address, phone number (for example, when you
                  submit a contact form).
                </li>
                <li>
                  <span className="font-semibold">Usage data:</span>{" "}
                  Information about how you use the Site, such as pages you
                  visit, time spent, and your IP address.
                </li>
                <li>
                  <span className="font-semibold">Device &amp; browser data:</span>{" "}
                  Browser type, operating system, and device identifiers.
                </li>
                <li>
                  <span className="font-semibold">
                    Cookies &amp; tracking technologies:
                  </span>{" "}
                  Information collected through cookies and similar tracking
                  technologies.
                </li>
              </ul>
            </section>

            {/* 2. How we use your info */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-700">
                We use the information we collect for purposes such as:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Providing, maintaining, improving, and personalizing our Site.
                </li>
                <li>Responding to your inquiries or customer service requests.</li>
                <li>
                  Sending updates or marketing communications if you opt in.
                </li>
                <li>
                  Monitoring and analyzing usage to improve user experience.
                </li>
                <li>
                  Complying with legal obligations and preventing fraud.
                </li>
              </ul>
            </section>

            {/* 3. Cookies */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                3. Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700">
                We use cookies and similar technologies to collect information
                about your interaction with the Site. Cookies help us:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Recognize your device on return visits.</li>
                <li>Analyze Site usage and performance.</li>
                <li>Deliver targeted content and ads (if applicable).</li>
              </ul>
              <p className="text-gray-700">
                You can choose to disable cookies in your browser settings, but
                this may affect your ability to use certain features of the
                Site.
              </p>
            </section>

            {/* 4. Third-party services */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">4. Third-Party Services</h3>
              <p className="text-gray-700">
                We may use third-party services, such as analytics or marketing
                tools, that may access your data as part of their services.
                These providers have their own privacy policies that govern
                their data practices.
              </p>
              <p className="text-gray-700">Examples may include:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Google Analytics for tracking usage data.</li>
                <li>Third-party form or chat tools.</li>
                <li>Email marketing platforms.</li>
              </ul>
              <p className="text-gray-700">
                We do not control the privacy policies or practices of these
                third parties.
              </p>
            </section>

            {/* 5. Data sharing */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                5. Data Sharing and Disclosure
              </h3>
              <p className="text-gray-700">
                We do not sell your personal data to third parties. We may share
                your information with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Service providers who help operate, maintain, or improve the
                  Site.
                </li>
                <li>
                  Legal authorities, if required by law, court order, or to
                  protect our rights.
                </li>
                <li>
                  Entities involved in a business transaction, such as a merger,
                  acquisition, or sale of assets.
                </li>
              </ul>
            </section>

            {/* 6. Security */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">6. Security</h3>
              <p className="text-gray-700">
                We implement reasonable technical and organizational measures to
                protect the personal information we collect. However, no method
                of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. International users */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">7. International Users</h3>
              <p className="text-gray-700">
                If you are visiting the Site from outside the United States,
                including the European Union, you acknowledge that your
                information may be transferred to, stored in, and processed in
                the United States, where data protection laws may differ from
                those in your jurisdiction.
              </p>
              <p className="text-gray-700">
                We may update this policy to reflect additional requirements
                under applicable international privacy laws.
              </p>
            </section>

            {/* 8. Your rights */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">8. Your Rights</h3>
              <p className="text-gray-700">
                Depending on your location, you may have certain rights regarding
                your personal information, such as:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Accessing the personal data we hold about you.</li>
                <li>Requesting correction or deletion of your information.</li>
                <li>Withdrawing consent where processing is based on consent.</li>
              </ul>
              <p className="text-gray-700">
                To exercise your rights or submit a privacy-related request,
                please contact us using the details provided in the{" "}
                <span className="font-semibold">Contact Us</span> section below.
              </p>
            </section>

            {/* 9. Children */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">9. Children’s Privacy</h3>
              <p className="text-gray-700">
                Our Site is not intended for children under the age of 13, and
                we do not knowingly collect personal data from children under
                13. If we become aware that we have collected such information,
                we will take steps to delete it.
              </p>
            </section>

            {/* 10. Updates */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">10. Policy Updates</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. When we do,
                we will revise the “Last updated” date at the top of this page.
                Your continued use of the Site after any changes are posted
                constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* 11. Contact */}
            <section className="space-y-3 pb-4">
              <h3 className="text-xl font-marcellus">11. Contact Us</h3>
              <p className="text-gray-700">
                If you have questions or concerns about this Privacy Policy or
                our privacy practices, you can contact us at:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  📧 Email:{" "}
                  <Link
                    href="mailto:info@advancedgellc.com"
                    className="text-[#FF7A1A] hover:underline break-all"
                  >
                    info@advancedgellc.com
                  </Link>
                  
                </li>
                <li>
                  🌐 Website:{" "}
                  <Link
                    href="https://advanceedgellc.com/"
                    className="text-[#FF7A1A] hover:underline break-all"
                  >
                    https://advanceedgellc.com/
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
