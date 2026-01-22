import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { CalendarDays, User, ArrowLeft, Clock } from "lucide-react";
import {
  previewClient,
  blogPostBySlugQuery,
  BlogPost,
  urlFor,
} from "@/lib/sanity";

// Define a more specific type for the image if it differs from the base BlogPost type
interface BlogPostWithCaption extends BlogPost {
  mainImage: {
    asset: { _ref: string };
    alt?: string;
    caption?: string; // Explicitly add caption
  };
}

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{
    postSlug: string;
  }>;
}

async function getBlogPost(slug: string): Promise<BlogPostWithCaption | null> {
  try {
    return await previewClient.fetch(blogPostBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadTime(body: any[]): number {
  if (!body) return 1;

  const wordsPerMinute = 200;
  const textLength = body
    .filter((block) => block._type === "block")
    .map(
      (block) => block.children?.map((child: any) => child.text).join(" ") || ""
    )
    .join(" ").length;

  const readTime = Math.ceil(textLength / (wordsPerMinute * 5)); // Rough estimate
  return Math.max(1, readTime);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = await getBlogPost(postSlug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Arcnetic Blog`,
    description: post.excerpt || `Read our latest blog post: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { postSlug } = await params;
  const post = await getBlogPost(postSlug);

  if (!post) {
    notFound();
  }

  const readTime = calculateReadTime(post.body || []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black opacity-80" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Navigation / Back */}
            <div className="mb-12 flex justify-center">
                <Link href="/blog" className="group inline-flex items-center gap-2 text-xs font-space-grotesk uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                    <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                    Back to Insights
                </Link>
            </div>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {post.categories.map((category) => (
                  <span 
                    key={category._id} 
                    className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-space-grotesk uppercase tracking-widest text-white/70 backdrop-blur-md"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-medium text-white mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/40 font-space-grotesk border-t border-white/10 pt-8 max-w-2xl mx-auto">
              {/* Author */}
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={urlFor(post.author.image).width(64).height(64).url()}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                )}
                <span className="text-white/60">{post.author.name}</span>
              </div>

              {/* Divider */}
              <div className="w-1 h-1 rounded-full bg-white/20" />

              {/* Date */}
              <div className="flex items-center gap-2">
                <CalendarDays className="h-3 w-3" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              {/* Divider */}
              <div className="w-1 h-1 rounded-full bg-white/20" />

              {/* Read Time */}
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED IMAGE --- */}
      {post.mainImage && (
        <section className="px-4 mb-20 md:mb-32">
            <div className="container mx-auto max-w-6xl">
                <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-sm border border-white/10 bg-white/5 relative group">
                    <Image
                    src={urlFor(post.mainImage).width(1600).height(900).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    priority
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
                {/* Safe check for caption */}
                {(post.mainImage as any).caption && (
                    <p className="text-center text-xs text-white/30 font-space-grotesk mt-4 italic">
                        {(post.mainImage as any).caption}
                    </p>
                )}
            </div>
        </section>
      )}

      {/* --- BLOG CONTENT --- */}
      <section className="pb-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {post.body && <PortableTextRenderer content={post.body} />}
          </div>
        </div>
      </section>

      {/* --- AUTHOR BIO --- */}
      {post.author.bio && (
        <section className="py-20 border-t border-white/10 bg-[#020202]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                {post.author.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                    <Image
                      src={urlFor(post.author.image).width(128).height(128).url()}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs font-space-grotesk uppercase tracking-widest text-white/30 block mb-2">Written By</span>
                  <h3 className="text-xl font-playfair text-white mb-4">
                    {post.author.name}
                  </h3>
                  <div className="text-white/50 text-sm font-space-grotesk">
                    <PortableTextRenderer content={post.author.bio} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- NEXT STEPS --- */}
      <section className="py-20 border-t border-white/5 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-playfair text-white mb-8">Continue Reading</h3>
          <Link href="/blog">
            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="font-space-grotesk tracking-widest text-xs flex items-center gap-3">
                <ArrowLeft className="h-4 w-4" />
                VIEW ALL INSIGHTS
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}