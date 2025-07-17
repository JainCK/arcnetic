"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views on client side after hydration
    if (pathname && typeof window !== "undefined") {
      // Use window.location for search params to avoid SSG issues
      const url = pathname + window.location.search;
      pageview(url);
    }
  }, [pathname]);

  useEffect(() => {
    // Track initial page view
    if (typeof window !== "undefined") {
      const url = window.location.pathname + window.location.search;
      pageview(url);
    }
  }, []);

  return <>{children}</>;
}
