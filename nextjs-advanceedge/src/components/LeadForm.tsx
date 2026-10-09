"use client";
import { option } from "framer-motion/client";
import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10 space-y-3">
        <h4 className="text-2xl font-black">Case Submission Received</h4>
        <p className="text-sm text-slate-600">A senior attorney will call you back within 15 minutes.</p>
        <button onClick={() => setStatus("idle")} className="text-xs font-bold underline">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot, hidden from humans */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <input name="fullName" required placeholder="e.g. Robert Vance" className="legal-input w-full px-4 py-3 ..." />
      <input name="phoneNumber" type="tel" required placeholder="(555) 000-0000" className="legal-input w-full px-4 py-3 ..." />
      <input name="emailAddress" type="email" required placeholder="robert@example.com" className="legal-input w-full px-4 py-3 ..." />

      <select name="legalCategory" required defaultValue="" className="legal-input w-full px-4 py-3 ...">
        <option value="" disabled>Select Your Practice Area</option>
        <option value="Personal Injury">Personal Injury / Car Accident</option>
        <option value="Corporate & Business Litigation">Corporate & Business Litigation</option>
        <option value="Estate Planning, Trusts & Probate">Estate Planning, Trusts & Probate</option>
        <option value="Family & Matrimonial Law">Family & Matrimonial Law</option>
        <option value="Real Estate & Property Dispute">Real Estate & Property Dispute</option>
        <option value="Criminal Defense & Appeals">Criminal Defense & Appeals</option>
        <option value="Other Legal Inquiry">Other Legal Inquiry</option>
      </select>

      <textarea name="caseDescription" rows={3} placeholder="Tell us what happened..." className="legal-input w-full px-4 py-3 ... resize-none" />

      <button type="submit" disabled={status === "loading"} className="w-full bg-gold-500 ... disabled:opacity-60">
        {status === "loading" ? "Transmitting Confidential Case Data..." : "Request Confidential Case Review"}
      </button>

      {status === "error" && (
        <p className="text-xs text-rose-600 text-center">Something went wrong. Please call us at (800) 555-0199.</p>
      )}
    </form>
  );
}