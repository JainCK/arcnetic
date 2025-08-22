/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://arcnetic.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "/static/*",
    "/private/*",
    "/internal/*",
  ],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  autoLastmod: true,
  additionalPaths: async (config) => {
    const result = [];

    // Add specific sections with custom priorities
    const customPages = [
      { loc: "/#about", priority: 0.8, changefreq: "monthly" },
      { loc: "/#services", priority: 0.9, changefreq: "monthly" },
      { loc: "/#contact", priority: 0.7, changefreq: "monthly" },
      { loc: "/careers", priority: 0.6, changefreq: "monthly" },
      // { loc: "/pricing", priority: 0.7, changefreq: "monthly" }, // Temporarily disabled
    ];

    customPages.forEach((page) => {
      result.push({
        loc: page.loc,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/static/",
          "/private/",
          "/internal/",
          "*.js",
          "*.css",
          "*.json",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: getChangeFreqForPath(path),
      priority: getPriorityForPath(path),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

function getPriorityForPath(path) {
  if (path === "/") return 1.0;
  if (path.includes("services") || path === "/#services") return 0.9;
  if (path.includes("about") || path === "/#about") return 0.8;
  // if (path.includes("pricing") || path === "/pricing") return 0.7; // Temporarily disabled
  if (path.includes("contact") || path === "/#contact") return 0.7;
  if (path.includes("careers") || path === "/careers") return 0.6;
  return 0.5;
}

function getChangeFreqForPath(path) {
  if (path === "/") return "weekly";
  if (path.includes("services") || path === "/#services") return "monthly";
  // if (path.includes("pricing") || path === "/pricing") return "monthly"; // Temporarily disabled
  return "monthly";
}
