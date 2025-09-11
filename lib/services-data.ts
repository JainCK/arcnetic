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
    slug: "web-development",
    title: "Web & Full-Stack Development",
    shortDescription:
      "High-performance, scalable web applications from database to user interface",
    longDescription:
      "We architect and build high-performance, scalable web applications, from dynamic single-page apps to complex enterprise-level SaaS platforms. Our full-stack expertise ensures a seamless, robust solution from database to user interface, utilizing cutting-edge technologies and best practices to deliver exceptional user experiences.",
    heroImage: "/images/services/web-development.jpg",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
    subServices: [
      {
        title: "Frontend Development",
        description:
          "Modern, responsive user interfaces that engage and convert",
        features: [
          "React, Next.js, Vue.js Development",
          "Mobile-First Responsive Design",
          "Interactive UI/UX Implementation",
          "Performance Optimization",
          "Cross-Browser Compatibility",
        ],
      },
      {
        title: "Backend Development",
        description: "Robust server-side solutions with scalable architecture",
        features: [
          "RESTful API Development",
          "Database Design & Optimization",
          "Authentication & Authorization",
          "Third-Party Integrations",
          "Microservices Architecture",
        ],
      },
      {
        title: "Full-Stack Solutions",
        description: "End-to-end web applications with seamless integration",
        features: [
          "Complete CRUD Applications",
          "Real-time Features",
          "Payment Gateway Integration",
          "Admin Dashboards",
          "Multi-tenant Applications",
        ],
      },
    ],
    techStack: [
      { name: "React", logo: "/images/tech/react.svg", category: "frontend" },
      {
        name: "Next.js",
        logo: "/images/tech/nextjs.svg",
        category: "frontend",
      },
      {
        name: "TypeScript",
        logo: "/images/tech/typescript.svg",
        category: "frontend",
      },
      { name: "Node.js", logo: "/images/tech/nodejs.svg", category: "backend" },
      {
        name: "Express",
        logo: "/images/tech/express.svg",
        category: "backend",
      },
      {
        name: "PostgreSQL",
        logo: "/images/tech/postgresql.svg",
        category: "database",
      },
      {
        name: "MongoDB",
        logo: "/images/tech/mongodb.svg",
        category: "database",
      },
      { name: "AWS", logo: "/images/tech/aws.svg", category: "cloud" },
      { name: "Docker", logo: "/images/tech/docker.svg", category: "tools" },
    ],
    pricing: {
      starter: {
        price: "₹2,50,000",
        features: [
          "5-10 Page Website",
          "Responsive Design",
          "Basic SEO Setup",
          "Contact Forms",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹5,00,000",
        features: [
          "Custom Web Application",
          "User Authentication",
          "Database Integration",
          "Admin Dashboard",
          "6 Months Support",
          "API Integration",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Large-scale Applications",
          "Microservices Architecture",
          "Advanced Security",
          "Performance Optimization",
          "12 Months Support",
          "Dedicated Team",
        ],
      },
    },
    cta: {
      title: "Ready to Build Your Web Application?",
      description:
        "Let's discuss your project requirements and create a custom solution that drives your business forward.",
      buttonText: "Start Your Project",
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
          "Flutter Applications",
          "Code Sharing Strategies",
          "Platform-Specific Optimizations",
          "Unified User Experience",
        ],
      },
    ],
    techStack: [
      {
        name: "React Native",
        logo: "/images/tech/react-native.svg",
        category: "frontend",
      },
      {
        name: "Flutter",
        logo: "/images/tech/flutter.svg",
        category: "frontend",
      },
      { name: "Swift", logo: "/images/tech/swift.svg", category: "frontend" },
      { name: "Kotlin", logo: "/images/tech/kotlin.svg", category: "frontend" },
      {
        name: "Firebase",
        logo: "/images/tech/firebase.svg",
        category: "backend",
      },
      { name: "SQLite", logo: "/images/tech/sqlite.svg", category: "database" },
      { name: "AWS Mobile", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Fastlane",
        logo: "/images/tech/fastlane.svg",
        category: "tools",
      },
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
    slug: "ai-solutions",
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
        name: "TensorFlow",
        logo: "/images/tech/tensorflow.svg",
        category: "tools",
      },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg", category: "tools" },
      { name: "OpenAI", logo: "/images/tech/openai.svg", category: "tools" },
      {
        name: "Hugging Face",
        logo: "/images/tech/huggingface.svg",
        category: "tools",
      },
      { name: "AWS AI", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Google AI",
        logo: "/images/tech/google-cloud.svg",
        category: "cloud",
      },
      { name: "MLflow", logo: "/images/tech/mlflow.svg", category: "tools" },
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
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortDescription:
      "Scalable solutions on AWS, Azure, and GCP for modern businesses",
    longDescription:
      "We design and implement robust cloud infrastructure solutions that scale with your business needs. Our expertise spans across major cloud platforms including AWS, Azure, and Google Cloud Platform, ensuring optimal performance, security, and cost-effectiveness for your applications and data.",
    heroImage: "/images/services/cloud-infrastructure.jpg",
    features: [
      "Cloud Migration Services",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Disaster Recovery",
      "Security & Compliance",
      "Cost Optimization",
    ],
    subServices: [
      {
        title: "Cloud Migration",
        description: "Seamless migration of applications and data to the cloud",
        features: [
          "Migration Strategy Planning",
          "Application Modernization",
          "Data Migration",
          "Performance Optimization",
          "Minimal Downtime Migration",
        ],
      },
      {
        title: "Infrastructure Management",
        description: "Comprehensive cloud infrastructure setup and management",
        features: [
          "Infrastructure as Code",
          "Automated Deployments",
          "Monitoring & Alerting",
          "Backup & Recovery",
          "Security Configuration",
        ],
      },
      {
        title: "DevOps & CI/CD",
        description: "Streamlined development and deployment processes",
        features: [
          "Continuous Integration",
          "Automated Testing",
          "Deployment Pipelines",
          "Container Orchestration",
          "Performance Monitoring",
        ],
      },
    ],
    techStack: [
      { name: "AWS", logo: "/images/tech/aws.svg", category: "cloud" },
      { name: "Azure", logo: "/images/tech/azure.svg", category: "cloud" },
      {
        name: "Google Cloud",
        logo: "/images/tech/google-cloud.svg",
        category: "cloud",
      },
      { name: "Docker", logo: "/images/tech/docker.svg", category: "tools" },
      {
        name: "Kubernetes",
        logo: "/images/tech/kubernetes.svg",
        category: "tools",
      },
      {
        name: "Terraform",
        logo: "/images/tech/terraform.svg",
        category: "tools",
      },
      { name: "Jenkins", logo: "/images/tech/jenkins.svg", category: "tools" },
      { name: "Ansible", logo: "/images/tech/ansible.svg", category: "tools" },
    ],
    pricing: {
      starter: {
        price: "₹2,00,000",
        features: [
          "Basic Cloud Setup",
          "Simple Architecture",
          "Basic Monitoring",
          "Documentation",
          "3 Months Support",
        ],
      },
      professional: {
        price: "₹5,00,000",
        features: [
          "Advanced Cloud Architecture",
          "Auto-scaling Setup",
          "CI/CD Pipeline",
          "Security Configuration",
          "6 Months Support",
          "Performance Optimization",
        ],
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise Cloud Solutions",
          "Multi-cloud Architecture",
          "Advanced Security",
          "Disaster Recovery",
          "12 Months Support",
          "24/7 Monitoring",
        ],
      },
    },
    cta: {
      title: "Ready to Scale in the Cloud?",
      description:
        "Let us help you build a robust, scalable cloud infrastructure that grows with your business.",
      buttonText: "Start Cloud Journey",
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
      {
        name: "New Relic",
        logo: "/images/tech/newrelic.svg",
        category: "tools",
      },
      { name: "Datadog", logo: "/images/tech/datadog.svg", category: "tools" },
      { name: "Grafana", logo: "/images/tech/grafana.svg", category: "tools" },
      {
        name: "Prometheus",
        logo: "/images/tech/prometheus.svg",
        category: "tools",
      },
      { name: "Sentry", logo: "/images/tech/sentry.svg", category: "tools" },
      { name: "CloudWatch", logo: "/images/tech/aws.svg", category: "cloud" },
      {
        name: "Azure Monitor",
        logo: "/images/tech/azure.svg",
        category: "cloud",
      },
      {
        name: "Google Operations",
        logo: "/images/tech/google-cloud.svg",
        category: "cloud",
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
      { name: "Node.js", logo: "/images/tech/nodejs.svg", category: "backend" },
      { name: "Python", logo: "/images/tech/python.svg", category: "backend" },
      {
        name: "PostgreSQL",
        logo: "/images/tech/postgresql.svg",
        category: "database",
      },
      { name: "Redis", logo: "/images/tech/redis.svg", category: "database" },
      { name: "AWS", logo: "/images/tech/aws.svg", category: "cloud" },
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
  return servicesData.map((service) => service.slug);
}
