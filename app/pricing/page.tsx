import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowLeft,
  Mail,
  MessageCircle,
  Zap,
  Users,
  Scaling,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Affordable Software Development Pricing in India | Arcnetic",
  description:
    "Get transparent pricing for custom software, AI/ML solutions, and enterprise applications in India. Explore our flexible packages for startups and businesses.",
  openGraph: {
    title: "Affordable Software Development Pricing in India | Arcnetic",
    description:
      "Get transparent pricing for custom software, AI/ML solutions, and enterprise applications in India. Explore our flexible packages for startups and businesses.",
    type: "website",
    url: "https://www.arcnetic.com/pricing", // Assuming this is the URL
  },
  keywords: [
    "software development pricing india",
    "custom software cost",
    "enterprise software pricing",
    "ai development cost",
    "saas development pricing",
    "arcnetic pricing",
  ],
};

const pricingTiers = [
  {
    name: "Startup Package",
    price: "Starting at ₹25,000*",
    description:
      "Ideal for new businesses and startups needing a professional web application to launch their MVP.",
    features: [
      "Custom Web Application Development",
      "Mobile-Responsive Design",
      "Basic Database Integration",
      "Secure User Authentication",
      "Custom API Development",
      "3 Months of Technical Support",
      "Full Project Documentation",
    ],
    popular: false,
    ctaText: "Get a Quote",
  },
  {
    name: "Business Solution",
    price: "Starting at ₹50,000*",
    description:
      "A comprehensive software solution for growing businesses requiring advanced features and integrations.",
    features: [
      "Full-Stack Application Development",
      "Advanced Database Architecture",
      "Third-Party API Integrations",
      "Custom Admin Dashboard",
      "Analytics & Reporting Suite",
      "6 Months of Priority Support",
      "Application Performance Optimization",
      "Enhanced Security Implementation",
    ],
    popular: true,
    ctaText: "Get a Quote",
  },
  {
    name: "Enterprise Solution",
    price: "Custom Quote",
    description:
      "Bespoke, large-scale applications with AI/ML integration and dedicated infrastructure for enterprises.",
    features: [
      "Scalable Enterprise Architecture",
      "Custom AI/ML Model Integration",
      "Microservices-Based Design",
      "Managed Cloud Infrastructure (AWS/GCP)",
      "Advanced Security & Compliance",
      "12 Months of Dedicated Support",
      "Full DevOps & CI/CD Setup",
      "Real-time Performance Monitoring",
      "Unlimited Custom Integrations",
      "Dedicated Development Team",
    ],
    popular: false,
    ctaText: "Schedule a Consultation",
  },
];

const additionalServices = [
  {
    name: "AI & ML Implementation",
    price: "Quote Based",
    description:
      "Develop custom AI solutions, machine learning models, and process automation.",
  },
  {
    name: "Digital Transformation Strategy",
    price: "Quote Based",
    description:
      "End-to-end business digitization, legacy system modernization, and process automation.",
  },
  {
    name: "Ongoing Maintenance & Support",
    price: "Starting at ₹10,000*/month",
    description:
      "Proactive maintenance, security updates, and dedicated technical support plans.",
  },
  {
    name: "Cloud Migration Services",
    price: "Starting at ₹50,000*",
    description:
      "Seamless migration of your applications and data to cloud platforms like AWS or GCP.",
  },
];

const whyChooseUsData = [
  {
    icon: <Zap className="h-8 w-8 text-primary mb-4" />,
    title: "Agile & On-Time Delivery",
    description:
      "Our agile development process ensures your software project is delivered on schedule without sacrificing quality.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary mb-4" />,
    title: "Expert In-House Team",
    description:
      "Our team consists of dedicated, in-house software experts in design, development, and project management.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary mb-4" />,
    title: "Scalable & Future-Proof Solutions",
    description:
      "We build robust applications that can scale seamlessly as your business operations grow.",
  },
];

const faqData = [
  {
    question: "What does the '*' on the software pricing mean?",
    answer:
      "The asterisk indicates that these are starting prices. The final cost of a software project depends on its complexity, feature scope, and specific technology stack. We provide a detailed, fixed-price quote after an in-depth project discovery call.",
  },
  {
    question: "What is included in the post-launch support period?",
    answer:
      "Our support period covers bug fixes, security patches, and technical assistance to ensure your application runs smoothly. It does not include the development of new features, which would be scoped and quoted as a separate project.",
  },
  {
    question: "Can we use our own UI/UX designs for the project?",
    answer:
      "Absolutely. Our development team is happy to collaborate with your design team and work with your existing Figma files. We can also offer our expert UI/UX design services if you need them.",
  },
  {
    question: "What is the typical timeline for a software project?",
    answer:
      "A Startup Package project typically takes 2-4 months, a Business Solution 4-8 months, and Enterprise Solutions timelines vary based on complexity. We provide a detailed project timeline and roadmap after the initial discovery phase.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="container mx-auto px-4 pt-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-playfair">
              Software Development Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
              We offer clear, upfront pricing for our software development
              services in India. Choose the perfect plan for your business, from
              startups to large enterprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col ${tier.popular ? "border-2 border-primary shadow-lg scale-105" : "border-border"}`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <h2 className="text-2xl font-playfair font-bold">
                    {tier.name}
                  </h2>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <CardDescription className="font-space-grotesk">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="font-space-grotesk">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-auto"
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="#contact">{tier.ctaText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Why Partner With Arcnetic?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {whyChooseUsData.map((item) => (
              <div
                key={item.title}
                className="p-6 text-center flex flex-col items-center"
              >
                {item.icon}
                <h3 className="text-xl font-bold font-playfair mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-space-grotesk">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Custom Software & Add-on Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.name} className="border-border">
                <CardHeader>
                  <h3 className="text-xl font-playfair font-bold">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-space-grotesk">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Frequently Asked Questions (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="font-bold font-space-grotesk text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-space-grotesk">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Ready to Build Your Software?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-space-grotesk">
            Contact our experts for a detailed quote tailored to your project
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:aswin.p@arcnetic.com">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Call
              </a>
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="text-center mt-12 text-sm text-muted-foreground font-space-grotesk">
          <p>
            * Prices are estimates and may vary based on project complexity,
            timeline, and specific requirements.
            <br />
            All projects include initial consultation, development, testing,
            deployment, and documentation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
