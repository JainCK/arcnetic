import type { Metadata } from "next";
import { CustomSoftwareClient } from "@/components/services/CustomSoftwareClient";

export const metadata: Metadata = {
  title: "Custom Software Solutions & Enterprise Tooling | Arcnetic",
  description:
    "We architect secure, scalable, and high-performance custom software, CRM/ERP platforms, and microservices that adapt to your business processes.",
  openGraph: {
    title: "Custom Software Solutions & Enterprise Tooling | Arcnetic",
    description:
      "Bespoke CRMs, enterprise ERPs, microservices, and internal tooling engineered to eliminate operational friction.",
  },
};

export default function CustomSoftwarePage() {
  return <CustomSoftwareClient />;
}
