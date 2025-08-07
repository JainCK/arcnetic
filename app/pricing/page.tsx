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
} from "@/components/ui/accordion"; // New Import for FAQ
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowLeft,
  Mail,
  MessageCircle,
  Zap,
  Users,
  Scaling,
} from "lucide-react"; // New Icons
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing - Elite Software Solutions | Arcnetic",
  description:
    "Transparent pricing for our elite software development services in India. Custom applications, AI solutions, and digital transformation.",
  openGraph: {
    title: "Pricing - Elite Software Solutions | Arcnetic",
    description:
      "Transparent pricing for our elite software development services in India. Custom applications, AI solutions, and digital transformation.",
    type: "website",
  },
};

// --- CURRENCY UPDATED ---
const pricingTiers = [
  {
    name: "Startup Package",
    price: "Starting at ₹25,000*",
    description:
      "Perfect for startups and small businesses looking to establish their digital presence",
    features: [
      "Custom Web Application",
      "Responsive Design",
      "Basic Database Integration",
      "User Authentication",
      "API Development",
      "3 Months Support",
      "Documentation",
    ],
    popular: false,
    ctaText: "Get Quote",
  },
  {
    name: "Business Solution",
    price: "Starting at ₹50,000*",
    description:
      "Comprehensive business applications with advanced features and integrations",
    features: [
      "Full-Stack Development",
      "Advanced Database Design",
      "Third-party Integrations",
      "Admin Dashboard",
      "Analytics & Reporting",
      "6 Months Support",
      "Performance Optimization",
      "Security Implementation",
    ],
    popular: true,
    ctaText: "Get Quote",
  },
  {
    name: "Enterprise Solution",
    price: "Custom Quote",
    description:
      "Large-scale enterprise applications with AI integration and custom requirements",
    features: [
      "Enterprise Architecture",
      "AI/ML Integration",
      "Microservices Design",
      "Cloud Infrastructure",
      "Advanced Security",
      "12 Months Support",
      "DevOps Setup",
      "Performance Monitoring",
      "Custom Integrations",
      "Dedicated Team",
    ],
    popular: false,
    ctaText: "Schedule Consultation",
  },
];

// --- CURRENCY UPDATED ---
const additionalServices = [
  {
    name: "AI Implementation",
    price: "Quote Based",
    description: "Custom AI solutions, machine learning models, and automation",
  },
  {
    name: "Digital Transformation",
    price: "Quote Based",
    description: "Complete business digitization and process automation",
  },
  {
    name: "Maintenance & Support",
    price: "Starting at ₹10,000*/month",
    description: "Ongoing maintenance, updates, and technical support",
  },
  {
    name: "Cloud Migration",
    price: "Starting at ₹50,000*",
    description: "Migration to cloud platforms with optimization",
  },
];

// --- NEW SECTION DATA: Why Choose Us ---
const whyChooseUsData = [
  {
    icon: <Zap className="h-8 w-8 text-primary mb-4" />,
    title: "Agile & Fast Delivery",
    description:
      "We employ agile methodologies to ensure your project is delivered on time without compromising on quality.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary mb-4" />,
    title: "Expert In-House Team",
    description:
      "Our team consists of dedicated, in-house experts in design, development, and project management.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary mb-4" />,
    title: "Scalable Solutions",
    description:
      "We build future-proof applications that can scale seamlessly as your business grows.",
  },
];

// --- NEW SECTION DATA: FAQ ---
const faqData = [
  {
    question: "What does the '*' on the pricing mean?",
    answer:
      "The asterisk indicates that the prices are estimates. The final cost can vary depending on the project's complexity, scope, and specific technological requirements. We provide a detailed, fixed-price quote after our initial consultation.",
  },
  {
    question: "What is included in the support period?",
    answer:
      "Our support period includes bug fixes, security patches, and technical assistance to ensure your application runs smoothly post-launch. It does not include new feature development, which would be scoped separately.",
  },
  {
    question: "Can we provide our own UI/UX designs?",
    answer:
      "Absolutely! We are happy to work with your existing design team and Figma files. We can also provide our own expert UI/UX design services if needed.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "A Startup Package typically takes 2-4 months, a Business Solution 4-8 months, and Enterprise Solutions vary greatly. We will provide a detailed project timeline and roadmap after the discovery phase.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-playfair">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
            Choose the perfect solution for your business needs. All packages
            include premium development, testing, deployment, and comprehensive
            documentation.
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
                <CardTitle className="text-2xl font-playfair">
                  {tier.name}
                </CardTitle>
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

        {/* --- NEW SECTION: Why Choose Us --- */}
        <div className="mb-20">
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
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.name} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair">
                    {service.name}
                  </CardTitle>
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
        </div>

        {/* --- NEW SECTION: FAQ --- */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
            Frequently Asked Questions
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
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-space-grotesk">
            Contact us for a detailed quote tailored to your specific
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
        </div>

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
      </div>
      <Footer />
    </div>
  );
}
