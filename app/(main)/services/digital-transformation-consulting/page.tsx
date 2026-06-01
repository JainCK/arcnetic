import type { Metadata } from "next";
import { DigitalTransformationClient } from "@/components/services/DigitalTransformationClient";

export const metadata: Metadata = {
  title: "Digital Transformation Strategy & Business Scaling | Arcnetic",
  description:
    "Growth requires infrastructure. We look at the macro picture, combining bespoke web presence, internal software, and AI automation to build an ecosystem designed for scale.",
  openGraph: {
    title: "Digital Transformation Strategy & Business Scaling | Arcnetic",
    description:
      "Digital transformation isn't just about adopting new tools; it's about fundamentally rewiring how your business operates.",
  },
};

export default function DigitalTransformationPage() {
  return <DigitalTransformationClient />;
}
