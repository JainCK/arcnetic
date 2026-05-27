"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { event } from "@/lib/analytics";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Arcnetic/@9.9629517,76.2986697,17z/data=!3m1!4b1!4m6!3m5!1s0x3b08733b6ee513b3:0x50318f647a0c9b6d!8m2!3d9.9629517!4d76.3012446!16s%2Fg%2F11y3v5m1rq";

async function sendContactEmail(data: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Failed to send email. Please try again."
    );
  }
  return response.json();
}

export function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mapHovered, setMapHovered] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(null);
    try {
      const parts = form.fullName.trim().split(" ");
      const firstName = parts[0] || "";
      const lastName = parts.slice(1).join(" ") || "";

      await sendContactEmail({
        firstName,
        lastName,
        email: form.email,
        company: form.company,
        message: form.message,
      });
      setSent(true);
      event({ action: "submit_success", category: "form", label: "contact-form" });
      setForm({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      event({ action: "submit_error", category: "form", label: "contact-form" });
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ─────────────────────────────────────────
              LEFT COLUMN: Contact info + Map
          ───────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-8">

            {/* Title + description */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white font-playfair leading-tight">
                Contact us
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed font-space-grotesk max-w-sm">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
            </div>

            {/* Contact links row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-space-grotesk text-white/45">
              <a
                href="mailto:support@arcnetic.com"
                className="hover:text-white transition-colors duration-200"
              >
                support@arcnetic.com
              </a>
              <span className="text-white/20">•</span>
              <a
                href="tel:+917558952771"
                className="hover:text-white transition-colors duration-200"
              >
                +91 7558 952 771
              </a>
              <span className="text-white/20">•</span>
              <a
                href="mailto:aswin.p@arcnetic.com"
                className="hover:text-white transition-colors duration-200"
              >
                aswin.p@arcnetic.com
              </a>
            </div>

            {/* ── MAP CARD ── */}
            <div
              className="relative rounded-2xl overflow-hidden transition-all duration-300"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
              style={{
                height: 280,
                border: mapHovered
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: mapHovered
                  ? "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.6)"
                  : "0 0 0 1px rgba(255,255,255,0.03), 0 24px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* Dark-styled Google Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.9443487481985!2d76.29866968062858!3d9.962951712250177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08733b6ee513b3%3A0x50318f647a0c9b6d!2sArcnetic!5e0!3m2!1sen!2sin!4v1757759832372!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="transition-all duration-500 ease-in-out"
                style={{
                  border: 0,
                  filter: mapHovered
                    ? "invert(90%) hue-rotate(180deg) saturate(1.2) brightness(0.95)"
                    : "invert(92%) hue-rotate(180deg) saturate(0.3) brightness(0.8)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Vignette edge overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.55)",
                  opacity: mapHovered ? 0.35 : 1,
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="sticky top-32 w-full">
              {/* Elegant Open-Bottom Fading Card */}
              <div
                className="rounded-t-[36px] rounded-b-none overflow-hidden w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
                style={{
                  background: "linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.9) 50%, rgba(19, 19, 19, 0.4) 80%, rgba(19, 19, 19, 0) 100%)",
                }}
              >
                {/* Inner Container with Glow & Grid */}
                <div
                  className="p-8 md:p-10 relative overflow-hidden"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(255, 255, 255, 0.08) 0%, rgba(14, 14, 14, 0) 65%)",
                  }}
                >
                  {/* Top-right decorative dot-grid */}
                  <div
                    className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                      opacity: 0.8,
                      maskImage:
                        "radial-gradient(circle at top right, black 25%, transparent 80%)",
                    }}
                  />

                  {sent ? (
                    /* ── Success State ── */
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.2)",
                        }}
                      >
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-playfair text-white mb-2">
                        Message Received!
                      </h3>
                      <p className="text-white/40 font-space-grotesk text-sm mb-8">
                        We'll review your inquiry and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="text-sm font-space-grotesk text-white/40 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    /* ── Form ── */
                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                      {error && (
                        <div
                          className="text-red-400 text-sm p-3 rounded-xl font-space-grotesk"
                          style={{
                            background: "rgba(239,68,68,0.07)",
                            border: "1px solid rgba(239,68,68,0.18)",
                          }}
                        >
                          {error}
                        </div>
                      )}

                      {/* Full Name */}
                      <FormField
                        label="Full name"
                        name="fullName"
                        value={form.fullName}
                        placeholder="John Doe"
                        onChange={handleChange}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        focused={focusedField === "fullName"}
                        required
                      />

                      {/* Email Address */}
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        placeholder="support@arcnetic.com"
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        focused={focusedField === "email"}
                        required
                      />

                      {/* Company */}
                      <FormField
                        label="Company"
                        name="company"
                        value={form.company}
                        placeholder="Arcnetic PVT LTD"
                        onChange={handleChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        focused={focusedField === "company"}
                      />

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-neutral-200 font-inter">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          placeholder="Type your message here"
                          className="w-full resize-none rounded-xl px-4 py-3 text-sm font-inter placeholder:text-neutral-500 text-white outline-none transition-all duration-200"
                          style={{
                            background: "#161616",
                            border:
                              focusedField === "message"
                                ? "1px solid rgba(255,255,255,0.18)"
                                : "1px solid rgba(255,255,255,0.07)",
                          }}
                        />
                      </div>

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          id="contact-submit-btn"
                          disabled={loading}
                          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold font-inter transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            background: "#161616",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#ffffff",
                          }}
                          onMouseEnter={(e) => {
                            if (!loading) {
                              const el = e.currentTarget as HTMLButtonElement;
                              el.style.background = "#222222";
                              el.style.borderColor = "rgba(255,255,255,0.15)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.background = "#161616";
                            el.style.borderColor = "rgba(255,255,255,0.08)";
                          }}
                        >
                          {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Reusable input field component ─── */
interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  focused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

function FormField({
  label,
  name,
  value,
  placeholder,
  type = "text",
  required,
  focused,
  onChange,
  onFocus,
  onBlur,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-neutral-200 font-inter">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className="w-full h-11 rounded-xl px-4 text-sm font-inter placeholder:text-neutral-500 text-white outline-none transition-all duration-200"
        style={{
          background: "#161616",
          border: focused
            ? "1px solid rgba(255,255,255,0.18)"
            : "1px solid rgba(255,255,255,0.07)",
        }}
      />
    </div>
  );
}