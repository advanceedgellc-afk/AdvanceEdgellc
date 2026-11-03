"use client";

import React, { useState } from "react";
import Link from "next/link";
import s from "./LeadForm.module.css";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
  AlertCircle,
  RefreshCw
} from "lucide-react";

// Professional legal services list
const SERVICES = [
  "Legal Intake & Contact Center",
  "Case Qualification & Retainers",
  "Medical Record Retrieval",
  "Medical Record Review & Summaries",
  "Litigation Support & Back Office",
  "Virtual Legal Assistants",
  "Case Acquisition & Paid Ads",
  "Accounting & Trust Bookkeeping",
  "Law Firm Digital Marketing",
  "Not sure yet"
];

type FormStatus = "idle" | "sending" | "success" | "error";

interface ProfessionalLeadFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  /** Prefix for field ids. Only change it if two forms are on the same page. */
  idPrefix?: string;
}

export default function LeadForm({
  className = "",
  title = "Tell us about your firm",
  subtitle = "Share a few details and our team will get back to you to set up a consultation call.",
  idPrefix = "lead-form",
}: ProfessionalLeadFormProps) {
  // Fixed ids (not useId) so the server HTML and the browser always match.
  const id = idPrefix;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false, // must start unchecked (SMS/A2P rules)
  });
  
  // Realtime client-side field validation indicators
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

      const payload = {
        name: data.get("name"),
        company: data.get("company"),
        email: data.get("email"),
        phone: data.get("phone"),
        service: selectedService || data.get("service"),
        message: data.get("message"),
        smsConsent: data.get("smsConsent") === "on",
        website: data.get("website"), // Honeypot field
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
      };

      const res = await fetch("/api/ghl-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let json: { success?: boolean; message?: string } = {};
      try {
        json = await res.json();
      } catch {
        json = {};
      }

      if (res.ok && json.success !== false) {
        setStatus("success");
      } else {
        throw new Error(json.message || "Failed to transmit message. Please try again or call our hotline.");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your connection.");
    }
  }

  const field = (
    name: "name" | "company" | "email" | "phone",
    label: string,
    Icon: typeof User,
    opts: { type: string; required?: boolean; placeholder: string; autoComplete: string; maxLength?: number; invalid?: boolean },
  ) => (
    <div>
      <label htmlFor={`${id}-${name}`} className={s.label}>
        {label} {opts.required && <span className={s.req}>*</span>}
      </label>
      <div className={s.wrap}>
        <Icon className={s.icon} aria-hidden="true" />
        <input
          id={`${id}-${name}`}
          name={name}
          type={opts.type}
          required={opts.required}
          maxLength={opts.maxLength}
          autoComplete={opts.autoComplete}
          value={formData[name]}
          onChange={handleInputChange}
          onBlur={() => handleBlur(name)}
          placeholder={opts.placeholder}
          aria-invalid={opts.invalid || undefined}
          className={s.input}
        />
        {opts.invalid && <AlertCircle className={s.alert} aria-hidden="true" />}
      </div>
    </div>
  );

  return (
    <div className={`${s.card} ${className}`}>
      <div aria-hidden="true" className={s.accent} />

      <div className={s.body}>
        {status === "success" ? (
          <div role="status" className={s.success}>
            <div className={s.successIcon}>
              <CheckCircle2 aria-hidden="true" />
            </div>
            <p className={s.successTitle}>Consultation Requested!</p>
            <p className={s.successText}>
              Thank you for reaching out. One of our Legal Operations Specialists will review your
              requirements and reach out within 1 business hour.
            </p>
            <div className={s.callBox}>
              <Phone aria-hidden="true" />
              <div>
                <p className={s.callLabel}>Need immediate assistance?</p>
                <a href="tel:+18329377738" className={s.callLink}>
                  Call (832) 937-7738
                </a>
              </div>
            </div>
            <button
              type="button"
              className={s.again}
              onClick={() => {
                setStatus("idle");
                setSelectedService("");
                setTouched({});
                setFormData({ name: "", company: "", email: "", phone: "", message: "", smsConsent: false });
              }}
            >
              <RefreshCw aria-hidden="true" />
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={s.header}>
              <div className={s.headerRow}>
                <span className={s.eyebrow}>Fast Response Guaranteed</span>
                <span className={s.confidential}>
                  <Lock aria-hidden="true" /> Confidential
                </span>
              </div>
              <p className={s.title}>{title}</p>
              <p className={s.subtitle}>{subtitle}</p>
            </div>

            <div className={s.grid}>
              {field("name", "Full Name", User, {
                type: "text", required: true, maxLength: 100, autoComplete: "name",
                placeholder: "e.g. Eleanor Vance", invalid: touched.name && !formData.name,
              })}
              {field("company", "Law Firm / Company", Building2, {
                type: "text", maxLength: 120, autoComplete: "organization", placeholder: "e.g. Vance & Partners LLP",
              })}
              {field("email", "Work Email", Mail, {
                type: "email", required: true, autoComplete: "email", placeholder: "eleanor@vance-law.com",
                invalid: touched.email && (!formData.email || !formData.email.includes("@")),
              })}
              {field("phone", "Direct Phone", Phone, {
                type: "tel", required: true, autoComplete: "tel", placeholder: "(555) 000-0000",
                invalid: touched.phone && !formData.phone,
              })}

              <div className={s.full}>
                <label htmlFor={`${id}-service`} className={s.label}>
                  What do you need help with?
                </label>
                <div className={s.wrap}>
                  <select
                    id={`${id}-service`}
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`${s.input} ${s.select}`}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {SERVICES.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={s.chevron} aria-hidden="true" />
                </div>
              </div>

              <div className={s.full}>
                <div className={s.labelRow}>
                  <label htmlFor={`${id}-message`} className={s.label}>
                    Project Details / Goals
                  </label>
                  <span className={s.counter}>{formData.message.length}/1000</span>
                </div>
                <div className={s.wrap}>
                  <MessageSquare className={s.iconTop} aria-hidden="true" />
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    rows={3}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your current intake volume, bottlenecks, or specific team requirements..."
                    className={`${s.input} ${s.textarea}`}
                  />
                </div>
              </div>
            </div>

            {/* Honeypot: hidden from people, bots fill it in */}
            <div aria-hidden="true" className={s.honeypot}>
              <label htmlFor={`${id}-website`}>Website</label>
              <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <label className={s.consent}>
              <input
                name="smsConsent"
                type="checkbox"
                checked={formData.smsConsent}
                onChange={handleInputChange}
                className={s.checkboxInput}
              />
              <span aria-hidden="true" className={`${s.checkbox} ${formData.smsConsent ? s.checkboxOn : ""}`}>
                {formData.smsConsent && <Check strokeWidth={3} />}
              </span>
              <span className={s.consentText}>
                I consent to receive text updates &amp; phone inquiries regarding this proposal. Message
                rates may apply. Opt-out anytime. View our <Link href="/privacy-policy">Privacy Policy</Link>{" "}
                and <Link href="/terms-of-service">Terms</Link>.
              </span>
            </label>

            {status === "error" && (
              <div role="alert" className={s.error}>
                <AlertCircle aria-hidden="true" />
                <span>{error}</span>
              </div>
            )}

            <button type="submit" disabled={status === "sending"} className={s.submit}>
              {status === "sending" ? (
                <>
                  <Loader2 className={s.spin} aria-hidden="true" />
                  Processing request...
                </>
              ) : (
                <>
                  Request consultation &amp; proposal
                  <ArrowRight className={s.arrow} aria-hidden="true" />
                </>
              )}
            </button>

            <div className={s.privacy}>
              <ShieldCheck aria-hidden="true" />
              <span>We value privacy. Your information is never sold or shared with third parties.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}