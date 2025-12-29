// app/terms-of-service/page.tsx  (adjust path to match your routing)

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0d1e] text-white">
     {/* Hero section */}
     <section className="relative  h-[400px]  border-b border-white/10 flex items-center content-center pt-24 pb-2">
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-marcellus text-center">
            Terms Of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16 bg-white text-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto font-dm text-sm sm:text-base leading-relaxed space-y-8">
            {/* Intro */}
            <header className="space-y-2">
              <h2 className="text-2xl font-marcellus">Terms of Service</h2>
              <p className="text-gray-700">
                <span className="font-semibold">Last Updated:</span> [Add Date]
              </p>
              <p className="text-gray-700">
                Welcome to AdvanceEdge LLC (“Company”, “we”, “us”, or “our”).
                These Terms of Service (“Terms”) govern your access to and use
                of our website{" "}
                <Link
                  href="https://advanceedgellc.com/"
                  className="text-[#FF7A1A] hover:underline break-all"
                >
                  https://advanceedgellc.com/
                </Link>{" "}
                (the “Website”). By accessing or using our Website, you agree to
                be bound by these Terms. If you do not agree, please do not use
                our Website.
              </p>
            </header>

            {/* 1. Use of the Website */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">1. Use of the Website</h3>
              <p className="text-gray-700">
                You agree to use this Website only for lawful purposes and in
                accordance with these Terms. You must not:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Use the Website in any way that violates applicable laws or
                  regulations.
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or data.
                </li>
                <li>
                  Interfere with or disrupt the security or functionality of the
                  Website.
                </li>
                <li>
                  Use the Website to transmit harmful, misleading, or fraudulent
                  content.
                </li>
              </ul>
            </section>

            {/* 2. Services Disclaimer */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">2. Services Disclaimer</h3>
              <p className="text-gray-700">
                AdvanceEdge LLC provides marketing, lead generation, digital
                solutions, and related consulting services. We do not guarantee
                specific business results, including but not limited to leads,
                revenue, or conversions, as results depend on many external
                factors. All services are provided on an “as-is” and
                “as-available” basis.
              </p>
            </section>

            {/* 3. Intellectual Property Rights */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                3. Intellectual Property Rights
              </h3>
              <p className="text-gray-700">
                All content on this Website, including text, graphics, logos,
                designs, code, and media, is the property of AdvanceEdge LLC or
                its licensors and is protected by copyright and intellectual
                property laws.
              </p>
              <p className="text-gray-700">You may not:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Copy, reproduce, modify, or distribute content without written
                  permission.
                </li>
                <li>
                  Use our branding, logos, or materials for commercial purposes
                  without authorization.
                </li>
              </ul>
            </section>

            {/* 4. User Submissions & Forms */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                4. User Submissions &amp; Forms
              </h3>
              <p className="text-gray-700">
                When you submit information through contact forms, booking
                forms, or other input fields:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  You confirm that the information provided is accurate and
                  lawful.
                </li>
                <li>
                  You grant us permission to contact you regarding our services.
                </li>
                <li>
                  You understand that submission does not create a contractual
                  relationship.
                </li>
              </ul>
            </section>

            {/* 5. Third-Party Tools & Links */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                5. Third-Party Tools &amp; Links
              </h3>
              <p className="text-gray-700">
                Our Website may include third-party tools, integrations, or
                links to external websites. We do not control or endorse these
                third parties and are not responsible for their content,
                policies, or practices. Use of third-party services is at your
                own risk.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, AdvanceEdge LLC shall
                not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Use or inability to use the Website.</li>
                <li>Errors, delays, or interruptions in service.</li>
                <li>Loss of data, profits, or business opportunities.</li>
              </ul>
            </section>

            {/* 7. Indemnification */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">7. Indemnification</h3>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless AdvanceEdge LLC, its
                employees, partners, and affiliates from any claims, damages,
                losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Your misuse of the Website.</li>
                <li>Your violation of these Terms.</li>
                <li>Your violation of any third-party rights.</li>
              </ul>
            </section>

            {/* 8. Termination */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">8. Termination</h3>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate access to the
                Website at any time, without notice, for conduct that violates
                these Terms or is harmful to our business or users.
              </p>
            </section>

            {/* 9. Privacy Policy */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">9. Privacy Policy</h3>
              <p className="text-gray-700">
                Your use of the Website is also governed by our Privacy Policy,
                which explains how we collect and use your data. Please review
                it carefully.
              </p>
            </section>

            {/* 10. Changes to These Terms */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">
                10. Changes to These Terms
              </h3>
              <p className="text-gray-700">
                We may update these Terms from time to time. Changes will be
                effective immediately upon posting on this page. Continued use
                of the Website constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section className="space-y-3">
              <h3 className="text-xl font-marcellus">11. Governing Law</h3>
              <p className="text-gray-700">
                These Terms shall be governed by and interpreted in accordance
                with the laws of the United States, without regard to conflict
                of law principles.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section className="space-y-3 pb-4">
              <h3 className="text-xl font-marcellus">
                12. Contact Information
              </h3>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  📧 Email:{" "}
                  <span className="font-semibold">
                  <Link
                    href="mailto:info@advancedgellc.com"
                    className="text-[#FF7A1A] hover:underline break-all"
                  >
                    info@advancedgellc.com
                  </Link>
                  </span>
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
