"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Users, Zap, Globe, TrendingUp } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Security isn't an afterthought. We integrate industry-leading security protocols into every stage of the development lifecycle to protect your data, users, and infrastructure.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "Our rigorous Quality Assurance (QA) and testing processes ensure every solution we deliver is reliable, bug-free, and meets the highest standards of performance.",
  },
  {
    icon: Users,
    title: "Expert-Led Teams",
    description:
      "Your project is led by senior software engineers, cloud architects, and AI specialists with years of proven experience building successful enterprise-grade systems.",
  },
  {
    icon: Zap,
    title: "Transparent Agile Process",
    description:
      "We employ an agile development methodology that ensures transparency, flexibility, and predictable delivery. You get regular updates and a final product that truly meets your goals.",
  },
  {
    icon: Globe,
    title: "Built for Future Growth",
    description:
      "We architect software with scalability at its core. Our solutions are designed to handle increasing user loads and data volumes, ensuring they grow seamlessly with your business.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Business ROI",
    description:
      "Our ultimate goal is to deliver tangible business value. We create technology solutions that drive revenue, increase efficiency, and provide a clear return on your investment.",
  },
];

export function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-muted/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-6xl font-bold mb-4 font-playfair ">
            Why Leading Businesses Choose Arcnetic
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-space-grotesk">
            We deliver enterprise-grade software solutions engineered with the
            reliability, security, and deep technical expertise your business
            can depend on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/90 border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 font-space-grotesk">
                {indicator.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
