'use client';


import Link from "next/link";
import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";  // ← UPDATED: Use fa6 instead of fa
import CTASection from "@/components/CTASection";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });


  const handleSubscribe = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();


    // Email validation
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });


      const data = await response.json();


      if (response.ok) {
        setMessage({
          type: "success",
          text: "✓ Successfully subscribed! Check your email for updates.",
        });
        setEmail("");
        // Clear message after 5 seconds
        setTimeout(() => setMessage({ type: "", text: "" }), 5000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
      console.error("Newsletter subscription error:", error);
    } finally {
      setLoading(false);
    }
  };


  // ✅ Social links with proper icons and colors
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/advanceedge-solutions/",
      label: "LinkedIn",
      color: 'hover:bg-[#0A66C2]',
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/advanceedgellc",
      label: "Facebook",
      color: 'hover:bg-[#4267B2]',
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/advanceedge_/#",
      label: "Instagram",
      color: 'hover:bg-[#E4405F]',
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@advanceedge",
      label: "TikTok",
      color: 'hover:bg-[#000000]',
    },
  ];


  return (
    <footer className="bg-[#0a0d1e] text-white relative overflow-hidden">
      <CTASection />


      <div className="container mx-auto px-4  relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pt-10 md:pt-16 pb-2 md:pb-5 ">
          {/* Logo Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <img
                  src="/Logo-ae.webp"
                  alt="Advance Edge Logo"
                  className="w-44 h-auto object-contain"
                />
              </Link>
            </div>


            <p className="font-dm text-gray-400 text-base mb-6 leading-relaxed">
              Empowering legal professionals with innovative solutions and
              expertise since 2013.
            </p>


            {/* ✅ UPDATED: Social icons with proper react-icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>


          {/* Services */}
          <div>
            <h4 className="font-marcellus text-xl mb-6">Our Services</h4>
            <ul className="space-y-3 font-dm">
              {[
                ["Case Acquisition", "/services/masstort-case-acquisition-services"],
                ["Virtual Agents", "/services/virtual-legal-agents-services"],
                ["Digital Solutions", "/services/legal-digital-marketing-solutions"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="text-gray-400 transition-colors hover:text-[#FF9A28]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


         {/* Contact Info */}
            <div>
              <h4 className="font-marcellus text-xl mb-6">Connect with Us</h4>


              <ul className="space-y-3 font-dm text-gray-400">
                <li>
                  <a
                    href="mailto:info@advancedgellc.com"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[#FF9A28]"
                  >
                    <FaEnvelope className="text-[#FF9A28] transition-transform group-hover:-translate-y-0.5" />
                    <span>info@advancedgellc.com</span>
                  </a>
                </li>


                <li>
                  <a
                    href="tel:18329377738"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[#FF9A28]"
                  >
                    <FaPhone className="text-[#FF9A28] transition-transform group-hover:-translate-y-0.5" />
                    <span>832–937–7738</span>
                  </a>
                </li>


                <li>
                  <a
                    href="https://maps.google.com/?q=1008+Hamilton+St,+Immokalee,+FL+34142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[#FF9A28]"
                  >
                    <FaMapMarkerAlt className="text-[#FF9A28] transition-transform group-hover:-translate-y-0.5" />
                    <span>1008 Hamilton St, Immokalee,<br/> FL 34142</span>
                  </a>
                </li>
              </ul>
            </div>




          {/* Newsletter */}
          <div>
            <h4 className="font-marcellus text-xl mb-6">Our Newsletter</h4>
            <p className="font-dm text-gray-400 text-base mb-4">
              Subscribe to get the latest news & updates
            </p>


            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row w-full gap-1 lg:gap-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-dm text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9A28] w-full disabled:opacity-50"
                />


                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF9A28] hover:bg-[#e98820] disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-dm font-semibold transition-colors w-full sm:w-auto"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>


              {/* Success/Error Message */}
              {message.text && (
                <div
                  className={`px-4 py-3 rounded-lg font-dm text-sm transition-all duration-300 ${
                    message.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-200"
                      : "bg-red-500/20 border border-red-500/50 text-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-11">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-dm text-gray-400 text-sm">
              &copy; 2025 Advance Edge LLC. All rights reserved.
            </p>


            <div className="flex space-x-6 font-dm text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 transition-colors hover:text-[#FF9A28]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 transition-colors hover:text-[#FF9A28]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
