export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  features: string[];
  subServices: {
    title: string;
    description: string;
    features: string[];
  }[];
  techStack: {
    name: string;
    logo: string;
    category: "frontend" | "backend" | "database" | "cloud" | "tools";
  }[];
  pricing: {
    starter: {
      price: string;
      features: string[];
    };
    professional: {
      price: string;
      features: string[];
    };
    enterprise: {
      price: string;
      features: string[];
    };
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "custom-websites-seo",
    title: "Websites & SEO",
    shortDescription:
      "Custom Web Development & Technical SEO designed to rank and convert.",
    longDescription:
      "Your website isn't just a digital brochure; it's a lead-generation engine. We don't rely on bloated templates. We engineer custom web architectures from the ground up, prioritizing core web vitals, accessibility, and frictionless user experiences that rank and convert.",
    heroImage: "/images/services/web-development.jpg",
    features: [
      "Custom Web Development",
      "Technical SEO Audits & Remediation",
      "Headless CMS Integration",
      "Conversion Rate Optimization (CRO)",
      "Core Web Vitals Perfection",
      "Dynamic WebGL Animations",
    ],
    subServices: [
      {
        title: "High-Performance Web Apps",
        description:
          "SSR and SSG architectures for sub-second load times and flawless user experiences.",
        features: [
          "React & Next.js Frameworks",
          "SSR & SSG Decoupled Delivery",
          "Core Web Vitals Perfect Scores",
          "Tailwind CSS & Clean UI Markup",
          "Highly Responsive Layouts",
        ],
      },
      {
        title: "Technical SEO",
        description:
          "Deep-dive indexability optimization, schema markup, and site architecture restructuring.",
        features: [
          "Comprehensive Indexability Audits",
          "Structured Data & Schema Markup",
          "XML Sitemap & Robots.txt Rebuilding",
          "URL Silo & Internal Link Structuring",
          "Keyword Mapping & Rank Tracking",
        ],
      },
      {
        title: "Headless CMS Integration",
        description:
          "Decoupled backends allowing your marketing team to move fast without breaking the frontend.",
        features: [
          "Sanity, Contentful & Strapi Connect",
          "Custom Typing & Data Modeling",
          "Block Content Visual Editors",
          "Fast Edge API Implementations",
          "Decoupled Preview Environments",
        ],
      },
      {
        title: "Conversion Rate Optimization CRO",
        description:
          "Data-backed UX tweaks that turn high-intent search traffic into qualified pipeline.",
        features: [
          "Frictionless Lead Funnel Designs",
          "Interactive Forms & CTA Placement",
          "A/B Testing of Search Engine CTRs",
          "User Heatmap & Scroll Analytics",
          "Speed-focused Funnel Checkout Paths",
        ],
      },
    ],
    techStack: [
      { name: "React", logo: "/images/tech/react.svg", category: "frontend" },
      {
        name: "Next.js",
        logo: "/images/tech/next.js.svg",
        category: "frontend",
      },
      {
        name: "TypeScript",
        logo: "/images/tech/typescript.svg",
        category: "frontend",
      },
      {
        name: "Tailwind CSS",
        logo: "/images/tech/tailwind.svg",
        category: "frontend",
      },
      {
        name: "Sanity.io",
        logo: "/images/tech/sanity.svg",
        category: "backend",
      },
      {
        name: "PostgreSQL",
        logo: "/images/tech/postgresql.svg",
        category: "database",
      },
      { name: "AWS", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Cloudflare",
        logo: "/images/tech/cloudflare.svg",
        category: "cloud",
      },
    ],
    pricing: {
      starter: {
        price: "₹1,50,000",
        features: [
          "Technical Audit & Diagnostics",
          "Core Web Vitals Remediation",
          "Sitemap & robots.txt Rebuilding",
          "Initial Keyword Mapping",
          "3 Months Plan Performance Support",
        ],
      },
      professional: {
        price: "₹3,00,000",
        features: [
          "Custom Web Development",
          "Competitor Keyword Gap Analysis",
          "On-page Optimization (H1-H6 & Meta)",
          "Headless CMS (Sanity) Setup",
          "6 Months SEO Rank Support",
        ],
      },
      enterprise: {
        price: "₹5,00,000",
        features: [
          "High-DR Backlink Acquisition",
          "Rich Snippet Optimization",
          "Continuous CTR A/B Testing",
          "Advanced Lead Funnels (CRO)",
          "12 Months Domination & Growth Plan",
        ],
      },
    },
    cta: {
      title: "Ready to Dominate Search & Conversions?",
      description:
        "We combine modern web frameworks with rigorous SEO planning to ensure your brand captures high intent traffic and keeps users engaged.",
      buttonText: "Initiate Strategy Consultation",
    },
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    shortDescription:
      "Native iOS and Android applications with exceptional user experiences",
    longDescription:
      "We create high-quality native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment, our mobile development team builds apps that are fast, secure, and user-friendly, leveraging the latest mobile technologies and platform-specific best practices.",
    heroImage: "/images/services/mobile-development.jpg",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "Mobile App UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    subServices: [
      {
        title: "iOS Development",
        description:
          "Native iOS apps built with Swift and latest iOS technologies",
        features: [
          "Swift & SwiftUI Development",
          "iOS Design Guidelines",
          "App Store Submission",
          "Core Data Integration",
          "iOS Security Best Practices",
        ],
      },
      {
        title: "Android Development",
        description: "Native Android apps with Material Design principles",
        features: [
          "Kotlin & Java Development",
          "Material Design Implementation",
          "Google Play Store Optimization",
          "Android Architecture Components",
          "Google Services Integration",
        ],
      },
      {
        title: "Cross-Platform Development",
        description: "Single codebase for both iOS and Android platforms",
        features: [
          "React Native Development",
          "Code Sharing Strategies",
          "Platform-Specific Optimizations",
          "Unified User Experience",
        ],
      },
    ],
    techStack: [
      {
        name: "React Native",
        logo: "/images/tech/react.svg",
        category: "frontend",
      },
      { name: "Swift", logo: "/images/tech/swift.svg", category: "frontend" },
      { name: "Kotlin", logo: "/images/tech/kotlin.svg", category: "frontend" },
      {
        name: "Firebase",
        logo: "/images/tech/firebase.svg",
        category: "backend",
      },
      {
        name: "Appwrite",
        logo: "/images/tech/appwrite.svg",
        category: "backend",
      },
      { name: "SQLite", logo: "/images/tech/sqlite.svg", category: "database" },
      { name: "AWS Mobile", logo: "/images/tech/aws.svg", category: "cloud" },
    ],
    pricing: {
      starter: {
        price: "₹3,00,000",
        features: [
          "Simple Mobile App",
          "Basic Features",
          "Cross-Platform",
          "App Store Submission",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹6,00,000",
        features: [
          "Advanced Mobile App",
          "Custom Features",
          "Backend Integration",
          "Push Notifications",
          "6 Months Support",
          "Analytics Integration",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise Mobile Solutions",
          "Advanced Security",
          "Custom Integrations",
          "Performance Optimization",
          "12 Months Support",
          "Dedicated Team",
        ],
      },
    },
    cta: {
      title: "Ready to Launch Your Mobile App?",
      description:
        "Transform your idea into a powerful mobile application that engages users and drives business growth.",
      buttonText: "Start Your App Development",
    },
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Solutions",
    shortDescription:
      "Integrate ML and AI into your business processes for enhanced efficiency",
    longDescription:
      "We help businesses harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications. From chatbots to predictive analytics, our AI solutions are designed to enhance efficiency and drive innovation across various industries.",
    heroImage: "/images/services/ai-solutions.jpg",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbots & Virtual Assistants",
      "Predictive Analytics",
      "AI-Powered Automation",
    ],
    subServices: [
      {
        title: "Machine Learning Development",
        description: "Custom ML models for data analysis and prediction",
        features: [
          "Data Processing & Analysis",
          "Model Training & Optimization",
          "Deployment & Monitoring",
          "Real-time Predictions",
          "Performance Analytics",
        ],
      },
      {
        title: "Natural Language Processing",
        description:
          "AI solutions for text analysis and language understanding",
        features: [
          "Text Classification",
          "Sentiment Analysis",
          "Language Translation",
          "Content Generation",
          "Voice Recognition",
        ],
      },
      {
        title: "Computer Vision",
        description: "AI-powered image and video analysis solutions",
        features: [
          "Image Recognition",
          "Object Detection",
          "Facial Recognition",
          "Quality Control Automation",
          "Medical Image Analysis",
        ],
      },
    ],
    techStack: [
      { name: "Python", logo: "/images/tech/python.svg", category: "backend" },
      {
        name: "FASTAPI",
        logo: "/images/tech/fastapi.svg",
        category: "backend",
      },
      {
        name: "TensorFlow",
        logo: "/images/tech/tensorflow.svg",
        category: "tools",
      },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg", category: "tools" },
      { name: "AWS AI", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Google AI",
        logo: "/images/tech/google-cloud.svg",
        category: "cloud",
      },
    ],
    pricing: {
      starter: {
        price: "₹4,00,000",
        features: [
          "Simple AI Integration",
          "Pre-trained Models",
          "Basic Analytics",
          "Documentation",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹8,00,000",
        features: [
          "Custom AI Models",
          "Training & Optimization",
          "API Development",
          "Performance Monitoring",
          "6 Months Support",
          "Model Updates",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise AI Solutions",
          "Advanced Model Development",
          "Scalable Infrastructure",
          "Continuous Learning",
          "12 Months Support",
          "Dedicated AI Team",
        ],
      },
    },
    cta: {
      title: "Ready to Embrace AI Innovation?",
      description:
        "Discover how AI can transform your business processes and unlock new opportunities for growth.",
      buttonText: "Explore AI Solutions",
    },
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Solutions",
    shortDescription:
      "Bespoke CRMs, enterprise ERPs, microservices, and internal tooling built to scale your operations.",
    longDescription:
      "Off-the-shelf software forces your business to adapt to its limitations. We build custom software that adapts to you. From bespoke CRMs to complex enterprise resource planning systems, we architect secure, scalable solutions that eliminate operational bottlenecks and streamline data flows.",
    heroImage: "/images/services/custom-software.jpg",
    features: [
      "Bespoke CRM & ERP Systems",
      "Internal Dashboards & Portals",
      "Legacy System Modernization",
      "API Development & Integration",
      "Microservice Architectures",
      "Automated Workflows & Sync",
    ],
    subServices: [
      {
        title: "Bespoke CRM & ERP Systems",
        description: "Centralizing your operations and data for total organizational visibility",
        features: [
          "Custom Data Structuring",
          "Automated Lead Pipelines",
          "Comprehensive Resource Tracking",
          "Inventory & Supply Chain Systems",
          "Role-based Action Logging",
        ],
      },
      {
        title: "Internal Dashboards & Portals",
        description: "Clean, role-based interfaces that surface critical business metrics in real-time",
        features: [
          "Interactive Live Analytics",
          "Multi-role Permissioning",
          "Cross-system Data Consolidation",
          "Automated Reporting",
          "Secure Client Portals",
        ],
      },
      {
        title: "Legacy System Modernization",
        description: "Refactoring aging codebases into agile, microservice architectures",
        features: [
          "Monolith Deconstruction",
          "Agile Infrastructure Migration",
          "Database Schema Normalization",
          "Security Patching & Hardening",
          "Zero-downtime Deployments",
        ],
      },
      {
        title: "API Development & Integration",
        description: "Connecting disparate SaaS tools into a unified, synchronized ecosystem",
        features: [
          "High-performance REST & GraphQL",
          "Third-party SaaS Connector Sync",
          "Encrypted Webhook Pipelines",
          "Rate-limited Scalable APIs",
          "Comprehensive API Docs (Swagger)",
        ],
      },
    ],
    techStack: [
      { name: "Node.js", logo: "/images/tech/nodejs.svg", category: "backend" },
      { name: "Go (Golang)", logo: "/images/tech/go.svg", category: "backend" },
      { name: "PostgreSQL", logo: "/images/tech/postgres.svg", category: "database" },
      { name: "Redis", logo: "/images/tech/redis.svg", category: "database" },
      { name: "Next.js", logo: "/images/tech/nextjs.svg", category: "frontend" },
    ],
    pricing: {
      starter: {
        price: "₹3,00,000",
        features: [
          "Custom Internal Tooling",
          "Basic Role Permissions",
          "Single Database Setup",
          "Comprehensive Documentation",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹8,00,000",
        features: [
          "Bespoke CRM & Core ERP",
          "Advanced Analytics & Charts",
          "Multi-system API Integrations",
          "Legacy Code Refactoring",
          "6 Months Support",
          "Performance Hardening",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Complete Enterprise Suite",
          "Distributed Microservices",
          "Ultra-secure Audit Logging",
          "High Availability Setup",
          "12 Months Support",
          "Dedicated Architect Team",
        ],
      },
    },
    cta: {
      title: "Ready to Automate & Scale Operations?",
      description:
        "Let us build high-performance custom systems tailored specifically to your unique business workflows.",
      buttonText: "Initiate Software Strategy",
    },
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription:
      "Keeping your applications running smoothly with ongoing support",
    longDescription:
      "We provide comprehensive maintenance and support services to ensure your applications remain secure, up-to-date, and performing optimally. Our proactive approach to maintenance helps prevent issues before they impact your business, while our responsive support team is always ready to assist when you need help.",
    heroImage: "/images/services/maintenance-support.jpg",
    features: [
      "24/7 Application Monitoring",
      "Regular Security Updates",
      "Performance Optimization",
      "Bug Fixes & Patches",
      "Feature Enhancements",
      "Technical Support",
    ],
    subServices: [
      {
        title: "Proactive Monitoring",
        description:
          "Continuous monitoring to prevent issues before they occur",
        features: [
          "Real-time Performance Monitoring",
          "Automated Alert Systems",
          "Health Check Reports",
          "Capacity Planning",
          "Predictive Maintenance",
        ],
      },
      {
        title: "Security Maintenance",
        description: "Ongoing security updates and vulnerability management",
        features: [
          "Security Patch Management",
          "Vulnerability Assessments",
          "Penetration Testing",
          "Compliance Monitoring",
          "Security Incident Response",
        ],
      },
      {
        title: "Performance Optimization",
        description: "Continuous improvement of application performance",
        features: [
          "Performance Analysis",
          "Database Optimization",
          "Code Optimization",
          "Caching Strategies",
          "Load Balancing",
        ],
      },
    ],
    techStack: [
      { name: "Grafana", logo: "/images/tech/grafana.svg", category: "tools" },
      {
        name: "Prometheus",
        logo: "/images/tech/prometheus.svg",
        category: "tools",
      },
    ],
    pricing: {
      starter: {
        price: "₹50,000/month",
        features: [
          "Basic Monitoring",
          "Monthly Reports",
          "Security Updates",
          "Email Support",
          "Response Time: 24 hours",
        ],
      },
      professional: {
        price: "₹1,00,000/month",
        features: [
          "Advanced Monitoring",
          "Weekly Reports",
          "Performance Optimization",
          "Priority Support",
          "Response Time: 4 hours",
          "Monthly Health Checks",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "24/7 Premium Support",
          "Real-time Monitoring",
          "Dedicated Support Team",
          "SLA Guarantees",
          "Response Time: 1 hour",
          "Custom Integrations",
        ],
      },
    },
    cta: {
      title: "Need Reliable Application Support?",
      description:
        "Ensure your applications run smoothly with our comprehensive maintenance and support services.",
      buttonText: "Get Support Plan",
    },
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "Modernize legacy systems and processes for the digital age",
    longDescription:
      "We help organizations modernize their legacy systems and embrace digital technologies to improve efficiency, reduce costs, and enhance customer experiences. Our digital transformation services encompass process automation, system integration, and strategic technology adoption to position your business for future growth.",
    heroImage: "/images/services/digital-transformation.jpg",
    features: [
      "Legacy System Modernization",
      "Process Automation",
      "Digital Strategy Consulting",
      "System Integration",
      "Change Management",
      "Training & Adoption",
    ],
    subServices: [
      {
        title: "Legacy Modernization",
        description:
          "Transform outdated systems into modern, efficient solutions",
        features: [
          "System Assessment & Analysis",
          "Migration Planning",
          "Code Refactoring",
          "Database Modernization",
          "API Development",
        ],
      },
      {
        title: "Process Automation",
        description: "Automate manual processes to improve efficiency",
        features: [
          "Workflow Automation",
          "RPA Implementation",
          "Integration Development",
          "Custom Tool Development",
          "Performance Metrics",
        ],
      },
      {
        title: "Digital Strategy",
        description:
          "Strategic planning for digital transformation initiatives",
        features: [
          "Digital Maturity Assessment",
          "Technology Roadmap",
          "ROI Analysis",
          "Risk Assessment",
          "Implementation Planning",
        ],
      },
    ],
    techStack: [
      { name: "React", logo: "/images/tech/react.svg", category: "frontend" },
      {
        name: "Node.js",
        logo: "/images/tech/node.js.svg",
        category: "backend",
      },
      { name: "Python", logo: "/images/tech/python.svg", category: "backend" },
      {
        name: "PostgreSQL",
        logo: "/images/tech/postgresql.svg",
        category: "database",
      },
      { name: "Redis", logo: "/images/tech/redis.svg", category: "database" },
      { name: "AWS", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Cloudflare",
        logo: "/images/tech/cloudflare.svg",
        category: "cloud",
      },
      { name: "Docker", logo: "/images/tech/docker.svg", category: "tools" },
      {
        name: "Kubernetes",
        logo: "/images/tech/kubernetes.svg",
        category: "tools",
      },
    ],
    pricing: {
      starter: {
        price: "₹5,00,000",
        features: [
          "Digital Assessment",
          "Basic Modernization",
          "Simple Automation",
          "Documentation",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹10,00,000",
        features: [
          "Comprehensive Strategy",
          "System Modernization",
          "Process Automation",
          "Integration Development",
          "6 Months Support",
          "Training Program",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise Transformation",
          "Multi-system Integration",
          "Advanced Automation",
          "Change Management",
          "12 Months Support",
          "Dedicated Transformation Team",
        ],
      },
    },
    cta: {
      title: "Ready for Digital Transformation?",
      description:
        "Transform your business with modern technology solutions that drive efficiency and growth.",
      buttonText: "Start Transformation",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData
    .map((service) => service.slug)
    .filter((slug) => slug !== "custom-websites-seo");
}

// Helper function for service highlights
export function getServiceHighlight(serviceTitle: string): string {
  const highlights: { [key: string]: string } = {
    "High-Performance Web Apps":
      "Engineering lightning-fast load speeds using Next.js, optimizing server response times, and ensuring perfect Lighthouse scores for maximum search visibility.",
    "Technical SEO":
      "Conducting extensive audits, optimizing crawl budget, and correcting site structural flaws to make search bots index and value your key pages.",
    "Headless CMS Integration":
      "Creating modular and secure editing suites that empower marketing teams to push content fast while maintaining an ultra-light decoupled frontend.",
    "Conversion Rate Optimization CRO":
      "Optimizing visual pipelines and deploying user tracking feedback loops to continuously increase search impressions to pipeline conversion rates.",
    "Frontend Development":
      "Create stunning, responsive interfaces that engage users and drive conversions across all devices and platforms.",
    "Backend Development":
      "Build robust, scalable server infrastructure that handles growth and ensures data security with enterprise-grade reliability.",
    "Full-Stack Solutions":
      "End-to-end development that seamlessly integrates frontend and backend for optimal performance and user experience.",
    "iOS Development":
      "Native iOS apps that leverage Apple's latest technologies and design principles for superior performance and user satisfaction.",
    "Android Development":
      "Optimized Android applications following Material Design guidelines with maximum compatibility across device ecosystems.",
    "Cross-Platform Development":
      "Efficient development approach that reaches both iOS and Android users with native performance and platform-specific optimizations.",
    "Machine Learning Development":
      "Transform your data into actionable insights with custom ML models that learn and improve business outcomes over time.",
    "Natural Language Processing":
      "Unlock the power of text and speech data with advanced NLP solutions that understand context and intent.",
    "Computer Vision":
      "Advanced image and video analysis capabilities that automate visual tasks and provide intelligent insights from visual data.",
    "Cloud Migration":
      "Seamless transition to cloud infrastructure with zero downtime and optimized performance for enhanced scalability and cost efficiency.",
    "Infrastructure Management":
      "Comprehensive cloud infrastructure solutions that scale automatically and maintain high availability with enterprise security.",
    "DevOps & CI/CD":
      "Streamlined development workflows that accelerate deployment cycles while maintaining code quality and system reliability.",
    "Proactive Monitoring":
      "Advanced monitoring systems that predict and prevent issues before they impact your users or business operations.",
    "Security Maintenance":
      "Comprehensive security management that protects against evolving threats with proactive updates and vulnerability assessments.",
    "Performance Optimization":
      "Continuous performance improvements that enhance user experience and reduce operational costs through intelligent optimization.",
    "Legacy Modernization":
      "Strategic transformation of outdated systems while preserving valuable business logic and ensuring smooth operational continuity.",
    "Process Automation":
      "Intelligent automation solutions that eliminate manual tasks and reduce errors while accelerating business process efficiency.",
    "Digital Strategy":
      "Comprehensive digital transformation roadmaps that align technology investments with business objectives for maximum ROI.",
  };

  return (
    highlights[serviceTitle] ||
    "Expertly crafted solutions that deliver measurable results and drive business growth through innovative technology applications."
  );
}
