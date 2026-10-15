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

/* ✅ Stable TikTok SVG (hydration-safe) */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 8.5a6.5 6.5 0 0 1-4.3-1.6v8.6a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v2.9a2.5 2.5 0 1 0 1.8 2.4V2h2.8c.2 1.3.9 2.6 2 3.5a6.4 6.4 0 0 0 2 1z" />
    </svg>
  );
}

export default function Footer() {
  /* ✅ Clean social config */
  const socialLinks = [
    {
      type: "icon",
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/advanceedge-solutions/",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      type: "icon",
      Icon: Facebook,
      href: "https://www.facebook.com/advanceedgellc",
      label: "Facebook",
      color: "hover:bg-[#4267B2]",
    },
    {
      type: "icon",
      Icon: Instagram,
      href: "https://www.instagram.com/advanceedge_/#",
      label: "Instagram",
      color: "hover:bg-[#E4405F]",
    },
    {
      type: "tiktok",
      href: "https://www.tiktok.com/@advanceedge",
      label: "TikTok",
      color: "hover:bg-black",
    },
  ] as const;

  return (
    <footer className="bg-[#0a0d1e] text-white relative overflow-hidden">
      <CTASection />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-10 md:pt-16 pb-6">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/footer-logo-AE.webp" alt="AdvanceEdge Logo" width={176} height={80} className="h-auto w-44" />
            </Link>

            <p className="font-dm text-gray-400 mb-6">
              Legal intake and operations partner for modern law firms.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
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
                    <item.Icon size={18} className="text-white" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-marcellus text-xl mb-6">Services</h3>
            <ul className="space-y-3 font-dm">
              <li>
                <Link href="/services/intake-leaders/contact-center-intake-specialists" className="flex items-center gap-2 hover:text-[#FF9A28]">
                 
                 Contact Center & Intake Specialists
                </Link>
              </li>
              <li>
                <Link href="/services/litigation-teams/medical-record-review" className="flex items-center gap-2 hover:text-[#FF9A28]">
                  
                 Medical Record Review
                </Link>
              </li>
              <li>
                <Link href="/services/firm-owners-coos/virtual-legal-agents" className="flex items-center gap-2 hover:text-[#FF9A28]">
                  
                  Virtual Legal Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-marcellus text-xl mb-6">Connect with Us</h3>
            <ul className="space-y-3 font-dm text-gray-400">
              <li>
                <a href="mailto:info@advanceedgellc.com" className="flex items-center gap-2 hover:text-[#FF9A28]">
                  <Mail className="w-5 h-5 text-[#FF9A28]" />
                  info@advanceedgellc.com
                </a>
              </li>
              <li>
                <a href="tel:+18329377738" aria-label="Call AdvanceEdge at 832-937-7738" className="flex items-center gap-2 hover:text-[#FF9A28]">
                  <Phone className="w-5 h-5 text-[#FF9A28]" />
                  832-937-7738
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=1008+Hamilton+St,+Immokalee,+FL+34142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-[#FF9A28]"
                >
                  <MapPin className="w-5 h-5 text-[#FF9A28]" />
                  <span>
                    1008 Hamilton St
Immokalee, FL 34142
United States
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-marcellus text-xl mb-6">Our Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 pb-10 text-sm text-gray-400 flex flex-col gap-2 md:flex-row md:items-center justify-between">
          <p>© {new Date().getFullYear()} <Link href="/" className="inline-block py-3 hover:text-[#FF9A28]">AdvanceEdge LLC.</Link> All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="inline-block py-3 hover:text-[#FF9A28]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="inline-block py-3 hover:text-[#FF9A28]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
