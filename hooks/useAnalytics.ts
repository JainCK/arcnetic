"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview, event } from "@/lib/analytics";

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (pathname) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Helper functions for tracking events
  const trackEvent = (eventData: {
    action: string;
    category: string;
    label?: string;
    value?: number;
  }) => {
    event(eventData);
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent({
      action: "click",
      category: "button",
      label: `${buttonName}${location ? ` - ${location}` : ""}`,
    });
  };

  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent({
      action: success ? "submit_success" : "submit_error",
      category: "form",
      label: formName,
    });
  };

  const trackContactMethod = (method: "email" | "phone" | "social") => {
    trackEvent({
      action: "contact_method_used",
      category: "contact",
      label: method,
    });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackContactMethod,
  };
}
