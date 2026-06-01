import type { Metadata } from "next";
import { AIWorkflowClient } from "@/components/services/AIWorkflowClient";

export const metadata: Metadata = {
  title: "AI Business Automation & Intelligent Workflows | Arcnetic",
  description:
    "We integrate advanced LLMs and workflow automation tools (n8n, Make.com, Claude, Ollama) to eliminate repetitive manual tasks and build intelligent systems that run 24/7.",
  openGraph: {
    title: "AI Business Automation & Intelligent Workflows | Arcnetic",
    description:
      "Stop treating your team like robots. We build AI automation pipelines that replace manual workflows, reduce errors to zero, and scale infinitely.",
  },
};

export default function AIWorkflowPage() {
  return <AIWorkflowClient />;
}
