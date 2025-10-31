"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { usePublicConfig } from "@/hooks/usePublicConfig";
import Link from "next/link";

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

export function ContactSummary() {
  const { config } = usePublicConfig();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: isMobile ? 0.2 : 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair">
              Ready to Transform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
              Let's discuss how we can accelerate your business growth with
              cutting-edge software solutions.
            </p>
            {/* --- NEW CTA LINK --- */}
            <div className="mt-4">
              <Link href="/contact" className="text-primary hover:underline">
                view our full contact details and locations
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8 font-playfair">
                  Let's Connect
                </h3>
                <div className="space-y-8">
                  {/* India Section */}
                  <div>
                    <h4 className="text-xl font-semibold text-primary font-playfair mb-4">
                      India
                    </h4>
                    <motion.div
                      className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                      whileHover={isMobile ? {} : { scale: 1.01 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center space-x-3">
                          {/* <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium font-space-grotesk text-sm">
                              Email
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {config?.contact.email || "support@arcnetic.com"}
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="w-px h-8 bg-border hidden sm:block"></div> */}
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium font-space-grotesk text-sm">
                              Phone
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {config?.contact.phone || "+91-7558952771"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Canada Section */}
                  <div>
                    <h4 className="text-xl font-semibold text-primary font-playfair mb-4">
                      Canada
                    </h4>
                    <motion.div
                      className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                      whileHover={isMobile ? {} : { scale: 1.01 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center space-x-3">
                          {/* <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium font-space-grotesk text-sm">
                              Email
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {config?.contact.email || "support@arcnetic.com"}
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="w-px h-8 bg-border hidden sm:block"></div> */}
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium font-space-grotesk text-sm">
                              Phone
                            </div>
                            <div className="text-muted-foreground text-sm">
                              Coming Soon
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">
                    Start Your Transformation
                  </CardTitle>
                  <CardDescription className="text-base font-space-grotesk">
                    Tell us about your vision and we'll provide a comprehensive
                    solution strategy within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {sent ? (
                    <div className="text-green-600 font-semibold text-center py-8">
                      Thank you! We'll be in touch soon.
                    </div>
                  ) : (
                    <>
                      {error && (
                        <div className="text-red-500 text-center mb-4 font-space-grotesk">
                          {error}
                        </div>
                      )}
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="First Name"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                          />
                          <Input
                            placeholder="Last Name"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Input
                          placeholder="Business Email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          placeholder="Company Name"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                        />
                        <Textarea
                          placeholder="Describe your business challenge..."
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                        <Button
                          className="w-full h-12 text-lg"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            "Sending..."
                          ) : (
                            <>
                              Get Your Strategy Session{" "}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
