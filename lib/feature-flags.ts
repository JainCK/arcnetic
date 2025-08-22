// Feature flags for enabling/disabling site features
export const FEATURE_FLAGS = {
  // Set to true to enable pricing page and links
  PRICING_ENABLED: false,

  // Set to true to enable blog functionality (when Contentful is ready)
  BLOG_ENABLED: false,

  // Add more feature flags as needed
  // TESTIMONIALS_ENABLED: true,
  // NEWSLETTER_ENABLED: true,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;
