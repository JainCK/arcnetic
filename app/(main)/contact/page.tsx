import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/forms/contact-form";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Arcnetic - Get in Touch",
  description:
    "Contact Arcnetic for your software development and technology consulting needs. We have offices in India and Canada to serve you better.",
  keywords: [
    "contact",
    "Arcnetic",
    "software development",
    "technology consulting",
    "India",
    "Canada",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's
            discuss your project and explore how we can help you achieve your
            goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-muted-foreground">
              Visit us at our locations in India and Canada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* India Office */}
            <Card className="shadow-lg border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-card-foreground">
                  <Globe className="w-6 h-6 text-primary" />
                  India Office (Headquarters)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">
                      Arcnetic Technologies Pvt Ltd
                    </p>
                    <p className="text-muted-foreground">
                      123 Tech Park, Sector 5<br />
                      Electronic City, Bangalore
                      <br />
                      Karnataka 560100, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    +91 80 4567 8900
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    india@arcnetic.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Mon - Fri: 9:00 AM - 6:00 PM IST
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Canada Office */}
            <Card className="shadow-lg border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-card-foreground">
                  <Globe className="w-6 h-6 text-primary" />
                  Canada Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">
                      Arcnetic Technologies Inc
                    </p>
                    <p className="text-muted-foreground">
                      456 Innovation Drive, Suite 200
                      <br />
                      Toronto Tech Hub
                      <br />
                      Toronto, ON M5V 3A8, Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+1 416 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    canada@arcnetic.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Mon - Fri: 9:00 AM - 5:00 PM EST
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border bg-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-card-foreground">
                Find Our India Office
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9064734086!2d77.49085452148635!3d12.954069466482117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Electronic City, Bangalore - Our technology hub in India
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Arcnetic to deliver
            exceptional technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@arcnetic.com"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Email Us Directly
            </a>
            <a
              href="tel:+918045678900"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground border-2 border-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
