"use client";

import { useState, useEffect } from "react";

interface PublicConfig {
  social: {
    twitter: string;
    facebook: string;
    linkedin: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  site: {
    publicUrl: string;
  };
}

export function usePublicConfig() {
  const [config, setConfig] = useState<PublicConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch config:", error);
        // Fallback to environment variables that are still public
        setConfig({
          social: {
            twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@arcnetic",
            facebook: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || "arcnetic",
            linkedin:
              process.env.NEXT_PUBLIC_LINKEDIN_PAGE || "company/arcnetic",
          },
          contact: {
            email: "aswin.p@arcnetic.com", // Fallback
            phone: "+91-9995007616", // Fallback
          },
          site: {
            publicUrl:
              process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com",
          },
        });
        setLoading(false);
      });
  }, []);

  return { config, loading };
}
