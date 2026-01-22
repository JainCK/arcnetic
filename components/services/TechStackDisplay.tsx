"use client";

import Image from "next/image";

interface TechItem {
  name: string;
  logo: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools";
}

interface TechStackDisplayProps {
  techStack: TechItem[];
  showCategories?: boolean;
}

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
      <div className="space-y-16">
        {Object.entries(groupedTech).map(([category, techs]) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-space-grotesk uppercase tracking-widest text-white/70">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </span>
              <div className="h-px bg-white/10 flex-1" />
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
    <div className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-10 h-10 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
          <Image
            src={tech.logo}
            alt={`${tech.name} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="space-y-1">
          <h4 className="font-space-grotesk text-xs text-white/80 group-hover:text-white transition-colors">
            {tech.name}
          </h4>
        </div>
      </div>
    </div>
  );
}