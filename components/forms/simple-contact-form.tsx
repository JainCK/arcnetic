"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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
      <div className="text-center py-12">
        <div className="text-green-600 font-semibold text-xl mb-4">
          Thank you for your message!
        </div>
        <p className="text-muted-foreground">
          We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="First Name"
            className="h-12"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Last Name"
            className="h-12"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          placeholder="Business Email"
          type="email"
          className="h-12"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Company Name"
          className="h-12"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Describe your business challenge and goals..."
          className="min-h-[120px] resize-none"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button
          className="w-full h-12 text-lg font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
