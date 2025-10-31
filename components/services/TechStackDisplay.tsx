"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface TechItem {
  name: string;
  logo: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools";
}

interface TechStackDisplayProps {
  techStack: TechItem[];
  showCategories?: boolean;
}

const categoryColors = {
  frontend: "bg-blue-100 text-blue-800 border-blue-200",
  backend: "bg-green-100 text-green-800 border-green-200",
  database: "bg-purple-100 text-purple-800 border-purple-200",
  cloud: "bg-orange-100 text-orange-800 border-orange-200",
  tools: "bg-gray-100 text-gray-800 border-gray-200",
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud",
  tools: "Tools",
};

export function TechStackDisplay({
  techStack,
  showCategories = true,
}: TechStackDisplayProps) {
  const groupedTech = showCategories
    ? techStack.reduce(
        (acc, tech) => {
          if (!acc[tech.category]) {
            acc[tech.category] = [];
          }
          acc[tech.category].push(tech);
          return acc;
        },
        {} as Record<string, TechItem[]>
      )
    : { all: techStack };

  if (showCategories) {
    return (
      <div className="space-y-8">
        {Object.entries(groupedTech).map(([category, techs]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={`px-3 py-1 font-medium ${categoryColors[category as keyof typeof categoryColors]}`}
              >
                {categoryLabels[category as keyof typeof categoryLabels]}
              </Badge>
              <div className="h-px bg-border flex-1" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techs.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {techStack.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="group p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 relative flex items-center justify-center">
          <Image
            src={tech.logo}
            alt={`${tech.name} logo`}
            width={48}
            height={48}
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="space-y-1">
          <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
            {tech.name}
          </h4>
          <Badge variant="secondary" className="text-xs px-2 py-0.5">
            {categoryLabels[tech.category]}
          </Badge>
        </div>
      </div>
    </div>
  );
}
