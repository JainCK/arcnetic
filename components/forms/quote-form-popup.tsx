"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/analytics";

async function sendQuoteRequest(data: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      subject: "Quote Request",
      formType: "quote",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Failed to send quote request. Please try again."
    );
  }
  return response.json();
}

interface QuoteFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteFormPopup({ isOpen, onClose }: QuoteFormPopupProps) {
  const [mounted, setMounted] = useState(false);
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

  // Check if component is mounted (for SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
      setSent(false);
      setError(null);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendQuoteRequest(form);
      setSent(true);
      event({
        action: "submit_success",
        category: "form",
        label: "quote-request",
      });
    } catch (err: any) {
      console.error("Quote form submission error:", err);
      event({
        action: "submit_error",
        category: "form",
        label: "quote-request",
      });
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || !isOpen) return null;

  const popupContent = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000]">
        {/* Full viewport backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal positioned under navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-background rounded-2xl shadow-2xl border border-border w-full max-w-md mx-4 max-h-[calc(100vh-6rem)] overflow-hidden z-[10001]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">
              Get Your Quote
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <div className="text-green-600 font-semibold text-lg mb-2">
                  Quote Request Sent!
                </div>
                <p className="text-muted-foreground mb-6">
                  We'll get back to you within 24 hours with a detailed quote.
                </p>
                <Button onClick={onClose} className="px-8">
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your project and we'll provide a detailed quote
                  within 24 hours.
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="h-10"
                    />
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="h-10"
                    />
                  </div>

                  <Input
                    placeholder="Business Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-10"
                  />

                  <Input
                    placeholder="Company Name"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="h-10"
                  />

                  <Textarea
                    placeholder="Describe your project requirements and goals..."
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="min-h-[80px] resize-none"
                  />

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1"
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={loading} className="flex-1">
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  // Use portal to render outside of navigation component
  return createPortal(popupContent, document.body);
}
