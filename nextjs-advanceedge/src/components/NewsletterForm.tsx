"use client";

import { useState } from "react";

/** Footer newsletter sign-up. Split out so the rest of the footer stays server-rendered. */
export default function NewsletterForm() {
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

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
      <input
        type="email"
        aria-label="Email address"
        autoComplete="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#FF9A28] hover:bg-[#e98820] rounded-lg py-3 font-semibold text-[#0a0d1e]"
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
  );
}
