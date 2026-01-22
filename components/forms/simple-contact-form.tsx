"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/analytics";

async function sendContactEmail(data: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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

export function SimpleContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      await sendContactEmail(form);
      setSent(true);
      event({
        action: "submit_success",
        category: "form",
        label: "contact-form",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Contact form submission error:", err);
      event({
        action: "submit_error",
        category: "form",
        label: "contact-form",
      });
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-20 px-8 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="text-3xl font-playfair text-white mb-4">
          Message Received.
        </div>
        <p className="text-white/50 font-space-grotesk">
          We will review your inquiry and respond within 24 hours.
        </p>
        <Button 
          variant="link" 
          onClick={() => setSent(false)}
          className="mt-8 text-primary font-space-grotesk"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20 font-space-grotesk text-sm">
          {error}
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/40 font-space-grotesk ml-1">First Name</label>
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all font-space-grotesk"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/40 font-space-grotesk ml-1">Last Name</label>
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all font-space-grotesk"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-space-grotesk ml-1">Business Email</label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all font-space-grotesk"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-space-grotesk ml-1">Company (Optional)</label>
          <Input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all font-space-grotesk"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-space-grotesk ml-1">Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="min-h-[150px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all font-space-grotesk"
          />
        </div>

        <Button
          className="w-full h-14 bg-white text-black hover:bg-white/90 font-playfair font-bold text-lg rounded-xl"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <ArrowRight className="h-5 w-5" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}