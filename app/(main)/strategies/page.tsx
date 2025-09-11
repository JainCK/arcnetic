import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Strategies | Arcnetic - Technology Excellence Framework",
  description:
    "Discover Arcnetic's proven strategies for delivering exceptional software solutions, digital transformation, and technology innovation for businesses worldwide.",
  keywords: [
    "strategies",
    "technology",
    "digital transformation",
    "software development",
    "innovation",
    "Arcnetic",
  ],
};

export default function StrategiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent mb-6">
            Technology Excellence Strategies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the proven methodologies and strategic approaches that
            enable us to deliver exceptional software solutions and drive
            digital transformation for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-center">
            Our comprehensive strategies coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}
