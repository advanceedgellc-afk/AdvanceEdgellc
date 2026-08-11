"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle, Clock } from "lucide-react";
import StatsSectionCountdown from "@/components/contact/StatsSectionCountdown";
import MapSection from "@/components/contact/MapSection";
import IndustryExpertiseSection from "@/components/About/IndustryExpertiseSection";
import GhlContactForm from "@/components/forms/GhlContactForm";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0d1e] via-[#1a1d2e] to-[#0a0d1e] text-white h-[400px] md:h-[500px] flex items-center pt-24 content-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-dm text-sm font-semibold mb-6 border border-orange-500/30">
            GET IN TOUCH
          </div>
          <h1 className="font-marcellus text-5xl md:text-5xl mb-6">Contact Us</h1>
          <p className="font-dm text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help transform your legal practice with innovative solutions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="font-marcellus text-4xl mb-6 text-gray-800">Get in Touch</h2>
              <p className="font-dm text-lg text-gray-600 mb-12 leading-relaxed">
                Have questions about our services? We're here to help. Reach out to us and
                we'll respond as soon as possible.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-marcellus text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <a href="mailto:info@advanceedgellc.com" className="font-dm text-lg text-gray-600 hover:text-orange-500 transition-colors">
                      info@advanceedgellc.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-marcellus text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <a href="tel:8329377738" className="font-dm text-lg text-gray-600 hover:text-orange-500 transition-colors">
                      832.937.7738
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-marcellus text-xl font-semibold text-gray-800 mb-2">Office Location</h3>
                    <p className="font-dm text-lg text-gray-600">
                      1008 Hamilton St<br />
                      Immokalee, FL 34142<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 pt-4 border-t border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-marcellus text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <p className="font-dm text-lg text-gray-600">
                      Monday - Sunday<br />
                      9:00 AM - 8:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100">
<GhlContactForm/>
            </div>
          </div>
        </div>
      </section>
<IndustryExpertiseSection/>
      <StatsSectionCountdown />
      <MapSection />
    </main>
  );
}
