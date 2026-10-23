import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import NewsletterForm from "@/components/NewsletterForm";

/* Stable TikTok SVG (hydration-safe) */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M21 8.5a6.5 6.5 0 0 1-4.3-1.6v8.6a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v2.9a2.5 2.5 0 1 0 1.8 2.4V2h2.8c.2 1.3.9 2.6 2 3.5a6.4 6.4 0 0 0 2 1z" />
    </svg>
  );
}

const socialLinks = [
  {
    type: "icon",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/advanceedge-solutions/",
    label: "AdvanceEdge on LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
  {
    type: "icon",
    Icon: Facebook,
    href: "https://www.facebook.com/advanceedgellc",
    label: "AdvanceEdge on Facebook",
    color: "hover:bg-[#4267B2]",
  },
  {
    type: "icon",
    Icon: Instagram,
    href: "https://www.instagram.com/advanceedge_/",
    label: "AdvanceEdge on Instagram",
    color: "hover:bg-[#E4405F]",
  },
  {
    type: "tiktok",
    href: "https://www.tiktok.com/@advanceedge",
    label: "AdvanceEdge on TikTok",
    color: "hover:bg-black",
  },
] as const;

/* Every live service page, so visitors and Google can reach them from any page */
const serviceLinks = [
  { href: "/services/intake-leaders/contact-center-intake-specialists", label: "Contact Center & Intake Specialists" },
  { href: "/services/intake-leaders/case-qualification", label: "Case Qualification" },
  { href: "/services/litigation-teams/medical-record-retrieval", label: "Medical Record Retrieval" },
  { href: "/services/litigation-teams/medical-record-review", label: "Medical Record Review" },
  { href: "/services/litigation-teams/litigation-support-back-office", label: "Litigation Support & Back Office" },
  { href: "/services/firm-owners-coos/virtual-legal-agents", label: "Virtual Legal Agents" },
  { href: "/services/firm-owners-coos/case-acquisition", label: "Case Acquisition" },
  { href: "/services/firm-owners-coos/accounting-trust-bookkeeping", label: "Accounting & Trust Bookkeeping" },
  { href: "/services/firm-owners-coos/digital-marketing", label: "Law Firm Digital Marketing" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/resources/blog", label: "Blog" },
  { href: "/book-a-call", label: "Book a Call" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0d1e] text-white relative overflow-hidden">
      <CTASection />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-10 md:pt-16 pb-6">
          {/* Logo + socials */}
          <div>
            <Link href="/" className="inline-block mb-6" aria-label="AdvanceEdge home">
              <Image
                src="/footer-logo-AE.webp"
                alt="AdvanceEdge logo"
                width={176}
                height={80}
                className="h-auto w-44"
              />
            </Link>

            <p className="font-dm text-gray-400 mb-6">
              Legal intake and operations partner for modern law firms.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${item.color}`}
                >
                  {item.type === "tiktok" ? (
                    <TikTokIcon className="text-white" />
                  ) : (
                    <item.Icon size={18} className="text-white" aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-marcellus text-xl mb-6">Services</h3>
            <ul className="space-y-3 font-dm text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF9A28] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company + contact */}
          <div>
            <h3 className="font-marcellus text-xl mb-6">Company</h3>
            <ul className="space-y-3 font-dm text-gray-300 mb-8">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF9A28] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-marcellus text-xl mb-6">Connect with Us</h3>
            <address className="not-italic">
              <ul className="space-y-3 font-dm text-gray-400">
                <li>
                  <a
                    href="mailto:info@advanceedgellc.com"
                    className="flex items-center gap-2 hover:text-[#FF9A28] break-all"
                  >
                    <Mail className="w-5 h-5 shrink-0 text-[#FF9A28]" aria-hidden="true" />
                    info@advanceedgellc.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18329377738"
                    aria-label="Call AdvanceEdge at 832-937-7738"
                    className="flex items-center gap-2 hover:text-[#FF9A28]"
                  >
                    <Phone className="w-5 h-5 shrink-0 text-[#FF9A28]" aria-hidden="true" />
                    832-937-7738
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1008+Hamilton+St,+Immokalee,+FL+34142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[#FF9A28]"
                  >
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#FF9A28]" aria-hidden="true" />
                    <span>
                      1008 Hamilton St
                      <br />
                      Immokalee, FL 34142
                      <br />
                      United States
                    </span>
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-marcellus text-xl mb-6">Our Newsletter</h3>
            <p className="font-dm text-gray-400 mb-4">
              Practical intake and operations tips for law firms, straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 pb-10 text-sm text-gray-400 flex flex-col gap-2 md:flex-row md:items-center justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="inline-block py-3 hover:text-[#FF9A28]">
              AdvanceEdge LLC
            </Link>
            . All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="inline-block py-3 hover:text-[#FF9A28]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="inline-block py-3 hover:text-[#FF9A28]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}