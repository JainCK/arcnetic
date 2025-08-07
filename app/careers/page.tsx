import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, ArrowLeft, Users, Code, Lightbulb, Globe } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers - Join Our Elite Team | Arcnetic",
  description:
    "Join Arcnetic's elite software development team. We're looking for passionate developers, designers, and innovators.",
  openGraph: {
    title: "Careers - Join Our Elite Team | Arcnetic",
    description:
      "Join Arcnetic's elite software development team. We're looking for passionate developers, designers, and innovators.",
    type: "website",
  },
};

const values = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Technical Excellence",
    description:
      "We're committed to writing clean, efficient, and scalable code that stands the test of time.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and encourage creative problem-solving approaches.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Culture",
    description:
      "We believe in the power of teamwork and knowledge sharing to achieve extraordinary results.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Global Impact",
    description:
      "Our solutions transform businesses worldwide, making a meaningful difference.",
  },
];

// const openPositions = [
//   {
//     title: "Senior Full-Stack Developer",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
//   },
//   {
//     title: "AI/ML Engineer",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "AWS"],
//   },
//   {
//     title: "UI/UX Designer",
//     location: "Remote / Hybrid",
//     type: "Full-time / Contract",
//     skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
//   },
//   {
//     title: "DevOps Engineer",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     skills: ["Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring"],
//   },
// ];

export default function CareersPage() {
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
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair">
            Join Our Elite Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space-grotesk">
            We're looking for passionate, talented individuals who want to build
            the future of software. Join us in creating innovative solutions
            that transform businesses worldwide.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-playfair">
            Why Work With Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-border">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3 md:mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl font-playfair">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground font-space-grotesk">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        {/* <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {openPositions.map((position) => (
              <Card key={position.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-playfair">
                    {position.title}
                  </CardTitle>
                  <CardDescription className="font-space-grotesk text-sm md:text-base">
                    {position.location} • {position.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 font-space-grotesk text-sm md:text-base">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs md:text-sm font-space-grotesk"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Application Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-playfair">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 font-space-grotesk max-w-4xl mx-auto">
            We're always looking for enthusiastic people who share our passion
            for excellence. Even if you don't see a perfect match above, we'd
            love to hear from you.
          </p>

          <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-playfair">
              How to Apply
            </h3>
            <div className="text-left space-y-3 md:space-y-4 font-space-grotesk">
              <p className="text-sm md:text-base">
                Send your application to:{" "}
                <strong>
                  aswin.p@arcnetic.com or jainkuriakose@arcnetic.com
                </strong>
              </p>
              <p className="text-sm md:text-base">Please include:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground text-sm md:text-base">
                <li>Your updated resume/CV</li>
                <li>
                  A compelling cover letter explaining why you want to join
                  Arcnetic
                </li>
                <li>Links to your portfolio, GitHub, or relevant projects</li>
                <li>Any additional work samples or case studies</li>
              </ul>
              <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
                We review all applications carefully and will get back to you
                within 1-2 weeks.
              </p>
            </div>
          </div>

          {/* <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="mailto:careers@arcnetic.com?subject=Application for Position at Arcnetic">
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Send Your Application
            </a>
          </Button> */}
        </div>

        {/* Culture Section */}
        {/* <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
            Our Culture
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair">
                Work-Life Balance
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-space-grotesk">
                We believe in sustainable growth and maintaining a healthy
                work-life balance.
              </p>
            </div>
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair">
                Continuous Learning
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-space-grotesk">
                We invest in our team's growth with learning budgets and
                conference attendance.
              </p>
            </div>
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair">
                Remote-First
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-space-grotesk">
                Work from anywhere while staying connected with our global team.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
