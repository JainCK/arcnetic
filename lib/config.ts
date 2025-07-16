// lib/config.ts - Server-side configuration
export const serverConfig = {
  // Business Information (server-side only)
  business: {
    name: process.env.BUSINESS_NAME || "Arcnetic",
    legalName: process.env.BUSINESS_LEGAL_NAME || "Arcnetic PVT LTD",
    address: process.env.BUSINESS_ADDRESS || "Global",
    city: process.env.BUSINESS_CITY || "Global",
    state: process.env.BUSINESS_STATE || "Global",
    zip: process.env.BUSINESS_ZIP || "682001",
    country: process.env.BUSINESS_COUNTRY || "IND",
  },

  // Contact Information (server-side only)
  contact: {
    email: process.env.CONTACT_EMAIL || "aswin.p@arcnetic.com",
    phone: process.env.PHONE || "+91-7558952771",
  },

  // Social Media (safe to expose publicly)
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || "arcnetic",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_PAGE || "company/arcnetic",
  },

  // Site Configuration
  site: {
    url: process.env.SITE_URL || "https://arcnetic.com",
    publicUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com",
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
};

// Client-safe configuration (only non-sensitive data)
export const clientConfig = {
  social: serverConfig.social,
  site: {
    publicUrl: serverConfig.site.publicUrl,
  },
};
