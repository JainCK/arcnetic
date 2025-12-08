import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Code, Lightbulb, Globe } from "lucide-react";
import Link from "next/link";


// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Software Development Jobs & Tech Careers in India | Arcnetic",
  description:
    "Explore software engineering, AI/ML, and UI/UX design careers at Arcnetic. We're hiring for remote and hybrid tech jobs in India. Join our innovative team!",
  openGraph: {
    title: "Software Development Jobs & Tech Careers in India | Arcnetic",
    description:
      "Explore software engineering, AI/ML, and UI/UX design careers at Arcnetic. We're hiring for remote and hybrid tech jobs in India. Join our innovative team!",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com"}/careers`,
  },
  keywords: [
    "software developer jobs india",
    "tech careers india",
    "it jobs",
    "ai engineer jobs",
    "full-stack developer jobs",
    "remote developer jobs india",
    "arcnetic careers",
  ],
};

const values = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Technical Excellence",
    description:
      "We are dedicated to writing clean, efficient, and scalable code to build robust software solutions.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation & Problem-Solving",
    description:
      "We leverage cutting-edge technology and encourage creative approaches to solve complex challenges.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Team Culture",
    description:
      "We foster a culture of teamwork, open communication, and knowledge sharing to achieve great results.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Global Impact",
    description:
      "Join us in building software that transforms businesses and makes a meaningful impact worldwide.",
  },
];

export default function CareersPage() {
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
        <section className="py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair">
              Build the Future of Software With Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
              We are looking for passionate software engineers, developers, and
              designers to join our team in India. Help us build innovative
              solutions that drive business transformation.
            </p>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-playfair">
            Our Engineering Culture & Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-border">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3 md:mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-playfair font-semibold">
                    {value.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground font-space-grotesk">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-playfair">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 font-space-grotesk max-w-4xl mx-auto">
            We're always searching for talented people who share our passion for
            technology. If you're a skilled developer, engineer, or designer,
            we'd love to hear from you.
          </p>

          <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair">
              How to Apply for a Job
            </h3>
            <div className="text-left space-y-3 md:space-y-4 font-space-grotesk">
              <p className="text-sm md:text-base">
                Send your job application to:{" "}
                <strong>
                  aswin.p@arcnetic.com or jainkuriakose@arcnetic.com
                </strong>
              </p>
              <p className="text-sm md:text-base">
                Please include the following in your email:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground text-sm md:text-base">
                <li>Your most recent resume or CV</li>
                <li>
                  A cover letter explaining your interest in a tech career at
                  Arcnetic
                </li>
                <li>
                  Links to your portfolio, GitHub profile, or relevant software
                  projects
                </li>
                <li>
                  Any additional work samples or case studies you'd like to
                  share
                </li>
              </ul>
              <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
                Our hiring team reviews all applications carefully and will
                respond within 1-2 weeks if your profile is a good fit.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
