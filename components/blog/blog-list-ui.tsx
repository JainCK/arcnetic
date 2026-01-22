"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/sanity";
import { ArrowRight, CalendarDays, Clock, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogListUIProps {
  posts: BlogPost[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple read time estimator
function calculateReadTime(body: any[]): number {
  if (!body) return 1;
  const textLength = body
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child: any) => child.text).join(" ") || "")
    .join(" ").length;
  return Math.max(1, Math.ceil(textLength / 1000)); // Approx logic
}

export function BlogListUI({ posts }: BlogListUIProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      
      {/* --- CINEMATIC HERO --- */}
      {/* Increased height and added pt-32 to push content down below fixed nav */}
      <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Void Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
              The Journal
            </span>
          </motion.div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-medium text-white mb-8 tracking-tight leading-[0.9]">
            Insights & <br className="hidden md:block" /> Intelligence.
          </h1>
          
          <p className="font-space-grotesk text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exploring the frontiers of technology, design, and digital transformation.
          </p>
        </motion.div>
      </section>

      {/* --- POSTS GRID --- */}
      <section className="relative z-10 pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {posts.length === 0 ? (
            <div className="text-center py-32 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h2 className="text-3xl font-playfair mb-4 text-white">Quiet in the Void</h2>
              <p className="text-white/40 font-space-grotesk">We are crafting new insights. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                    <article className="h-full flex flex-col bg-[#050505] border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-1">
                      
                      {/* Text-Only Content Layout */}
                      <div className="p-8 flex flex-col flex-grow">
                        
                        {/* Top Meta: Category & Date */}
                        <div className="flex items-center justify-between mb-6">
                          {post.categories && post.categories.length > 0 ? (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-space-grotesk uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                              {post.categories[0].title}
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-space-grotesk uppercase tracking-widest text-white/40">
                              Article
                            </span>
                          )}
                          
                          <div className="flex items-center gap-2 text-xs text-white/30 font-space-grotesk">
                            <CalendarDays className="h-3 w-3" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-playfair text-white mb-4 leading-tight group-hover:underline decoration-white/30 underline-offset-4 decoration-1 transition-all">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-white/50 text-sm leading-relaxed font-space-grotesk line-clamp-4 mb-8 flex-grow">
                            {post.excerpt}
                          </p>
                        )}

                        {/* Footer Meta */}
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-white/40 font-space-grotesk">
                             <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3" />
                                <span>{calculateReadTime(post.body || [])} min read</span>
                             </div>
                          </div>
                          
                          <span className="flex items-center gap-2 text-xs font-space-grotesk uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                            Read Entry
                            <ArrowRight className="h-3 w-3 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- NEWSLETTER CTA --- */}
      <section className="py-20 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="font-playfair text-4xl text-white">Stay Ahead.</h3>
            <p className="font-space-grotesk text-white/50">
              Get the latest insights on engineering and digital strategy delivered to your inbox.
            </p>
            <div className="flex justify-center">
               <Link href="/contact">
                <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black">
                    <span className="font-space-grotesk tracking-widest text-xs">SUBSCRIBE TO UPDATES</span>
                </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}