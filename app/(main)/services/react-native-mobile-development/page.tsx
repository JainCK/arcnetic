import type { Metadata } from "next";
import { MobileDevClient } from "@/components/services/MobileDevClient";

export const metadata: Metadata = {
  title: "Cross Platform Mobile App Development | React Native | Arcnetic",
  description:
    "Deploy to both iOS and Android without doubling your engineering budget. We specialize exclusively in React Native, delivering cross-platform mobile applications.",
  openGraph: {
    title: "Cross Platform Mobile App Development | React Native | Arcnetic",
    description:
      "Deploy to both iOS and Android without doubling your engineering budget. We specialize exclusively in React Native, delivering cross-platform mobile applications.",
  },
};

export default function MobileDevPage() {
  return <MobileDevClient />;
}
