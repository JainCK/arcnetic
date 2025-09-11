"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Smartphone,
  BrainCircuit,
  Cloud,
  Wrench,
  BarChart,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Code,
  Smartphone,
  BrainCircuit,
  Cloud,
  Wrench,
  BarChart,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ServiceCard({
  iconName,
  title,
  description,
  href,
  index,
}: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Code; // Fallback to Code icon if not found

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={href} className="h-full block group">
        <Card className="h-full border-2 border-transparent hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card/50 hover:bg-card transform hover:-translate-y-1">
          <CardHeader className="flex-row items-center gap-4 pb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl font-playfair group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed mb-6">
              {description}
            </CardDescription>
            <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
