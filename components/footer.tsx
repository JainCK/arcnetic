import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const solutions = [
  "Business Apps",
  "AI Solutions",
  "Digital Transformation",
  "Cloud Infrastructure",
];

const company = ["About", "Careers", "Partners", "Contact"];

const Footer: FC = () => (
  <footer className="py-20 bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.h3
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-playfair"
              whileHover={{ scale: 1.05 }}
            >
              Arcnetic
            </motion.h3>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed font-space-grotesk">
              Elite software solutions for forward-thinking businesses. We build
              transformative technology that drives measurable business results
              and competitive advantage.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-xl"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-space-grotesk">Solutions</h4>
            <div className="space-y-3">
              {solutions.map((item) => (
                <motion.div
                  key={item}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 font-space-grotesk">Company</h4>
            <div className="space-y-3">
              {company.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="border-t border-border/50 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground font-space-grotesk">
            © 2025-26 Arcnetic. All rights reserved. | Software Solutions
          </p>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
