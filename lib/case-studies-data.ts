export interface CaseStudy {
  id: string;
  tag: string;
  industry: string;
  client: string;
  title: string;
  outcome: string;
  description: string;
  stack: string[];
  color?: string; // used for featured card background gradient
  accent?: string; // used for normal cards hover border styles
  dot?: string; // used for status dot color
  image?: string;
  stats?: { label: string; value: string }[];
  metric?: { value: string; label: string };
  detailedReport: {
    challenge: string;
    challengePoints?: { title: string; desc: string }[];
    solution: string;
    solutionPillars?: { num: string; title: string; desc: string }[];
    resultsCompare?: { metric: string; before: string; after: string }[];
    architecture: string;
    highlights: string[];
  };
}

export const featuredCaseStudy: CaseStudy = {
  id: "cohesive-consulting-solutions",
  tag: "Web Dev · SEO · Automation",
  industry: "Finance & Tax Advisory",
  client: "Cohesive Consulting Solutions",
  title: "Turning a Static Website Into a 24/7 Lead Generation Engine",
  outcome: "Rebuilt Cohesive's digital presence with Next.js, raising mobile speed scores to 90+, implementing full schema markup, and automating lead capturing with a 24/7 WhatsApp bot.",
  description: "A premier financial and tax advisory firm with over 20 years of experience, Cohesive Consulting Solutions lacked search visibility and a conversion pathway. Arcnetic built a modern, SEO-first Next.js site and automated lead handling.",
  stats: [
    { label: "Mobile Speed Score", value: "90+" },
    { label: "Desktop Speed Score", value: "95+" },
    { label: "Largest Contentful Paint", value: "<2.5s" },
    { label: "Lead Response Time", value: "Instant" },
  ],
  stack: ["Next.js", "Tailwind CSS", "SEO Schema", "WhatsApp API", "UX/UI"],
  color: "from-emerald-500/10 via-transparent to-transparent",
  image: "/images/case-studies/cohesive/ss1.png",
  detailedReport: {
    challenge: "Cohesive Consulting Solutions is a premier financial and tax advisory firm with over 20 years of industry experience. They specialise in Income Tax & Filing, GST Advisory & Compliance, TAS, and Tax Advisory.\n\nBut their digital presence was not reflecting that authority. When Cohesive came to Arcnetic, their existing website suffered from multiple critical gaps:",
    challengePoints: [
      { title: "No Technical SEO", desc: "Missing canonicals, sitemap structures, and index crawl optimization." },
      { title: "Zero Schema Markup", desc: "Google had no machine-readable context about their business services." },
      { title: "Unoptimised Mobile Layout", desc: "A poor mobile user experience that frustrated modern prospects." },
      { title: "Slow Loading Times", desc: "Long server response latency caused high bounce rates." },
      { title: "No Conversion Pathway", desc: "Visitors landed on pages but had no direct funnel or call to action." },
      { title: "Manual Inbound Flows", desc: "No automated system to capture or qualify incoming client leads." },
      { title: "No WhatsApp Channels", desc: "Complete absence of the communication platform their audience preferred." }
    ],
    solution: "Arcnetic designed and executed a comprehensive full-stack digital transformation — converting the static site into a high-performance lead generation engine.",
    solutionPillars: [
      { num: "01", title: "Next.js Architecture", desc: "Engineered from scratch using SSR and static delivery to secure instant loading times." },
      { num: "02", title: "Technical SEO Audit", desc: "Configured clean URLs, canonical paths, XML sitemaps, and robots configurations." },
      { num: "03", title: "On-Page Keyword Silos", desc: "Restructured header hierarchies and E-E-A-T metadata optimized for high-intent search terms." },
      { num: "04", title: "Schema.org Markup", desc: "Injected structured LocalBusiness, ProfessionalService, and FAQ schemas directly to Google." },
      { num: "05", title: "Mobile-First UX Tuning", desc: "Designed accessible, touch-friendly interfaces tailored specifically for mobile browsers." },
      { num: "06", title: "Core Web Vitals Optimization", desc: "Achieved sub-2.5s LCP and minimized render-blocking scripts for maximum SEO rank signals." },
      { num: "07", title: "CRO Landing Funnels", desc: "Placed strategic above-the-fold CTAs and service-specific conversion pathways." },
      { num: "08", title: "WhatsApp & Bot Automation", desc: "Integrated deep links and an off-hours welcome bot to automatically capture and qualify leads." }
    ],
    resultsCompare: [
      { metric: "Mobile PageSpeed", before: "Poor / Slow", after: "90+ Score" },
      { metric: "Desktop PageSpeed", before: "Poor / Latent", after: "95+ Score" },
      { metric: "Search Indexing", before: "Invisible Online", after: "Schema & Metadata Live" },
      { metric: "Lead Funnels", before: "Email / Forms Only", after: "Form + WhatsApp + Bot (24/7)" },
      { metric: "Enquiry Response", before: "Manual / Delayed", after: "Instant Bot Response" }
    ],
    architecture: "The site is developed with Next.js using Server-Side Rendering (SSR) and Static Site Generation (SSG) to support global edge caching and instant page loads. It leverages the Next.js Image component for WebP formatting, next/font for layout shift prevention, and is deployed on a global CDN. Lead capture forms securely collect structured data and route submissions to email, while the WhatsApp bot uses pre-populated message templates to trigger automated post-qualification workflows and direct CRM handoff during business hours.",
    highlights: [
      "Next.js framework ensuring sub-2.5s LCP and sub-600ms TTFB",
      "Full Schema.org markup mapping (LocalBusiness, ProfessionalService, FAQ)",
      "Technical & On-Page SEO alignment maximizing search indexability",
      "Integrated WhatsApp Business bot for 24/7 lead qualification",
      "Streamlined UX design with clear mobile-first CTA pathways",
      "Proactive PageSpeed performance rendering score of 90+ on mobile"
    ]
  }
};

export const caseStudiesList: CaseStudy[] = [
  {
    id: "ad-performance-daily-summary",
    tag: "Monorepo · Automation · Analytics",
    industry: "AdTech & Marketing",
    client: "Ad Performance Tracker",
    title: "Aggregating Cross-Channel Ad Metrics into a Unified Real-Time Dashboard",
    outcome: "Engineered a unified data layer across Google & Meta Ads, standardizing multi-currency reporting, implementing automated server-side PDF briefings, and orchestrating 24/7 webhooks via n8n.",
    description: "A corporate-grade analytics aggregator built with Next.js, Bun, PostgreSQL, and Redis. It automates cross-channel data normalization, flags spend anomalies using baseline averages, and delivers scheduled PDF briefings via n8n webhook integrations.",
    stats: [
      { label: "Data Sync Latency", value: "<10m" },
      { label: "Sync Schedule", value: "10 mins" },
      { label: "Multi-Currency Switch", value: "Instant" },
      { label: "Report Generation", value: "<2s" },
    ],
    metric: { value: "<10m", label: "Automated Data Sync Interval" },
    stack: ["Next.js", "Bun", "PostgreSQL", "BullMQ & Redis", "n8n Webhooks", "jsPDF"],
    color: "from-indigo-500/10 via-transparent to-transparent",
    accent: "border-white/10 hover:border-indigo-500/30",
    dot: "bg-indigo-500",
    image: "/images/case-studies/ad-tracker/ss1.png",
    detailedReport: {
      challenge: "Modern marketing departments operate across multiple separate channels—such as Google Ads and Meta (Facebook) Ads—each featuring its own distinct currency defaults, metric formats, rate limits, and terminology conventions. This fragmentation prevents marketing teams and executives from obtaining a singular, real-time understanding of cross-channel performance, leading to inefficient spend allocation and delayed decision-making.",
      challengePoints: [
        { title: "API Schema Fragmentation", desc: "Google and Meta Ads use completely distinct terminology (e.g., Campaign vs Ad Set) and data formats." },
        { title: "Currency Discrepancies", desc: "Inability to view consolidated spending metrics when different campaigns use different billing currencies (USD vs INR)." },
        { title: "API Rate Limiting", desc: "Accessing live APIs during high-traffic visual dashboard loads leads to performance degradation and rate limits." },
        { title: "Manual Report Dispatch", desc: "Marketing managers spend hours manual compiling metrics and generating PDF reports to send to clients via email or Slack." },
        { title: "Spend Anomalies", desc: "Lack of real-time spend spike and CPC anomaly detection, causing budgets to drain before intervention can occur." }
      ],
      solution: "To solve these challenges, we built a state-of-the-art analytics aggregator utilizing a Turborepo monorepo architecture. The platform decouples the Next.js visual layer from a high-performance background worker service powered by Bun. This worker ingests data via an asynchronous distributed queue powered by Redis and BullMQ, standardizing all metrics into a central PostgreSQL database. A server-side PDF generation engine handles daily briefing delivery via n8n webhooks to Slack, Email, and WhatsApp.",
      solutionPillars: [
        { num: "01", title: "Turborepo Decoupling", desc: "Separated high-traffic Next.js visual dashboards from network-intensive background sync workers, keeping client UI smooth." },
        { num: "02", title: "Multi-Currency Normalization", desc: "Automatically normalizes all campaign spend metrics to USD in PostgreSQL, with an instant live USD/INR switcher in the dashboard UI." },
        { num: "03", title: "Asynchronous Queueing", desc: "Built a BullMQ & Redis worker service under Bun runtime that syncs ad accounts every 10 minutes with exponential backoff retries." },
        { num: "04", title: "Dual-Engine PDF Compilation", desc: "Engineered jsPDF pipelines for instant client-side downloads and server-side Base64 reports for automated delivery." },
        { num: "05", title: "Automated Webhook Dispatch", desc: "Integrated containerized n8n servers to schedule, fetch, and broadcast daily PDF attachments to Slack and WhatsApp." },
        { num: "06", title: "AI Anomaly Detection", desc: "Developed mathematical baselines comparing yesterday's spends to 7-day rolling averages, highlighting spikes of over 150%." }
      ],
      resultsCompare: [
        { metric: "Data Aggregation", before: "Manual sheet tracking across platforms", after: "Automated cross-channel PostgreSQL sync" },
        { metric: "Sync Frequency", before: "Once per day or weekly", after: "Scheduled every 10 minutes (BullMQ)" },
        { metric: "Currency Handling", before: "Manual conversion calculations", after: "Instant global USD/INR UI toggle" },
        { metric: "Briefing Dispatch", before: "Hours spent compiling PDFs manually", after: "100% automated n8n Slack & WhatsApp delivery" },
        { metric: "Spend Anomalies", before: "Spotted after budgets already depleted", after: "Instant daily 150% threshold spikes alert" }
      ],
      architecture: "The system uses a Turborepo monorepo framework where a Next.js frontend (utilizing React 19) is completely separated from the background sync service running on Bun. PostgreSQL acts as the single source of truth, accessed through type-safe Prisma ORM clients. Background jobs are scheduled and executed via BullMQ and Redis queues to insulate the system from external API rate-limiting issues. The reporting layer features a dual-mode jsPDF setup: client-side for instant download and server-side API endpoints for automated, Base64-encoded PDF generation. These endpoints integrate seamlessly with n8n workflow webhooks to orchestrate automatic daily dispatches to Slack, WhatsApp, or email.",
      highlights: [
        "Monorepo system architecture powered by Turborepo and Bun",
        "Normalized multi-currency spend tracking (USD / INR) with an instant client-side switcher",
        "Redis & BullMQ background sync pipeline running at 10-minute intervals with exponential backoffs",
        "Unified database schema supporting granular daily ad and campaign level performance metrics",
        "AI-driven daily anomaly detection alerting on spend spikes above 150% of the 7-day baseline",
        "Dual client/server-side jsPDF reporting engines integrated with containerized n8n webhooks"
      ]
    }
  },
  {
    id: "bizdash",
    tag: "Next.js · n8n · TallyPrime",
    industry: "Retail & Operations",
    client: "BizDash",
    title: "Unified Business Intelligence & Automated Ledger Reports",
    outcome: "Unified local operational metrics and Tally ERP ledger data into a containerized dashboard, automating daily HTML business summaries via n8n workflows.",
    description: "An enterprise-grade business management portal that bridges local operational databases with legacy Tally ERP systems. It features a setup onboarding wizard, live Tally XML synchronization, low-stock inventory alerts, and automated HTML report dispatching via n8n to Slack and email.",
    stats: [
      { label: "Sync Latency", value: "<10s" },
      { label: "Alert Trigger", value: "Real-time" },
      { label: "Onboarding Time", value: "<2m" },
      { label: "Report Delivery", value: "Instant" }
    ],
    metric: { value: "<10s", label: "Sync Latency" },
    stack: ["Next.js 15", "Node.js", "TallyPrime XML", "n8n Webhooks", "PostgreSQL", "Redis", "Docker"],
    color: "from-purple-500/10 via-transparent to-transparent",
    accent: "border-white/10 hover:border-purple-500/30",
    dot: "bg-purple-500",
    image: "/images/case-studies/BizDash/DashboardDarkMode.png",
    detailedReport: {
      challenge: "Small and medium enterprises struggle with fragmented corporate data. They rely heavily on locally hosted legacy ERPs like TallyPrime for bookkeeping but lack dynamic dashboard visualizations to track real-time operations, inventory, and profit margins side-by-side. Additionally, manual extraction of financial data for daily briefings introduces severe human error and delays critical management responses.",
      challengePoints: [
        { title: "ERP System Isolation", desc: "TallyPrime runs in a local environment with a custom XML/SOAP interface, isolating ledger data from external web applications." },
        { title: "Operational Gaps", desc: "Operations teams cannot track real-time sales and low-stock inventory directly alongside official corporate financial ledger statements." },
        { title: "Manual Reporting Friction", desc: "Management spends hours compiling daily P&L sheets and manually mailing business digests to stakeholders." },
        { title: "Complex Setup & Configuration", desc: "Deploying a database sync engine, ERP mapping endpoints, and reporting rules usually requires complex manual script configuration." },
        { title: "Legacy Performance Bottlenecks", desc: "Hitting local Tally APIs directly on page loads causes significant latency and rate limit blocks." }
      ],
      solution: "To bridge this gap, we designed BizDash. It decouples the visual interface from Tally database connections using PostgreSQL and Redis pools. A Setup Wizard allows users to visually configure database connections, SMTP parameters, and Tally hostnames. A bimodal sync strategy allows the dashboard to display local database sales (Internal Mode) or real-time Tally SOAP ledger accounts (External Mode). Finally, n8n orchestrates automated triggers that send rich HTML briefings of business health and low-stock items straight to email and Slack.",
      solutionPillars: [
        { num: "01", title: "Bimodal Sync Strategy", desc: "Supports switching between local Postgres sales data (Internal) and Tally ERP ledgers (External) at a single click." },
        { num: "02", title: "Tally XML SOAP Parser", desc: "Constructs custom XML envelopes and queries the Tally API to extract Sales, Cost of Sales, Direct Incomes, and Direct Expenses." },
        { num: "03", title: "n8n Report Automation", desc: "Scheduled containerized workflows that query business metrics and compile/send daily HTML performance digests." },
        { num: "04", title: "Onboarding Setup Wizard", desc: "Built a step-by-step UI to configure external database connections, Tally endpoints, and recipient email details." },
        { num: "05", title: "Low-Stock Tracking & Alerts", desc: "Integrates real-time threshold monitoring across SKU levels, surfacing warnings in the UI and report summaries." },
        { num: "06", title: "Docker Orchestration", desc: "Containerized deployment coordinating Next.js 15, Node, PostgreSQL, Redis, and n8n under a single virtual network." }
      ],
      resultsCompare: [
        { metric: "Ledger Sync", before: "Manual export & spreadsheet calculations", after: "Automated XML request sync (<10s latency)" },
        { metric: "Report Dispatch", before: "Hours of manual compilation", after: "Automated n8n SMTP digests" },
        { metric: "Data Visibility", before: "Isolated accounting vs. operational data", after: "Unified single-pane dashboard UI" },
        { metric: "System Configuration", before: "Manual SQL scripts and environment setup", after: "Interactive step-by-step Setup Wizard" },
        { metric: "Database Load", before: "Heavy legacy calls on every dashboard load", after: "Optimized Redis caching & Postgres pools" }
      ],
      architecture: "The application uses a multi-tier Docker architecture. The Next.js frontend connects to an Express.js/TypeScript backend API. Local sales data and settings are stored in PostgreSQL, with Redis acting as a caching and state management layer. The backend integrates with local TallyPrime instances by posting XML SOAP requests to query ledgers. An n8n server coordinates scheduled workflows to fetch consolidated P&L and inventory reports, compile rich responsive HTML templates, and dispatch them to SMTP servers and Slack webhook endpoints.",
      highlights: [
        "Interactive Setup Wizard for database, Tally host, and reporting configs",
        "Direct Tally XML SOAP integration to extract live P&L ledger details",
        "Automated HTML email and Slack report workflows via integrated n8n scheduling",
        "Bimodal dashboard switching between local database sales and Tally accounting records",
        "Low-stock SKU tracking with automated alert triggers",
        "Fully dockerized stack for consistent local or cloud staging deployments"
      ]
    }
  }
];

export const allCaseStudies: CaseStudy[] = [featuredCaseStudy, ...caseStudiesList];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.id === id);
}

export function getOtherCaseStudies(excludeId: string, limit = 3): CaseStudy[] {
  return allCaseStudies.filter((cs) => cs.id !== excludeId).slice(0, limit);
}
