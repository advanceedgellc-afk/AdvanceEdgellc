'use client';

import Link from "next/link";
import { useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import CTASection from "@/components/CTASection";

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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "✓ Successfully subscribed! Check your email for updates.",
        });
        setEmail("");
        setTimeout(() => setMessage({ type: "", text: "" }), 5000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
              <img src="/Logo-ae.webp" alt="Advance Edge Logo" className="w-44" />
            </Link>

            <p className="font-dm text-gray-400 mb-6">
              Empowering legal professionals with innovative solutions and expertise since 2011.
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
            <h3 className="font-marcellus text-xl mb-6">Our Services</h3>
            <ul className="space-y-3 font-dm">
              {[
                ["Case Acquisition", "/services/masstort-case-acquisition-services"],
                ["Virtual Agents", "/services/virtual-legal-agents-services"],
                ["Digital Solutions", "/services/legal-digital-marketing-solutions"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link href={link} className="text-gray-400 hover:text-[#FF9A28]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-marcellus text-xl mb-6">Connect with Us</h3>
            <ul className="space-y-3 font-dm text-gray-400">
              <li>
                <a href="mailto:info@advancedgellc.com" className="flex items-center gap-2 hover:text-[#FF9A28]">
                  <Mail className="w-5 h-5 text-[#FF9A28]" />
                  info@advancedgellc.com
                </a>
              </li>
              <li>
                <a href="tel:18329377738" className="flex items-center gap-2 hover:text-[#FF9A28]">
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
                    1008 Hamilton St, Immokalee
                    <br /> FL 34142
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-marcellus text-xl mb-6">Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF9A28] hover:bg-[#e98820] rounded-lg py-3 font-semibold"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {message.text && (
                <div className={`text-sm rounded-lg px-4 py-2 ${
                  message.type === "success"
                    ? "bg-green-500/20 text-green-200"
                    : "bg-red-500/20 text-red-200"
                }`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2026 Advance Edge LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
