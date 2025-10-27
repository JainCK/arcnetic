import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Arcnetic - Frequently Asked Questions",
  description:
    "Get answers to commonly asked questions about Arcnetic's software development services, processes, and pricing.",
  keywords: [
    "FAQ",
    "questions",
    "Arcnetic",
    "software development",
    "support",
    "pricing",
    "process",
  ],
};

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Arcnetic offer?",
        answer:
          "Arcnetic offers a comprehensive range of software development and technology consulting services including custom software development, cloud infrastructure solutions, mobile app development, web development, DevOps & automation, digital transformation consulting, and ongoing maintenance and support.",
      },
      {
        question: "Which industries do you serve?",
        answer:
          "We serve a diverse range of industries including healthcare, fintech, e-commerce, education, manufacturing, logistics, and startups. Our team has experience adapting our solutions to meet the specific needs and compliance requirements of various sectors.",
      },
      {
        question: "Do you work with startups or only established companies?",
        answer:
          "We work with both startups and established enterprises. For startups, we offer flexible engagement models and can provide MVP development, technical guidance, and scalable solutions that grow with your business. For enterprises, we provide comprehensive digital transformation and modernization services.",
      },
    ],
  },
  {
    category: "Project Process",
    questions: [
      {
        question: "What is your typical project development process?",
        answer:
          "Our development process follows agile methodologies and includes: 1) Discovery & Requirements Analysis, 2) Technical Architecture & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Deployment & Launch, 6) Ongoing Support & Maintenance. We maintain transparent communication throughout with regular updates and milestone reviews.",
      },
      {
        question: "How do you ensure project quality and timelines?",
        answer:
          "We ensure quality through comprehensive testing protocols, code reviews, and continuous integration practices. For timelines, we use detailed project planning, regular sprint reviews, and maintain buffer time for unexpected challenges. Our project managers provide weekly status updates and maintain open communication channels.",
      },
      {
        question: "Can you work with our existing team and tools?",
        answer:
          "Absolutely! We're experienced in collaborating with in-house teams and can adapt to your existing workflows, tools, and methodologies. We can integrate with your current development environment, version control systems, and project management tools to ensure seamless collaboration.",
      },
      {
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and 24/7 technical support. We provide different support tiers to match your specific needs and budget requirements.",
      },
    ],
  },
  {
    category: "Technology & Technical",
    questions: [
      {
        question: "What technologies and frameworks do you specialize in?",
        answer:
          "We specialize in a wide range of modern technologies including React, Next.js, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), databases (PostgreSQL, MongoDB, MySQL), and DevOps tools (Docker, Kubernetes, Jenkins, Terraform).",
      },
      {
        question: "How do you handle data security and privacy?",
        answer:
          "Security is paramount in our development process. We implement industry-standard security practices including encryption, secure authentication, regular security audits, compliance with regulations like GDPR and HIPAA where applicable, and secure coding practices. We also sign NDAs and maintain strict confidentiality protocols.",
      },
      {
        question: "Do you provide cloud migration services?",
        answer:
          "Yes, we offer comprehensive cloud migration services including assessment of current infrastructure, migration strategy development, data migration, application modernization, and post-migration optimization. We work with all major cloud providers and ensure minimal downtime during migration.",
      },
      {
        question: "Can you scale our existing applications?",
        answer:
          "Absolutely! We specialize in application modernization and scaling. This includes performance optimization, database optimization, implementing microservices architecture, adding caching layers, load balancing, and horizontal scaling solutions to handle increased traffic and data loads.",
      },
    ],
  },
  {
    category: "Pricing & Engagement",
    questions: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer flexible pricing models including fixed-price projects, hourly rates, monthly retainers, and dedicated team models. The pricing depends on project complexity, timeline, technology requirements, and team size. We provide detailed estimates after understanding your specific requirements.",
      },
      {
        question: "What information do you need to provide a quote?",
        answer:
          "To provide an accurate quote, we need: project requirements and scope, preferred technology stack, timeline expectations, team size preferences, budget range, and any specific constraints or compliance requirements. We offer free consultation calls to discuss your project in detail.",
      },
      {
        question: "Do you offer fixed-price projects?",
        answer:
          "Yes, we offer fixed-price projects for well-defined scopes with clear requirements. This model works best for projects with minimal expected changes and clear deliverables. We also offer hybrid models that combine fixed-price for defined phases with flexible pricing for evolving requirements.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Our typical payment terms include an initial deposit (usually 20-30%) to start the project, followed by milestone-based payments throughout development, and final payment upon project completion. For ongoing projects, we offer monthly billing cycles. We accept various payment methods and can accommodate different invoicing requirements.",
      },
    ],
  },
  {
    category: "Communication & Support",
    questions: [
      {
        question:
          "How do you handle communication across different time zones?",
        answer:
          "With offices in India and Canada, we're well-equipped to handle global projects. We establish overlapping working hours for real-time collaboration, use asynchronous communication tools for updates, and ensure that there's always coverage during your business hours. We're flexible in adapting to your preferred communication schedule.",
      },
      {
        question: "What communication tools and channels do you use?",
        answer:
          "We use a variety of communication tools based on your preferences including Slack, Microsoft Teams, Zoom, email, and project management tools like Jira, Trello, or Asana. We provide regular updates through daily standups, weekly status reports, and milestone reviews.",
      },
      {
        question: "How quickly can you start a new project?",
        answer:
          "We can typically start new projects within 1-2 weeks, depending on team availability and project requirements. For urgent projects, we can often accommodate faster start times. During our initial consultation, we'll provide a realistic timeline for project kickoff based on your specific needs.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-sm md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get comprehensive answers to commonly asked questions about how we
            can help transform your business through technology.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-border flex-1"></div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-wide"
                  >
                    {category.category}
                  </Badge>
                  <div className="h-px bg-border flex-1"></div>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="border-none space-y-1"
                >
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-b border-border/30 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help
            you with any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 text-lg font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="tel:+918045678900"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 text-lg font-medium text-primary-foreground border-2 border-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
