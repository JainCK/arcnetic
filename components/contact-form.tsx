// components/ContactForm.tsx
"use client"; // This component needs to be a Client Component

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// Function to send contact email to your backend API
async function sendContactEmail(data: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // If the server response is not OK (e.g., 400 or 500 status),
    // parse the error message from the backend and throw an error.
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Failed to send email. Please try again."
    );
  }

  // If response is OK (2xx status), it means the email was sent successfully from the backend.
  // You might not need to return anything if your API doesn't send back useful data.
  // For demonstration, returning JSON if the API sends it.
  return response.json();
}

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false); // Reset sent state on new submission attempt
    setError(null); // Clear any previous errors

    try {
      await sendContactEmail(form); // Attempt to send the email
      setSent(true); // If successful, set sent to true
      // Clear the form only on successful submission
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      // Catch any errors from sendContactEmail
      console.error("Contact form submission error:", err);
      // Set the error message to display to the user
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Always turn off loading, regardless of success or failure
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair">
              Ready to Transform?
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-primary to-secondary mx-auto mb-12 max-w-xs"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
              Let's discuss how we can accelerate your business growth with
              cutting-edge software solutions. Our enterprise experts are ready
              to architect your digital transformation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8 font-playfair">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium font-space-grotesk">
                        Business Inquiries
                      </div>
                      <div className="text-muted-foreground">
                        support@arcnetic.com
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium font-space-grotesk">
                        Direct Line
                      </div>
                      <div className="text-muted-foreground">
                        +91 (755) 895-2771
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 font-space-grotesk">
                  Follow Our Innovation
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-xl"
                        asChild
                      >
                        <a
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                      {error && ( // Display error message if there's one
                        <div className="text-red-500 text-center mb-4 font-space-grotesk">
                          {error}
                        </div>
                      )}
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <motion.div whileFocus={{ scale: 1.02 }}>
                            <Input
                              placeholder="First Name"
                              className="h-12"
                              name="firstName"
                              value={form.firstName}
                              onChange={handleChange}
                              required
                            />
                          </motion.div>
                          <motion.div whileFocus={{ scale: 1.02 }}>
                            <Input
                              placeholder="Last Name"
                              className="h-12"
                              name="lastName"
                              value={form.lastName}
                              onChange={handleChange}
                              required
                            />
                          </motion.div>
                        </div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            placeholder="Business Email"
                            type="email"
                            className="h-12"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </motion.div>
                        {/* Note: The 'phone' field was removed from the form state in your provided code,
                            so it's also removed here to match the form state. If you need it, add it back to the state. */}
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            placeholder="Company Name"
                            className="h-12"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Textarea
                            placeholder="Describe your business challenge and goals..."
                            className="min-h-[120px] resize-none"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            className="w-full h-12 text-lg bg-primary hover:from-primary/80 hover:to-secondary/80 font-space-grotesk font-semibold"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              "Sending..."
                            ) : (
                              <>
                                Get Your Strategy Session
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </motion.div>
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
